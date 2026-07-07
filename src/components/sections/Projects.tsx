import { useState } from "react";
import { projects } from "../../data/projects";

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		return setCurrentIndex((currentIndex + 1) % projects.length);
	};

	const handlePrev = () => {
		return setCurrentIndex(
			(currentIndex - 1 + projects.length) % projects.length,
		);
	};

	return (
		<div>
			<p>{currentIndex}</p>
			<button type="button" onClick={handlePrev}>
				{"<"}
			</button>
			<button type="button" onClick={handleNext}>
				{">"}
			</button>
		</div>
	);
};

export default Projects;
