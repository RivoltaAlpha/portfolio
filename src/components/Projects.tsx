import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Freshcart",
    description: "FreshCart began with a simple idea: everyone deserves access to fresh, quality groceries without the hassle of long shopping trips. We started by partnering with local farmers and suppliers in Nairobi, creating a platform that benefits both consumers and producers.",
    techStack: ["React.js", "Nest.js", "TypeScript", "PostgreSQL"],
    liveLink: "https://fresh-cart-beta-hazel.vercel.app/",
    githubLink: "https://github.com/RivoltaAlpha/FreshCart",
    imageSrc: "/images/freshcart.png"
  },
  {
    title: "CareerWiz",
    description: "This Application uses Machine Learning, to develop a website that provides students with personalized career guidance based on their personal interests and academic performance, bridging the gap of lack of personalized guidance for students. (Website)",
    techStack: ["React.js", "Node.js", "Hono", "PostgreSQL"],
    liveLink: "https://careerwiz-frontend.vercel.app/",
    githubLink: "https://github.com/RivoltaAlpha/careerwiz-frontend",
    imageSrc: "/images/careerwiz.png"
  },
  {
    title: "AniRent",
    description: "A Vehicle Management System application, which allows users to manage vehicle rentals, including bookings, payments, and fleet management.",
    techStack: ["React.js", "TailwindCSS", "Redux", "TypeScript"],
    liveLink: "https://ashy-mud-06186b40f.5.azurestaticapps.net/",
    githubLink: "https://github.com/RivoltaAlpha/vms-frontend",
    imageSrc: "/images/anirent.png"
  },
  {
    title: "Computer Society of Kirinyaga",
    description: "The official website of the Computer Society of Kirinyaga, dedicated to promoting technology-related events, sharing resources in Kirinyaga university Tech communities.",
    techStack: ["React.js", "TailwindCSS", "Node.js", "Drizzle"],
    liveLink: "https://computersocietyofkirinyaga.org/",
    githubLink: "https://github.com/Computer-Society-Of-Kirinyaga/csk-frontend",
    imageSrc: "/images/csk.png"
  },
  {
    title: "Kilele Bracelets",
    description: "Health bracelets support individuals with various medical conditions, enabling them to monitor specific patterns, and can alert for allergies or seizures, proactively managing various health conditions.As unprecedented, health bracelets instantly provide first responders with critical medical details like allergies, medications, ailments, and emergency contacts including name and next-of-kin's vital information.",
    techStack: ["React.js", "TailwindCSS", "Django", "MongoDB"],
    liveLink: "https://kilele-bracelets.vercel.app/",
    githubLink: "https://github.com/RivoltaAlpha/Kilele-Bracelets",
    imageSrc: "/images/kilele.png"
  },
  {
    title: "DevSpace",
    description: "DevSpace, a space where developers can find understanding, support, and resources for the unique mental health challenges in tech.",
    techStack: ["React.js", "Nest.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    liveLink: "https://dev-space-sandy.vercel.app/about",
    githubLink: "https://github.com/RivoltaAlpha/devSpace",
    imageSrc: "/images/devspace.png"
  },
  {
    title: "Cyber Eyes Networks",
    description: "A web application dedicated to showcasing cybersecurity content and resources. It offers various tools and techniques related to cybersecurity education.",
    techStack: ["React.js", "Node.js", "Hono", "PostgreSQL"],
    liveLink: "https://cybereyesnetworks.co.ke/",
    githubLink: "https://github.com/RivoltaAlpha/Cyber-Eyes",
    imageSrc: "/images/cyber.png"
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
