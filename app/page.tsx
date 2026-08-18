import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import {articles} from "@/lib/articles";
import {assetUrl,jsonLd,site} from "@/lib/seo";
import {customers,smartSolutions} from "@/lib/home";
import {erpProducts,smartProducts} from "@/lib/products";

const contractFeatures=[
  "ثبت الکترونیکی قراردادها و اسناد مرتبط",
  "شناسایی بندهای مهم، تاریخ‌ها و تعهدات مالی یا اجرایی",
  "یادآوری خودکار موعدهای تمدید، فسخ، پرداخت و اجرای تعهدات",
  "هشدار درباره بندهای پرخطر یا مغایر با قوانین",
  "ارائه گزارش وضعیت اجرای قراردادها به مدیران"
];
const caseSteps=[
  {title:"تشکیل پرونده",text:"ثبت اطلاعات پایه و طرفین"},
  {title:"ارجاع",text:"تعیین مسئول و گردش کار"},
  {title:"اسناد و لوایح",text:"مدیریت مستندات پرونده"},
  {title:"جلسات و مهلت‌ها",text:"کنترل تقویم و هشدارها"},
  {title:"رأی و تصمیم",text:"ثبت نتیجه و تحلیل"},
  {title:"اجرای حکم",text:"پیگیری تا حصول نتیجه"}
];
const industries=[
  {icon:"ش",title:"شهرداری‌ها",text:"مناطق، ستاد و کمیسیون‌ها"},
  {icon:"و",title:"وزارتخانه‌ها",text:"ساختارهای ملی و استانی"},
  {icon:"ص",title:"صنایع ملی",text:"شرکت‌ها و هلدینگ‌ها"},
  {icon:"ب",title:"بانک‌ها",text:"عملیات حقوقی چندلایه"},
  {icon:"ا",title:"اپراتورها",text:"حجم بالای داده و پرونده"}
];

export default function Home(){
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"SoftwareApplication",name:"رای‌بات",alternateName:"RayBot",applicationCategory:"BusinessApplication",operatingSystem:"Web / On-premise",description:"دستیار هوشمند حقوقی سازمان‌ها و ارگان‌ها مبتنی بر داده‌های داخلی و حقوق قضایی ایران.",provider:{"@type":"Organization",name:"رایان بارای",url:site.url}},
    {"@type":"SoftwareApplication",name:"سامانه جامع مدیریت امور حقوقی بارای",applicationCategory:"BusinessApplication",operatingSystem:"Web / On-premise",description:"ثبت و پیگیری یکپارچه دعاوی، پرونده‌ها، مکاتبات، اسناد، جلسات، آرا و اجرای احکام.",provider:{"@type":"Organization",name:"رایان بارای",url:site.url}}
  ]};
  return <>
    <section className="hero aiHero">
      <div className="wrap heroGrid aiHeroGrid">
        <div className="heroCopy">
          <span className="kicker"><i/> هوش مصنوعی حقوقی در بستر امن سازمان</span>
          <h1 className="manifesto"><span>هوش در قانون</span><span>نظم در داده</span><span>هر پرونده</span><span className="accent">یک تصمیم هوشمند</span></h1>
          <p className="heroPromise">کاهش هزینه‌های پنهان در بررسی‌های حقوقی با هوش مصنوعی</p>
          <div className="actions"><Link className="button" href="#raybot">آشنایی با رای‌بات <b>←</b></Link><Link className="button ghost" href="#demo">درخواست دموی تخصصی</Link></div>
          <div className="proof"><span>✓ استقرار درون‌سازمانی</span><span>✓ منطبق با حقوق قضایی ایران</span><span>✓ داده‌محور و قابل ردیابی</span></div>
        </div>
        <div className="command heroCommand" aria-label="نمای گرافیکی مرکز فرماندهی امور حقوقی">
          <div className="commandTop"><span>مرکز فرماندهی حقوقی</span><div><i/><i/><i/></div></div>
          <div className="commandStats"><div><small>پرونده‌های فعال</small><b>۲۸۴</b><em>+۱۲ این ماه</em></div><div><small>موعدهای نزدیک</small><b>۳۶</b><em className="warn">نیازمند اقدام</em></div><div><small>اقدام در موعد</small><b>۷۸٪</b><em>روند رو به رشد</em></div></div>
          <div className="chartTitle"><b>روند پرونده‌ها</b><span>۶ ماه اخیر</span></div><div className="bars">{[42,60,48,75,67,88,72,94].map((height,index)=><i key={index} style={{height:`${height}%`}}/>)}</div>
          <div className="event"><span>●</span><div><b>ابلاغیه جدید ثبت شد</b><small>پرونده ۱۴۰۵/۱۲۸ — واحد قراردادها</small></div><time>۰۹:۴۲</time></div>
          <div className="commandAi"><i/> تحلیل هوشمند رای‌بات فعال است</div>
        </div>
      </div>
    </section>

    <section className="industryBand"><div className="wrap"><div className="industryBandTitle"><span>تجربه همکاری با ساختارهای بزرگ و چندلایه</span><strong>راهکار متناسب با معماری هر سازمان</strong></div><div className="industryCards">{industries.map(item=><article key={item.title}><b>{item.icon}</b><div><h2>{item.title}</h2><p>{item.text}</p></div></article>)}</div></div></section>

    <section id="raybot" className="section raybotSection"><div className="wrap">
      <header className="sectionHead raybotHead"><div><span className="eyebrow">محصول محوری هوش مصنوعی بارای</span><h2>رای‌بات؛ دستیار هوشمند حقوقی<br/>سازمان‌ها و ارگان‌ها</h2></div><p>رای‌بات یک هویت هوشمند مبتنی بر داده‌های سازمان شما می‌سازد؛ بدون آن‌که اطلاعات محرمانه برای استفاده از هوش مصنوعی از سازمان خارج شوند.</p></header>
      <div className="raybotIntro"><p>ما در <strong>رای‌بات</strong> به دنبال ایجاد یک هویت هوشمند مبتنی بر داده‌های سازمان یا ارگان شما هستیم. دستیار هوشمند بارای پلاس به مدیران و کارشناسان سازمان‌ها کمک می‌کند تا بدون نیاز به انتقال داده‌ها و اطلاعات سازمان خود به بیرون از سازمان، از دستیار هوشمند حقوقی مبتنی بر حقوق قضایی ایران به‌صورت پویا بهره‌برداری کنند.</p><div className="raybotPillars"><span><b>۰۱</b>فهم داده سازمانی</span><span><b>۰۲</b>تحلیل حقوقی پویا</span><span><b>۰۳</b>پاسخ با زبان انسانی</span></div></div>
      <div className="raybotStories"><article className="rayStory legalVoice"><span className="storyLabel">رای‌بات حقوقی</span><h3>صدای هوش در دنیای قانون</h3><strong>از پرسش تا پاسخ، از داده تا تصمیم؛ همه در یک گفت‌وگوی هوشمند.</strong><p>قانون در عصر جدید فقط ماده و تبصره نیست؛ جریانی از داده‌ها، استدلال‌ها و تصمیم‌هاست. رای‌بات حقوقی ذهنی هوشمند است که می‌فهمد، می‌آموزد و پاسخ می‌دهد؛ پلی میان انسان و قانون، میان پرسش و راه‌حل، میان ضابطه و معنا.</p></article><article className="rayStory cityVoice"><span className="storyLabel">رای‌بات شهری</span><h3>صدای شهر در دنیای داده‌ها</h3><strong>ذهنی که می‌فهمد، می‌آموزد و پاسخ می‌دهد؛ پلی میان انسان و شهر.</strong><p>شهر در عصر جدید شبکه‌ای از داده‌ها، تصمیم‌ها، احساسات و حرکت‌هاست. رای‌بات پلی است میان انسان و شهر، میان پرسش و تصمیم و میان ضابطه و معنا؛ عقل شهر، با زبانی انسانی.</p></article></div>
    </div></section>

    <section id="legal-suite" className="section legalSuite"><div className="wrap">
      <header className="sectionHead"><div><span className="eyebrow">مدیریت جامع امور حقوقی</span><h2>سامانه مدیریت امور حقوقی</h2></div><p>مرکز واحد برای پرونده، مکاتبه، جلسه، رأی، اجرا و گزارش مدیریتی.</p></header>
      <div className="legalSuiteGrid"><div className="legalSuiteVisual"><div className="legalDash"><span>داشبورد مدیریت حقوقی</span><div className="miniKpis"><b>پرونده‌ها</b><b>مهلت‌ها</b><b>جلسات</b></div><div className="miniChart"><i/><i/><i/><i/><i/><i/></div><small>گزارش لحظه‌ای واحدها و شعب</small></div></div><div className="legalSuiteContent"><p className="legalSuiteLead">سیستم ثبت و پیگیری دعاوی حقوقی، نرم‌افزاری جامع جهت ثبت و نگهداری کلیه اطلاعات دعاوی حقوقی و پرونده‌هاست. امکان ثبت اطلاعات کلیه فرم‌های حقوقی سازمان و یکپارچگی این اطلاعات در قالب پرونده‌های حقوقی باعث افزایش سرعت رسیدگی به مکاتبات حقوقی از طریق فرم‌های دعاوی حقوقی و گردش الکترونیکی مکاتبات می‌شود.</p><div className="legalAccordion">{smartProducts.slice(0,4).map((product,index)=><details key={product.slug} open={index===0}><summary><span>{product.shortTitle}</span><i>{index===0?"–":"+"}</i></summary><p>{product.description}</p><Link href={`/products/${product.slug}`}>مشاهده صفحه سامانه ←</Link></details>)}</div></div></div>
    </div></section>

    <section id="software" className="softwareBand"><div className="wrap"><header><span>نرم‌افزارهای یکپارچه سازمانی بارای</span><h2>از ERP تا عملیات تخصصی حقوقی</h2><p>زیرسیستم‌ها به‌صورت مستقل یا در یک معماری یکپارچه قابل استقرار هستند.</p></header><div>{erpProducts.map((product,index)=><Link href={`/products/${product.slug}`} key={product.slug}><b>{String(index+1).padStart(2,"0")}</b><span>{product.shortTitle}</span><i>←</i></Link>)}</div></div></section>

    <section id="solutions" className="section soft"><div className="wrap">
      <header className="sectionHead"><div><span className="eyebrow">سبد راهکارهای هوشمند</span><h2>هوش مصنوعی، در نقطه واقعی کار حقوقی</h2></div><p>هر قابلیت برای حل یک مسئله مشخص طراحی شده است؛ از فهم سند و قانون تا کنترل قرارداد و پیش‌بینی ریسک.</p></header>
      <div className="smartGrid">{smartSolutions.map(item=><article className="smartCard" key={item.number}><div><span>{item.number}</span><small>{item.tag}</small></div><h3>{item.title}</h3><p>{item.description}</p>{item.number==="۰۱"?<a href="#contracts">جزئیات سامانه قراردادها ←</a>:item.number==="۰۵"?<Link href="/products/legal-management">مشاهده سامانه ←</Link>:null}</article>)}</div>
    </div></section>

    <section id="contracts" className="section contractSection"><div className="wrap contractGrid"><div><span className="eyebrow light">سامانه هوشمند مدیریت قراردادها</span><h2>از ثبت قرارداد تا هشدار پیش از ریسک</h2><p>سیستمی تخصصی برای ثبت، بررسی، پایش و یادآوری موعدهای مهم قرارداد. هوش مصنوعی بندهای حساس را شناسایی می‌کند و برای جلوگیری از اختلافات هشدار می‌دهد.</p><Link className="button mint" href="/products/contracts-contractors">مشاهده سامانه</Link></div><div className="contractPanel">{contractFeatures.map((item,index)=><div key={item}><b>{String(index+1).padStart(2,"0")}</b><span>{item}</span><i>✓</i></div>)}</div></div></section>

    <section id="bi" className="section biSection"><div className="wrap biGrid"><div className="biCopy"><span className="eyebrow">گزارش‌ها و داشبوردهای BI</span><h2>تصمیم حقوقی، بر پایه تصویر روشن از داده‌ها</h2><p>گزارش‌های مبتنی بر هوش تجاری بارای، فرآیندی بر پایه فناوری و تجربه است که داده‌های عملیاتی را به اطلاعات قابل استفاده تبدیل می‌کند. مدیران می‌توانند وضعیت پرونده‌ها، مهلت‌ها، عملکرد واحدها، هزینه‌ها، ریسک‌ها و روند نتایج را بدون گزارش‌سازی دستی مشاهده کنند.</p><ul><li>داشبورد مدیریتی متناسب با نقش و سطح سازمانی</li><li>تحلیل روند، مقایسه واحدها و شناسایی نقاط توقف</li><li>گزارش‌ساز منعطف و خروجی قابل ارائه به مدیران</li><li>ردیابی هر شاخص تا پرونده و داده مبنا</li></ul><Link className="textLink" href="/contact">طراحی داشبورد متناسب با سازمان شما ←</Link></div><div className="biVisual"><img src={assetUrl("/visuals/bi-dashboard.svg")} width="960" height="620" loading="lazy" alt="نمای گرافیکی داشبورد گزارش‌های هوش تجاری بارای"/></div></div></section>

    <section className="capabilityBand"><div className="wrap"><article><b>۳۶۰°</b><span>دید کامل پرونده</span></article><article><b>BI</b><span>گزارش مدیریتی</span></article><article><b>OCR</b><span>خوانش هوشمند سند</span></article><article><b>AI</b><span>تحلیل و پیش‌بینی ریسک</span></article></div></section>

    <section className="section ocrSection"><div className="wrap ocrGrid"><div className="ocrVisual" aria-label="نمای تبدیل سند اسکن‌شده به داده قابل جست‌وجو"><div className="paperScan"><span>سند حقوقی اسکن‌شده</span><i/><i/><i/><i/><b>OCR</b></div><div className="dataExtract"><span>متن قابل جست‌وجو</span><b>تعهدات</b><b>تاریخ‌ها</b><b>اشخاص</b><b>مبالغ</b></div></div><div><span className="eyebrow">نویسه‌خوان فارسی OCR</span><h2>هر سند، به داده‌ای قابل جست‌وجو و تحلیل تبدیل می‌شود</h2><p>نویسه‌خوان فارسی OCR اسناد حقوقی چاپی یا اسکن‌شده را به متن دیجیتال تبدیل می‌کند تا اطلاعات آن‌ها سریع جست‌وجو، دسته‌بندی و تحلیل شود. این قابلیت زمان بررسی پرونده‌ها و قراردادها را کاهش می‌دهد و خطای انسانی را محدود می‌کند.</p></div></div></section>

    <section className="section lifecycleSection"><div className="wrap"><header className="sectionHead lifecycleHead"><div><span className="eyebrow">چرخه پرونده</span><h2>از تشکیل پرونده تا اجرای حکم</h2></div><p>یک مسیر قابل ردیابی برای تمام رویدادهای مهم، بدون وابستگی به فایل‌های پراکنده و پیگیری‌های شخصی.</p></header><div className="caseLifecycle">{caseSteps.map((step,index)=><article key={step.title}><b>{index+1}</b><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></div></section>

    <section id="about" className="section aboutSection"><div className="wrap aboutGrid"><div><span className="eyebrow light">درباره ما</span><h2>تجربه ERP، در خدمت مدیریت حقوقی هوشمند</h2><Link className="button mint" href="/about">داستان رایان بارای ←</Link></div><p>گروه فناوری اطلاعات و ارتباطات رایان بارای با اتکا بر دانش و تجربه چندین‌ساله پرسنلی کارآزموده و مجرب، با هدف مشاوره، طراحی، تولید، آموزش، راه‌اندازی و پشتیبانی نرم‌افزارهای برنامه‌ریزی منابع سازمانی (ERP) پایه‌ریزی و تأسیس شد. چشم‌انداز این گروه، کمک به افزایش بهره‌وری سازمان از طریق به‌کارگیری فناوری اطلاعات و سیستم‌های یکپارچه اطلاعاتی است.</p></div></section>

    <section id="customers" className="section customersSection"><div className="wrap"><header className="sectionHead"><div><span className="eyebrow">اعتماد سازمانی</span><h2>برخی از مشتریان رایان بارای</h2></div><p>تجربه بارای از مدیریت شهری تا وزارتخانه، بانک، صنعت و ارتباطات امتداد دارد.</p></header><div className="customerGrid">{customers.map(customer=><article className={`customerCard ${customer.className||""}`} key={customer.name}><div><img src={assetUrl(customer.logo)} width="220" height="150" loading="lazy" alt={`لوگوی ${customer.name}`}/></div><h3>{customer.name}</h3></article>)}</div></div></section>

    <section className="section newsSection"><div className="wrap"><header className="sectionHead"><div><span className="eyebrow">آخرین مطالب</span><h2>تازه‌های حقوق، داده و فناوری</h2></div><Link className="textLink" href="/news">همه اخبار و مقالات ←</Link></header><div className="newsGrid">{articles.slice(0,3).map(article=><NewsCard key={article.slug} a={article}/>)}</div></div></section>

    <section className="consultStrip"><div className="wrap consultStripIn"><div><span>جلسه تخصصی فرآیند</span><h2>فرآیندهای حقوقی سازمان شما چقدر قابل مشاهده‌اند؟</h2><p>در یک جلسه تخصصی، وضعیت فعلی، نقاط اتلاف زمان و مسیر پیشنهادی استقرار را بررسی می‌کنیم.</p></div><div><Link className="button" href="#demo">رزرو جلسه دمو</Link><Link className="button ghost lightGhost" href="/contact">تماس با ما</Link></div></div></section>

    <section id="demo" className="demo"><div className="wrap demoIn"><div><span className="eyebrow light">جلسه معرفی تخصصی</span><h2>مسئله حقوقی سازمان شما، نقطه شروع طراحی راهکار است.</h2><p>فرآیندهای فعلی، زیرساخت داده و سناریوی مناسب استقرار رای‌بات و سامانه‌های بارای را مرور می‌کنیم.</p></div><form><label>نام و نام خانوادگی<input required placeholder="نام شما"/></label><label>نام سازمان<input required placeholder="سازمان یا شرکت"/></label><label>شماره تماس<input required inputMode="tel" placeholder="۰۹۱۲..."/></label><button className="button" type="submit">درخواست تماس ←</button><small>ارسال نهایی فرم پس از اتصال به CRM سازمان فعال می‌شود.</small></form></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)}/>
  </>;
}
