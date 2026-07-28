# camping-village-docs

Benutzerdokumentation zur **Camping Village 2026**-App, als MkDocs-Material-Site.

📖 <https://ch3ddr.github.io/camping-village-docs/>

## Lokal bauen

```bash
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/mkdocs serve
```

Ein Push auf `main` baut und veröffentlicht automatisch
(`.github/workflows/deploy.yml`).

## Aufbau

```
docs/
├─ index.md, erste-schritte.md, ueberblick.md   Einstieg
├─ felder.md, karte.md, lineup.md, mein-plan.md Die vier Tabs
├─ filter-und-suche.md, hilfe.md                Querschnitt
└─ assets/shots/                                Screenshots & Clips
```

## Screenshots erneuern

Die Aufnahmen entstehen automatisiert aus dem App-Repo heraus, gegen das echte
Backend, auf einem deutschsprachigen iPhone-17-Pro-Max-Simulator:

```bash
cd ../camping-village/app

SHOT_DIR=../../camping-village-docs/docs/assets/shots \
SHOT_DEVICE=<simulator-udid> \
flutter drive \
  --driver=test_driver/docs_shots_driver.dart \
  --target=integration_test/docs_shots_test.dart \
  -d <simulator-udid>
```

Danach mit `sips -Z 720 docs/assets/shots/*.png` auf Web-Größe bringen.

**Pro Max, nicht Pro:** auf dem schmaleren Gerät überlaufen die Genre-Chips der
Feld-Karten um ein bis zwei Pixel, und ein Debug-Build malt dann rote
Overflow-Banner über jedes Bild (camping-village#59).

**Grenzen:** Karten-Gesten und bewegte Clips lassen sich so nicht aufnehmen —
die Karte ist eine WebView, und der Geräteschirm folgt unter laufendem
Integrationstest dem Widget-Baum nicht. Beides muss von Hand gefilmt werden.
Details stehen in den Kopfkommentaren der beiden Dateien.
