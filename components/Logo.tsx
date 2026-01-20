import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; 
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto", lightMode = false }) => {
  const primaryColor = lightMode ? "#ffffff" : "#0d3880";

  return (
    <svg 
      viewBox="0 0 320 85" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="Adlai Community Hospital Logo"
    >
      {/* Icon Section: Stylized 'A' with Medical Cross */}
      <g transform="translate(0, 5)">
        {/* The 'A' Shape (Blue) - Abstract curved shape */}
        <path 
          d="M15 65 L35 15 L55 65 H42 L35 45 L28 65 H15 Z" 
          fill={primaryColor}
          stroke={primaryColor}
          strokeWidth="8"
          strokeLinejoin="round"
        />
        <path 
          d="M10 75 Q35 75 60 75" 
          stroke={primaryColor} 
          strokeWidth="8" 
          strokeLinecap="round"
        />
        
        {/* Medical Cross (Green) - Intertwined */}
        <rect x="25" y="0" width="20" height="70" rx="4" fill="#4abf53" stroke="white" strokeWidth="3" />
        <rect x="0" y="25" width="70" height="20" rx="4" fill="#4abf53" stroke="white" strokeWidth="3" />
      </g>

      {/* Text Section */}
      <g transform="translate(85, 0)">
        {/* ADLAI */}
        <text x="0" y="45" fontFamily="sans-serif" fontWeight="900" fontSize="48" fill={primaryColor} letterSpacing="-1">
          ADLAI
        </text>
        
        {/* COMMUNITY HOSPITAL */}
        <text x="2" y="72" fontFamily="sans-serif" fontWeight="700" fontSize="19" fill="#4abf53" letterSpacing="0.5">
          COMMUNITY HOSPITAL
        </text>
      </g>
    </svg>
  );
};

export default Logo;