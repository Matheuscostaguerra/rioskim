export type Spot = {
  name: string;
  lat: number;
  lon: number;
};

export type SpotForecast = {
  name: string;
  waveHeight: number | null;
  wavePeriod: number | null;
  windSpeed: number | null;
  condition: string;
};

export const SPOTS: Spot[] = [
  { name: "Leblon", lat: -22.9876, lon: -43.2224 },
  { name: "Macumba", lat: -23.0312, lon: -43.4761 },
  { name: "Itacoatiara", lat: -22.9745, lon: -43.0339 },
];

const CACHE_TTL_MS = 20 * 60 * 1000;
let cache: { data: SpotForecast[]; timestamp: number } | null = null;

export function classifyCondition(waveHeight: number | null): string {
  if (waveHeight === null || waveHeight === undefined || isNaN(waveHeight)) return "FLAT";
  if (waveHeight >= 1.5) return "ÉPICO";
  if (waveHeight >= 1.0) return "BOM";
  if (waveHeight >= 0.6) return "OK";
  return "FLAT";
}

export async function fetchSpotForecast(spot: Spot): Promise<SpotForecast> {
  try {
    const marineUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${spot.lat}&longitude=${spot.lon}&current=wave_height,wave_period,wave_direction,swell_wave_height,wind_wave_height&wind_speed_unit=kn&timezone=America/Sao_Paulo`;
    const windUrl = `https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=kn&timezone=America/Sao_Paulo`;

    const [marineRes, windRes] = await Promise.all([fetch(marineUrl), fetch(windUrl)]);
    if (!marineRes.ok || !windRes.ok) throw new Error("Forecast fetch failed");
    const marine = await marineRes.json();
    const wind = await windRes.json();

    const waveHeight = marine?.current?.wave_height ?? null;
    const wavePeriod = marine?.current?.wave_period ?? null;
    const windSpeed = wind?.current?.wind_speed_10m ?? null;

    return {
      name: spot.name,
      waveHeight,
      wavePeriod,
      windSpeed,
      condition: classifyCondition(waveHeight),
    };
  } catch {
    return {
      name: spot.name,
      waveHeight: null,
      wavePeriod: null,
      windSpeed: null,
      condition: "FLAT",
    };
  }
}

export function getBestSpotNow(spots: SpotForecast[]): SpotForecast | null {
  const candidates = spots.filter((s) => s.waveHeight !== null && s.waveHeight >= 0.8);
  if (candidates.length === 0) return null;
  return candidates.reduce((best, s) => (s.waveHeight! > (best.waveHeight ?? 0) ? s : best));
}

export async function fetchAllSpots(): Promise<SpotForecast[]> {
  if (cache && Date.now() - cache.timestamp < CACHE_TTL_MS) {
    return cache.data;
  }
  try {
    const data = await Promise.all(SPOTS.map(fetchSpotForecast));
    cache = { data, timestamp: Date.now() };
    return data;
  } catch {
    return SPOTS.map((s) => ({
      name: s.name,
      waveHeight: null,
      wavePeriod: null,
      windSpeed: null,
      condition: "FLAT",
    }));
  }
}
