import fs from "node:fs/promises";
import path from "node:path";
import {pathToFileURL} from "node:url";
import {spawn} from "node:child_process";

const temp=await fs.mkdtemp(path.join(process.cwd(),"wordpress-test-"));
const pixel=Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=","base64");
const mediaFile=path.join(temp,"featured.png");await fs.writeFile(mediaFile,pixel);
const post=(id,slug,title)=>({id,slug,date:"2026-08-16T09:00:00",modified:"2026-08-16T10:00:00",link:`https://example.test/${slug}/`,title:{rendered:title},excerpt:{rendered:`<p>خلاصه ${title}</p>`},content:{rendered:`<h2>${title}</h2><p>متن کامل خبر</p><img src="${pathToFileURL(mediaFile).href}" alt="تصویر تست"><script>alert(1)</script>`},_embedded:{author:[{name:"تحریریه تست"}],"wp:featuredmedia":[{source_url:pathToFileURL(mediaFile).href,alt_text:title}],"wp:term":[[{taxonomy:"category",name:"خبر تست"}]]}});
const fixture=path.join(temp,"fixture.json");await fs.writeFile(fixture,JSON.stringify([post(1,"%D8%AE%D8%A8%D8%B1-%D8%A2%D8%B2%D9%85%D8%A7%DB%8C%D8%B4%DB%8C","خبر اول"),post(2,"second-news","خبر دوم")]));
const child=spawn(process.execPath,["scripts/sync-wordpress.mjs","--strict"],{cwd:process.cwd(),env:{...process.env,WORDPRESS_FIXTURE_PATH:fixture,WP_SNAPSHOT_PATH:path.join(temp,"posts.json"),WP_MEDIA_DIR:path.join(temp,"media")},stdio:"inherit"});
const code=await new Promise(resolve=>child.on("exit",resolve));if(code!==0)process.exit(code||1);
const data=JSON.parse(await fs.readFile(path.join(temp,"posts.json"),"utf8"));
if(data.posts.length!==2)throw new Error("Expected two synced posts");
if(data.posts[0].slug!=="خبر-آزمایشی")throw new Error("Encoded Persian slug was not normalized");
if(data.posts.some(item=>!item.image.startsWith("/wp-media/")))throw new Error("Media was not localized");
if(!data.posts[0].contentHtml.includes("متن کامل خبر"))throw new Error("Post content missing");
if(!data.posts[0].contentHtml.includes("/wp-media/")||data.posts[0].contentHtml.includes("file:"))throw new Error("Inline content image was not localized");
console.log("WordPress integration test passed: two posts, metadata and media sync are valid.");
