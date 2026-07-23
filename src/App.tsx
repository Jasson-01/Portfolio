import Layout from "./components/layout/Layout";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

const App = () => {
	return (
		<Layout>
			<div>

				<Hero></Hero>

				<div id="projects" className="min-h-screen">
			    	<Projects ></Projects>
				</div>
				<div id="skills" className="min-h-screen">
			     	<Skills></Skills>
				</div>
				<div id="contact" className="min-h-screen">
			    	<Contact></Contact>
				</div>
			</div>
		</Layout>
	);
};

export default App;
