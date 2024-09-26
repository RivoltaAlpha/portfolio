import React from 'react';

export const About: React.FC = () => (
  <section id="about" className="py-16 bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
      <div className="space-y-4">
        <p className="text-sm leading-relaxed">
          I am a Computer Science student from Kenya with a robust background in various technological domains, including software development, database management, web programming, machine learning, and data science.
          I am passionate about continuously seeking new challenges and opportunities for growth.
        </p>
        <p className="text-sm leading-relaxed">
          When I'm not immersed in my studies or working on projects, I enjoy skating and playing Rollball. These activities not only keep me active but also help me maintain a balanced lifestyle.
        </p>
        <p className="text-sm leading-relaxed">
          I am eager to contribute to cutting-edge projects and collaborate with like-minded professionals to drive technological advancements by making use of my diverse skill set and a strong drive for innovation.
        </p>
      </div>
      <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Skills and Experience</h3>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li>Software Development: Proficient in multiple programming languages and development frameworks.</li>
        <li>Database Management: Experienced in designing, implementing, and managing databases.</li>
        <li>Web Programming: Skilled in creating dynamic and responsive web applications.</li>
        <li>Machine Learning & Data Science: Knowledgeable in applying machine learning algorithms and data analysis techniques to solve real-world problems.</li>
      </ul>
    </div>
  </section>
);