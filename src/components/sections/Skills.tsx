import { skills } from "../../data/skills";

const Skills = () => {
	//Declaraciones de variables o Lógica va afuera del return
	const frontendSkills = skills.filter(
		(skill) => skill.category === "frontend",
	);
	const backendSkills = skills.filter((skill) => skill.category === "backend");
	const toolskills = skills.filter((skill) => skill.category === "tools");
	// En el return va solo codigo JSX
	return (
		<section className="flex min-h-screen flex-col items-center justify-start bg-slate-400 px-4 py-8 scroll-mt-24 sm:px-8 lg:px-12">
			<div className="mx-auto w-full max-w-7xl">
				<div className="mb-8">
					<p className="text-4xl font-extrabold uppercase tracking-tight text-blue-600 sm:text-5xl">
						Habilidades
					</p>
				</div>

				<div className="space-y-10">
					<div>
						<h3 className="mb-4 text-2xl font-bold text-gray-900">Frontend</h3>
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							{frontendSkills.map((skill) => (
								<div
									className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-3 hover:shadow-md"
									key={skill.name}
								>
									<img
										className="w-12 h-12"
										src={skill.icon}
										alt={skill.name}
									/>
									<div>
										<p className="font-bold text-gray-900">{skill.name}</p>
										<p className="text-sm text-gray-700">{skill.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<h3 className="mb-4 text-2xl font-bold text-gray-900">Backend</h3>
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							{backendSkills.map((skill) => (
								<div
									className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-3 hover:shadow-md"
									key={skill.name}
								>
									<img
										className="w-12 h-12"
										src={skill.icon}
										alt={skill.name}
									/>
									<div>
										<p className="font-bold text-gray-900">{skill.name}</p>
										<p className="text-sm text-gray-700">{skill.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div>
						<h3 className="mb-4 text-2xl font-bold text-gray-900">Tools</h3>
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
							{toolskills.map((skill) => (
								<div
									className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-3 hover:shadow-md"
									key={skill.name}
								>
									<img
										className="w-12 h-12"
										src={skill.icon}
										alt={skill.name}
									/>
									<div>
										<p className="font-bold text-gray-900">{skill.name}</p>
										<p className="text-sm text-gray-700">{skill.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
