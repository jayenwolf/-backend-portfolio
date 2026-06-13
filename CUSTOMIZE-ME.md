# Checklist yang wajib diganti sebelum publish

## 1. Identitas utama
Buka `src/data/site.js`, lalu ganti:
- `name`
- `initials`
- `email`
- `location`
- `github`
- `linkedin`
- `cvUrl`

## 2. Judul dan deskripsi website
Buka:
- `messages/id.json` → bagian `Metadata`
- `messages/en.json` → bagian `Metadata`

Ganti `Nama Kamu` dan `Your Name` dengan nama asli.

Kemudian buka `src/app/[locale]/layout.js` dan ganti:

```js
metadataBase: new URL("https://example.com")
```

menjadi domain Vercel atau domain pribadi Anda.

Ganti URL yang sama di:
- `src/app/robots.js`
- `src/app/sitemap.js`

## 3. Proyek
Buka `src/data/projects.js`.

Untuk setiap proyek, ubah:
- judul
- ringkasan
- masalah
- solusi
- fitur
- hal yang dipelajari
- stack
- `githubUrl`
- `demoUrl`

Hapus proyek contoh yang tidak sesuai dengan pengalaman Anda.

## 4. Skills
Buka `src/data/skills.js`.
Hapus teknologi yang belum pernah digunakan dan tambahkan yang benar-benar dikuasai atau sedang dipelajari.

## 5. Learning journey
Buka `messages/id.json` dan `messages/en.json`, lalu cari bagian `Journey`.
Sesuaikan isi perjalanan belajar dengan pengalaman nyata.

## 6. CV
Masukkan PDF ke `public/cv/`, misalnya:

```text
public/cv/cv-budi.pdf
```

Kemudian ubah di `src/data/site.js`:

```js
cvUrl: "/cv/cv-budi.pdf"
```

## 7. Favicon
File awal ada di `src/app/icon.svg`.
Anda dapat mengganti huruf atau desainnya.

## 8. Tes terakhir
Jalankan:

```bash
npm run lint
npm run build
```

Pastikan tidak ada error sebelum publish.
