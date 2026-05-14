# CLAUDE.md - B.E.R.G. Master Rules

> Diese Datei ist die absolute Autoritat fur alle Agenten. Komplett lesen vor jeder Aktion.

## §0 PROJEKT-MODUS

| Feld | Wert |
|------|------|
| Modus | SINGLE-SITE |
| Projektname | B.E.R.G. - Bavaria Extraction & Recovery Group |
| Live-URL | https://berg-extraction.vercel.app |
| Lokal | ~/Desktop/berg-extraction/ |
| Repo | DalwhinDijkstra/berg-extraction |
| Deploy | Vercel (auto bei push auf main) |

## §0c KERN-ENTSCHEIDUNGEN

| Bereich | Entscheidung |
|---------|--------------|
| Framework | Astro 5 |
| DB | keine |
| Auth | keine |
| Deploy | Vercel |
| Styling | Tailwind CSS v4 + Custom CSS Variablen |
| Icons | Emoji (kein Icon-Set) |
| Fonts | Barlow Condensed (Google Fonts) |
| Animationen | Framer Motion + CSS Animations |
| Komponenten | 21st.dev Effekte (React Islands in Astro) |

## §0d KEINE RÜCKFRAGEN WENN DOCS DIE ANTWORT GEBEN

Direkt handeln wenn dokumentiert. Fragen nur bei echter Ambiguitat.

## §1 SESSION-START

```bash
cd ~/Desktop/berg-extraction
git pull
export PATH="$HOME/Desktop/104LABS/_tools/node/bin:$PATH"
npm run build 2>&1 | tail -10
```

## §4c WORKTREE-PFLICHT

Hauptverzeichnis bleibt IMMER auf main. Jeder Feature-Branch = eigener Worktree.

## §5a TOKEN-EFFIZIENZ

Keine langen Erklarungen. Tabellen statt Prosa. Erst lesen dann schreiben.

## §6 ARBEITSWEISE

- Erklaren vor Handeln
- Kreativitat bei Design
- Optionen vor Redesign
- Widersprechen ist Pflicht

## §7 CI-REGELN

Siehe docs/CI.md. Farben, Fonts, Komponenten ausschliesslich aus CI-Definitionen.

## §9 PFLICHT-LEKTÜRE JE AUFGABENTYP

| Aufgabe | Zu lesen |
|---------|----------|
| UI-Arbeit | docs/CI.md, docs/DESIGN-PATTERNS.md |
| Neue Sektion | docs/APPS.md + docs/CI.md |
| Infra/Deploy | docs/INFRA.md |
