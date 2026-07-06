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

- `pnpm dev` / `npm run dev` — inicia el servidor de desarrollo
- `pnpm build` / `npm run build` — construye la app para producción
- `pnpm preview` / `npm run preview` — previsualiza la build
- `pnpm lint` / `npm run lint` — ejecuta ESLint

## Dependencias clave

- `react`
- `react-dom`
- `vite`
- `tailwindcss`
- `@vitejs/plugin-react`
- `typescript`

## Licencia

Este proyecto es usado como portfolio personal.
