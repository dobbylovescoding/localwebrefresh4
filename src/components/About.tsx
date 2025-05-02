import React from 'react';
import { MapPin, PhoneCall, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#748D92] rounded-full opacity-10"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#124E66] rounded-full opacity-10"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://i.imgur.com/c30J7tX.jpg" 
                  alt="Conor - Local Web Refresh" 
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-[#124E66] text-white py-2 px-4 rounded-tr-lg flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm font-medium">Hobsonville, Auckland</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-1 bg-[#124E66]"></div>
              <h3 className="ml-4 text-lg font-medium text-[#748D92]">About Me</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212A31] mb-6">
              Local Expertise, <span className="text-[#124E66]">Global Standards</span>
            </h2>
            <p className="text-[#2E3944] mb-6">
              Born and raised in Auckland, I'm passionate about helping local small businesses thrive in the digital landscape. With a background in both military service and software development, I bring a unique combination of discipline, technical expertise, and creative problem-solving to every project.
            </p>
            <p className="text-[#2E3944] mb-6">
              After serving 10 years in the Air Force, I transitioned to study software development full-time. For the past 2 years, I've worked as a tech advisor for a software company building apps and websites for influencers selling nutrition and fitness programming. I also work with a national sport federation, providing web solutions, event filming, and social media content management.
            </p>
            <div className="bg-[#F5F7F6] p-6 rounded-lg mb-6 border-l-4 border-[#124E66]">
              <p className="text-[#212A31] font-medium italic">
                "I believe that local businesses deserve access to high-quality digital solutions at fair and transparent prices. No hidden costs, no technical jargon – just honest advice and quality work."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-[#124E66] hover:bg-[#0d3d50] text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <PhoneCall size={18} className="mr-2" />
                Book a Free Consultation
              </a>
              <a 
                href="#qualifications" 
                className="bg-transparent border-2 border-[#748D92] text-[#2E3944] hover:bg-[#748D92] hover:text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Award size={18} className="mr-2" />
                View My Qualifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;