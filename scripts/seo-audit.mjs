import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const expectedSite = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.baray.ir"
).replace(/\/$/, "");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const escape = (value) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const files = [];

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    entry.isDirectory()
      ? walk(full)
      : entry.name.endsWith(".html") && files.push(full);
  }
};

walk(root);

// اسکریپت‌های Next.js ممکن است نسخه‌ای از محتوای صفحه را دوباره نگه دارند.
// برای جلوگیری از شمارش تکراری عنوان‌ها، فقط سند اصلی بررسی می‌شود.
const documentOnly = (html) => html.split("<script")[0];

const rules = [
  [
    "title",
    (html) =>
      /<title>[^<]{10,}[^<]*<\/title>/.test(documentOnly(html)),
  ],
  [
    "description",
    (html) =>
      /<meta name="description" content="[^"]{50,}"/.test(
        documentOnly(html)
      ),
  ],
  [
    "canonical",
    (html) =>
      new RegExp(
        `<link rel="canonical" href="${escape(expectedSite)}`
      ).test(documentOnly(html)),
  ],
  [
    "one-h1",
    (html) =>
      (documentOnly(html).match(/<h1(?:\s|>)/g) || []).length === 1,
  ],
  [
    "language",
    (html) =>
      /<html[^>]*\blang="fa-IR"/.test(html) &&
      /<html[^>]*\bdir="rtl"/.test(html),
  ],
  [
    "viewport",
    (html) =>
      /<meta name="viewport"/.test(documentOnly(html)),
  ],
];

const failures = [];
let checks = 0;

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");

  for (const [name, test] of rules) {
    checks++;

    if (!test(html)) {
      failures.push(`${path.relative(root, file)}: ${name}`);
    }
  }
}

const expected = [
  "news/index.html",
  "sitemap.xml",
  "robots.txt",
];

for (const item of expected) {
  checks++;

  if (!fs.existsSync(path.join(root, item))) {
    failures.push(`missing: ${item}`);
  }
}

checks++;

if (
  !files.some(
    (file) =>
      path.relative(root, file).startsWith(`news${path.sep}`) &&
      path.relative(root, file) !== path.join("news", "index.html")
  )
) {
  failures.push("missing: at least one article page");
}

for (const file of files) {
  const html = documentOnly(fs.readFileSync(file, "utf8"));

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split("#")[0].split("?")[0];

    if (
      !href ||
      href.startsWith("//") ||
      href.includes(".")
    ) {
      continue;
    }

    const local =
      basePath && href.startsWith(basePath)
        ? href.slice(basePath.length) || "/"
        : href;

    let decoded;

    try {
      decoded = decodeURIComponent(local);
    } catch {
      decoded = local;
    }

    checks++;

    const target =
      decoded === "/"
        ? path.join(root, "index.html")
        : path.join(root, decoded, "index.html");

    if (!fs.existsSync(target)) {
      failures.push(
        `${path.relative(root, file)}: broken ${href}`
      );
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(
  `SEO audit passed: ${checks}/${checks} checks across ${files.length} HTML pages.`
);
