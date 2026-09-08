# Portafolio Personal

Este repositorio contiene el código de mi portafolio profesional. El sitio muestra mis proyectos, experiencia laboral y otras habilidades que he adquirido a lo largo de mi carrera.

## Características principales

- **Astro 7** para generar páginas estáticas con JavaScript solo donde hace falta.
- **TypeScript** para un código más seguro y mantenible.
- **Tailwind CSS** con un diseño responsivo desde el primer momento.
- **Animaciones CSS** en la portada, respetando la preferencia de movimiento reducido.
- **Menú móvil** con apertura y cierre animados; se cierra al elegir un enlace o hacer clic fuera.
- **Imágenes optimizadas con Astro**: WebP, tamaños adaptados a la pantalla y carga diferida fuera de la portada.
- Información personal, proyectos, aportes, experiencia y habilidades centralizada en `src/data` para facilitar su edición.

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

Para comprobar TypeScript en los archivos `.ts` y `.astro`, ejecuta:

```bash
npm run check
```

Para generar la versión optimizada ejecuta el siguiente comando, que también comprueba los tipos antes de compilar:

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
| `npm run check` | Revisa TypeScript y los componentes Astro |
| `npm run build` | Comprueba los tipos y compila el sitio en `dist/` |
| `npm run preview` | Previsualiza la versión compilada |
| `npm run astro` | Acceso a la CLI de Astro |

## Estructura del proyecto

```
portfolio-astro/
├── public/                # Iconos SVG, favicon y CV
├── src/
│   ├── assets/            # Fotos, capturas y logos originales
│   ├── components/        # Componentes Astro
│   ├── data/              # Perfil, redes y contenido del portfolio
│   ├── layouts/           # Plantillas base de las páginas
│   ├── pages/             # Rutas del sitio
│   ├── styles/            # Estilos globales
│   └── types/             # Definiciones de TypeScript
└── astro.config.mjs       # Configuración de Astro y Tailwind
```

## Personalización

Para actualizar el contenido, edita los archivos de `src/data/`:

- `profile.ts`: nombre, foto, presentación, biografía, YouTube, CV y descripción de aprendizaje.
- `socials.ts`: LinkedIn, GitHub, Instagram y correo.
- `projects.ts`: proyectos, con año y rol.
- `contributions.ts`: aportes profesionales.
- `experience.ts`: experiencia laboral.
- `skills.ts`: lista de nombres de tecnologías.

Guarda las fotos, capturas y logos en `src/assets/` e impórtalos desde los datos o componentes. Astro genera las versiones WebP durante la compilación; los originales se conservan en el repositorio. Las imágenes sin referencias no se incluyen en el sitio generado. `ProjectImage.astro` centraliza los tamaños de las capturas de proyectos y aportes.

`WorkCard.astro` y `WorkSection.astro` comparten la presentación de proyectos y aportes; los proyectos agregan año y rol mediante `details`. Para actualizar las redes sociales, edita `src/data/socials.ts`: `SocialLinks.astro` las muestra en la portada, la sección del CV y el contacto.

---

¡Si este proyecto te resulta útil, no olvides dejar una **estrellita** en GitHub para apoyar!
