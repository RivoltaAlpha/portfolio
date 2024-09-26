export const Header: React.FC = () => (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Your Name</div>
        <div className="flex space-x-4">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </div>
      </nav>
    </header>
  );