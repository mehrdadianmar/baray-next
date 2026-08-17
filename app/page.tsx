import Link from "next/link";
import NewsCard from "@/components/NewsCard";
import {articles} from "@/lib/articles";
import {assetUrl,jsonLd,site} from "@/lib/seo";
import {customers,smartSolutions} from "@/lib/home";

const contractFeatures=[
  "ثبت الکترونیکی قراردادها و اسناد مرتبط",
  "شناسایی بندهای مهم، تاریخ‌ها و تعهدات مالی یا اجرایی",
  "یادآوری خودکار موعدهای تمدید، فسخ، پرداخت و اجرای تعهدات",
  "هشدار درباره بندهای پرخطر یا مغایر با قوانین",
  "ارائه گزارش وضعیت اجرای قراردادها به مدیران"
];

export default function Home(){
  const schema={"@context":"https://schema.org","@graph":[
    {"@type":"SoftwareApplication",name:"رای‌بات",alternateName:"RayBot",applicationCategory:"BusinessApplication",operatingSystem:"Web / On-premise",description:"دستیار هوشمند حقوقی سازمان‌ها و ارگان‌ها مبتنی بر داده‌های داخلی و حقوق قضایی ایران.",provider:{"@type":"Organization",name:"رایان بارای",url:site.url}},
    {"@type":"SoftwareApplication",name:"سامانه هوشمند مدیریت قراردادهای بارای",applicationCategory:"BusinessApplication",operatingSystem:"Web",description:"ثبت، بررسی، پایش، تحلیل ریسک و یادآوری هوشمند تعهدات و موعدهای قرارداد.",provider:{"@type":"Organization",name:"رایان بارای",url:site.url}}
  ]};
  return <>
    <section className="hero aiHero">
      <div className="wrap heroGrid aiHeroGrid">
        <div className="heroCopy">
          <span className="kicker"><i/> هوش مصنوعی حقوقی در بستر امن سازمان</span>
          <h1 className="manifesto">
            <span>هوش در قانون</span>
            <span>نظم در داده</span>
            <span>هر پرونده</span>
            <span className="accent">یک تصمیم هوشمند</span>
          </h1>
          <p className="heroPromise">کاهش هزینه‌های پنهان در بررسی‌های حقوقی با هوش مصنوعی</p>
          <div className="actions">
            <Link className="button" href="#raybot">آشنایی با رای‌بات <b>←</b></Link>
            <Link className="button ghost" href="#demo">درخواست دموی تخصصی</Link>
          </div>
          <div className="proof"><span>✓ استقرار درون‌سازمانی</span><span>✓ منطبق با حقوق قضایی ایران</span><span>✓ داده‌محور و قابل ردیابی</span></div>
        </div>
        <div className="raybotConsole" aria-label="نمای شماتیک دستیار هوشمند رای‌بات">
          <div className="botTop"><span><i/> رای‌بات حقوقی</span><small>دستیار هوشمند سازمان شما</small></div>
          <div className="botContext"><b>فضای امن سازمان</b><span>داده‌ها از زیرساخت شما خارج نمی‌شوند</span></div>
          <div className="chat userChat">ریسک تمدید این قرارداد چیست؟</div>
          <div className="chat botChat"><strong>رای‌بات</strong><p>سه موعد حساس، دو تعهد مالی و یک بند پرریسک شناسایی شد. گزارش مدیریتی آماده است.</p><div className="botTags"><span>تحلیل قرارداد</span><span>هشدار موعد</span><span>پیشنهاد اقدام</span></div></div>
          <div className="botStats"><div><b>۲۴/۷</b><span>پاسخ‌گویی پویا</span></div><div><b>داخل سازمان</b><span>مالکیت کامل داده</span></div><div><b>FA</b><span>زبان تخصصی حقوق</span></div></div>
        </div>
      </div>
    </section>

    <section className="trust smartTrust"><div className="wrap trustIn"><span>تجربه همکاری با ساختارهای بزرگ و چندلایه</span><div><b>شهرداری‌ها</b><b>وزارتخانه‌ها</b><b>صنایع ملی</b><b>بانک‌ها</b><b>اپراتورها</b></div></div></section>

    <section id="raybot" className="section raybotSection">
      <div className="wrap">
        <header className="sectionHead raybotHead"><div><span className="eyebrow">محصول محوری هوش مصنوعی بارای</span><h2>رای‌بات؛ دستیار هوشمند حقوقی<br/>سازمان‌ها و ارگان‌ها</h2></div><p>رای‌بات یک هویت هوشمند مبتنی بر داده‌های سازمان شما می‌سازد؛ بدون آن‌که اطلاعات محرمانه برای استفاده از هوش مصنوعی از سازمان خارج شوند.</p></header>
        <div className="raybotIntro">
          <p>ما در <strong>رای‌بات</strong> به دنبال ایجاد یک هویت هوشمند مبتنی بر داده‌های سازمان یا ارگان شما هستیم. دستیار هوشمند بارای پلاس به مدیران و کارشناسان سازمان‌ها کمک می‌کند تا بدون نیاز به انتقال داده‌ها و اطلاعات سازمان خود به بیرون از سازمان، از دستیار هوشمند حقوقی مبتنی بر حقوق قضایی ایران به‌صورت پویا بهره‌برداری کنند.</p>
          <div className="raybotPillars"><span><b>۰۱</b>فهم داده سازمانی</span><span><b>۰۲</b>تحلیل حقوقی پویا</span><span><b>۰۳</b>پاسخ با زبان انسانی</span></div>
        </div>
        <div className="raybotStories">
          <article className="rayStory legalVoice"><span className="storyLabel">رای‌بات حقوقی</span><h3>صدای هوش در دنیای قانون</h3><strong>از پرسش تا پاسخ، از داده تا تصمیم؛ همه در یک گفت‌وگوی هوشمند.</strong><p>قانون در عصر جدید فقط ماده و تبصره نیست؛ جریانی از داده‌ها، استدلال‌ها و تصمیم‌هاست. در این میان، رای‌بات حقوقی متولد شد تا صدای فهم حقوقی نوین باشد؛ ذهنی هوشمند که می‌فهمد، می‌آموزد و پاسخ می‌دهد. او پلی است میان انسان و قانون، میان پرسش و راه‌حل، میان ضابطه و معنا. رای‌بات حقوقی عقل روشن نظام حقوقی است، اما با زبانی انسانی و روشن سخن می‌گوید.</p></article>
          <article className="rayStory cityVoice"><span className="storyLabel">رای‌بات شهری</span><h3>صدای شهر در دنیای داده‌ها</h3><strong>ذهنی که می‌فهمد، می‌آموزد و پاسخ می‌دهد؛ پلی میان انسان و قانون، میان تصمیم و معنا.</strong><p>شهر در عصر جدید فقط خیابان و ساختمان نیست؛ شبکه‌ای از داده‌ها، تصمیم‌ها، احساسات و حرکت‌هاست. در این میان رای‌بات متولد شد تا صدای این شهر باشد؛ ذهنی که می‌فهمد، می‌آموزد و پاسخ می‌دهد. رای‌بات پلی است میان انسان و شهر، میان پرسش و تصمیم، میان ضابطه و معنا. او عقل شهر است، اما به زبان انسان سخن می‌گوید.</p></article>
        </div>
      </div>
    </section>

    <section id="ai-solutions" className="section soft">
      <div className="wrap">
        <header className="sectionHead"><div><span className="eyebrow">سبد راهکارهای هوشمند</span><h2>هوش مصنوعی، در نقطه واقعی کار حقوقی</h2></div><p>هر قابلیت برای حل یک مسئله مشخص طراحی شده است؛ از فهم سند و قانون تا کنترل قرارداد و پیش‌بینی ریسک.</p></header>
        <div className="smartGrid">{smartSolutions.map(item=><article className="smartCard" key={item.number}><div><span>{item.number}</span><small>{item.tag}</small></div><h3>{item.title}</h3><p>{item.description}</p>{item.number==="۰۱"?<a href="#contracts">جزئیات سامانه قراردادها ←</a>:item.number==="۰۵"?<Link href="/products/legal-management">مشاهده سامانه ←</Link>:null}</article>)}</div>
      </div>
    </section>

    <section id="contracts" className="section contractSection">
      <div className="wrap contractGrid">
        <div><span className="eyebrow light">سامانه هوشمند مدیریت قراردادها</span><h2>از ثبت قرارداد تا هشدار پیش از ریسک</h2><p>یک سیستم تخصصی برای ثبت، بررسی، پایش و یادآوری موعدهای مهم قرارداد. هوش مصنوعی بندهای حساس را شناسایی کرده و هشدارهای لازم برای جلوگیری از اختلافات ارائه می‌دهد.</p><Link className="button mint" href="#demo">درخواست معرفی سامانه</Link></div>
        <div className="contractPanel">{contractFeatures.map((item,index)=><div key={item}><b>{String(index+1).padStart(2,"0")}</b><span>{item}</span><i>✓</i></div>)}</div>
      </div>
    </section>

    <section className="section ocrSection">
      <div className="wrap ocrGrid">
        <div className="ocrVisual" aria-label="نمای تبدیل سند اسکن‌شده به داده قابل جست‌وجو"><div className="paperScan"><span>سند حقوقی اسکن‌شده</span><i/><i/><i/><i/><b>OCR</b></div><div className="dataExtract"><span>متن قابل جست‌وجو</span><b>تعهدات</b><b>تاریخ‌ها</b><b>اشخاص</b><b>مبالغ</b></div></div>
        <div><span className="eyebrow">نویسه‌خوان فارسی OCR</span><h2>هر سند، به داده‌ای قابل جست‌وجو و تحلیل تبدیل می‌شود</h2><p>نویسه‌خوان فارسی OCR در سامانه‌های حقوقی نقش مهمی در تسهیل و خودکارسازی فرآیندهای پردازش اسناد دارد. با استفاده از این فناوری، اسناد حقوقی چاپی یا اسکن‌شده به متن دیجیتال تبدیل می‌شوند تا اطلاعات موجود در آن‌ها به‌سرعت جست‌وجو، دسته‌بندی و تحلیل شوند.</p><p>این قابلیت به وکلا، کارشناسان حقوقی و سازمان‌ها کمک می‌کند اسناد حجیم را آسان‌تر مدیریت کنند و زمان بررسی پرونده‌ها و قراردادها را به‌طور چشمگیری کاهش دهند. دقت بالای OCR فارسی در تشخیص متون حقوقی نیز به بهبود تصمیم‌گیری و کاهش خطاهای انسانی منجر می‌شود.</p></div>
      </div>
    </section>

    <section id="customers" className="section customersSection">
      <div className="wrap">
        <header className="sectionHead"><div><span className="eyebrow">اعتماد سازمانی</span><h2>برخی از مشتریان رایان بارای</h2></div><p>تجربه بارای از مدیریت شهری تا وزارتخانه، بانک، صنعت و ارتباطات امتداد دارد.</p></header>
        <div className="customerGrid">{customers.map(customer=><article className={`customerCard ${customer.className||""}`} key={customer.name}><div><img src={assetUrl(customer.logo)} width="220" height="150" loading="lazy" alt={`لوگوی ${customer.name}`}/></div><h3>{customer.name}</h3></article>)}</div>
      </div>
    </section>

    <section className="section newsSection">
      <div className="wrap">
        <header className="sectionHead"><div><span className="eyebrow">آخرین مطالب</span><h2>تازه‌های حقوق، داده و فناوری</h2></div><Link className="textLink" href="/news">همه اخبار و مقالات ←</Link></header>
        <div className="newsGrid">{articles.slice(0,3).map(article=><NewsCard key={article.slug} a={article}/>)}</div>
      </div>
    </section>

    <section id="demo" className="demo">
      <div className="wrap demoIn"><div><span className="eyebrow light">جلسه معرفی تخصصی</span><h2>مسئله حقوقی سازمان شما، نقطه شروع طراحی راهکار است.</h2><p>در یک جلسه کوتاه، فرآیندهای فعلی، زیرساخت داده و سناریوی مناسب استقرار رای‌بات و سامانه‌های بارای را مرور می‌کنیم.</p></div><form><label>نام و نام خانوادگی<input required placeholder="نام شما"/></label><label>نام سازمان<input required placeholder="سازمان یا شرکت"/></label><label>شماره تماس<input required inputMode="tel" placeholder="۰۹۱۲..."/></label><button className="button" type="submit">درخواست تماس ←</button><small>ارسال نهایی فرم پس از اتصال به CRM سازمان فعال می‌شود.</small></form></div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)}/>
  </>;
}
