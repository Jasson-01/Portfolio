import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

const App = () => {
	return (
		<Layout>
			<div>
				<Hero></Hero>
				<Projects></Projects>
				<section className="min-h-screen" id="projects">
					Projects
				</section>
				<section className="min-h-screen" id="skills">
					Skills
				</section>
				<section className="min-h-screen" id="contact">
					Contact
				</section>
			</div>
		</Layout>
	);
};

export default App;
