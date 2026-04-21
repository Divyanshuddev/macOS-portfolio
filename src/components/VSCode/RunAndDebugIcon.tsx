import React from 'react';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

export const RunAndDebugIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path 
      d="M4 4.5 V 13.5 L 11.5 9 Z" 
      fill="currentColor" 
    />
    <path 
      d="M14 10.5 C 12 10.5 11 12 11 14.5 C 11 17 12 19.5 15 19.5 C 18 19.5 19 17 19 14.5 C 19 12 18 10.5 16 10.5 Z M16 8.5 C 16 7.5 15 7.5 15 7.5 C 15 7.5 14 7.5 14 8.5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M11 13 L 9 12 M11 16 L 9 16.5 M19 13 L 21 12 M19 16 L 21 16.5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M14 8.5 L 13 6.5 M16 8.5 L 17 6.5" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </SvgIcon>
);