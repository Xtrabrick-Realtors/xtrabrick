import React from 'react';

const CrossIcon: React.FunctionComponent<{
  width?: number;
  height?: number;
  fill?: string;
}> = ({ width = 24, height = 24, fill = 'white' }) => (
  <svg width={width} height={height} fill="none">
    <path
      fill={fill}
      d="M13 10.794 8.707 6.501l4.291-4.293L10.793 0 6.499 4.293 2.206 0 0 2.208l4.291 4.293L0 10.793 2.208 13l4.291-4.293L10.79 13 13 10.794Z"
    />
  </svg>
);

export default CrossIcon;