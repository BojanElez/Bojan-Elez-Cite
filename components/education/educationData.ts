export type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  expiry: string;
  credentialId: string;
  link: string;
  description: string;
};

export const education: EducationItem[] = [
	{
		degree: "BSc",
		field: "Mechanical Engineering",
		institution: "Faculty of Engineering, University of Kragujevac",
		period: "2015",
		location: "Kragujevac, Serbia",
		description: "Graduated with a Bachelor of Science in Mechanical Engineering, building a strong foundation in analytical thinking, problem-solving, and technical precision.",
		highlights: [
			"Strong foundation in mathematics, physics, and engineering principles",
			"Developed analytical and systematic problem-solving skills applicable to software engineering",
		]
	}
];

export const certifications: CertificationItem[] = [
	{
		name: "AWS Certified Cloud Practitioner (CLF-C02)",
		issuer: "Amazon Web Services",
		date: "2026",
		expiry: "N/A",
		credentialId: "",
		link: "",
		description: "Validates foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, system design, and support."
	},
	{
		name: "Google AI Essentials Specialization",
		issuer: "Google",
		date: "2026",
		expiry: "N/A",
		credentialId: "",
		link: "",
		description: "Covers foundational AI concepts and practical applications using Google's AI tools, including prompt engineering, responsible AI use, and integrating AI into everyday workflows."
	}
];
