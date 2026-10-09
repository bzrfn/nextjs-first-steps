# Next.js — First Steps

Práctica académica basada en el laboratorio `first-steps` del repositorio del profesor. El proyecto reproduce un sitio para la carrera de Ingeniería en Tecnologías de la Información e Innovación Digital de la UTVT.

## Objetivo

Aplicar los fundamentos del App Router de Next.js mediante páginas, componentes reutilizables, layouts anidados, navegación interna, rutas dinámicas y estilos con Tailwind CSS.

## Tecnologías

- Next.js 16.0.5 con App Router y Turbopack
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4
- ESLint 9
- Node.js y npm

La versión de Next.js permanece fijada en `16.0.5` porque es la utilizada en el material de la práctica. Para un proyecto de producción se debe evaluar la actualización a una versión con soporte y parches vigentes.

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior
- Git

## Instalación y ejecución

```bash
npm install
npm run dev
```

El servidor de desarrollo queda disponible normalmente en `http://localhost:3000`.

## Estructura principal

```text
app/
├── about/page.tsx
├── blog/
│   ├── [slug]/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/Header.tsx
│   └── utils/
├── data/
├── types/
├── layout.tsx
├── not-found.tsx
└── page.tsx
```

## Rutas disponibles

| Ruta | Descripción |
| --- | --- |
| `/` | Página principal de la carrera |
| `/about` | Información académica y perfil profesional |
| `/blog` | Listado de secciones del Blog |
| `/blog/actualidad-tecnologica` | Publicación dinámica de actualidad |
| `/blog/areas-de-formacion` | Publicación dinámica de áreas de formación |
| `/blog/historias-que-inspiran` | Publicación dinámica de historias |
| Cualquier ruta inexistente | Página 404 personalizada |

El layout del Blog también incluye enlaces a categorías generales. La optimización mostrada por el profesor genera contenido descriptivo para cualquier slug adicional dentro de `/blog/[slug]`.

## Validación

```bash
npm run lint
npm run build
npm run start
```

El proyecto debe finalizar ESLint y el build de producción sin errores. También se deben comprobar manualmente Home, About, Blog, navegación activa, slugs dinámicos y la página 404.

## Resultado

El sitio mantiene la organización, el contenido, la paleta y el comportamiento mostrados en los videos del laboratorio. Los datos, tipos y componentes se encuentran separados para evitar duplicación y el estado activo del Header utiliza `usePathname` dentro del único componente cliente necesario.
