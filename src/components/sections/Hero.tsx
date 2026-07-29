const Hero = () => {
	return (
		<section className="flex min-h-screen flex-col justify-start pt-44 items-center scroll-mt-24 px-6 bg-linear-to-br from-blue-600 via-blue-500 to-white">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center gap-16 lg:flex-row lg:items-center">
				<div className="flex max-w-2xl flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
						Hola, soy <br /> Jasson A. Davila <br />
						Bustamante
					</h1>
					<p className="max-w-xl text-lg  text-blue-50 leading-relaxed sm:text-2xl">
						Estudiante de Ciencias de la Computación en la Universidad de Buenos
						Aires, me apasiona la tecnología. Estoy comprometido con el
						aprendizaje continuo y busco oportunidades para aplicar mis
						conocimientos, contribuyendo a la creación de soluciones
						tecnológicas innovadoras.
					</p>
				</div>
				<div className="w-80 h-80 rounded-4xl overflow-hidden shadow-2xl object-cover sm:w-96 sm:h-96">
					<img
						className="w-full h-full object-cover"
						src="/assets/images_perfil/jason-perfil-2.png"
						alt="imagen perfil"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
