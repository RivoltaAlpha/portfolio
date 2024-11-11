import React from 'react';
import { FaCode, FaChartBar, FaRobot, FaProjectDiagram, FaCloud, FaChalkboardTeacher, FaUserFriends, FaBullhorn } from 'react-icons/fa';
import { MiniHeader } from '../components/Mini-Header';


const servicesData = [
  {
    icon: <FaCode className="text-teal-500 text-4xl justify-center" />,
    title: 'Web Development',
    description: 'Building responsive and interactive websites using modern technologies.',
  },
  {
    icon: <FaChartBar className="text-teal-500 text-4xl" />,
    title: 'Data Analysis',
    description: 'Extracting insights and building data-driven solutions for informed decisions.',
  },
  {
    icon: <FaRobot className="text-teal-500 text-4xl" />,
    title: 'AI and Machine Learning Engineering',
    description: 'Creating intelligent systems that learn and adapt to user needs.',
  },
  {
    icon: <FaProjectDiagram className="text-teal-500 text-4xl" />,
    title: 'Product Management',
    description: 'Driving product vision and strategy for successful project delivery.',
  },
  {
    icon: <FaCloud className="text-teal-500 text-4xl" />,
    title: 'Cloud Services',
    description: 'Leveraging cloud infrastructure to scale and secure your applications.',
  },
  {
    icon: <FaChalkboardTeacher className="text-teal-500 text-4xl" />,
    title: 'Consulting',
    description: 'Providing expertise and guidance to help you achieve your tech goals.',
  },
  {
    icon: <FaUserFriends className="text-teal-500 text-4xl" />,
    title: 'Mentorship & Coaching',
    description: 'Guiding individuals and teams to reach their professional potential.',
  },
  {
    icon: <FaBullhorn className="text-teal-500 text-4xl" />,
    title: 'Social Media Management',
    description: 'Creating and managing content strategies to enhance brand presence.',
  },
];


const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white  ">
      <MiniHeader />
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">My Services</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-100">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-teal-600 mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <button className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
          Request Service
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
