import React from 'react';
import { Globe, Server, Mail, MessageSquare, AlertCircle, ShieldCheck, Database, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-[#124E66] text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#212A31] mb-3 text-center">{title}</h3>
      <p className="text-[#2E3944] text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe size={24} />,
      title: 'Website Development',
      description: 'Custom, responsive websites built from scratch or improvements to existing sites.',
    },
    {
      icon: <Server size={24} />,
      title: 'Domain & Hosting',
      description: 'Setup and management of domains, hosting, and website infrastructure.',
    },
    {
      icon: <Mail size={24} />,
      title: 'Business Email',
      description: 'Professional email solutions for your business with Google Workspace or Microsoft 365.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Tech Consultation',
      description: 'Expert advice on the best digital solutions for your specific business needs.',
    },
    {
      icon: <AlertCircle size={24} />,
      title: 'Website Repair',
      description: 'Fix broken websites, update outdated components, and resolve technical issues.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'DNS Management',
      description: 'Setup and optimization of DNS records for improved site performance and security.',
    },
    {
      icon: <Database size={24} />,
      title: 'CMS Solutions',
      description: 'Implementation and management of content management systems like WordPress.',
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategy to enhance your online presence and business growth.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#D3D9D4]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212A31] mb-4">Our Services</h2>
          <p className="text-lg text-[#2E3944] max-w-2xl mx-auto">
            Comprehensive digital solutions for local businesses in Auckland. From website development to technical support and everything in between.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-block bg-[#124E66] hover:bg-[#0d3d50] text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
          <p className="mt-4 text-[#2E3944]">
            No obligation, completely free for businesses in North, West, and Central Auckland.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;