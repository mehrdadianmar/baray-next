export type Customer={name:string;logo:string;className?:string};
export type SmartSolution={number:string;title:string;description:string;tag:string};

export const customers:Customer[]=[
  {name:"شهرداری تهران",logo:"/customers/tehran.png"},
  {name:"شهرداری اصفهان",logo:"/customers/esfahan.png"},
  {name:"شهرداری شیراز",logo:"/customers/shiraz.png"},
  {name:"شهرداری تبریز",logo:"/customers/tabriz.png"},
  {name:"شهرداری کرج",logo:"/customers/karaj.png"},
  {name:"شهرداری رشت",logo:"/customers/rasht.jpg",className:"rashtLogo"},
  {name:"شهرداری کرمان",logo:"/customers/kerman.png"},
  {name:"شهرداری ارومیه",logo:"/customers/urmia.png"},
  {name:"شهرداری بیرجند",logo:"/customers/birjand.png"},
  {name:"شهرداری بروجرد",logo:"/customers/borujerd.png"},
  {name:"شهرداری نجف‌آباد",logo:"/customers/najafabad.png"},
  {name:"وزارت ورزش و جوانان",logo:"/customers/sports-ministry.png"},
  {name:"سازمان اوقاف و امور خیریه",logo:"/customers/awqaf.png"},
  {name:"بانک سینا",logo:"/customers/sina-bank.png"},
  {name:"شرکت ملی گاز ایران",logo:"/customers/national-gas.png"},
  {name:"ایرانسل",logo:"/customers/irancell.png"},
  {name:"گروه خودروسازی سایپا",logo:"/customers/saipa.png"}
];

export const smartSolutions:SmartSolution[]=[
  {number:"۰۱",tag:"قرارداد هوشمند",title:"سامانه هوشمند مدیریت قراردادها",description:"ثبت، بررسی و پایش قراردادها با شناسایی بندهای حساس، تعهدات، موعدها و ریسک‌های اجرایی."},
  {number:"۰۲",tag:"دانش حقوقی",title:"موتور جست‌وجوی پیشرفته قوانین و مقررات",description:"جست‌وجوی سریع مواد قانونی، آیین‌نامه‌ها و بخشنامه‌ها همراه با تحلیل متن و پیشنهاد مقررات مرتبط."},
  {number:"۰۳",tag:"پیش‌بینی",title:"سامانه پیش‌بینی ریسک‌های حقوقی",description:"تحلیل قراردادها، سوابق پرونده‌ها و الگوهای گذشته برای پیش‌بینی خطر و پیشنهاد اقدام کاهنده."},
  {number:"۰۴",tag:"پردازش سند",title:"نویسه‌خوان فارسی OCR",description:"تبدیل دقیق اسناد چاپی و اسکن‌شده حقوقی به متن قابل جست‌وجو، دسته‌بندی و تحلیل."},
  {number:"۰۵",tag:"عملیات حقوقی",title:"سامانه مدیریت امور حقوقی",description:"پرونده، ابلاغیه، جلسه، سند، لایحه، رأی و اجرای حکم در یک پرونده دیجیتال یکپارچه."},
  {number:"۰۶",tag:"مدیریت شهری",title:"کمیسیون‌ها و اجرائیات هوشمند",description:"مدیریت کمیسیون‌های ماده ۳۸ و ۷۷، اجرای احکام و گزارش‌های مدیریتی در یک جریان قابل ردیابی."}
];
