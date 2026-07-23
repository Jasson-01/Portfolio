import LogoLinkedin from "../../assets/icons/linkedin-logo-iconify.svg";
import LogoEmail from "../../assets/icons/logo-email.svg";
import LogoGitHub from "../../assets/icons/logo-gitHub.svg";

const Navbar = () => {
	return (
		<div className="sticky top-0 z-10 flex justify-between gap-x-4 bg-blue-300 px-6 py-4">
			<div className="font-bold">
				<a href="/" className="flex items-center gap-x-2 cursor-pointer px-4 py-2">
					JADB
				</a>
			</div>
			<div>
				<ul className="flex gap-x-8 list-none font-semibold text-lg ">
					<li className="px-4 py-2  hover:bg-gray-500/30">
						<a href="#home">Home</a>
					</li>
					<li className="px-4 py-2  hover:bg-gray-500/30">
						<a href="#projects">Projects</a>
					</li>
					<li className="px-4 py-2  hover:bg-gray-500/30">
						<a href="#skills">Skills</a>
					</li>
					<li className="px-4 py-2  hover:bg-gray-500/30">
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</div>
			<div className="flex items-center gap-x-3 bg-blue-300 cursor-pointer">
				<img src={LogoGitHub} alt="GitHub" className="h-7 w-7" />
				<img src={LogoLinkedin} alt="LinkedIn" className="h-5 w-6" />
				<img src={LogoEmail} alt="Gmail" className="h-7 w-7" />
			</div>
		</div>
	);
};

export default Navbar;
