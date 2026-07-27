import Layout from "./components/layout/Layout";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

const App = () => {
	return (
		<Layout>
			<div>
				<div id="home" className="scroll-mt-24 min-h-screen">
					<Hero></Hero>
				</div>

				<div id="projects" className="scroll-mt-24 py-24">
					<Projects></Projects>
				</div>

				<div id="skills" className="scroll-mt-24 py-24">
					<Skills></Skills>
				</div>

				<div id="contact" className="scroll-mt-24 py-24">
					<Contact></Contact>
				</div>               
			</div>
		</Layout>
	);
};

export default App;
