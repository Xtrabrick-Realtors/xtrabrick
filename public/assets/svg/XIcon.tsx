import React from "react";

const XIcon:React.FC<{height?: number; width?: number}> = ({height = 20, width = 21}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 19.7984L12.1787 8.39855L12.1921 8.40923L19.2441 0.238525H16.8875L11.1427 6.88889L6.58068 0.238525H0.400171L7.70208 10.8818L7.7012 10.8809L0 19.7984H2.3566L8.74345 12.3995L13.8195 19.7984H20ZM5.64694 2.01669L16.6207 18.0203H14.7532L3.77059 2.01669H5.64694Z"
        fill="white"
      />
    </svg>
  );
};

export default XIcon;