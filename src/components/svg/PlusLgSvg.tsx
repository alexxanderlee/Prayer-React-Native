import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface PlusLgSvgProps extends SvgProps {
  color?: string;
  size?: number
}

const PlusLgSvg: React.FC<PlusLgSvgProps> = ({ color = '#72A8BC', size = 22 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        d="M10 21a1 1 0 102 0v-9h9a1 1 0 100-2h-9V1a1 1 0 10-2 0v9H1a1 1 0 100 2h9v9z"
        fill={color}
      />
    </Svg>
  );
};

export default PlusLgSvg;
