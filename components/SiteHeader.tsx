"use client";
import Link from "next/link";
import {useState} from "react";
import {assetUrl} from "@/lib/seo";

export default function SiteHeader(){
  const [open,setOpen]=useState(false);const close=()=>setOpen(false);
  return <><div className="topline"><div className="wrap">هوش در قانون، نظم در داده <Link href="/#raybot">معرفی رای‌بات ←</Link></div></div><header className="header"><div className="wrap headerIn"><Link className="brand brandWordmark" href="/" onClick={close}><img src={assetUrl("/baray-logo.png")} width="174" height="59" alt="لوگوی رایان بارای"/></Link><nav id="main-nav" className={open?"nav open":"nav"} aria-label="ناوبری اصلی"><Link onClick={close} href="/#raybot">رای‌بات</Link><Link onClick={close} href="/#ai-solutions">راهکارهای هوشمند</Link><Link onClick={close} href="/products/legal-management">سامانه حقوقی</Link><Link onClick={close} href="/#customers">مشتریان</Link><Link onClick={close} href="/news">اخبار</Link><Link onClick={close} href="/contact">تماس</Link></nav><div className="headerCta"><a className="phone" href="tel:+982126422402">۰۲۱–۲۶۴۲۲۴۰۲</a><Link className="button small" href="/#demo">درخواست دمو</Link></div><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open?"بستن منو":"نمایش منو"}>{open?"×":"☰"}</button></div></header></>
}
