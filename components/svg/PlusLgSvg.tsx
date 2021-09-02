/* eslint-disable */
import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const PlusLgSvg = (props: SvgProps) => {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      {...props}
    >
      <Path
        d="M10 21a1 1 0 102 0v-9h9a1 1 0 100-2h-9V1a1 1 0 10-2 0v9H1a1 1 0 100 2h9v9z"
        fill="#72A8BC"
      />
    </Svg>
  );
};

export default PlusLgSvg;