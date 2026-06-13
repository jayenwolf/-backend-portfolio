# Panduan instalasi untuk Windows

## Yang perlu dipasang

1. **Node.js LTS** — minimal versi 20.9.
2. **Visual Studio Code**.
3. **Git**.
4. Browser modern seperti Chrome, Edge, atau Firefox.
5. Akun GitHub dan Vercel untuk publish.

## Extension VS Code yang disarankan

- ESLint
- Tailwind CSS IntelliSense
- Prettier - Code formatter (opsional)
- Error Lens (opsional)

## Menjalankan website

1. Ekstrak ZIP.
2. Buka folder hasil ekstrak di VS Code.
3. Buka menu **Terminal → New Terminal**.
4. Jalankan:

```bash
npm install
npm run dev
```

5. Buka `http://localhost:3000`.

Website akan otomatis diarahkan ke `/id`.
Versi Inggris tersedia di `/en`.

## Menghentikan server

Tekan:

```text
Ctrl + C
```

## Bila PowerShell menolak menjalankan npm

Buka PowerShell sebagai Administrator, kemudian jalankan:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Tutup terminal, buka kembali VS Code, lalu coba `npm install` lagi.

## Publish ke Vercel

1. Buat repository baru di GitHub.
2. Jalankan perintah berikut dari folder proyek:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin URL_REPOSITORY_GITHUB
git push -u origin main
```

3. Masuk ke Vercel.
4. Pilih **Add New → Project**.
5. Import repository GitHub tadi.
6. Klik **Deploy**.

Tidak ada environment variable yang diperlukan untuk versi awal.
