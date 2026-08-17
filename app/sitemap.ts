import type {MetadataRoute} from "next";
import {articles} from "@/lib/articles";
import {site} from "@/lib/seo";

export const dynamic="force-static";
export default function sitemap():MetadataRoute.Sitemap{
  const pages=[
    {path:"",priority:1,changeFrequency:"monthly" as const,lastModified:"2026-08-17"},
    {path:"/news",priority:.9,changeFrequency:"weekly" as const,lastModified:articles[0].modifiedAt},
    {path:"/knowledge",priority:.8,changeFrequency:"monthly" as const,lastModified:"2026-08-17"},
    {path:"/products/legal-management",priority:.9,changeFrequency:"monthly" as const,lastModified:"2026-08-17"},
    {path:"/solutions/municipalities",priority:.9,changeFrequency:"monthly" as const,lastModified:"2026-08-17"},
    {path:"/contact",priority:.7,changeFrequency:"yearly" as const,lastModified:"2026-08-17"},
    {path:"/privacy",priority:.3,changeFrequency:"yearly" as const,lastModified:"2026-08-16"}
  ];
  return [...pages.map((page)=>({url:`${site.url}${page.path}/`,lastModified:page.lastModified,changeFrequency:page.changeFrequency,priority:page.priority})),...articles.map((article)=>({url:`${site.url}/news/${article.slug}/`,lastModified:article.modifiedAt,changeFrequency:"monthly" as const,priority:.7}))];
}
