"use client";
import Link from "next/link";
import {useState} from "react";
import {assetUrl} from "@/lib/seo";

export default function SiteHeader(){
  const [open,setOpen]=useState(false);const close=()=>setOpen(false);
  return <><div className="topline"><div className="wrap">راهکار تخصصی برای واحدهای حقوقی سازمان‌ها <Link href="/news">تازه‌های حقوق دیجیتال ←</Link></div></div><header className="header"><div className="wrap headerIn"><Link className="brand" href="/" onClick={close}><img src={assetUrl("/logo.svg")} width="43" height="43" alt="نشان رایان بارای"/><span><b>رایان بارای</b><small>فناوری مدیریت حقوقی</small></span></Link><nav id="main-nav" className={open?"nav open":"nav"} aria-label="ناوبری اصلی"><Link onClick={close} href="/products/legal-management">محصولات</Link><Link onClick={close} href="/solutions/municipalities">راهکار شهرداری‌ها</Link><Link onClick={close} href="/knowledge">مرکز دانش</Link><Link onClick={close} href="/news">اخبار</Link><Link onClick={close} href="/contact">درباره و تماس</Link></nav><div className="headerCta"><a className="phone" href="tel:+982126422402">۰۲۱–۲۶۴۲۲۴۰۲</a><Link className="button small" href="/contact">درخواست دمو</Link></div><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open?"بستن منو":"نمایش منو"}>{open?"×":"☰"}</button></div></header></>
}
