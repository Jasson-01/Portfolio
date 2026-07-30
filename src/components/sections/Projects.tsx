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
			className="h-96 w-full object-cover sm:h-112 lg:h-128"
			src={currentProject.imageUrl}
			alt={currentProject.title}
		/>
	);

	return (
	
		<section className="flex flex-col items-center scroll-mt-24 px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
			<div className="mx-aut w-full max-w-7xl">
				<div className="mb-6">
					<p className="text-4xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-5xl ">
						Proyectos
					</p>
				</div>

				
					<div className="flex flex-col gap-6 lg:flex-row lg:items-center">
						<button
							className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 shadow-sm transition hover:bg-blue-100 hover:text-blue-700"
							type="button"
							onClick={handlePrev}
						>
							{"<"}
						</button>

						<div className="flex-1 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
							<div className="flex flex-col lg:flex-row">
								<div className="lg:w-[55%]">
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
								<div className="flex flex-col justify-between p-8 lg:w-[45%]">
									{/* Descripción */}
									<div>
										{/* Titulo del Proyecto */}
										<h3 className="text-2xl font-bold text-gray-900">
											{currentProject.title}
										</h3>
										<p className="mt-4 text-lg leading-relaxed text-gray-800">
											{currentProject.description}
										</p>
									</div>
									{/* Tecnologias */}
									<div className="mt-6 flex flex-wrap gap-3">
										{currentProject.techStack.map((e) => (
											<img
												className="w-8 h-8"
												src={e.icon}
												alt={e.name}
												key={e.name}
											/>
										))}
									</div>

									<div className="mt-8 flex flex-col gap-3 sm:flex-row">
										{/* Enlaces externos */}
										{currentProject.liveUrl && (
											<a
												href={currentProject.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="rounded-full border border-blue-600 px-4 py-4 text-center font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
											>
												Desplegar
											</a>
										)}
										<a
											className="rounded-full bg-blue-600 px-4 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
											href={currentProject.gitHubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Repositorio en GitHub
										</a>
									</div>
								</div>
							</div>
						</div>

						<button
							className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 shadow-sm transition hover:bg-blue-100 hover:text-blue-700"
							type="button"
							onClick={handleNext}
						>
							{">"}
						</button>
					</div>
				
			</div>
		</section>
	);
};

export default Projects;
