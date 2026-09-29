# Puerto de Colonia — sitio Astro

Sitio de una sola página en español (Uruguay) para **Puerto de Colonia / Terminal Fluviomarítima Colonia (ANP)**, la terminal fluvio-marítima de Colonia del Sacramento.

## Stack fijado

- Astro 7.3.1
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 6.0.3
- @astrojs/check 0.9.10
- @astrojs/sitemap 3.7.4
- Wrangler 4.129.0
- pnpm 12.3.4
- Node.js 24 LTS

## Dominio: un solo lugar

Dominio público: **https://puertodecolonia.com**

Se configura únicamente en `astro.config.mjs` (`const site = 'https://puertodecolonia.com'`). Canonical, `og:url`, imagen social absoluta, URL de JSON-LD y sitemap se derivan de `Astro.site`. `@astrojs/sitemap` genera `sitemap-index.xml` + `sitemap-0.xml`; `public/robots.txt` apunta al índice.

## Desarrollo

```bash
pnpm install
pnpm check      # astro check
pnpm build
```

> Entorno Windows: `pnpm-workspace.yaml` fija `nodeLinker: hoisted` (los symlinks de pnpm no son trazables en esta máquina) y autoriza los scripts de `esbuild`/`workerd`.

## Cloudflare Workers

El proyecto es estático y se despliega como Static Assets en Cloudflare Workers mediante Wrangler:

```bash
pnpm deploy
```

No usa base de datos, login ni CMS.

### Canonicalización del dominio (http/https y www/apex)

Search Console registra cuatro variantes (`http://www…`, `https://www…`, `http://apex`, `https://apex`). Los Static Assets de Workers **no** admiten reglas de redirección a nivel de dominio, así que se resuelven en el panel de Cloudflare:

1. **SSL/TLS › Edge certificates → Always Use HTTPS**: ON (301 de `http://` a `https://`).
2. **Rules › Redirect Rules → nueva regla**:
   - Expresión: `hostname eq "www.puertodecolonia.com"`.
   - Acción: *Dynamic redirect* 301 a `concat("https://puertodecolonia.com", http.request.uri.query)` → `https://puertodecolonia.com<ruta>`.

`public/_headers` envía HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y caché para fotos/iconos. `public/_redirects` sólo lleva reglas de ruta (`/index.html` → `/`), porque las de dominio no aplican en este formato.

## SEO — vinculación de entidad

- TDK orientado a intención de búsqueda (*horarios*, *terminal de ferry*, *servicios*, *cómo llegar*): title = *Puerto de Colonia · Terminal de ferry y horarios | Colonia del Sacramento*; `description` con **horario de atención + servicios + ferries a Buenos Aires + mapa** (objetivo: subir el CTR, actualmente ~1,3 % con ranking medio ~8). `og:image` absoluto = `/photos/puerto-terminal-exterior.jpg` (1280×905) + alt.
- Secciones que responden las consultas reales de Search Console: `#horarios` (horario de atención, hora de presentación, navieras Colonia Express y Buquebus) y `#servicios` (boleterías, migraciones, aduana, espera, accesibilidad, preembarque, cruceros).
- JSON-LD en `index.astro`:
  - `TouristAttraction` + `TransitStation` (`terminal de ferry`) con `@id …/#attraction`, `alternateName` (Terminal Fluviomarítima Colonia (ANP), Terminal Puerto Colonia), `image`, `isAccessibleForFree`, NAP completo, `geo`, `hasMap`, `openingHoursSpecification`, `publicAccess`, `aggregateRating` (4.2 / 21.019) y `sameAs` (ANP, Google Maps, navieras).
  - `FAQPage` (17 preguntas, todas visibles en la página).
  - Grafo `Organization` / `WebSite` / `WebPage`.
- H1 = *Puerto de Colonia* + línea oficial **Terminal Fluviomarítima Colonia (ANP) · Colonia del Sacramento, Uruguay**; migas de pan visibles *Inicio › Uruguay › Departamento de Colonia › Colonia del Sacramento › Puerto de Colonia*.
- Fotografías con `alt` semántico (nombre completo + ciudad); créditos y declaración de propiedad de los fotógrafos en el pie.
- Bloque *Fuentes verificadas* con ANP, UNESCO y portales oficiales del Estado (`gub.uy`, Intendencia de Colonia).
- PWA: `manifest.webmanifest`, `sw.js` (network-first con respaldo offline a `/`), iconos 180/192/512 + SVG en `public/icons`.
- GA4 `G-HXM22WWPKP` con consentimiento (localStorage `puerto-colonia-analytics-consent`); el mapa embebido usa el iframe oficial de Google Maps provisto.

## Datos de la entidad (Google Maps)

- Nombre: Puerto de Colonia · Terminal Fluviomarítima Colonia (ANP) — *Cruise terminal*.
- Calificación 4.2 / 5 (21.019 reseñas, actualizado el 29 de septiembre de 2026).
- Dirección: Av. Roosevelt y Rivera, 70000 Colonia del Sacramento, Departamento de Colonia, Uruguay · Plus Code G5G4+FF.
- Teléfono: +598 4522 2140 · Mapa: https://maps.app.goo.gl/TeFfiSiPREgkBZDj6

## Fotografías

Las 4 fotos se sirven localmente desde `public/photos/` (compiladas como activos estáticos) y se acreditan en el pie con su licencia. Son fotografías reales de Wikimedia Commons:

- Puerto de Colonia — Andrés Franchi Ugart… — CC BY-SA 3.0
- Ferry Terminal in Colonia — Liam Quinn — CC BY-SA 2.0
- Interior de la terminal portuaria de Colonia — Mapep — CC BY-SA 4.0
- Barco, colonia — Gonzalo Bidarth — CC BY-SA 4.0

Ver `PHOTO_SOURCES.md` para URLs de origen.

## Fuentes de contenido principales

- Administración Nacional de Puertos (ANP): ficha oficial del Puerto de Colonia e infraestructura portuaria.
- Colonia Express: referencia pública de horario de atención de su terminal en Colonia.
- UNESCO: contexto del Barrio Histórico de Colonia del Sacramento.
- Wikimedia Commons: fotografías y licencias.

El sitio es informativo e independiente; no suplanta fuentes oficiales ni publica precios de ferry que puedan quedar desactualizados.
