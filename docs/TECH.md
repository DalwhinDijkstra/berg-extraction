# B.E.R.G. - Tech Stack

## Stack

| Bereich | Wahl |
|---------|------|
| Framework | Astro 5 |
| React | Islands Architecture (client:load / client:visible) |
| Styling | Tailwind CSS v4 + CSS Custom Properties |
| Animationen | Framer Motion 11 |
| Fonts | Google Fonts (Barlow Condensed) |
| Deploy | Vercel (Static) |
| Node | ~/Desktop/104LABS/_tools/node/bin |

## Verzeichnisstruktur

```
berg-extraction/
  src/
    components/     # React Komponenten (21st.dev Effekte)
    lib/            # utils.ts (cn helper)
    pages/          # index.astro
    styles/         # global.css
  docs/             # Framework-Dokumentation
  public/           # Statische Assets
  CLAUDE.md         # Master Rules
  astro.config.mjs
  package.json
```

## Node PATH

```bash
export PATH="$HOME/Desktop/104LABS/_tools/node/bin:$PATH"
```

## Dev Server

```bash
export PATH="$HOME/Desktop/104LABS/_tools/node/bin:$PATH"
npm run dev
```

## Build

```bash
export PATH="$HOME/Desktop/104LABS/_tools/node/bin:$PATH"
npm run build
```

## Git-Konventionen

| Typ | Format |
|-----|--------|
| Feature | `feat/T-XXX-kurzbeschreibung` |
| Fix | `fix/T-XXX-kurzbeschreibung` |
| Commit | `[T-XXX] typ: was wurde gemacht` |
