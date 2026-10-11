# Free IRAN Landing v2

نسخه بازسازی‌شده از صفر — خالص HTML/CSS/JS.

## چرا بازسازی شد؟

نسخه قبلی (Next.js) صفحه سفید نشان می‌داد. علل:

1. **React Three Fiber** — خطای WebGL کل درخت React را از کار می‌انداخت
2. **basePath/assetPrefix** — مسیرهای `_next/` درست resolve نمی‌شدند
3. **Client-side rendering** — با یک خطای JS، هیچ محتوایی نمایش داده نمی‌شد

## راه‌حل

- همه محتوا داخل HTML است (بدون JS هم صفحه کامل نمایش داده می‌شود)
- JS فقط enhancement است (reveal، شمارنده، پارالاکس)
- مسیرهای نسبی (`./style.css`) — بدون basePath
- بدون هیچ dependency خارجی

## فایل‌ها

- `index.html` — صفحه اصلی
- `style.css` — استایل
- `script.js` — تعامل (اختیاری)
- `404.html` — صفحه خطا
- `README.md` — همین فایل

## دیپلوی

فایل‌ها را در ریپو آپلود کنید. همین.
