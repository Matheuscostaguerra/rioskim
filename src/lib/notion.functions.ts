import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type NotionPost = {
  id: string;
  slug: string;
  title: string;
  tag: string;
  excerpt: string;
  image: string;
  content: string;
  images: Record<string, string>;
  videos: Record<string, string>;
  publishedAt: string | null;
  link?: string;
  destaque?: boolean;
};

function toYouTubeEmbed(url: string): string | null {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.slice(1).split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      if (u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      const m = u.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
      if (m) return `https://www.youtube.com/embed/${m[2]}`;
    }
    return null;
  } catch {
    return null;
  }
}

const NOTION_VERSION = "2022-06-28";

function notionHeaders() {
  const token = process.env.NOTION_TOKEN;
  if (!token) throw new Error("NOTION_TOKEN is not configured");
  return {
    Authorization: `Bearer ${token}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}

function getTitle(prop: any): string {
  return prop?.title?.map((t: any) => t.plain_text).join("") ?? "";
}
function getSelect(prop: any): string {
  return prop?.select?.name ?? "";
}
function getDate(prop: any): string | null {
  return prop?.date?.start ?? null;
}
function getFileUrl(prop: any): string {
  const files = prop?.files ?? [];
  if (!files.length) return "";
  const file = files[0];
  return file?.file?.url ?? file?.external?.url ?? "";
}
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function mapCategoria(raw: string): string {
  const map: Record<string, string> = {
    campeonato: "Campeonato",
    comunidade: "Comunidade",
    forecast: "Forecast",
    cultura: "Cultura",
    encontro: "Cultura",
    youtube: "Cultura",
  };
  return map[raw.toLowerCase()] ?? "Cultura";
}

function parsePage(page: any): Omit<NotionPost, "content" | "images" | "videos"> {
  const props = page.properties ?? {};
  const title = getTitle(props["Name"]);
  const slug = toSlug(title);
  const tag = mapCategoria(getSelect(props["categoria"]));
  const image =
    getFileUrl(props["cover"]) ||
    page.cover?.external?.url ||
    page.cover?.file?.url ||
    "";
  return {
    id: page.id,
    slug,
    title,
    tag,
    excerpt: "",
    image,
    publishedAt: getDate(props["Date"]),
  };
}

async function fetchBlocks(
  pageId: string,
): Promise<{
  content: string;
  images: Record<string, string>;
  videos: Record<string, string>;
  excerpt: string;
}> {
  const res = await fetch(
    `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
    { headers: notionHeaders() },
  );
  if (!res.ok) return { content: "", images: {}, videos: {}, excerpt: "" };
  const data = await res.json();
  const blocks: any[] = data.results ?? [];

  const paragraphs: string[] = [];
  const images: Record<string, string> = {};
  const videos: Record<string, string> = {};
  let imageIndex = 0;
  let videoIndex = 0;
  let firstText = "";

  for (const block of blocks) {
    switch (block.type) {
      case "paragraph": {
        const text =
          block.paragraph?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
        if (text.trim()) {
          if (!firstText) firstText = text;
          paragraphs.push(text);
        }
        break;
      }
      case "heading_1":
      case "heading_2":
      case "heading_3": {
        const text =
          block[block.type]?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
        if (text.trim()) paragraphs.push(text);
        break;
      }
      case "image": {
        const url =
          block.image?.type === "external"
            ? block.image.external?.url
            : block.image?.file?.url;
        if (url) {
          const key = `img_${imageIndex++}`;
          images[key] = url;
          paragraphs.push(`[IMAGE:${key}]`);
        }
        break;
      }
      case "video":
      case "embed":
      case "bookmark": {
        const raw =
          block.video?.type === "external"
            ? block.video.external?.url
            : block.video?.file?.url ??
              block.embed?.url ??
              block.bookmark?.url;
        const embed = raw ? toYouTubeEmbed(raw) : null;
        if (embed) {
          const key = `vid_${videoIndex++}`;
          videos[key] = embed;
          paragraphs.push(`[VIDEO:${key}]`);
        }
        break;
      }
      case "bulleted_list_item":
      case "numbered_list_item": {
        const text =
          block[block.type]?.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
        if (text.trim()) paragraphs.push(`• ${text}`);
        break;
      }
      default:
        break;
    }
  }

  return {
    content: paragraphs.join("\n\n"),
    images,
    videos,
    excerpt: firstText.slice(0, 200),
  };
}

export const getAllNotionPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<NotionPost[]> => {
    const dbId = process.env.NOTION_DATABASE_ID;
    if (!dbId) throw new Error("NOTION_DATABASE_ID is not configured");

    try {
      const res = await fetch(
        `https://api.notion.com/v1/databases/${dbId}/query`,
        {
          method: "POST",
          headers: notionHeaders(),
          body: JSON.stringify({
            filter: { property: "Status", status: { equals: "Done" } },
            sorts: [{ property: "Date", direction: "descending" }],
          }),
        },
      );
      if (!res.ok) {
        const body = await res.text();
        throw new Error(`Notion API ${res.status}: ${body}`);
      }
      const data = await res.json();
      return (data.results ?? []).map((page: any) => ({
        ...parsePage(page),
        content: "",
        images: {},
        videos: {},
      }));
    } catch (err) {
      console.error("[notion] getAllNotionPosts:", err);
      return [];
    }
  },
);

export const getNotionPostBySlug = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string().min(1).max(120) }))
  .handler(async ({ data }): Promise<NotionPost | null> => {
    try {
      const all = await getAllNotionPosts();
      const meta = all.find((p) => p.slug === data.slug);
      if (!meta) return null;
      const { content, images, videos, excerpt } = await fetchBlocks(meta.id);
      return { ...meta, content, images, videos, excerpt };
    } catch (err) {
      console.error("[notion] getNotionPostBySlug:", err);
      return null;
    }
  });
