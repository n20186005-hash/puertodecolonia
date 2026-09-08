# Verificación de entrega

## Comprobaciones estáticas realizadas

- Proyecto de una sola página: `src/pages/index.astro`.
- No existe `pnpm-workspace.yaml`.
- `package.json` fija versiones exactas y `packageManager`.
- Node objetivo fijado en `.node-version` y `engines`.
- `site` se configura únicamente en `astro.config.mjs` y puede permanecer vacío.
- `@astrojs/sitemap` sólo se activa cuando `site` tiene valor.
- Canonical, Open Graph y URL de JSON-LD se omiten cuando no existe `Astro.site`.
- El iframe de Google Maps utiliza español y región Uruguay.
- Logo y favicon comparten símbolo, paleta y lenguaje visual; se incluyen SVG, 16×16, 32×32 y 180×180.
- GA4 se carga sólo después del consentimiento.
- No se encontraron cadenas de dominio de ejemplo, host local ni esquemas de extensión de navegador en el código fuente.

## Verificación que no pudo completarse en este entorno

La ejecución solicitada de `CI=1 corepack pnpm install --frozen-lockfile` no pudo superar la descarga de pnpm porque el entorno de ejecución no tiene resolución DNS/salida a `registry.npmjs.org` (`EAI_AGAIN`). Por el mismo bloqueo de red no fue posible descargar al ZIP las fotografías reales desde Wikimedia Commons.

Como consecuencia, en esta copia no se generó `pnpm-lock.yaml` ni se pudo ejecutar honestamente `pnpm check` / `pnpm build`. Las fotografías reales permanecen referenciadas por URL y sus fuentes/licencias se documentan en `PHOTO_SOURCES.md`.

No se declara como “aprobado” ningún paso que no se haya ejecutado.
