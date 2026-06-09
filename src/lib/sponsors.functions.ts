import { createServerFn } from "@tanstack/react-start";

export type Sponsor = {
  nome: string;
  logo_url: string;
  site_url: string;
  ativo: boolean;
  ordem: number;
};

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}


function normalizeLogoUrl(url: string): string {
  if (!url) return url;
  // Convert Google Drive share/view links to a hotlink-friendly URL.
  // Matches: /file/d/{ID}/, ?id={ID}, /uc?...id={ID}
  const m =
    url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m) return `https://lh3.googleusercontent.com/d/${m[1]}=w400`;
  return url;
}

function parseSponsorsCSV(csv: string): Sponsor[] {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) return [];

  const sponsors: Sponsor[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts = parseCSVLine(line);
    if (parts.length < 5) continue;

    const [nome, logo_url, site_url, ativo, ordem] = parts;

    if (ativo.trim().toUpperCase() === "TRUE") {
      sponsors.push({
        nome: nome.trim(),
        logo_url: normalizeLogoUrl(logo_url.trim()),
        site_url: site_url.trim(),
        ativo: true,
        ordem: parseInt(ordem.trim(), 10) || 0,
      });
    }
  }

  return sponsors.sort((a, b) => a.ordem - b.ordem);
}

export const getSponsors = createServerFn({ method: "GET" }).handler(async () => {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLIkWL8fkx1DJOjXj4rztWxHLBCyWu1e9oT9ssjFQbCvf8_RsmgbSyw_LhlUlzjp30_ofmWjtG-64I/pub?output=csv";

  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    return { sponsors: [] as Sponsor[] };
  }

  const csv = await response.text();
  const sponsors = parseSponsorsCSV(csv);
  return { sponsors };
});
