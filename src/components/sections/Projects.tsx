import { useState } from "react";
import { projects } from "../../data/projects";

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		return setCurrentIndex((currentIndex + 1) % projects.length);
	};

	const handlePrev = () => {
		return setCurrentIndex(
			(currentIndex - 1 + projects.length) % projects.length,
		);
	};

	const currentProject = projects[currentIndex];

	const projectImage = (
		<img
			className="w-full h-auto object-cover"
			src={currentProject.imageUrl}
			alt={currentProject.title}
		/>
	);

	return (
		<div className="px-60 max-w-7xl mx-auto flex flex-col justify-start min-h-[calc(100vh-60px)]">
			<h2 className="text-5xl font-bold">Proyectos</h2>
			<div className="flex flex-row items-center gap-x-6">
				<button
					className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-200 shrink-0"
					type="button"
					onClick={handlePrev}
				>
					{"<"}
				</button>

				<div className="flex flex-row gap-x-12">
					<div className="flex flex-col flex-1 ">
						{/* Titulo del Proyecto */}
						<h3 className="text-2xl font-bold">{currentProject.title}</h3>
						{/* Imagen principal del Proyecto */}
						{currentProject.liveUrl ? (
							<a
								href={currentProject.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								{projectImage}
							</a>
						) : (
							projectImage
						)}
					</div>
					{/* Columna derecha */}
					<div className="flex flex-col flex-1 space-y-5">
						{/* Descripción */}
						<div>
							<p className="text-lg max-w-md">{currentProject.description}</p>
						</div>
						{/* Tecnologias */}
						<div className="flex gap-x-3.5">
							{currentProject.techStack.map((e) => (
								<img
									className="w-8 h-8"
									src={e.icon}
									alt={e.name}
									key={e.name}
								/>
							))}
						</div>
						{/* Enlaces externos */}
						{currentProject.liveUrl && (
							<a
								href={currentProject.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="border border-blue-600 text-blue-600 px-3 py-2 rounded-lg no-underline"
							>
								Desplegar
							</a>
						)}
						<a
							className="bg-blue-600 text-white px-3 py-2 rounded-lg no-underline"
							href={currentProject.gitHubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							Repositorio en GitHub
						</a>
					</div>
				</div>

				<button
					className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-200 shrink-0"
					type="button"
					onClick={handleNext}
				>
					{">"}
				</button>
			</div>
		</div>
	);
};

export default Projects;
