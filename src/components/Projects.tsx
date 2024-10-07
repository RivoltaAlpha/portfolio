import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Cyber Eyes Networks",
    description: "A web application dedicated to showcasing cybersecurity content and resources. It offers various tools and techniques related to cybersecurity education.",
    techStack: ["React.js", "Node.js", "Hono", "PostgreSQL"],
    liveLink: "https://cybereyesnetworks.co.ke/",
    githubLink: "https://github.com/RivoltaAlpha/CyberStatic",
    imageSrc: "/images/cyber.png"
  },
  {
    title: "CodeWorld Frontend",
    description: "The frontend of CodeWorld, a platform for sharing and collaborating on code projects. Users can create, edit, and manage projects in a seamless environment.",
    techStack: ["React.js", "Node.js", "Hono", "TailwindCSS"],
    liveLink: "",
    githubLink: "https://github.com/RivoltaAlpha/Codeworld_frontend",
    imageSrc: "/images/code.png"
  },
  {
    title: "AniRent",
    description: "Frontend for the Vehicle Management System, which allows users to manage vehicle rentals, including bookings, payments, and fleet management.",
    techStack: ["React.js", "TailwindCSS", "Redux", "TypeScript"],
    liveLink: "",
    githubLink: "https://github.com/RivoltaAlpha/vms-frontend",
    imageSrc: "/images/anirent.png"
  },
  {
    title: "SurgeProcure",
    description: "Collaborated on a e-procurement platform built to streamline the procurement process for organizations, ensuring efficiency and transparency.",
    techStack: ["React.js", "Node.js", "Hono", "PostgreSQL"],
    liveLink: "https://www.surgeprocure.co.ke/",
    githubLink: "https://github.com/deniswachira/surgeproc-ui",
    imageSrc: "/images/surge.png"
  },
  {
    title: "Computer Society of Kirinyaga",
    description: "The official website of the Computer Society of Kirinyaga, dedicated to promoting technology-related events, resources, and communities in Kirinyaga.",
    techStack: ["React.js", "TailwindCSS", "Node.js", "Drizzle"],
    liveLink: "https://computersocietyofkirinyaga.tech/",
    githubLink: "",
    imageSrc: "/images/csk.png"
  },
  {
    title: 'Restaurant API',
    description: 'The restaurant API uses cutting-edge technologies to develop a scalable application. This is a restaurant system management API. The API is RESTful and returns data in JSON format. ',
    techStack: ['Node.js', 'Hono.js', 'Postgres', 'Drizzle', 'Azure'],
    liveLink: 'https://restaurantsapi1.azurewebsites.net/',
    githubLink: 'https://github.com/RivoltaAlpha/Restaurant_API',
    imageSrc: "/images/restaurant.png"
  }
];


const ProjectList: React.FC = () => {
  return (
    <section id='projects' className="bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-blue-400 text-center mb-8">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
