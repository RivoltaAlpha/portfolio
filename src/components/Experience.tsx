import React from 'react';

export const Experience: React.FC = () => (
  <section id='experience' className="py-20 bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Teach2Give */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:translate-y-2 hover:shadow-2xl transition-transform duration-500 flex items-center space-x-4">
          <img 
            src="/images/t2g.jpeg"
            alt="Teach2Give Logo" 
            className="w-16 h-16 object-contain rounded-full" 
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-500">Software Development Trainee at Teach2Give</h3>
            <p className="mb-2 text-sm text-gray-400">May 2024 - August 2024</p>
            <p>
              I attended a software training internship where I learned how to develop full-stack applications using React, Node, Hono, PostgreSQL, TypeScript, and Azure Cloud.
            </p>
          </div>
        </div>

        {/* Card 2: ICTA */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:translate-y-2 hover:shadow-2xl transition-transform duration-300 flex items-center space-x-4">
          <img 
            src="/images/icta.jpeg" 
            alt="ICTA Logo" 
            className="w-16 h-16 object-contain rounded-full" 
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-500">Software Development Trainee at ICTA (ICT Authority of Kenya)</h3>
            <p className="mb-2 text-sm text-gray-400">May 2023 - August 2023</p>
            <p>
              I attended a software training internship where I learned how to develop full-stack applications using Laravel (a PHP framework) and SQL for the database.
            </p>
          </div>
        </div>

        {/* Card 3: CSK Leader */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:translate-y-2 hover:shadow-2xl transition-transform duration-300 flex items-center space-x-4">
          <img 
            src="/images/csk.jpeg" 
            alt="CSK Logo" 
            className="w-16 h-16 object-contain rounded-full" 
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-500">Leader at Computer Society of Kirinyaga (CSK)</h3>
            <p className="mb-2 text-sm text-gray-400">September 2022 - Present</p>
            <p>
               I currently serve as Secretary General, the Machine Learning and AI track lead and a web mentor where I organize events in the community to 
               guide students and enthusiasts in learning and applying machine learning techniques as well as well development skills.
               I also lead the KyU Tech Ladies initiative, a women-in-tech community inside CSK.
            </p>
          </div>
        </div>

        {/* Card 4: Microsoft Learn Student Ambassador */}
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg transform hover:translate-y-2 hover:shadow-2xl transition-transform duration-500 flex items-center space-x-4">
          <img 
            src="/images/mlsa.jpeg"
            alt="MLSA Logo" 
            className="w-16 h-16 object-contain rounded-full" 
          />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-teal-500">Microsoft Learn Student Ambassador</h3>
            <p className="mb-2 text-sm text-gray-400">January 2023 - Present</p>
            <p>
              As a Beta MLSA, I mentor students on Azure Cloud, AI, Web Development, and Machine Learning. I organize events and workshops to help students leverage technology for impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
