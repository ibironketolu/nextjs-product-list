// components/Footer.tsx
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      <div className="mb-2 flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/esinniobiwaquareeb" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/muftyoftech" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
      <p>© 2024 Esinniobiwa Quareeb. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
