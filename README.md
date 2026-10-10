# SKYNET // Azure Security & Governance Ops

Dashboard web futurista orientado a **Cloud Security, seguridad de Azure, gobernanza, DevSecOps y observabilidad**. Preparado para el repositorio [`rodrodbeat-stack/Seguridad-Governanza`](https://github.com/rodrodbeat-stack/Seguridad-Governanza).

> **Estado actual: demo visual.** Las métricas, alertas, recursos y eventos mostrados son simulados; no representan telemetría de una suscripción real de Azure.

## Publicación en GitHub Pages

Este repositorio incluye un workflow de GitHub Actions en `.github/workflows/deploy-pages.yml` para publicar el sitio al hacer push a `main`.

1. Sube **todo el contenido** de este ZIP a la raíz de `Seguridad-Governanza`, incluyendo la carpeta oculta `.github/workflows/`.
2. En GitHub abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions** como Source.
4. Entra en **Actions** y revisa el workflow `Deploy SKYNET Security Governance to GitHub Pages`.
5. Cuando termine correctamente, abre: https://rodrodbeat-stack.github.io/Seguridad-Governanza/

La URL estará disponible una vez que Pages esté habilitado y el workflow termine correctamente.

## Ejecutar localmente

Abre `index.html` en un navegador moderno. No requiere Node.js, compilación, dependencias ni claves API.

## Incluye

- Command Center con métricas de postura, hallazgos, inventario e identidad.
- Radar animado de amenazas.
- Vista ilustrativa de regiones Azure y recursos ficticios.
- Hallazgos priorizados y flujo de eventos simulado.
- Flujo DevSecOps desde commit hasta gate de producción.
- Navegación por módulos, reloj local y exportación de informe JSON de demostración.
- Diseño adaptable a escritorio y móvil.
- Workflow automatizado para GitHub Pages.

## Integración real de Azure: siguiente fase

Para conectar datos reales se necesita un backend autenticado. Se recomienda Microsoft Entra ID, permisos mínimos mediante RBAC y acceso de solo lectura inicialmente. Las consultas a Azure Resource Graph, Microsoft Defender for Cloud, Azure Monitor / Log Analytics y Microsoft Sentinel (si está habilitado) deben ejecutarse en el backend; nunca publiques secretos, credenciales ni claves en el frontend estático.

## Estructura

```text
Seguridad-Governanza/
├── .github/workflows/deploy-pages.yml
├── assets/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
└── README.md
```


## Navegación interactiva

El menú lateral cambia entre módulos y cada sección presenta métricas, tablas y filtros interactivos: infraestructura, detección de amenazas, identidades, gobernanza, DevSecOps y observabilidad. Cada vista permite filtrar los registros de demostración y exportar su información a JSON.

**Aviso:** las métricas, recursos, eventos y resultados son simulados. No existe conexión a una suscripción de Azure ni deben usarse como evidencia de seguridad real.
