import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; 
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", lightMode = false }) => {
  // Proxied optimized logo URL
  const logoUrl = "https://wsrv.nl/?url=https://raw.githubusercontent.com/paintsilphilip4-bit/adlai-assets/main/Adlai%20Community%20Clinic%20Logo.jpg&w=400&q=80&output=webp";

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <img 
        src={logoUrl}
        alt="Adlai Community Hospital Logo" 
        className={`w-full h-full object-contain select-none ${lightMode ? 'invert mix-blend-screen opacity-90' : 'mix-blend-multiply'}`}
        style={{ 
          filter: lightMode 
            ? 'contrast(1.1) brightness(1.2) grayscale(1)' 
            : 'none'
        }}
        loading="eager" // Logo should load immediately
        width="200"
        height="100"
      />
    </div>
  );
};

export default Logo;