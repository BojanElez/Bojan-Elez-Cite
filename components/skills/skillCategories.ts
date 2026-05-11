import { ComponentType } from "react";
import {
	CodeIcon,
	LightbulbIcon,
	WrenchIcon,
} from "@/components/ui/InlineIcons";

export type SkillCategory = {
	title: string;
	icon: ComponentType<{ size?: number; className?: string }>;
	skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
	{
		title: "Languages & Frameworks",
		icon: CodeIcon,
		skills: [
			{ name: "JavaScript (ES6+)", level: 95 },
			{ name: "React", level: 95 },
			{ name: "HTML5 & CSS3", level: 95 },
			{ name: "Sass / SCSS", level: 95 },
			{ name: "Responsive Design", level: 95 },
			{ name: "TypeScript", level: 90 },
			{ name: "Next.js", level: 90 },
			{ name: "Tailwind CSS", level: 88 },
			{ name: "Node.js", level: 85 },
			{ name: "Express.js", level: 85 },
			{ name: "Java / Spring Boot", level: 85 },
			{ name: "SQL.js", level: 80 },
			{ name: "Vue.js", level: 75 }
		]
	},
	{
		title: "Tools & Technologies",
		icon: WrenchIcon,
		skills: [
			{ name: "Git & GitHub", level: 90 },
			{ name: "REST APIs", level: 90 },
			{ name: "Jest/Testing Library", level: 85 },
			{ name: "Webpack/Vite", level: 80 },
			{ name: "AI", level: 80 },
			{ name: "AWS", level: 75 },
			{ name: "Redux/Zustand", level: 75 },
			{ name: "Vercel/Netlify", level: 75 },
			{ name: "Maven", level: 70 },
			{ name: "NPM", level: 70 },
			{ name: "Linux", level: 70 },
			{ name: "IntelliJ", level: 70 },
			{ name: "VSCode", level: 70 },
			{ name: "GraphQL", level: 75 },
			{ name: "Docker", level: 65 },
		]
	},
	{
		title: "Other Skills",
		icon: LightbulbIcon,
		skills: [
			{ name: "Agile/Scrum", level: 90 },
			{ name: "Code Review", level: 90 },
			{ name: "Accessibility (a11y)", level: 90 },
			{ name: "Performance Optimization", level: 88 },
			{ name: "Mentoring", level: 88 },
			{ name: "Team Leadership", level: 85 },
			{ name: "SEO Best Practices", level: 85 },
			{ name: "Cross-browser Testing", level: 85 },
			{ name: "OOP", level: 85 },
			{ name: "CI/CD", level: 80 }
		]
	}
];
