# Portafolio Personal

Este repositorio contiene el código de mi portafolio profesional. El sitio muestra mis proyectos, experiencia laboral y otras habilidades que he adquirido a lo largo de mi carrera.

## Características principales

- **Astro 7** para generar páginas estáticas con JavaScript solo donde hace falta.
- **TypeScript** para un código más seguro y mantenible.
- **Tailwind CSS** con un diseño responsivo desde el primer momento.
- **Lucide para Astro** para los iconos SVG de la interfaz.
- **Portada adaptable** con foto optimizada, enlaces a proyectos y presentación personal.
- **Menú móvil** con apertura y cierre animados; se cierra al elegir un enlace o hacer clic fuera.
- **Imágenes optimizadas con Astro**: AVIF con alternativa WebP y tamaños adaptados a la pantalla.
- **Fuentes servidas desde el sitio** y precargadas para acelerar el primer renderizado.
- Información personal, proyectos, aportes, experiencia y habilidades centralizada en `src/data` para facilitar su edición.
- Páginas en español con títulos, descripciones, URL canónica y metadatos para compartir el portfolio.

## Instalación

Requiere **Node.js 24.x** y npm. La versión está indicada en `.nvmrc` y `package.json`.

1. Clona este repositorio y entra en su carpeta.
2. Si usás nvm, seleccioná la versión del proyecto:

```bash
nvm install
nvm use
```

3. Instalá las dependencias según `package-lock.json`:

```bash
npm ci
```

Si no usás nvm, instalá Node.js 24.x antes de ejecutar `npm ci`. Usá también Node.js 24.x en el entorno de despliegue.

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
├── public/                # Logo, iconos, imagen para compartir y CV
├── src/
│   ├── assets/            # Fotos, capturas y logos originales
│   ├── components/        # Componentes Astro
│   ├── data/              # Perfil, redes y contenido del portfolio
│   ├── layouts/           # Plantillas base de las páginas
│   ├── pages/             # Rutas del sitio
│   ├── styles/            # Estilos globales
│   └── types/             # Definiciones de TypeScript
├── .nvmrc                 # Versión de Node para desarrollo
└── astro.config.mjs       # Configuración de Astro y Tailwind
```

## Personalización

Los datos personales y las colecciones se editan en `src/data/`:

- `profile.ts`: nombre, ubicación, logo, foto, texto alternativo de la foto y CV.
- `socials.ts`: LinkedIn, GitHub, Instagram, YouTube (MrCodigos) y correo.
- `projects.ts`: proyectos, con descripción breve, año, stack y enlace.
- `contributions.ts`: aportes profesionales, con descripción breve, categoría y enlace.
- `experience.ts`: experiencia laboral, con rol, fechas y enfoque. Si omitís `endDate`, se muestra como trabajo actual.
- `skills.ts`: tecnologías agrupadas en Front-end, Back-end, Datos y Herramientas.

Los textos propios de cada sección se editan directamente en su componente: `Hero.astro` para la portada, `AboutSummary.astro` para el resumen personal, `AboutMe.astro` para la biografía y `Connect.astro` para el contacto. Los encabezados y las introducciones de las secciones de proyectos, aportes, experiencia y habilidades están en sus respectivos componentes.

Guarda las fotos, capturas y logos en `src/assets/` e impórtalos desde los datos o componentes. La foto del hero usa `Picture` para generar AVIF y WebP durante la compilación. Los tamaños consideran el encuadre de la foto con `object-fit: cover`, conservando nitidez en pantallas de mayor densidad. Los originales se conservan en el repositorio y las imágenes sin referencias no se incluyen en el sitio generado.

Los proyectos y aportes comparten `ContentSection.astro` para el encabezado y `WorkRow.astro` para las filas numeradas. Los proyectos muestran año y stack; los aportes, su categoría en una fila más compacta.

`Experience.astro` reutiliza `ContentSection.astro` y presenta la experiencia como una línea de tiempo adaptable, destacando los trabajos actuales.

`AboutSummary.astro` muestra el resumen de la portada y enlaza a `/about`, donde `AboutMe.astro` presenta la biografía completa. Las secciones comparten sus márgenes, tipografía base y rótulos desde `global.css`.

`ContactHeader.astro` reúne el CV y las redes en texto en la presentación de `/about`; los estilos de botones y enlaces se comparten con la portada.

`Skills.astro` reutiliza `ContentSection.astro` y muestra cada grupo de tecnologías como una fila, apilando el título y las herramientas en móvil.

Para actualizar las redes sociales, edita `src/data/socials.ts`: `SocialLinks.astro` las muestra en la sección del CV y el contacto.

`Connect.astro` es el pie compartido de ambas páginas, con ubicación, año actualizado al compilar, redes (incluido el canal de YouTube) y enlace al correo configurado en `socials.ts`. Los iconos SVG de `src/assets/icons/` se insertan directamente en el HTML y usan el color del enlace.

Las flechas de la interfaz usan `ArrowUpRight` de `@lucide/astro`. Para agregar otro icono, importalo desde esa misma librería y usalo como componente Astro; solo se incluyen los iconos utilizados, como SVG estáticos. Los tamaños y la alineación de las flechas se comparten desde `.icon-arrow` en `global.css`. Los logos de redes sociales se mantienen en `src/assets/icons/`.

La URL pública está definida en `site` dentro de `astro.config.mjs`. Cada página pasa su título y descripción a `Layout.astro`, que genera los metadatos compartidos.

Todos los estilos están en `src/styles/global.css`, importado una vez desde `Layout.astro`. El archivo está organizado en estilos base, reglas compartidas, secciones y ajustes por tamaño de pantalla. La tipografía y los contenedores se definen una sola vez; los selectores de cada sección evitan que sus estilos afecten a otras. Tailwind proporciona el reinicio de estilos base. Al compilar, Astro inserta el CSS en el HTML mediante `build.inlineStylesheets`, evitando una solicitud que bloquee el renderizado.

DM Sans y Libre Caslon Display se configuran con la API de fuentes de Astro en `astro.config.mjs`. Astro las descarga de Google durante el desarrollo o la compilación y las guarda en caché; el primer uso requiere conexión. El navegador recibe los archivos WOFF2 desde el propio sitio, con precargas generadas por `Font` en `Layout.astro`, `font-display: swap` y fuentes de respaldo ajustadas para reducir cambios de diseño.

`public/logo.svg` se muestra al inicio del navbar. Sus versiones para otros usos son `favicon.svg`, `favicon.png` (32 × 32), `apple-touch-icon.png` (180 × 180) y `og-image.png` (1200 × 630). Si reemplazás el logo, actualizá también estas versiones.

---

¡Si este proyecto te resulta útil, no olvides dejar una **estrellita** en GitHub para apoyar!
