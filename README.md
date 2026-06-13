# Backend Portfolio Starter

Website portofolio bilingual untuk pemula yang fokus belajar **Python backend development**.

## Fitur

- Next.js App Router
- JavaScript
- Tailwind CSS
- Motion for React
- Dark dan light mode
- Bahasa Indonesia dan Inggris
- Animasi hero, scroll reveal, hover, dan aliran API
- Halaman studi kasus proyek
- Responsive untuk desktop dan mobile
- Endpoint demo `GET /api/health`
- Form kontak berbasis aplikasi email perangkat
- Siap dipublish ke Vercel

## Persyaratan

- Node.js minimal 20.9
- npm
- Git
- VS Code

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka:

```text
http://localhost:3000
```

## Pemeriksaan sebelum publish

```bash
npm run lint
npm run build
```

## Struktur penting

```text
messages/
├── id.json
└── en.json

src/
├── app/
│   ├── [locale]/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── projects/[slug]/page.js
│   ├── api/health/route.js
│   └── globals.css
├── components/
│   ├── animation/
│   ├── layout/
│   ├── providers/
│   ├── sections/
│   └── ui/
├── data/
│   ├── journey.js
│   ├── projects.js
│   ├── site.js
│   └── skills.js
├── i18n/
│   ├── navigation.js
│   ├── request.js
│   └── routing.js
└── proxy.js
```

## File yang pertama kali perlu diedit

1. `src/data/site.js` — identitas, email, GitHub, LinkedIn, CV.
2. `src/data/projects.js` — data proyek backend.
3. `src/data/skills.js` — kemampuan yang benar-benar dimiliki.
4. `messages/id.json` — teks bahasa Indonesia.
5. `messages/en.json` — teks bahasa Inggris.
6. `src/app/[locale]/layout.js` — ganti `https://example.com`.

Panduan lebih lengkap tersedia di:

- `CUSTOMIZE-ME.md`
- `INSTALL-WINDOWS.md`

## Catatan form kontak

Form kontak tidak mengirim data ke server. Saat dikirim, website membuka aplikasi email pengguna. Ini sengaja dibuat supaya versi awal tidak membutuhkan database, API key, atau layanan email.

Tahap berikutnya dapat menghubungkan form tersebut dengan FastAPI.

## Perintah tersedia

```bash
npm run dev      # development
npm run lint     # pemeriksaan ESLint
npm run build    # production build
npm run start    # menjalankan hasil build
```
