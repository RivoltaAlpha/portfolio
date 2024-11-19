import React from 'react';
import { MiniHeader } from '../components/Mini-Header';
import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaReact, FaLaravel, FaNodeJs, FaGitAlt, FaDocker, FaDatabase, FaLinux, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiSass, SiDjango, SiFlask, SiMicrosoftazure, SiMysql, SiPostgresql, SiPandas, SiNumpy, SiScipy, SiScikitlearn, SiTensorflow, SiPytorch, SiKeras } from 'react-icons/si';
import { SiPlotly, SiJupyter } from 'react-icons/si';

import { NavLink } from 'react-router-dom';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'TypeScript','PHP', 'Scss', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React.js', 'Laravel', 'Node.js', 'Django', 'Flask'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Bash', 'Azure', 'Linux'],
  },
  {
    category: 'Databases',
    skills: ['SQL','MySQL', 'Cosmos DB', 'PostgreSQL'], 
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'Matplotlib', 'Python', 'Jupyter Notebook', 'Numpy', 'Scipy', ],
  },
  {
    category: 'Machine Learning',
    skills: ['Scikit-Learn', 'Azure Machine Learning', 'Tensorflow', 'PyTorch', 'Keras'],
  },
];

// Map each skill to a specific icon component
const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <FaJs className="text-yellow-500 text-2xl mr-2" />,
  Python: <FaPython className="text-blue-500 text-2xl mr-2" />,
  TypeScript: <SiTypescript className="text-blue-600 text-2xl mr-2" />,
  PHP: <FaPhp className="text-blue-600 text-2xl mr-2" />,
  SCSS: <SiSass className="text-pink-500 text-2xl mr-2" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl mr-2" />,
  CSS: <FaCss3Alt className="text-blue-500 text-2xl mr-2" />,
  React: <FaReact className="text-blue-400 text-2xl mr-2" />,
  "React.js": <FaReact className="text-blue-400 text-2xl mr-2" />,
  Laravel: <FaLaravel className="text-red-600 text-2xl mr-2" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl mr-2" />,
  Django: <SiDjango className="text-green-600 text-2xl mr-2" />,
  Flask: <SiFlask className="text-gray-500 text-2xl mr-2" />,
  Git: <FaGitAlt className="text-orange-600 text-2xl mr-2" />,
  Docker: <FaDocker className="text-blue-600 text-2xl mr-2" />,
  Azure: <SiMicrosoftazure className="text-blue-500 text-2xl mr-2" />,
  Linux: <FaLinux className="text-blue-500 text-2xl mr-2" />,
  SQL: <FaDatabase className="text-blue-500 text-2xl mr-2" />,
  MySQL: <SiMysql className="text-blue-700 text-2xl mr-2" />,
  "Cosmos DB": <FaDatabase className="text-teal-500 text-2xl mr-2" />,
  PostgreSQL: <SiPostgresql className="text-blue-600 text-2xl mr-2" />,
  Pandas: <SiPandas className="text-blue-500 text-2xl mr-2" />,
  Matplotlib: <SiPlotly className="text-blue-500 text-2xl mr-2" />,
  "Jupyter Notebook": <SiJupyter className="text-orange-500 text-2xl mr-2" />,
  Numpy: <SiNumpy className="text-blue-500 text-2xl mr-2" />,
  Scipy: <SiScipy className="text-blue-500 text-2xl mr-2" />,
  Seaborn: <FaPython className="text-blue-500 text-2xl mr-2" />, 
  "Scikit-Learn": <SiScikitlearn className="text-blue-500 text-2xl mr-2" />,
  "Azure Machine Learning": <SiMicrosoftazure className="text-blue-500 text-2xl mr-2" />,
  TensorFlow: <SiTensorflow className="text-orange-500 text-2xl mr-2" />,
  PyTorch: <SiPytorch className="text-red-500 text-2xl mr-2" />,
  Keras: <SiKeras className="text-red-600 text-2xl mr-2" />,
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
        {/* Request Service Button */}
        <div className="flex justify-center">
          <NavLink to={"/services"} className={"bg-teal-600 text-white mt-10 py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"} >
            Request a Service
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
