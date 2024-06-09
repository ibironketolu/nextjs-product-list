// components/Header.tsx
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="text-3xl">Product List</h1>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/esinniobiwaquareeb" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/muftyoftech" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header
