import { useEffect, useState } from "react";
import { fetchAllSpots, getBestSpotNow, type SpotForecast } from "@/services/forecastService";

const REFRESH_MS = 20 * 60 * 1000;

export function useForecast() {
  const [spots, setSpots] = useState<SpotForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await fetchAllSpots();
        if (!mounted) return;
        setSpots(data);
        setLastUpdated(new Date());
        setError(null);
      } catch (e) {
        if (!mounted) return;
        setError(e instanceof Error ? e.message : "Erro ao buscar forecast");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const bestSpot = spots.length > 0 ? getBestSpotNow(spots) : null;
  return { spots, bestSpot, loading, error, lastUpdated };
}
