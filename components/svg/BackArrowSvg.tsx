/* eslint-disable */
import React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.707 1.707A1 1 0 007.293.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L3.414 9H17a1 1 0 000-2H3.414l5.293-5.293z"
        fill="#72A8BC"
      />
    </Svg>
  );
};

export default SvgComponent;