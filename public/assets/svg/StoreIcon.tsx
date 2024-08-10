import React from "react";

const StoreIcon: React.FC<{ height?: number; width?: number }> = ({
  height = 51,
  width = 57,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.1403 20.734L45.0599 20.332H44.65H12.85H12.4401L12.3597 20.734L10.8597 28.234L10.7401 28.832H11.35H46.15H46.7599L46.6403 28.234L45.1403 20.734ZM9.25 33.332V32.832H8.75H6.75V28.3815L9.1599 16.332H48.3401L50.75 28.3815V32.832H48.75H48.25V33.332V47.832H44.25V33.332V32.832H43.75H33.75H33.25V33.332V47.832H9.25V33.332ZM13.25 43.332V43.832H13.75H28.75H29.25V43.332V33.332V32.832H28.75H13.75H13.25V33.332V43.332ZM9.25 12.832V8.83203H48.25V12.832H9.25Z"
        fill="#0173B0"
        stroke="white"
      />
    </svg>
  );
};

export default StoreIcon;
