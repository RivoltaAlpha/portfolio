export const Header: React.FC = () => (
  <header className="bg-gray-900 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Mwaniki Tifany</div>
      <div className="flex space-x-4"> 
        <a href="#about" className="text-white hover:bg-gray-950 p-2 px-4 rounded">About</a>
        <a href="#experience" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Experience</a>
        <a href="/skills" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Skills</a>
        <a href="/services" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Services</a>
        <a href="#projects" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Projects</a>
        <a href="#community" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Community</a>
        <a href="#contact" className="text-white hover:bg-gray-950 p-2 px-4 rounded">Contact me</a>
      </div>
    </nav>
  </header>
);