# Jika npm gagal di Windows

Pastikan terminal berada di folder yang berisi `package.json`.

PowerShell:

```powershell
npm.cmd cache verify
npm.cmd ci --no-audit --no-fund
npm.cmd run dev
```

Command Prompt:

```cmd
npm cache verify
npm ci --no-audit --no-fund
npm run dev
```

Proyek ini memakai registry publik resmi npm melalui file `.npmrc`.
