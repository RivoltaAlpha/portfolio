export const Header: React.FC = () => (
  <header className="bg-gray-900 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Mwaniki Tifany</div>
      <div className="flex space-x-6">
        <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
        <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
        <a href="#about" className="text-gray-300 hover:text-white">About</a>
        <a href="#community" className="text-gray-300 hover:text-white">Community</a>
      </div>
    </nav>
  </header>
);