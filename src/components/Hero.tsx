import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#212A31]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full transform -skew-y-12 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-full transform skew-y-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-full transform -skew-y-12 bg-gradient-to-r from-transparent to-white/10"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 w-32 h-32 border-2 border-[#748D92] rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -right-4 bottom-4 w-24 h-24 border-2 border-[#124E66] rounded-full opacity-20 animate-pulse delay-500"></div>
            
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <div className="text-white mb-2">Digital Solutions</div>
                <div className="text-[#748D92]">for Auckland</div>
                <div className="text-[#D3D9D4]">Businesses</div>
              </h1>
              
              <p className="text-xl text-[#D3D9D4]/80 mb-10 max-w-lg">
                Professional web design and digital solutions tailored for local businesses. 
                Based in Hobsonville, serving North, West, and Central Auckland.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="group bg-gradient-to-r from-[#124E66] to-[#0d3d50] text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center font-medium"
                >
                  <Phone size={20} className="mr-2" />
                  Book Free Consultation
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="group px-8 py-4 rounded-lg border-2 border-[#748D92] text-[#D3D9D4] hover:bg-[#748D92] hover:text-white transition-all flex items-center justify-center font-medium"
                >
                  View Services
                  <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              {/* Main preview window */}
              <div className="bg-[#2E3944] rounded-xl shadow-2xl p-6 transform hover:scale-[1.02] transition-all duration-500">
                <div className="bg-[#1a2127] rounded-lg overflow-hidden">
                  {/* Browser-like header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[#748D92]/10">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-[#212A31] rounded-full px-4 py-1 text-[#D3D9D4] text-sm text-center max-w-xs mx-auto">
                        www.localwebrefresh.co.nz
                      </div>
                    </div>
                  </div>
                  
                  {/* Content preview */}
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-gradient-to-r from-[#124E66] to-[#0d3d50] rounded-lg w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-[#748D92]/30 rounded w-full"></div>
                      <div className="h-4 bg-[#748D92]/30 rounded w-5/6"></div>
                      <div className="h-4 bg-[#748D92]/30 rounded w-4/6"></div>
                    </div>
                    <div className="h-40 bg-gradient-to-br from-[#D3D9D4]/20 to-[#748D92]/20 rounded-lg"></div>
                    <div className="flex space-x-4">
                      <div className="h-10 bg-[#124E66] rounded-lg w-1/3"></div>
                      <div className="h-10 bg-[#748D92]/30 rounded-lg w-1/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#124E66] rounded-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#748D92] rounded-xl opacity-10 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
