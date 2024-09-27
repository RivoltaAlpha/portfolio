import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_fqokqqs', 'template_cbmiske', form.current, 'otPYqnlaikdWHDuX_')
        .then(
          () => {
            toast.success('Message sent successfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            // Clear the form
            setFormData({
              fullName: '',
              email: '',
              subject: '',
              message: '',
            });
          },
          (error) => {
            toast.error('Failed to send message. Please try again later.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    return (
      <section className="bg-gray-800 text-white py-10">
        <ToastContainer />
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
            <span className="mr-2">📧</span> Contact Me
          </h2>
  
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            {/* Left Side: Contact Info */}
            <div className="md:w-1/3 space-y-4">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500 text-xl">📍</span>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p>Kutus, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500 text-xl">✉️</span>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>mwanikitiffany@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500 text-xl">📞</span>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>(+254) 797677629</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Side: Contact Form */}
            <div className="md:w-2/3 bg-gray-900 p-6 rounded-lg shadow-lg mt-8 md:mt-0">
              <h3 className="text-teal-500 font-semibold text-lg mb-6">Reach Out!</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;