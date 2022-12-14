import React from 'react';

interface SimpleArrowProps {
  className?: string;
}

const ArrowLeft: React.FC<SimpleArrowProps> = ({ className = '' }) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.09091 11.4205L0.579545 5.90909L6.09091 0.397727L7.26136 1.55682L3.75568 5.0625H12.2727V6.75568H3.75568L7.26136 10.2557L6.09091 11.4205Z"
        fill="#666666"
      />
    </svg>
  );
};

export default ArrowLeft;
