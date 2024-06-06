import React from "react";

const FacebookIcon: React.FC<{ height?: number; width?: number }> = ({
  height = 33,
  width = 16,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8591 6.09263H15.6539V1.00463C15.1718 0.935297 13.5135 0.779297 11.5823 0.779297C7.55273 0.779297 4.79238 3.42863 4.79238 8.29796V12.7793H0.345703V18.4673H4.79238V32.7793H10.2442V18.4686H14.511L15.1884 12.7806H10.2429V8.86196C10.2442 7.21796 10.6677 6.09263 12.8591 6.09263Z"
        fill="#0173B0"
      />
    </svg>
  );
};

export default FacebookIcon;