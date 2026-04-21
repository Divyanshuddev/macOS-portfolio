import React from "react";

const ConnectToIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 22,
  color = "#3B82F6", 
}) => {
  return (
   <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 3L11 9L19 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 14L17 21L9 27"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ConnectToIcon;