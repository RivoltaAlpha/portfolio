import React, { useState } from 'react';
import { MiniHeader } from '../components/Mini-Header';
import ServicesData from '../data/servicesData';
import ContactSection from '../components/Contact';


const ServicesPage: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white  ">
      <MiniHeader />
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">My Services</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {ServicesData.map((service, index) => (
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

        {/* Request Service Button */}
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="bg-teal-600 text-white mt-10 py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition duration-300 ease-in-out">
            Request a Service
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="rounded-lg shadow-lg relative w-[900px] ">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white hover:text-gray-700">
              &times;
            </button>
            <ContactSection />
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicesPage;
