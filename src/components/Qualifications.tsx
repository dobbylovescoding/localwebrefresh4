import React from 'react';
import { CheckCircle, Award } from 'lucide-react';

interface SoftwareItemProps {
  name: string;
  logo: string;
}

const SoftwareItem: React.FC<SoftwareItemProps> = ({ name, logo }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-3 transition-all hover:shadow-lg">
      <img src={logo} alt={name} className="w-10 h-10 object-contain mr-3" />
      <span className="font-medium text-[#212A31]">{name}</span>
    </div>
  );
};

const Qualifications: React.FC = () => {
  const certifications = [
    {
      title: "Certificate in Technology Product Development Foundations",
      icon: <Award size={20} className="text-[#124E66]" />
    },
    {
      title: "Google Cloud Certified - Associate Google Workspace Administrator",
      icon: <Award size={20} className="text-[#124E66]" />
    }
  ];
  
  const software = [
    { name: "WordPress", logo: "https://cdn-icons-png.flaticon.com/128/174/174881.png" },
    { name: "Wix", logo: "https://cdn-icons-png.flaticon.com/128/5968/5968916.png" },
    { name: "Squarespace", logo: "https://cdn-icons-png.flaticon.com/128/174/174844.png" },
    { name: "Shopify", logo: "https://cdn-icons-png.flaticon.com/128/825/825500.png" },
    { name: "Google Workspace", logo: "https://cdn-icons-png.flaticon.com/128/2965/2965327.png" },
    { name: "Microsoft 365", logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png" },
    { name: "Hubspot", logo: "https://cdn-icons-png.flaticon.com/128/5968/5968872.png" },
    { name: "Freshdesk", logo: "https://cdn-icons-png.flaticon.com/128/6151/6151901.png" },
    { name: "AI Tools", logo: "https://cdn-icons-png.flaticon.com/128/8637/8637854.png" },
    { name: "Canva", logo: "https://cdn-icons-png.flaticon.com/128/5968/5968990.png" },
    { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/128/270/270798.png" },
    { name: "More...", logo: "https://cdn-icons-png.flaticon.com/128/2311/2311523.png" }
  ];

  return (
    <section id="qualifications" className="py-20 bg-[#F5F7F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212A31] mb-4">Qualifications & Expertise</h2>
          <p className="text-lg text-[#2E3944] max-w-2xl mx-auto">
            With formal qualifications and extensive hands-on experience across various platforms and technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#124E66] mb-6 flex items-center">
              <Award size={24} className="mr-2" />
              Certifications & Qualifications
            </h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4 last:mb-0 flex items-start">
                  <div className="mt-1 mr-3">{cert.icon}</div>
                  <div>
                    <h4 className="font-medium text-[#212A31]">{cert.title}</h4>
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <h4 className="font-bold text-[#212A31] mb-4">Professional Experience</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#124E66] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#2E3944]">10 years of service in the New Zealand Air Force</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#124E66] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#2E3944]">Tech advisor for a software company building apps and websites for influencers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="text-[#124E66] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#2E3944]">Web solutions, event filming, and social media content management for a national sport federation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-[#124E66] mb-6">Software Competencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {software.map((item, index) => (
                <SoftwareItem key={index} name={item.name} logo={item.logo} />
              ))}
            </div>
            <div className="mt-8 bg-[#124E66] rounded-lg p-6 text-white">
              <h4 className="font-bold text-xl mb-3">Why This Matters</h4>
              <p className="mb-4">
                As a trained software developer with experience across multiple platforms, I can work with virtually any website builder or technology stack. This versatility means I can:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle size={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span>Update your existing website regardless of platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span>Recommend the best solution based on your needs, not my limitations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mt-1 mr-2 flex-shrink-0" />
                  <span>Provide integration across multiple systems when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;