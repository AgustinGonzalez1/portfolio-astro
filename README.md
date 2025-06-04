# Portafolio Personal en Astro

Este proyecto es el código fuente de mi sitio web personal desarrollado con **[Astro](https://astro.build/)**. Contiene una colección de mis proyectos, aportes, experiencia laboral y habilidades.

## Características

- **Astro 5 + React**: combinación de componentes `.astro` y React para secciones interactivas.
- **TypeScript**: tipado estático y organización del código en `src/types`.
- **Tailwind CSS**: estilos utilitarios y diseño responsive.
- **Framer Motion**: animaciones suaves en la cabecera y otras transiciones.
- **Nanostores**: pequeño store para controlar el menú en dispositivos móviles.
- Datos de proyectos, aportes y experiencia centralizados en `src/utils` para facilitar la edición.

## Instalación

1. Clona este repositorio.
2. Instala las dependencias:

```bash
npm install
```

## Uso

Durante el desarrollo ejecuta:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

Para generar la versión de producción:

```bash
npm run build
```

Y para revisar el resultado:

```bash
npm run preview
```

## Estructura del proyecto

```
portfolio-astro/
├── public/                # Imágenes y assets estáticos
├── src/
│   ├── components/        # Componentes Astro y React
│   ├── layouts/           # Plantillas de página
│   ├── pages/             # Rutas del sitio (`index.astro`, `about.astro`, ...)
│   ├── types/             # Definiciones de TypeScript
│   └── utils/             # Datos de proyectos, skills, etc.
├── astro.config.mjs       # Configuración de Astro
└── tailwind.config.mjs    # Configuración de Tailwind
```

## Scripts disponibles

| Comando            | Descripción                               |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Inicia el servidor de desarrollo          |
| `npm run build`    | Compila el sitio en `dist/`               |
| `npm run preview`  | Previsualiza la versión compilada         |
| `npm run astro`    | Acceso directo a la CLI de Astro          |

## Personalización

Los datos mostrados en el sitio (proyectos, habilidades, experiencia, etc.) se encuentran en archivos dentro de `src/utils/`. Modifica estos arrays para actualizar la información a mostrar.

---

¡Espero que este repositorio te sirva de guía para crear tu propio portafolio con Astro!
