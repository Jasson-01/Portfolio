import LogoLinkedin from "../../assets/icons/linkedin-logo-iconify.svg";
import LogoEmail from "../../assets/icons/logo-email.svg";
import LogoGitHub from "../../assets/icons/logo-gitHub.svg";
import { useScroll } from "../../hooks/useScroll";

const Navbar = () => {
	const {isScrolled} = useScroll()

	return (
		<nav
			className={`sticky top-0 w-full z-50 backdrop-blur-2xl ${isScrolled ? 'bg-blue-300/70' : 'bg-blue-300'  }`}
		>
			<div className="flex max-w-8xl mx-auto  items-center justify-between py-2.5 px-2 md:px-5">
				{/* Logo */}
				<a
					href="/"
					className="flex items-center gap-2 px-4 py-2 font-semibold transition hover:text-blue-600"
				>
					JADB
				</a>

				{/* Menú */}
				<ul className="hidden items-center gap-2 font-bold md:flex">
					<li>
						<a
							className="rounded-full px-4 py-2 text-base text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
							href="#home"
						>
							Home
						</a>
					</li>

					<li>
						<a
							className="rounded-full px-4 py-2 text-base text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
							href="#projects"
						>
							Projects
						</a>
					</li>

					<li>
						<a
							className="rounded-full px-4 py-2 text-base text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
							href="#skills"
						>
							Skills
						</a>
					</li>

					<li>
						<a
							className="rounded-full px-4 py-2 text-base text-gray-900 transition hover:bg-blue-50 hover:text-blue-600"
							href="#contact"
						>
							Contact
						</a>
					</li>
				</ul>

				{/* Parte derecha */}
				<div className="flex items-center gap-3">
					<a
						href="https://github.com/Jasson-01"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full p-2 transition hover:bg-blue-50"
					>
						<img src={LogoGitHub} alt="GitHub" className="h-6 w-6" />
					</a>

					<a
						href="https://www.linkedin.com/in/jasondb001"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full p-2 transition hover:bg-blue-50"
					>
						<img src={LogoLinkedin} alt="LinkedIn" className="h-5 w-5" />
					</a>

					<a
						href="mailto:jasson@email.com"
						className="rounded-full p-2 transition hover:bg-blue-50"
					>
						<img src={LogoEmail} alt="Email" className="h-6 w-6" />
					</a>

					<div className="ml-3 flex items-center gap-2 border-l border-blue-400 pl-3">
						<a
							href="/"
							className="rounded-full px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
						>
							ES
						</a>

						<a
							href="/"
							className="rounded-full px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
						>
							☀︎
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
