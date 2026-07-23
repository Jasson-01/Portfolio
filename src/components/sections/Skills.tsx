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
		<div className="px-60 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold">Habilidades</h2>.
			<div>
				<h3 className="text-2xl font-bold mb-4">Frontend</h3>
				<div className="grid grid-cols-4 gap-4">
					{frontendSkills.map((skill) => (
						<div
							className="flex bg-gray-300 p-4 rounded-lg items-center gap-x-4"
							key={skill.name}
						>
							<img className="w-12 h-12" src={skill.icon} alt={skill.name} />
							<div>
								<p className="font-bold">{skill.name}</p>
								<p className="text-gray-800">{skill.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-2xl font-bold mb-4">Backend</h3>
				<div className="grid grid-cols-4 gap-4">
					{backendSkills.map((skill) => (
						<div
							className="flex bg-gray-300 p-4 rounded-lg items-center gap-x-4"
							key={skill.name}
						>
							<img className="w-12 h-12" src={skill.icon} alt={skill.name} />
							<div>
								<p className="font-bold">{skill.name}</p>
								<p className="text-gray-800">{skill.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-2xl font-bold mb-4">Tools</h3>
				<div className="grid grid-cols-4 gap-4">
					{toolskills.map((skill) => (
						<div
							className="flex bg-gray-300 p-4 rounded-lg items-center gap-x-4"
							key={skill.name}
						>
							<img className="w-12 h-12" src={skill.icon} alt={skill.name} />
							<div>
								<p className="font-bold">{skill.name}</p>
								<p className="text-gray-800">{skill.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
