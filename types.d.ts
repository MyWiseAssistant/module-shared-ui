/// <reference types="styled-jsx" />
declare module '*.scss';

declare module '*.png';
declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module 'video-react';

interface Navigator {
  userAgentData: {
    platform: string;
  };
}
