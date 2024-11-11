import React from 'react';
import { MiniHeader } from '../components/Mini-Header';
import {
  FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaNodeJs,
  FaDocker, FaGitAlt, FaDatabase, FaAws
} from 'react-icons/fa';
import { SiTypescript, SiSass, SiDjango, SiFlask, SiMysql, SiPostgresql, SiMicrosoftazure, SiFirebase } from 'react-icons/si';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'TypeScript', 'Scss', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React.js', 'Laravel', 'Node.js', 'Django', 'Flask'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Bash', 'Azure'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Cosmos DB', 'PostgreSQL'],
  },
  {
    category: 'Data Science',
    skills: ['React', 'Next.js', 'Node.js', 'Express'],
  },
  {
    category: 'Machine Learning',
    skills: ['Git', 'Docker', 'Firebase', 'AWS'],
  },
];

// Map each skill to a specific icon component
const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <FaJs className="text-yellow-500 text-2xl mr-2" />,
  Python: <FaPython className="text-blue-500 text-2xl mr-2" />,
  TypeScript: <SiTypescript className="text-blue-600 text-2xl mr-2" />,
  Scss: <SiSass className="text-pink-500 text-2xl mr-2" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl mr-2" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl mr-2" />,
  React: <FaReact className="text-blue-400 text-2xl mr-2" />,
  'React.js': <FaReact className="text-blue-400 text-2xl mr-2" />,
  Laravel: <FaLaravel className="text-red-600 text-2xl mr-2" />,
  'Node.js': <FaNodeJs className="text-green-500 text-2xl mr-2" />,
  Django: <SiDjango className="text-green-600 text-2xl mr-2" />,
  Flask: <SiFlask className="text-gray-500 text-2xl mr-2" />,
  Git: <FaGitAlt className="text-orange-600 text-2xl mr-2" />,
  Docker: <FaDocker className="text-blue-600 text-2xl mr-2" />,
  Azure: <SiMicrosoftazure className="text-blue-500 text-2xl mr-2" />,
  'MySQL': <SiMysql className="text-blue-700 text-2xl mr-2" />,
  'Cosmos DB': <FaDatabase className="text-teal-500 text-2xl mr-2" />,
  PostgreSQL: <SiPostgresql className="text-blue-600 text-2xl mr-2" />,
  Firebase: <SiFirebase className="text-yellow-500 text-2xl mr-2" />,
  AWS: <FaAws className="text-orange-500 text-2xl mr-2" />,
};

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <MiniHeader />
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {skillsData.map((category, index) => (
              <div key={index} className="bg-gray-200  p-8 flex flex-col items-center text-center rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center">
                      {skillIcons[skill] || <FaDatabase className="text-gray-500 text-2xl mr-2" />}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
