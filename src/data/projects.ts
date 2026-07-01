import type { Project } from "../types"

export const projects: Project[] = [{
    id:"1",
    title:"Carrito de compras",
    description:" Esta es una aplicación de comercio electrónico (e-commerce) moderna y responsiva, construida utilizando React para el frontend y Express con SQLite para el backend. El proyecto utiliza un monorepo gestionado con pnpm.",
    techStack:[{name:"React",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},{name:"TypeScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},{name:"Express",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},{name:"Tailwind",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"},{name:"SQLite",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },{name:"Node",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" }],
    gitHubUrl: "https://github.com/Jasson-01/Carrito-de-Compras.git",
    imageUrl:"/assets/images/carritoShop.png"
}];