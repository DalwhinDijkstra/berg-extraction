# B.E.R.G. - Infra & Scripts

## Lokale Entwicklung

```bash
# PATH setzen (immer zuerst)
export PATH="$HOME/Desktop/104LABS/_tools/node/bin:$PATH"

# Dev server
cd ~/Desktop/berg-extraction && npm run dev

# Build testen
npm run build && npm run preview
```

## Deploy

Automatisch uber Vercel bei Push auf `main`.

```bash
git push origin main
```

Vercel verbinden: vercel.com/DalwhinDijkstra/berg-extraction

## Haufige Probleme

| Symptom | Ursache | Losung |
|---------|---------|--------|
| `node: No such file or directory` | PATH nicht gesetzt | `export PATH="$HOME/Desktop/104LABS/_tools/node/bin:$PATH"` |
| Framer Motion SSR Error | React component ohne `client:` directive | `client:load` oder `client:visible` hinzufugen |
| Tailwind Klassen greifen nicht | v4 Syntax | `@import "tailwindcss"` in global.css, kein tailwind.config.js |
