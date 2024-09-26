import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, liveLink, githubLink, imageSrc }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <img
        src={imageSrc}
        alt={title}
        className="rounded-md mb-4 h-48 w-full object-cover"
      />
      <h3 className="text-2xl font-semibold text-teal-500 mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-900 hover:bg-rose-700 text-white py-2 px-4 rounded-lg"
        >
          Live Link
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
