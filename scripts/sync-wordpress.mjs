import fs from "node:fs/promises";
import path from "node:path";

const api=(process.env.WORDPRESS_API_URL||"https://www.baray.ir/wp-json/wp/v2").replace(/\/$/,"");
const target=path.resolve(process.env.WP_SNAPSHOT_PATH||"content/wordpress-posts.json");
const mediaDir=path.resolve(process.env.WP_MEDIA_DIR||"public/wp-media");
const strict=process.argv.includes("--strict");
const fixture=process.env.WORDPRESS_FIXTURE_PATH;
const limit=Number(process.env.WORDPRESS_POST_LIMIT||100);
const strip=(html="")=>html.replace(/<script[\s\S]*?<\/script>/gi,"").replace(/<style[\s\S]*?<\/style>/gi,"").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&#8211;|&#8212;/g,"—").replace(/&#8230;/g,"…").replace(/\s+/g," ").trim();
const fetchJson=async(url)=>{const response=await fetch(url,{headers:{Accept:"application/json","User-Agent":"Baray-Content-Sync/1.0"},signal:AbortSignal.timeout(20000)});if(!response.ok)throw new Error(`${response.status} ${response.statusText}`);return response.json()};
const extension=(url,type="")=>{const ext=path.extname(new URL(url).pathname).toLowerCase();if(/^\.(jpe?g|png|webp|gif|svg)$/.test(ext))return ext;if(type.includes("png"))return ".png";if(type.includes("webp"))return ".webp";return ".jpg"};
const downloadImage=async(url,slug)=>{if(!url)return "/news/governance.svg";try{const ext=extension(url);const name=`${slug}${ext}`;await fs.mkdir(mediaDir,{recursive:true});if(url.startsWith("file:")){await fs.copyFile(new URL(url),path.join(mediaDir,name));return `/wp-media/${name}`}const response=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!response.ok)throw new Error(String(response.status));await fs.writeFile(path.join(mediaDir,name),Buffer.from(await response.arrayBuffer()));return `/wp-media/${name}`}catch(error){console.warn(`Image fallback for ${slug}: ${error.message}`);return url}};
const readPage=async(page)=>fixture?(page===1?JSON.parse(await fs.readFile(fixture,"utf8")):[]):fetchJson(`${api}/posts?per_page=100&page=${page}&status=publish&_embed=1`);

try{
  const posts=[];for(let page=1;posts.length<limit;page++){let batch;try{batch=await readPage(page)}catch(error){if(page>1&&String(error.message).startsWith("400"))break;throw error}posts.push(...batch);if(batch.length<100)break}
  const result=[];for(const post of posts.slice(0,limit)){const media=post._embedded?.["wp:featuredmedia"]?.[0];const terms=post._embedded?.["wp:term"]?.flat?.()||[];const author=post._embedded?.author?.[0]?.name||"تحریریه رایان بارای";const title=strip(post.title?.rendered);const excerpt=strip(post.excerpt?.rendered)||strip(post.content?.rendered).slice(0,180);result.push({slug:post.slug,title,excerpt,category:terms.find(x=>x.taxonomy==="category")?.name||"اخبار",date:new Intl.DateTimeFormat("fa-IR",{dateStyle:"long"}).format(new Date(post.date)),publishedAt:post.date,modifiedAt:post.modified,image:await downloadImage(media?.source_url,post.slug),imageAlt:media?.alt_text||title,source:author,lead:excerpt,body:[],takeaways:[],contentHtml:post.content?.rendered||"",wordpressId:post.id,originalUrl:post.link})}
  await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,JSON.stringify({syncedAt:new Date().toISOString(),api,posts:result},null,2));console.log(`Synced ${result.length} published WordPress posts.`)
}catch(error){console.error(`WordPress sync failed: ${error.message}`);if(strict)process.exit(1);console.log("Existing snapshot preserved; build can continue with cached or fallback content.")}
