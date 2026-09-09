import photo from "../assets/profile.png";

const learningTechnology = "React Native";

export const profile = {
  name: "Ricardo Gonzalez",
  location: "Buenos Aires, Argentina",
  logo: "/logo.svg",
  photo,
  photoAlt: "Foto de perfil",
  cvUrl: "/ricardo-agustin-gonzalez-cv.pdf",
  hero: {
    roles: "Full Stack Developer · Docente",
    title: "Diseño digital",
    highlight: "criterio.",
    description:
      "Desarrollo productos web claros, rápidos y bien resueltos. Menos ruido visual, más intención, estructura y experiencia.",
    meta: ["React / Next.js", "Frappe / Vue", "Argentina"],
    availability: "Nuevos proyectos",
  },
  about: {
    summary: {
      title: "Desarrollo productos digitales y también enseño a construirlos.",
      paragraphs: [
        "Soy desarrollador Full Stack y docente. Trabajo combinando producto, interfaz y código, buscando soluciones claras y fáciles de mantener.",
        "Me interesa transformar problemas complejos en experiencias simples, tanto cuando desarrollo como cuando enseño programación.",
      ],
    },
    headline: `Desarrollador full stack y docente. Me dedico al desarrollo con PERN y estoy profundizando en ${learningTechnology}.`,
    paragraphs: [
      "Estudiante de la Tecnicatura Superior en Programación en Teclab. Tengo experiencia desarrollando webs dinámicas y trabajando con equipos de desarrolladores y diseñadores mediante metodologías ágiles.",
      "Me interesa seguir formándome y profundizar en ingeniería de software. Combino el desarrollo full stack con la docencia, buscando que tanto las soluciones como el aprendizaje sean claros y accesibles.",
    ],
  },
  skillsDescription:
    "Sigo aprendiendo y ampliando mis herramientas para resolver distintos problemas.",
  contact: {
    title: "Hablemos sobre tu próximo proyecto",
    description:
      "Si tenés una idea, necesitás ayuda con un producto o querés trabajar conmigo, podemos hablar y ver cómo encararlo.",
  },
};
