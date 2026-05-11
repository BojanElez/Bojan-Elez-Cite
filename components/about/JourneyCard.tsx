import Card from "@/components/ui/Card";

type JourneyCardProps = {
  yearsOfExperience: number;
};

export default function JourneyCard({ yearsOfExperience }: JourneyCardProps) {
  return (
    <Card variant="cyanLarge">
      <div className="about-journey-text">
       <p>
        <strong>
          I&apos;m a passionate Full-Stack Engineer with {yearsOfExperience} years of experience building scalable, high-performance web applications and modern digital products.
        </strong>
        &nbsp; My journey started with frontend development, where I developed a strong foundation in CSS, responsive layouts, and pixel-perfect UI implementation. Over time, I expanded into full-stack development, working across both frontend and backend systems to build complete, production-ready applications.
      </p>

      <p>
        <strong>
          I specialize in React, TypeScript, Node.js, and modern JavaScript ecosystems, with strong experience designing maintainable architectures, reusable component systems, and performance-focused user experiences.
        </strong>
        &nbsp; I&apos;ve worked on SaaS platforms, financial dashboards, offline-first applications, and large-scale data-driven interfaces where scalability, responsiveness, and clean architecture were essential.
      </p>

      <p>
        <strong>
          Throughout my career, I&apos;ve collaborated with cross-functional teams to deliver reliable solutions that improve business workflows and enhance user satisfaction.
        </strong>
        &nbsp; I enjoy solving complex engineering challenges, optimizing frontend rendering performance, improving backend reliability, and creating applications that feel both fast and intuitive for users.
      </p>

      <p>
        <strong>
          Beyond frontend development, I also have experience working with backend NodeJS, Java/Spring Boot, APIs, SQL databases, authentication flows, state management, cloud platforms, and application performance optimization.
        </strong>
        &nbsp; I believe in writing clean, maintainable code, following best engineering practices, and continuously improving both technical and communication skills.
      </p>

      <p>
        <strong>
          When I&apos;m not coding or prompting, I enjoy learning new technologies, improving my engineering knowledge, and working on personal projects that help me grow as a developer.
        </strong>
        &nbsp; I&apos;m always motivated by new challenges, strong teamwork, and opportunities to build impactful products with modern technologies.
      </p>
      </div>
    </Card>
  );
}
