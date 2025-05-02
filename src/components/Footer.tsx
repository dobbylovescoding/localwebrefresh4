import React from 'react';
import Logo from './Logo';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#212A31] text-[#D3D9D4] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo width={180} height={50} />
            <p className="mt-4">
              Professional web design and digital solutions for local Auckland businesses. Fair, transparent pricing with no hidden costs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {['Website Development', 'Website Repair', 'Domain & Hosting', 'Business Email', 'DNS Management', 'Tech Consultation'].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="flex items-center hover:text-white transition-colors">
                    <ChevronRight size={16} className="mr-1" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Qualifications', href: '#qualifications' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-center hover:text-white transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Service Areas</h4>
            <p className="mb-2">Based in Hobsonville, proudly serving:</p>
            <ul className="space-y-1">
              {['North Auckland', 'West Auckland', 'Central Auckland'].map((area, index) => (
                <li key={index} className="flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2E3944] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Local Web Refresh. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-[#748D92] hover:text-white transition-colors mr-4">Privacy Policy</a>
            <a href="#" className="text-[#748D92] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;