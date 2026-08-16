import type {Metadata} from "next";
import {articles} from "@/lib/articles";
import NewsCard from "@/components/NewsCard";

export const metadata:Metadata={title:"اخبار و دانش حقوق دیجیتال",description:"تحلیل فارسی فناوری حقوقی، هوش مصنوعی، حاکمیت داده و تحول دیجیتال واحدهای حقوقی.",alternates:{canonical:"/news/"}};

export default function News(){const categories=[...new Set(articles.map((article)=>article.category))];return <><section className="pageHero"><div className="wrap"><span className="kicker"><i/> رصد، تحلیل، کاربرد</span><h1>اخبار و دانش<br/><em>حقوق دیجیتال</em></h1><p>تحولات مهم فناوری حقوقی را کوتاه، مستند و با تمرکز بر کاربرد آن برای مدیران حقوقی سازمان‌ها مرور می‌کنیم.</p></div></section><section className="section"><div className="wrap"><div className="topics" aria-label="موضوعات موجود"><strong>موضوعات:</strong>{categories.map((category)=><span key={category}>{category}</span>)}</div><div className="newsGrid">{articles.map((article)=><NewsCard key={article.slug} a={article}/>)}</div></div></section></>}
