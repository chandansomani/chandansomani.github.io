export function parseFrontmatter(raw: string) {
  const pattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
  const match = raw.match(pattern);

  if (!match) return { content: raw, meta: {} };

  const content = raw.replace(pattern, "");
  const yamlString = match[1];
  const meta: Record<string, string> = {};

  yamlString.split("\n").forEach((line) => {
    const [key, ...value] = line.split(":");
    if (key && value.length) {
      meta[key.trim()] = value.join(":").trim().replace(/^['"]|['"]$/g, "");
    }
  });

  return { content, meta };
}