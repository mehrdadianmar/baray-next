import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {allProducts,getProduct} from "@/lib/products";
import {jsonLd,site} from "@/lib/seo";

export function generateStaticParams(){return allProducts.filter(item=>item.slug!=="legal-management").map(item=>({slug:item.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const product=getProduct((await params).slug);if(!product)return {};
  return {title:product.title,description:product.description,alternates:{canonical:`/products/${product.slug}/`},openGraph:{title:product.title,description:product.description,type:"website"}};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const product=getProduct((await params).slug);if(!product||product.slug==="legal-management")notFound();
  const schema={"@context":"https://schema.org","@type":"SoftwareApplication",name:product.title,applicationCategory:"BusinessApplication",operatingSystem:"Web / On-premise",description:product.description,provider:{"@type":"Organization",name:"رایان بارای",url:site.url}};
  return <>
    <section className="pageHero productPageHero"><div className="wrap"><nav className="breadcrumb" aria-label="مسیر صفحه"><Link href="/">خانه</Link><span>/</span><Link href="/#solutions">راهکارها</Link></nav><span className="kicker"><i/> {product.eyebrow}</span><h1>{product.title}</h1><p>{product.description}</p><div className="actions"><Link className="button" href="/#demo">درخواست معرفی سامانه ←</Link><Link className="button ghost" href="/#legal-suite">مشاهده سبد راهکارها</Link></div></div></section>
    <section className="section productNarrative"><div className="wrap productNarrativeGrid"><div><span className="eyebrow">چرا این سامانه؟</span><h2>فرآیند روشن، داده منسجم، پیگیری قابل اتکا</h2></div><p>{product.intro}</p></div></section>
    <section className="section soft"><div className="wrap"><header className="sectionHead"><div><span className="eyebrow">قابلیت‌های کلیدی</span><h2>برای کار واقعی سازمان طراحی شده است</h2></div><p>قابلیت‌ها در قالب نقش‌ها، کارتابل‌ها و گردش‌های قابل تنظیم با ساختار سازمان شما منطبق می‌شوند.</p></header><div className="capabilityGrid">{product.features.map((feature,index)=><article key={feature}><b>{String(index+1).padStart(2,"0")}</b><h3>{feature}</h3><p>ثبت استاندارد داده، کنترل دسترسی و تاریخچه اقدامات، این قابلیت را برای استفاده سازمانی قابل اتکا می‌کند.</p></article>)}</div></div></section>
    <section className="section workflowSection"><div className="wrap"><header className="sectionHead compactHead"><div><span className="eyebrow">مسیر کار</span><h2>از شروع تا نتیجه، در یک زنجیره</h2></div></header><div className="productWorkflow">{product.workflow.map((step,index)=><article key={step}><b>{index+1}</b><h3>{step}</h3></article>)}</div><div className="outcomeRow">{product.outcomes.map(outcome=><span key={outcome}>✓ {outcome}</span>)}</div></div></section>
    <section className="consultCta"><div className="wrap consultCtaIn"><div><span>گام بعدی</span><h2>این سامانه را با فرآیند واقعی سازمان خود ببینید.</h2><p>در جلسه تخصصی، سناریوی شما را روی نقش‌ها، داده‌ها، گردش کار و گزارش‌های مورد نیاز مرور می‌کنیم.</p></div><Link className="button" href="/#demo">رزرو جلسه دمو ←</Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)}/>
  </>;
}
