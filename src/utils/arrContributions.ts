import { type Contribution } from "../types/contributions";

export const arrContributions: Contribution[] = [
  {
    title: "Puntos de venta - By Derm",
    description:
      "En esta contribución creé un mapa dinámico de los puntos de venta para la empresa By Derm, en el cual se puede ver cómo están distribuidos. Al alejar la vista, los puntos se agrupan entre sí; al acercarse, se separan. Además, en el lateral izquierdo hay una barra de búsqueda donde puedes introducir tu dirección y el sistema te muestra las farmacias adheridas más cercanas.",
    link: "https://www.linkedin.com/posts/ricardoagustingonzalez_el-mes-pasado-me-encontr%C3%A9-con-un-desaf%C3%ADo-activity-7244147670066282496-H4CY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8QU50BytWNd4NLrZko8r75tzZatItiRF0",
    img: "/imgContributions/mapbyderm.png",
  },
  {
    title: "Formularios dinámicos - Frappe/Vue",
    description: "Implementé en Python y JavaScript sobre el framework Frappe una función `createOrEdit` que, junto con `make_quick_entry`, genera automáticamente formularios dinámicos a partir de Doctypes predefinidos. Esto permite crear o editar entidades (pacientes, doctores) con la misma lógica reutilizable, optimizando tiempos y evitando duplicar código.",
    link: "https://www.linkedin.com/posts/ricardoagustingonzalez_frappe-vue-erpnext-activity-7286115491251638272-3H5r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8QU50BytWNd4NLrZko8r75tzZatItiRF0",
    img: "/imgContributions/quickNovigo.png"
  },
  {
    title: "Profesor en Play Code - HTML/CSS/JS",
    description: "Renové mi rol como profesor en Play Code por otro año, impartiendo clases de programación y desarrollo de videojuegos, compartiendo mi experiencia con los alumnos y formando parte de un equipo de instructores de primer nivel.",
    link: "https://www.linkedin.com/posts/ricardoagustingonzalez_programaciaejn-desarrolloweb-desarrollodevideojuegos-activity-7316153534901633025-N9K_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8QU50BytWNd4NLrZko8r75tzZatItiRF0",
    img: "/imgContributions/profPlaycode.jpeg"
  },
  {
    title: "Vista de reporte de estudios",
    description: "Desarrollé una vista de reporte de estudios con tres paneles: selección de plantillas, editor Tiptap y campos dinámicos; separé la lógica en módulos independientes y sincronizo la plantilla activa mediante emits. Esto mejora el rendimiento, maximiza la reutilización de código y permite generar reportes más rápido con un componente genérico.",
    link: "https://www.linkedin.com/posts/ricardoagustingonzalez_vuejs-vue3-frontenddeveloper-activity-7327100525466816512-Zd9i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD8QU50BytWNd4NLrZko8r75tzZatItiRF0",
    img: "/imgContributions/studyNovigo.png"
  }



];
