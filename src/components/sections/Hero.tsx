import { useState } from "react";
import Modal from "../ui/Modal";

const Hero = () => {
	const [isCVOpen, setIsCVOpen] = useState(false);

	return (
		<section
			className={`flex min-h-[75vh] flex-col justify-start pt-16 pb-10 items-center scroll-mt-24 px-6 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16 bg-[url(src/assets/animations/Animated_Shape2.svg)]`}
		>
			<div className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-center">
				<div className="flex max-w-2xl flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
					<h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
						Hola, soy <br /> Jasson A. Davila <br />
						Bustamante
					</h1>
					<p className="max-w-xl font-semibold text-lg text-slate-950 leading-relaxed sm:text-2xl">
						Estudiante de Ciencias de la Computación en la Universidad de Buenos
						Aires, me apasiona la tecnología. Estoy comprometido con el
						aprendizaje continuo y busco oportunidades para aplicar mis
						conocimientos, contribuyendo a la creación de soluciones
						tecnológicas innovadoras.
					</p>
					<div className="flex justify-center lg:justify-start">
						<a
							href="#contact"
							rel="noopener noreferrer"
							className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
						>
							Contact me
						</a>
					</div>
				</div>

				<div className="flex flex-col items-center gap-4 lg:items-start">
					<div className="h-80 w-80 overflow-hidden rounded-4xl shadow-2xl sm:h-96 sm:w-96">
						<img
							className="h-full w-full object-cover"
							src="/assets/images_perfil/jason-perfil-2.png"
							alt="imagen perfil"
						/>
					</div>

					<button
						type="button"
						onClick={() => setIsCVOpen(true)}
						className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
					>
						Ver CV
					</button>

					{/* Modal */}
					<Modal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)}>
						<div className="h-[70vh] w-[90vw] max-w-4xl">
							<iframe
								title="Curriculum Vitae"
								src="/CV-JasonV3.pdf"
								className="h-full w-full rounded-lg border-0"
							></iframe>
						</div>
						<a
							href="/CV-JasonV3.pdf"
							download="CV-JasonV3.pdf"
							className="mt-4 block rounded-lg bg-blue-600 py-2 text-center text-white hover:bg-blue-700"
						>
							Descargar CV
						</a>
					</Modal>
				</div>
			</div>
		</section>
	);
};

export default Hero;
