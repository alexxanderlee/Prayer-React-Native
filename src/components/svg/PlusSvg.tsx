/* eslint-disable */
import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface PlusSvgProps extends SvgProps {
  color?: string;
  size?: number
}

const PlusSvg: React.FC<PlusSvgProps> = ({ color = '#72A8BC', size = 16 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1a1 1 0 10-2 0v6H1a1 1 0 000 2h6v6a1 1 0 102 0V9h6a1 1 0 100-2H9V1z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusSvg;
