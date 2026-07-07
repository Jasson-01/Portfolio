interface TechStack {
	name: string;
	icon: string;
}
export interface Project {
	id: string;
	title: string;
	description: string;
	techStack: TechStack[];
	gitHubUrl: string;
	liveUrl?: string;
	imageUrl: string;
}

export interface Skill {
	name: string;
	icon: string;
	category: "frontend" | "backend" | "tools";
}
