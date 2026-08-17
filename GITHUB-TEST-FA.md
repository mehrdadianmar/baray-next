# راه‌اندازی نسخه آزمایشی در mehrdadianmar/baray-next

این بسته فقط برای تست روی نشانی زیر تنظیم شده است:

`https://mehrdadianmar.github.io/baray-next/`

## بارگذاری

محتویات ZIP را استخراج کنید و همه فایل‌ها را مستقیماً در ریشه شاخه `main` مخزن `baray-next` قرار دهید. فایل ZIP یا پوشه والد را داخل مخزن بارگذاری نکنید.

```bash
git add .
git commit -m "Add WordPress-connected GitHub test site"
git push origin main
```

## فعال‌سازی Pages

در GitHub وارد `Settings → Pages` شوید و Source را روی `GitHub Actions` قرار دهید. سپس در تب Actions اجرای `Test Baray Website` را بررسی کنید.

## آزمون خبر

1. در وردپرس فعلی یک نوشته با تصویر شاخص منتشر کنید.
2. در مخزن وارد `Actions → Test Baray Website` شوید.
3. گزینه `Run workflow` را اجرا کنید.
4. پس از موفقیت، صفحه `/baray-next/news/` و صفحه مستقل خبر را بررسی کنید.
5. نوشته را Draft کنید، Workflow را دوباره اجرا کنید و حذف آن از نسخه آزمایشی را کنترل کنید.

## ایمنی SEO

نسخه GitHub با Meta Robots برابر `noindex, nofollow` و فایل Robots مسدودکننده ساخته می‌شود. این تنظیم فقط آزمایشی است و نباید به نسخه دامنه اصلی منتقل شود.

## بازگشت به دامنه اصلی

برای انتشار روی `baray.ir` از بسته `baray-next-wordpress-final-v7.zip` استفاده کنید، نه این بسته GitHub. نسخه اصلی فاقد `/baray-next` و دارای تنظیمات قابل ایندکس است.
