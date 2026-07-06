import LogoEmail from "../../assets/logo-email.svg";
import LogoGitHub from "../../assets/logo-gitHub.svg";
import LogoLinkedin from "../../assets/linkedin-logo-iconify.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex justify-between gap-x-4 bg-blue-300 px-6 py-4">
      <div className="font-bold">
        <p className="flex items-center gap-x-2">JADB</p>
      </div>
      <div>
        <ul className="flex gap-x-4 list-none">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-x-3 bg-blue-300 ">
        <img src={LogoGitHub} alt="GitHub" className="h-7 w-7" />
        <img src={LogoLinkedin} alt="LinkedIn" className="h-5 w-6" />
        <img src={LogoEmail} alt="Gmail" className="h-7 w-7" />
      </div>
    </div>
  );
};

export default Navbar;
