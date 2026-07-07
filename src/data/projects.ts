import logoGsap from "../assets/icons/logo-gsap.svg";
import type { Project } from "../types";

export const projects: Project[] = [
	{
		id: "1",
		title: "Carrito de compras",
		description:
			" Esta es una aplicación de comercio electrónico (e-commerce) moderna y responsiva, construida utilizando React para el frontend y Express con SQLite para el backend. El proyecto utiliza un monorepo gestionado con pnpm.",
		techStack: [
			{
				name: "React",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				name: "TypeScript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
			},
			{
				name: "Express",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
			},
			{
				name: "Tailwind",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
			},
			{
				name: "SQLite",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
			},
			{
				name: "Node",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
			},
		],
		gitHubUrl: "https://github.com/Jasson-01/Carrito-de-Compras.git",
		imageUrl: "/assets/images/carritoShop.png",
	},
	{
		id: "2",
		title: "Lamding page of Vice City VI",
		description:
			"El repositorio “landing-gta-vi” es un proyecto de práctica que recrea la landing page oficial de Grand Theft Auto VI usando tecnologías modernas como Astro, React y GSAP, con un diseño responsivo y animaciones suaves para simular la estética de Rockstar Games.",
		techStack: [
			{
				name: "CSS",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
			},
			{
				name: "JavaScript",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			},
			{
				name: "Astro",
				icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original-wordmark.svg",
			},
			{ name: "GSAP", icon: logoGsap },
		],
		gitHubUrl: "https://github.com/Jasson-01/landing-gta-vi.git",
		imageUrl: "/assets/images_projects/landingPage_viceCity.png",
	},
];
