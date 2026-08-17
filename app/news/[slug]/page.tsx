import {notFound} from "next/navigation";
import type {Metadata} from "next";
import Link from "next/link";
import {articles,getArticle} from "@/lib/articles";
import {site,jsonLd,assetUrl} from "@/lib/seo";

export function generateStaticParams(){return articles.map((article)=>({slug:article.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const article=getArticle((await params).slug);if(!article)return {};
  return {title:article.title,description:article.excerpt,alternates:{canonical:`/news/${article.slug}/`},openGraph:{type:"article",title:article.title,description:article.excerpt,publishedTime:article.publishedAt,modifiedTime:article.modifiedAt,images:[{url:article.image,alt:article.title}]}};
}

export default async function ArticlePage({params}:{params:Promise<{slug:string}>}){
  const article=getArticle((await params).slug);if(!article)notFound();
  const schema={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:`${site.url}/news/${article.slug}/`,headline:article.title,description:article.excerpt,datePublished:article.publishedAt,dateModified:article.modifiedAt,image:`${site.url}${article.image}`,inLanguage:"fa-IR",author:{"@type":"Organization",name:"رایان بارای",url:site.url},publisher:{"@type":"Organization",name:"رایان بارای",logo:{"@type":"ImageObject",url:`${site.url}/logo.svg`}}};
  return <article className="article"><header className="articleHero"><div className="wrap narrow"><nav className="breadcrumb" aria-label="مسیر صفحه"><Link href="/">خانه</Link><span>/</span><Link href="/news">اخبار</Link></nav><span>{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="meta"><time dateTime={article.publishedAt}>{article.date}</time><i/><b>{article.source}</b></div></div></header><div className="wrap narrow articleBody"><img className="articleImage" src={assetUrl(article.image)} width="1200" height="675" alt={article.imageAlt||`تصویر مقاله ${article.title}`}/><p className="articleLead">{article.lead}</p>{article.contentHtml?<div className="wpContent" dangerouslySetInnerHTML={{__html:article.contentHtml}}/>:<>{article.body.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}<aside><h2>نکات کلیدی</h2><ul>{article.takeaways.map((item)=><li key={item}>{item}</li>)}</ul></aside><h2>جمع‌بندی بارای</h2><p>فناوری وقتی ارزشمند است که فرآیند، داده و مسئولیت را به یکدیگر متصل کند. پیش از انتخاب ابزار، مسئله قابل اندازه‌گیری و قواعد حاکمیتی سازمان را روشن کنید.</p></>}<Link className="button articleCta" href="/contact">گفت‌وگو با کارشناس بارای ←</Link></div><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)}/></article>
}
