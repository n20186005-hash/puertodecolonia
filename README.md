# Puerto de Colonia — sitio Astro

Sitio de una sola página en español (Uruguay) para Puerto de Colonia / Terminal Fluviomarítima de Pasajeros de Colonia (ANP).

## Stack fijado

- Astro 7.3.1
- Tailwind CSS 4.3.3 + @tailwindcss/vite 4.3.3
- TypeScript 6.0.3
- @astrojs/check 0.9.10
- @astrojs/sitemap 3.7.4
- Wrangler 4.129.0
- pnpm 12.3.4
- Node.js 24.20.0 LTS

## Dominio: un solo lugar

Editar únicamente `astro.config.mjs`:

```js
const site = '';
```

Cuando exista el dominio, reemplazá únicamente el valor vacío de `site` por la URL pública definitiva.

Canonical, `og:url`, imagen social absoluta, URL de JSON-LD y sitemap se derivan de `Astro.site`. Si `site` queda vacío, el build sigue funcionando y `@astrojs/sitemap` no se activa.

## Desarrollo

```bash
corepack enable
pnpm install
pnpm check
pnpm build
```

## Cloudflare Workers

El proyecto es estático y se despliega como Static Assets en Cloudflare Workers mediante Wrangler:

```bash
pnpm deploy
```

No usa base de datos, login ni CMS.

## GA4 y cookies

GA4 `G-HXM22WWPKP` se carga sólo después del consentimiento del visitante. El mapa de Google se incrusta en español / Uruguay.

## Fotografías

Las fotos usadas son fotografías reales de Wikimedia Commons y se acreditan en el pie de página. En esta copia del proyecto se referencian desde Wikimedia; sus licencias son:

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
