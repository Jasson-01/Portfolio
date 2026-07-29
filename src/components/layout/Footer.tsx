const Footer = () => {
	return (
		<footer className="mx-auto mb-6 mt-8 w-full max-w-screen-2xl px-4 sm:px-8 lg:px-12">
			<div className="rounded-4xl border border-gray-400 bg-slate-400/20 px-6 py-8 shadow-sm sm:px-8 lg:px-10">
				<div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
					<div>
						<h3 className="text-xl font-bold text-gray-900">Jasson</h3>
						<p className="mt-2 text-sm text-gray-950">
							© 2026 | All rights reserved.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
						<ul className="space-y-2 text-center md:text-left">
							<li className="text-base sm:text-lg font-semibold">Navigate</li>
							<li className="text-gray-800 hover:text-dark-200 ">
								<a href="/" className="transition hover:text-blue-600">Home</a>
							</li>
							<li className="text-gray-800 hover:text-dark-200 ">
								<a href="#projects" className="transition hover:text-blue-600">Projects</a>
							</li>
							<li className="text-gray-800 hover:text-dark-200 ">
								<a href="#skills" className="transition hover:text-blue-600">Skills</a>
							</li>
							<li className="text-gray-800 hover:text-dark-200 ">
								<a href="#contact" className="transition hover:text-blue-600">Contact</a>
							</li>
						</ul>
						<ul className="space-y-2 text-center md:text-left">
							<li className="text-base sm:text-lg font-semibold">Socials</li>
							<li className="text-gray-800  hover:text-dark-200 ">
								<a
									href="https://github.com/Jasson-01"
									rel="noopener noreferrer"
									target="_blank"
									className="transition hover:text-blue-600"
								>
									GitHub{" "}
								</a>
							</li>
							<li className="text-gray-800  hover:text-dark-200 ">
								<a
									href="https://www.linkedin.com/in/jasondb001"
									rel="noopener noreferrer"
									target="_blank"
									className="transition hover:text-blue-600"
								>
									Linkedin
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
