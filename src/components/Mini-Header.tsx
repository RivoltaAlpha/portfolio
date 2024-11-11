export const MiniHeader: React.FC = () => (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Mwaniki Tifany</div>
        <div className="flex space-x-6"> 
          <a href="/" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Home</a>
          <a href="/skills" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Skills</a>
          <a href="/services" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Services</a>
        </div>
      </nav>
    </header>
  );