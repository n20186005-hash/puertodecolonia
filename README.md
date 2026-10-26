# Puerto de Colonia — guía independiente

Guía en español de Uruguay para la Terminal Fluviomarítima Colonia (ANP). Es un proyecto independiente, no oficial y sin fines de lucro para educación turística; no vende pasajes ni representa a las autoridades o navieras.

Astro 7.3.1 genera páginas estáticas con Tailwind 4.3.3 y TypeScript 6.0.3. Se conservan Node 24.20.0, pnpm 12.3.4 y las dependencias exactas del archivo de bloqueo. `pnpm-workspace.yaml` conserva el enlazado hoisted y los permisos existentes de esbuild/workerd.

```sh
pnpm install --frozen-lockfile
npm run check
npm run build
npx wrangler deploy --dry-run
```

El proyecto existente de Workers es `puertodecolonia`. El Worker de `src/worker.js` se ejecuta antes de Static Assets: normaliza los hosts configurados a HTTPS apex, conserva ruta y parámetros y entrega errores reales 404 sin cuerpo para HEAD. No hay base de datos, cuentas ni API de clima.

Rutas: `/`, `/privacidad/`, `/cookies/`, `/terminos/`, `/creditos/`; página de error `404.html`. La elección de analítica existente se controla desde `/cookies/`. La información portuaria distingue ANP, las navieras y el puerto deportivo. Las fuentes y sus fechas se muestran en el sitio; horarios y condiciones de viaje deben confirmarse con el prestador.

Las cuatro fotografías históricas se conservan con licencias individuales, enlaces de fuente y avisos de modificación en `/creditos/`. No acreditan buques o instalaciones actuales.
