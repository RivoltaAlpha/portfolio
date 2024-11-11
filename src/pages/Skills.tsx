import React from 'react';
import { MiniHeader } from '../components/Mini-Header';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'TypeScript', 'Scss', 'HTML' , 'CSS'],
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
    category: 'Databases ',
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

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white  ">
        <MiniHeader />
        <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>

            <div className="grid gap-8 md:grid-cols-3">
            {skillsData.map((category, index) => (
                <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                    {category.category}
                </h3>
                <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-700">
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
