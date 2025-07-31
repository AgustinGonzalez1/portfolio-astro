# Portafolio Personal

Este repositorio contiene el código de mi portafolio profesional. El sitio muestra mis proyectos, experiencia laboral y otras habilidades que he adquirido a lo largo de mi carrera.

## Características principales

- **Astro 5 + React** para combinar rendimiento y secciones interactivas.
- **TypeScript** para un código más seguro y mantenible.
- **Tailwind CSS** con un diseño responsivo desde el primer momento.
- **Framer Motion** para transiciones y animaciones suaves.
- **Nanostores** como manejo ligero de estado para el menú en móviles.
- Información de proyectos, aportes y experiencia centralizada en `src/utils` para facilitar su edición.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias ejecutando:

```bash
npm install
```

## Uso durante el desarrollo

Inicia el servidor de desarrollo con:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Compilar para producción

Para generar la versión optimizada ejecuta:

```bash
npm run build
```

Luego puedes revisar el resultado con:

```bash
npm run preview
```

## Scripts disponibles

| Comando | Descripción |
| ------- | ----------- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el sitio en `dist/` |
| `npm run preview` | Previsualiza la versión compilada |
| `npm run astro` | Acceso a la CLI de Astro |

## Estructura del proyecto

```
portfolio-astro/
├── public/                # Imágenes y otros assets estáticos
├── src/
│   ├── components/        # Componentes Astro y React
│   ├── layouts/           # Plantillas base de las páginas
│   ├── pages/             # Rutas del sitio
│   ├── types/             # Definiciones de TypeScript
│   └── utils/             # Datos de proyectos, skills, etc.
├── astro.config.mjs       # Configuración de Astro
└── tailwind.config.mjs    # Configuración de Tailwind
```

## Personalización

Para modificar los proyectos, aportes o habilidades, edita los archivos dentro de `src/utils/`. Cada sección está separada en su propio archivo para que puedas actualizar la información de forma sencilla.

---

¡Si este proyecto te resulta útil, no olvides dejar una **estrellita** en GitHub para apoyar!

