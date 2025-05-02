import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#212A31]/95 backdrop-blur-lg py-2 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo width={180} height={50} />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {['Home', 'Services', 'About', 'Qualifications'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[#D3D9D4] hover:text-white transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#124E66] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </nav>
            
            <a 
              href="#contact"
              className="bg-[#124E66] hover:bg-[#0d3d50] text-white px-6 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center font-medium"
            >
              <Phone size={18} className="mr-2" />
              Contact
            </a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white bg-[#124E66] p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#212A31]/95 backdrop-blur-lg border-t border-[#748D92]/20">
          <div className="container mx-auto px-4 py-4">
            {['Home', 'Services', 'About', 'Qualifications', 'Contact'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-[#D3D9D4] hover:text-white transition-all duration-300 text-lg font-medium border-b border-[#748D92]/10 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;