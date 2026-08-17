import type {MetadataRoute} from "next";
import {site} from "@/lib/seo";

export const dynamic="force-static";

export default function robots():MetadataRoute.Robots{
  const noindex=process.env.NEXT_PUBLIC_NOINDEX==="true";
  if(noindex)return {rules:{userAgent:"*",disallow:"/"}};
  return {rules:{userAgent:"*",allow:"/"},sitemap:`${site.url}/sitemap.xml`};
}
