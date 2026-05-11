export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
	{
		title: "Software Engineer",
		company: "Orion Innovation",
		period: "Dec 2023 - Present",
		location: "Remote",
		type: "Full-time",
		description: "Contributed as a Full-Stack Engineer on a global wealth management SaaS platform operating in a regulated financial environment.",
		achievements: [
			"Integrated frontend applications with backend REST APIs to support data-heavy financial dashboards used by advisors and investors.",
			"Worked closely with backend engineers on API contracts, error handling, and data validation requirements.",
			"Supported workflows requiring strict correctness and consistency of financial data across multiple modules.",
			"Participated in testing, validation, and code review processes to ensure reliability and compliance with financial data standards."
		],
		technologies: ["React", "TypeScript", "Java", "REST APIs", "SQL", "Financial Data", "Testing"]
	},
	{
		title: "Software Engineer",
		company: "Vega IT",
		period: "Nov 2022 - Nov 2023",
		location: "Remote",
		type: "Full-time",
		description: "Delivered full-stack functionality for a PWA inspection platform, combining Node.js backend services with React-based client applications.",
		achievements: [
			"Developed REST APIs using Node.js and Express to support offline-first workflows, including ingestion, validation, and persistence of structured inspection data.",
			"Designed and implemented SQL-backed data models to store inspection results, enforce data consistency, and support later reconciliation.",
			"Supported offline data synchronization logic, ensuring reliable recovery and consistency once connectivity was restored.",
			"Contributed to a blockchain-based tracking system by implementing backend services supporting secure material traceability across the material lifecycle.",
			"Integrated backend services with frontend dashboards to expose inspection results and lifecycle data to operational users."
		],
		technologies: ["Node.js", "Express", "React", "SQL", "PWA", "Offline Sync", "Blockchain"]
	},
	{
		title: "Frontend Developer",
		company: "EXLRT",
		period: "Dec 2020 - Oct 2022",
		location: "Remote",
		type: "Full-time",
		description: "Worked on API-driven frontend applications integrated with backend services and CMS platforms.",
		achievements: [
			"Collaborated with backend teams to implement data fetching, error handling, and API-driven UI states.",
			"Supported performance optimization and accessibility improvements on data-driven views used by global users."
		],
		technologies: ["React", "TypeScript", "REST APIs", "CMS", "Accessibility", "Performance"]
	},
	{
		title: "Full-Stack Developer",
		company: "Innovation Cloud",
		period: "Dec 2018 - Dec 2020",
		location: "Kragujevac, Serbia",
		type: "Full-time",
		description: "Developed backend functionality and end-to-end features for an innovation management platform, progressing from intern to full-time developer.",
		achievements: [
			"Developed backend functionality using PHP and MySQL to support innovation management workflows.",
			"Designed, optimized, and maintained SQL queries to improve data accuracy and reduce response times.",
			"Implemented server-side logic to support CRUD operations and data validation across multiple platform modules.",
			"Built end-to-end features spanning database, backend logic, and frontend presentation layers.",
			"Progressed from intern to full-time developer based on consistent delivery and ownership of backend tasks."
		],
		technologies: ["PHP", "MySQL", "SQL", "JavaScript", "HTML", "CSS"]
	}
];
