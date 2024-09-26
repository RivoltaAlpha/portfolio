export const Education: React.FC = () => (
  <section className="py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
        {/* Card for Kirinyaga University */}
        <div className=" bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <img src="https://th.bing.com/th/id/OIP.6qKyfSbP2ccA8OOLdh-bCwHaHa?w=166&h=180&c=7&r=0&o=5&pid=1.7"alt= "Kirinyaga University"className="rounded-md mb-4 h-48 w-full object-cover"/>
          <h3 className="text-xl font-semibold mb-4">Kirinyaga University</h3>
          <p className="text-whitw">
            Bachelor's Degree in Computer Science. Focused on software engineering, data structures, and web development.
          </p>
        </div>

        {/* Card for Teach2give Software Training */}
        <div className=" bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <img src="https://th.bing.com/th?id=OIP.YEpxxIGDjjh60yLcyBNlXwAAAA&w=280&h=65&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"alt= "Teach2give"className="rounded-md mb-4 h-48 w-full object-cover"/>
          <h3 className="text-xl font-semibold mb-4">Teach2give Software Training</h3>
          <p className="text-whitw">
            Intensive software training program aimed at equipping participants with practical skills in full-stack web development.
          </p>
        </div>
      </div>
    </div>
  </section>
);
