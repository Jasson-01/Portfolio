import { useEffect, useRef } from "react";
import { skills } from "../../data/skills";

type VantaBirdsInstance = {
	destroy?: () => void;
};

type VantaBirdsOptions = {
	el: HTMLDivElement;
	mouseControls: boolean;
	touchControls: boolean;
	gyroControls: boolean;
	minHeight: number;
	minWidth: number;
	scale: number;
	scaleMobile: number;
	backgroundColor: number;
};

type VantaWindow = Window & {
	VANTA?: {
		BIRDS: (options: VantaBirdsOptions) => VantaBirdsInstance;
	};
};

const Skills = () => {
	const vantaRef = useRef<HTMLDivElement | null>(null);
	const vantaInstance = useRef<VantaBirdsInstance | null>(null);

	useEffect(() => {
		const vantaWindow = window as VantaWindow;

		const loadScript = (src: string) =>
			new Promise<void>((resolve, reject) => {
				const existing = document.querySelector(`script[src="${src}"]`);

				if (existing) {
					if (typeof vantaWindow.VANTA !== "undefined") {
						resolve();
						return;
					}

					existing.addEventListener("load", () => resolve(), { once: true });
					return;
				}

				const script = document.createElement("script");
				script.src = src;
				script.async = true;
				script.onload = () => resolve();
				script.onerror = () => reject(new Error(`No se pudo cargar ${src}`));
				document.body.appendChild(script);
			});

		let cancelled = false;

		const initVanta = async () => {
			try {
				await loadScript(
					"https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js",
				);
				await loadScript(
					"https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js",
				);

				if (cancelled || !vantaRef.current || typeof vantaWindow.VANTA === "undefined") {
					return;
				}

				if (vantaInstance.current) {
					vantaInstance.current.destroy?.();
				}

				vantaInstance.current = vantaWindow.VANTA.BIRDS({
					el: vantaRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0xbcd0fd,
				});
			} catch (error) {
				console.error("Error cargando Vanta.js:", error);
			}
		};

		initVanta();

		return () => {
			cancelled = true;
			vantaInstance.current?.destroy?.();
		};
	}, []);

	const frontendSkills = skills.filter(
		(skill) => skill.category === "frontend",
	);
	const backendSkills = skills.filter((skill) => skill.category === "backend");
	const toolskills = skills.filter((skill) => skill.category === "tools");

	return (
		<section className="flex flex-col items-center justify-start px-4 py-10 scroll-mt-24 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
			<div ref={vantaRef} className="relative mx-auto w-full max-w-6xl">
				
				<div className="relative px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
					<div className="mb-8">
						<p className="text-4xl font-extrabold uppercase tracking-tight text-blue-600 sm:text-5xl">
							Habilidades
						</p>
					</div>

					<div className="ml-0 space-y-10 md:ml-6 lg:ml-11">
						<div>
							<h3 className="mb-4 text-2xl font-bold text-gray-900">Frontend</h3>
							<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
								{frontendSkills.map((skill) => (
									<div
										className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-3 hover:shadow-md"
										key={skill.name}
									>
										<img
											className="h-12 w-12"
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
										className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-3 hover:shadow-md"
										key={skill.name}
									>
										<img
											className="h-12 w-12"
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
										className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-3 hover:shadow-md"
										key={skill.name}
									>
										<img
											className="h-12 w-12"
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
			</div>
		</section>
	);
};

export default Skills;
