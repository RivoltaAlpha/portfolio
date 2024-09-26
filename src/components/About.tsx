import React from 'react';

export const About: React.FC = () => (
  <section id="about" className="py-16 bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">About Me</h2>
      
      <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-8 space-y-6 lg:space-y-0">
        {/* About Me Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-teal-300">About Me</h3>
          <p className="text-base leading-relaxed mb-4">
            I am a Computer Science student from Kenya with a robust background in various technological domains, including software development, database management, web programming, machine learning, and data science.
            I am passionate about continuously seeking new challenges and opportunities for growth.
          </p>
          <p className="text-base leading-relaxed mb-4">
            When I'm not immersed in my studies or working on projects, I enjoy skating and playing Rollball. These activities not only keep me active but also help me maintain a balanced lifestyle.
          </p>
          <p className="text-base leading-relaxed">
            I am eager to contribute to cutting-edge projects and collaborate with like-minded professionals to drive technological advancements by making use of my diverse skill set and a strong drive for innovation.
          </p>
        </div>

        {/* Skills Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full lg:w-1/2">
          <h3 className="text-xl font-semibold mb-4 text-teal-300">Skills and Experience</h3>
          <ul className="list-disc list-inside space-y-4 text-base">
            <li>Software Development: Proficient in multiple programming languages and development frameworks.</li>
            <br/>
            <li>Database Management: Experienced in designing, implementing, and managing databases.</li>
            <br/>

            <li>Web Programming: Skilled in creating dynamic and responsive web applications.</li>
            <br/>
            <li>Machine Learning & Data Science: Knowledgeable in applying machine learning algorithms and data analysis techniques to solve real-world problems.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
