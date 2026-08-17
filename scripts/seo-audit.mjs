import fs from "node:fs";
import path from "node:path";

const root=path.resolve("out");
const expectedSite=(process.env.NEXT_PUBLIC_SITE_URL||"https://www.baray.ir").replace(/\/$/,"");
const configuredBasePath=process.env.NEXT_PUBLIC_BASE_PATH||"";
const githubRepositoryName=(process.env.GITHUB_REPOSITORY||"").split("/").pop();
const knownBasePaths=[configuredBasePath,githubRepositoryName?`/${githubRepositoryName}`:""].filter(Boolean);
const escape=(value)=>value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
const files=[];
const walk=(dir)=>{for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);entry.isDirectory()?walk(full):entry.name.endsWith(".html")&&files.push(full)}};
walk(root);
const documentOnly=(html)=>html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,"");
const rules=[
  ["title",html=>/<title>[^<]{10,}[^<]*<\/title>/.test(documentOnly(html))],
  ["description",html=>/<meta name="description" content="[^"]{50,}"/.test(documentOnly(html))],
  ["canonical",html=>new RegExp(`<link rel="canonical" href="${escape(expectedSite)}`).test(documentOnly(html))],
  ["one-h1",html=>(documentOnly(html).match(/<h1(?:\s|>)/g)||[]).length===1],
  ["language",html=>/<html[^>]*\blang=["']fa(?:-IR)?["']/i.test(html)&&/<html[^>]*\bdir=["']rtl["']/i.test(html)],
  ["viewport",html=>/<meta name="viewport"/.test(documentOnly(html))]
];
const failures=[];let checks=0;
for(const file of files){const html=fs.readFileSync(file,"utf8");for(const [name,test] of rules){checks++;if(!test(html))failures.push(`${path.relative(root,file)}: ${name}`)}}
const expected=["news/index.html","sitemap.xml","robots.txt"];
for(const item of expected){checks++;if(!fs.existsSync(path.join(root,item)))failures.push(`missing: ${item}`)}
checks++;if(!files.some(file=>path.relative(root,file).startsWith(`news${path.sep}`)&&path.relative(root,file)!==path.join("news","index.html")))failures.push("missing: at least one article page");
const routeExists=(href)=>{
  const routes=new Set([
    href,
    href.replace(/%[0-9a-f]{2}/gi,token=>token.toUpperCase()),
    href.replace(/%[0-9a-f]{2}/gi,token=>token.toLowerCase())
  ]);
  try{
    const decoded=decodeURIComponent(href);
    routes.add(decoded);
    routes.add(encodeURI(decoded));
  }catch{}
  for(const route of [...routes]){
    for(const base of knownBasePaths){
      if(route===base||route.startsWith(`${base}/`))routes.add(route.slice(base.length)||"/");
    }
  }
  return [...routes].some(route=>{
    const relative=route.replace(/^\/+|\/+$/g,"");
    const targets=relative
      ?[path.join(root,relative,"index.html"),path.join(root,`${relative}.html`)]
      :[path.join(root,"index.html")];
    return targets.some(target=>fs.existsSync(target));
  });
};
for(const file of files){const html=documentOnly(fs.readFileSync(file,"utf8"));for(const match of html.matchAll(/href="(\/[^"]*)"/g)){const href=match[1].split("#")[0].split("?")[0];if(!href||href.startsWith("//")||href.includes("."))continue;checks++;if(!routeExists(href))failures.push(`${path.relative(root,file)}: broken ${href}`)}}
if(failures.length){console.error(failures.join("\n"));process.exit(1)}
console.log(`SEO audit passed: ${checks}/${checks} checks across ${files.length} HTML pages.`);
