import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 150, height = 50 }) => {
  return (
    <div style={{ width, height }} className="flex items-center">
      <div className="flex items-center">
        <div className="relative">
          <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-[#124E66] font-bold text-xl tracking-wider">L</div>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#124E66] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">WR</span>
          </div>
        </div>
        
        <div className="ml-4">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-white">Local</span>
            <div className="mx-2 w-1.5 h-1.5 rounded-full bg-[#748D92]"></div>
            <span className="text-lg text-[#D3D9D4]">Web</span>
          </div>
          <span className="text-sm font-medium text-[#748D92]">Refresh</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;