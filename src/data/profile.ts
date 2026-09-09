import photo from "../assets/profile.png";

const learningTechnology = "React Native";

export const profile = {
  name: "Ricardo Gonzalez",
  logo: "/logo.svg",
  photo,
  photoAlt: "Foto de perfil",
  cvUrl: "/ricardo-agustin-gonzalez-cv.pdf",
  youtube: {
    name: "MrCodigos",
    href: "https://www.youtube.com/@MrCodigos",
  },
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
    headline: `Me dedico al desarrollo fullstack con PERN y estoy en proceso de aprender ${learningTechnology}.`,
    background:
      "Estudiante de la tecnicatura superior en programación en Teclab. Experiencia en desarrollo de webs dinámicas y trabajando con grupos de desarrolladores y diseñadores con metodologías ágiles. A futuro me gustaría terminar la tecnicatura y seguir mis estudios en Siglo XXI - Ing. en Software.",
    teaching: {
      role: "docente Front-End",
      organization: "Play Code Latam",
    },
    development: {
      role: "desarrollador Full Stack",
      organization: "Novigo Technology",
    },
  },
  skillsDescription: `Siempre estoy aprendiendo sobre nuevas tecnologías, lenguajes y frameworks. Actualmente estoy profundizando en ${learningTechnology}`,
};
