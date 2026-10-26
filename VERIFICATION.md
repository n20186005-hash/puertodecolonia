# Verificación local

Comandos con Node 24.20.0 y pnpm 12.3.4, conservando versiones, archivo de bloqueo y política de scripts existentes:

```sh
npm run check
npm run build
npx wrangler deploy --dry-run
```

La construcción genera el inicio, cuatro páginas informativas y un error noindex. El Worker de origen ejecuta la normalización de protocolo/host antes de los recursos estáticos y preserva los parámetros de consulta. Las elecciones de analítica se verifican al guardar y la retirada desactiva el runtime antes de intentar persistir.

Una comprobación local no demuestra publicación, estado del servicio de un tercero, carga visual en navegador ni funcionamiento de producción. Esas verificaciones se realizan por separado para la versión publicada. Los registros y datos privados de diagnóstico se mantienen fuera del repositorio.
