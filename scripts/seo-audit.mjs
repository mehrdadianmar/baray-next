import fs from "node:fs";
import path from "node:path";

const root=path.resolve("out");
const files=[];
const walk=(dir)=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);entry.isDirectory()?walk(full):entry.name.endsWith(".html")&&files.push(full)}};
walk(root);
const rules=[
  ["title",html=>/<title>[^<]{10,}[^<]*<\/title>/.test(html)],
  ["description",html=>/<meta name="description" content="[^"]{50,}"/.test(html)],
  ["canonical",html=>/<link rel="canonical" href="https:\/\/www\.baray\.ir\//.test(html)],
  ["one-h1",html=>(html.match(/<h1[ >]/g)||[]).length===1],
  ["language",html=>/<html lang="fa-IR" dir="rtl"/.test(html)],
  ["viewport",html=>/<meta name="viewport"/.test(html)]
];
const failures=[];let checks=0;
for(const file of files){const html=fs.readFileSync(file,"utf8");for(const [name,test] of rules){checks++;if(!test(html))failures.push(`${path.relative(root,file)}: ${name}`)}}
const expected=["news/index.html","sitemap.xml","robots.txt"];
for(const item of expected){checks++;if(!fs.existsSync(path.join(root,item)))failures.push(`missing: ${item}`)}
checks++;if(!files.some(file=>path.relative(root,file).startsWith(`news${path.sep}`)&&path.relative(root,file)!==path.join("news","index.html")))failures.push("missing: at least one article page");
for(const file of files){const html=fs.readFileSync(file,"utf8");for(const match of html.matchAll(/href="(\/[^"]*)"/g)){const href=match[1].split("#")[0].split("?")[0];if(!href||href.startsWith("//")||href.includes("."))continue;checks++;const target=href==="/"?path.join(root,"index.html"):path.join(root,href,"index.html");if(!fs.existsSync(target))failures.push(`${path.relative(root,file)}: broken ${href}`)}}
if(failures.length){console.error(failures.join("\n"));process.exit(1)}
console.log(`SEO audit passed: ${checks}/${checks} checks across ${files.length} HTML pages.`);
