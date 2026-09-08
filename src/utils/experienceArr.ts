import { type Experience } from "../types/experience";
import playcodelatam from "../assets/experience/playcodelatam.png";
import byderm from "../assets/experience/byderm.png";
import novigo from "../assets/experience/novigo.png";
import codilab from "../assets/experience/codilab.jpg";

export const experienceArr: Experience[] = [
  {
    title: "PlayCodeLatam",
    role: "Docente Front-End",
    date: "Enero 2024 - Enero 2026",
    logo: playcodelatam,
  },
  {
    title: "ByDerm",
    role: "Desarrollador FullStack PERN",
    date: "Julio 2024 - Noviembre 2024",
    logo: byderm,
  },
  {
    title: "NovigoTechnology",
    role: "FullStack Python-Vuejs",
    date: "Noviembre 2024 - actualidad",
    logo: novigo,
  },
  {
    title: "CodiLab",
    role: "Docente",
    date: "febrero 2026 - actualidad",
    logo: codilab,
  },
];
