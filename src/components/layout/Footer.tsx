
const Footer = () => {
  return (
	<div className="max-w-7xl mx-auto px-8 border rounded-lg border-gray-700/20  bg-blue-300/35 p-8 flex justify-between items-start">
	    <div>
          <h3 className="text-xl font-bold relative z-10">Jasson</h3>
          <p className="text-dark-200/70 relative z-10"> © 2026 | All rights reserved.</p>
      </div>
      <div className="flex gap-x-16">
          <ul>
            <li className="text-base sm:text-lg font-semibold">Navigate</li>
            <li className="text-dark-200/60 hover:text-dark-200 ">Home</li>
            <li className="text-dark-200/60 hover:text-dark-200 ">Projects</li>
            <li className="text-dark-200/60 hover:text-dark-200 ">Skills</li>
            <li className="text-dark-200/60 hover:text-dark-200 ">Contact</li>
          </ul>
          <ul>
            <li className="text-base sm:text-lg font-semibold">Socials</li>
            <li className="text-dark-200/60 hover:text-dark-200 ">GitHub</li>
            <li className="text-dark-200/60 hover:text-dark-200 ">Linkedin</li>
          </ul>
      </div>
	</div>
  )
}

export default Footer
