"use client";
import Link from "next/link";
import {useState} from "react";
import {assetUrl} from "@/lib/seo";
import {erpProducts,smartProducts} from "@/lib/products";

const softwareGroups=[
  {slug:"office-automation",items:["مدیریت گردش کار","مکاتبات اداری و دبیرخانه","بایگانی الکترونیکی اسناد","سامان‌دهی امور دفتری"]},
  {slug:"financial",items:["حسابداری مالی","خزانه‌داری و کنترل نقدینگی","قراردادها و پیمانکاران","بودجه و اعتبارات"]},
  {slug:"human-resources",items:["اطلاعات پرسنلی","ارزشیابی کارمندان","حضور و غیاب","حقوق و دستمزد"]},
  {slug:"logistics",items:["اموال و دارایی‌ها","انبار و کنترل موجودی","نگهداری و به‌روزرسانی","امور نقلیه و کتابخانه"]},
  {slug:"commerce",items:["خرید و تدارکات","فروش و سفارشات","پخش کالا"]},
  {slug:"system-admin",items:["مدیریت ساختار و دسترسی","گردش کار","برنامه‌ساز و فرم‌ساز"]}
];

export default function SiteHeader(){
  const [open,setOpen]=useState(false);const close=()=>setOpen(false);
  return <>
    <div className="topline"><div className="wrap">هوش در قانون، نظم در داده <Link href="/#raybot">معرفی رای‌بات ←</Link></div></div>
    <header className="header"><div className="wrap headerIn">
      <Link className="brand brandWordmark" href="/" onClick={close}><img src={assetUrl("/baray-logo.png")} width="174" height="59" alt="لوگوی رایان بارای"/></Link>
      <nav id="main-nav" className={open?"nav open":"nav"} aria-label="ناوبری اصلی">
        <Link onClick={close} href="/#raybot">رای‌بات</Link>
        <div className="navDrop softwareDrop"><Link onClick={close} href="/#software">نرم‌افزار <span>⌄</span></Link><div className="megaMenu softwareMega"><div className="megaIntro"><small>سبد نرم‌افزارهای سازمانی</small><strong>زیرسیستم‌های یکپارچه ERP بارای</strong><p>قابل استقرار به‌صورت یکپارچه یا مستقل، متناسب با ساختار هر سازمان.</p></div><div className="softwareGroups">{softwareGroups.map(group=>{const product=erpProducts.find(item=>item.slug===group.slug)!;return <section key={group.slug}><Link onClick={close} href={`/products/${group.slug}`}><b>{product.shortTitle}</b><i>←</i></Link>{group.items.map(item=><span key={item}>{item}</span>)}</section>})}</div></div></div>
        <div className="navDrop smartDrop"><Link onClick={close} href="/#solutions">راهکارهای هوشمند <span>⌄</span></Link><div className="megaMenu smartMega"><div className="megaIntro darkIntro"><small>راهکارهای تخصصی حقوقی و شهری</small><strong>از پرونده تا تصمیم و اجرا</strong><p>سامانه‌های قابل تنظیم برای شهرداری‌ها، وزارتخانه‌ها، هلدینگ‌ها و سازمان‌های بزرگ.</p><Link onClick={close} className="megaCta" href="/#legal-suite">مشاهده مجموعه راهکارها ←</Link></div><div className="smartLinks">{smartProducts.map((product,index)=><Link onClick={close} href={`/products/${product.slug}`} key={product.slug}><b>{String(index+1).padStart(2,"0")}</b><span>{product.shortTitle}</span><i>←</i></Link>)}</div></div></div>
        <Link onClick={close} href="/#customers">مشتریان</Link>
        <Link onClick={close} href="/news">اخبار</Link>
        <Link onClick={close} href="/about">درباره ما</Link>
        <Link onClick={close} href="/contact">ارتباط با ما</Link>
      </nav>
      <div className="headerCta"><a className="phone" href="tel:+982126422402">۰۲۱–۲۶۴۲۲۴۰۲</a><Link className="button small" href="/#demo">درخواست دمو</Link></div>
      <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open?"بستن منو":"نمایش منو"}>{open?"×":"☰"}</button>
    </div></header>
  </>;
}
