import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface Props extends SvgProps {
  size?: number;
  color?: string;
}

function SvgComponent({ size = 25, color = '#72A8BC' }: Props) {
  return (
    <Svg
      viewBox="0 0 540 540"
      width={size}
      height={size}
    >
      <Path
        d="M496.063 62.299l-46.396-46.4c-21.199-21.199-55.689-21.198-76.888 0L27.591 361.113c-2.17 2.17-3.624 5.054-4.142 7.875L.251 494.268a15.002 15.002 0 0017.48 17.482L143 488.549c2.895-.54 5.741-2.008 7.875-4.143l345.188-345.214c21.248-21.248 21.251-55.642 0-76.893zM33.721 478.276l14.033-75.784 61.746 61.75-75.779 14.034zm106.548-25.691L59.41 371.721 354.62 76.488l80.859 80.865-295.21 295.232zM474.85 117.979l-18.159 18.161-80.859-80.865 18.159-18.161c9.501-9.502 24.96-9.503 34.463 0l46.396 46.4c9.525 9.525 9.525 24.939 0 34.465z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;

