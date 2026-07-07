# Portfolio

Aplicación personal de portfolio creada con React, TypeScript y Vite.

## Descripción

Esta aplicación muestra proyectos y contenido personal en una página moderna construida con React 19, Tailwind CSS y Vite.

## Características

- React con TypeScript
- Construcción con Vite
- Estilos con Tailwind CSS
- Componentes organizados en secciones
- Imágenes estáticas desde `public/assets`

## Requisitos

- Node.js 20 o superior
- pnpm instalado (recomendado) o npm

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Abre `http://localhost:5173` en el navegador.

## Build de producción

```bash
pnpm build
```

## Previsualización

```bash
pnpm preview
```

## Uso de Biome

Este proyecto usa Biome para revisar y formatear el código en `src/`.

```bash
pnpm lint
pnpm format
pnpm check
```

- `pnpm lint` — revisa el código con Biome.
- `pnpm format` — formatea los archivos de `src/`.
- `pnpm check` — formatea y corrige problemas de estilo y calidad.

## Estructura principal

- `src/`
  - `App.tsx` - Componente raíz
  - `main.tsx` - Punto de entrada
  - `components/`, `layout/`, `sections/`, `ui/` - Componentes organizados
  - `data/` - Datos del portfolio
  - `types/` - Tipos TypeScript
- `public/assets/images/` - Imágenes estáticas accesibles desde `/assets/images/...`

## Uso de imágenes

Las imágenes en `public/` se sirven como archivos estáticos. Por ejemplo:

```ts
imageUrl: "/assets/images/carritoShop.png"
```

## Scripts disponibles

- `pnpm dev`  — inicia el servidor de desarrollo
- `pnpm build` — construye la app para producción
- `pnpm preview`  — previsualiza la build
- `pnpm lint`  — ejecuta ESLint

## Dependencias clave

- `react`
- `react-dom`
- `vite`
- `tailwindcss`
- `@vitejs/plugin-react`
- `typescript`

## Licencia

Este proyecto es usado como portfolio personal.
