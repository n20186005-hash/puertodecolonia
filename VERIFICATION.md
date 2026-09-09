# Verificación de entrega

## Comprobaciones realizadas en este entorno

- `pnpm install --offline` (store en caché, 310 paquetes; `nodeLinker: hoisted` por symlinks no trazables en Windows).
- `pnpm build` → OK, 1 página estática + `sitemap-index.xml` en `dist`.
- `pnpm exec astro check` → **0 errores, 0 warnings, 0 hints**.
- `read_lints` sobre `src/pages/index.astro` → 0 errores.

## Verificación de la salida (`dist/index.html`)

- 3 bloques JSON-LD parseables:
  - `TouristAttraction` + `CivicStructure` con `@id https://puertodecolonia.com/#attraction`, `image` absoluta, `isAccessibleForFree`, NAP, `geo`, `hasMap`, `openingHoursSpecification`, `aggregateRating` (4.2 / 20.979) y `sameAs`.
  - `FAQPage` (8 preguntas).
  - Grafo `Organization` / `WebSite` / `WebPage` (3 nodos).
- TDK con nombre completo + ciudad; `description` oficial; canonical = `https://puertodecolonia.com/`.
- `og:image` = `https://puertodecolonia.com/photos/puerto-terminal-exterior.jpg` + `og:image:alt`/width/height.
- H1 con línea oficial **Terminal Fluviomarítima Colonia (ANP) · Colonia del Sacramento, Uruguay**; migas de pan *Inicio › Uruguay › Departamento de Colonia › Colonia del Sacramento › Puerto de Colonia*.
- Fotografías locales (`/photos/*.jpg`) con `alt` semántico; **cero hotlinks a Wikimedia** en el HTML generado.
- Mapa con el embed oficial `pb=…!4v1788749482937…`; enlaces a ANP, `gub.uy`, `colonia.gub.uy`, UNESCO y Google Maps.
- PWA: `manifest.webmanifest` (name oficial, `theme_color #174d5d`, 5 iconos), `sw.js` registrado, `icons/icon-192.png`, `icons/icon-512.png`, `icons/icon.svg`.
- GA4 `G-HXM22WWPKP` con consentimiento; sin cadenas de dominio de ejemplo ni hosts locales.
- Pie con NAP completo (nombre oficial + dirección + teléfono + Plus Code) y declaración de propiedad de las fotografías.

## Notas del entorno

- `pnpm-workspace.yaml` fija `nodeLinker: hoisted` y la allowlist de scripts de `esbuild`/`workerd` (requerido por pnpm 12 en esta máquina).
- La resolución de dependencias se hizo offline desde el store de pnpm; no se modificó la red ni se descargaron dependencias nuevas.
- `dist/` no se sube al repositorio (ver `.gitignore`).
