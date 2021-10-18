import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface PrayHandsSvgProps extends SvgProps {
  color?: string;
}

const PrayHandsSvg: React.FC<PrayHandsSvgProps> = ({ color = '#72A8BC' }) => {
  return (
    <Svg
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2938 0.0425749C17.7765 -0.0611238 18.2562 0.0406828 18.6134 0.172519C18.9824 0.308688 19.3527 0.525302 19.637 0.798617C20.291 1.42734 20.9578 2.56687 21.4789 3.54904C21.9169 4.37436 22.3103 5.20444 22.5669 5.74601C22.6278 5.87448 22.681 5.98667 22.7252 6.07877C23.005 6.66074 23.322 7.6193 23.5924 8.5676C23.8672 9.5311 24.1171 10.5665 24.2494 11.3346C24.3799 12.091 24.5533 12.7957 24.7208 13.4488L24.786 13.7019C24.8696 14.026 24.9521 14.346 25.0222 14.6488C25.1248 14.6761 25.2327 14.702 25.3466 14.7275C25.4392 14.7481 25.5359 14.7686 25.637 14.7895L25.7869 14.8202C26.1605 14.8961 26.6031 14.9861 27.0038 15.1231C27.4722 15.2834 27.9985 15.5433 28.399 16.0331C28.8127 16.5388 29 17.1751 29 17.9103C29 18.8178 28.8113 19.7237 28.3754 20.4631C27.9272 21.2232 27.2068 21.8133 26.2269 21.9588C25.3689 22.0864 24.5919 21.9253 23.7695 21.6314C23.1787 21.4204 22.4974 21.114 21.7061 20.758L21.6813 20.747C21.4243 20.6313 21.1559 20.5106 20.8751 20.3864C20.3557 20.1565 19.8733 19.9837 19.3972 19.8133L19.3947 19.8126L19.2849 19.7733C18.7893 19.5958 18.2692 19.4066 17.7963 19.1561C17.3077 18.8972 16.8435 18.5606 16.45 18.0692C16.0582 17.5802 15.7745 16.9851 15.5785 16.2582C15.4073 15.6238 15.3192 14.7144 15.2539 13.8277C15.2235 13.4162 15.1981 13.0112 15.1732 12.6131C15.1405 12.0924 15.1086 11.5836 15.0674 11.0882C14.968 9.89572 14.9518 8.62357 15.2041 7.67856C15.3285 7.21274 15.5594 6.66379 16.036 6.29898C16.3059 6.09232 16.6019 5.98264 16.9044 5.9495C16.5411 5.05997 16.2666 4.57688 16.0667 4.22489L16.0311 4.16233C15.916 3.9592 15.7804 3.71952 15.6868 3.44687C15.5845 3.14939 15.5439 2.85434 15.5439 2.51798C15.5439 2.29514 15.6033 2.05905 15.6547 1.89066C15.7145 1.69498 15.8009 1.47269 15.9135 1.2537C16.024 1.03867 16.1761 0.794955 16.3788 0.580844C16.5773 0.371005 16.88 0.131503 17.2938 0.0425749ZM20.2224 10.5995C20.1888 10.4171 20.1504 10.2224 20.1068 10.0204C20.0896 9.93003 20.0715 9.83756 20.0529 9.7432C19.8884 8.91483 19.6631 7.91764 19.373 6.94443C19.2402 6.49875 19.0938 6.05814 18.9333 5.64102C18.4354 4.34653 18.0557 3.6774 17.8041 3.23423L17.7712 3.17642C17.6459 2.95523 17.6029 2.86881 17.5781 2.79673C17.5634 2.75376 17.5472 2.69333 17.5444 2.56064C17.5487 2.54123 17.556 2.51236 17.5674 2.47519C17.5955 2.3834 17.6384 2.27262 17.6921 2.16831C17.7268 2.10086 17.7596 2.04831 17.7874 2.00992C17.8251 2.01761 17.8702 2.03012 17.9209 2.0488C18.073 2.10495 18.1952 2.18686 18.251 2.24045C18.6411 2.61551 19.1744 3.47299 19.7122 4.48648C20.1261 5.26645 20.4933 6.04093 20.7511 6.58475L20.8705 6.83615L20.9227 6.94528C21.1229 7.36179 21.4017 8.17838 21.6691 9.11612C21.9321 10.0387 22.1624 11.0002 22.2786 11.6743C22.4232 12.514 22.6136 13.2833 22.7834 13.9455L22.8508 14.2076C22.8914 14.3652 22.9297 14.5138 22.9652 14.6544C23.0555 15.0118 23.1279 15.3174 23.1749 15.5862L23.2694 16.1266L23.7759 16.3373C24.2739 16.5444 24.7993 16.6589 25.233 16.7484L25.3892 16.7804C25.7812 16.8607 26.0867 16.9232 26.3562 17.0155C26.6478 17.1152 26.7815 17.2142 26.851 17.2992C26.9072 17.3681 27 17.5222 27 17.9103C27 18.5644 26.8607 19.0943 26.6526 19.4474C26.4567 19.7796 26.2173 19.9383 25.933 19.9806C25.5271 20.041 25.1041 19.9845 24.4424 19.748C23.9326 19.5659 23.3568 19.307 22.5963 18.9652C22.319 18.8404 22.017 18.7047 21.6848 18.5576C21.0946 18.2964 20.5463 18.1003 20.076 17.9322L19.9594 17.8905C19.4473 17.707 19.0596 17.562 18.7327 17.3888C18.4214 17.2239 18.1937 17.0471 18.0111 16.8191C17.8267 16.5887 17.65 16.2583 17.5094 15.7372C17.3956 15.3154 17.3158 14.5935 17.2484 13.6805C17.222 13.3236 17.1973 12.9309 17.1721 12.5321V12.5295C17.1373 11.9796 17.1017 11.4179 17.0605 10.9222C16.9634 9.75614 16.9796 8.78171 17.1365 8.19455C17.1613 8.1016 17.1857 8.03372 17.2063 7.9852C17.2262 8.00406 17.2543 8.03342 17.2892 8.07761C17.3483 8.1525 17.4269 8.27011 17.5183 8.45175C17.7185 8.84922 17.8922 9.37772 18.0345 9.93997C18.0754 10.1015 18.1128 10.2623 18.1469 10.4193C18.2343 10.878 18.3015 11.2761 18.3489 11.5737C18.3773 11.7525 18.3984 11.8946 18.4125 11.9911L18.428 12.1006L18.4316 12.1275L18.4325 12.1336L18.4326 12.1349C18.5044 12.6776 18.9991 13.0616 19.5426 12.9967C20.0862 12.9316 20.4764 12.4417 20.4183 11.8974L19.424 12.0038C20.4183 11.8974 20.4183 11.8974 20.4183 11.8974L20.4181 11.8955L20.4177 11.8918L20.4164 11.8797L20.4114 11.8369C20.4071 11.8003 20.4009 11.7479 20.3923 11.682C20.3754 11.5503 20.3497 11.3634 20.3143 11.1384C20.2891 10.9775 20.2585 10.7956 20.2224 10.5995ZM11.7062 0.042697C11.2235 -0.0610017 10.7438 0.0408049 10.3866 0.172641C10.0176 0.30881 9.64734 0.525424 9.36304 0.798739C8.70898 1.42746 8.04224 2.56699 7.52112 3.54917C7.08313 4.37448 6.6897 5.20456 6.43311 5.74613C6.37219 5.87461 6.31897 5.98679 6.27478 6.07889C5.995 6.66086 5.67798 7.61942 5.40759 8.56772C5.13281 9.53122 4.88293 10.5666 4.75061 11.3347C4.62012 12.0912 4.44666 12.7959 4.27917 13.4489L4.21399 13.702C4.13037 14.0261 4.04785 14.3462 3.97778 14.6489C3.79199 14.6985 3.58838 14.7431 3.36304 14.7896L3.21313 14.8203C2.83948 14.8962 2.39685 14.9862 1.99622 15.1233C1.52783 15.2835 1.00146 15.5434 0.600952 16.0332C0.187256 16.5389 0 17.1753 0 17.9104C0 18.818 0.188721 19.7239 0.624634 20.4632C1.07275 21.2234 1.79321 21.8134 2.77307 21.959C3.6311 22.0865 4.40808 21.9254 5.23047 21.6316C5.82129 21.4205 6.50256 21.1141 7.29395 20.7582C7.55835 20.6393 7.83508 20.5147 8.12488 20.3866C8.64429 20.1566 9.12671 19.9839 9.60278 19.8134L9.60535 19.8127L9.71509 19.7734C10.2107 19.5959 10.7308 19.4067 11.2037 19.1562C11.6923 18.8973 12.1565 18.5608 12.55 18.0693C12.9418 17.5803 13.2255 16.9852 13.4215 16.2583C13.5927 15.6239 13.6808 14.7146 13.7461 13.8279C13.7606 13.6313 13.7739 13.4363 13.7866 13.2428C13.8005 13.0311 13.8137 12.8213 13.8268 12.6133C13.8595 12.0925 13.8914 11.5837 13.9326 11.0884C14.032 9.89585 14.0482 8.62369 13.7959 7.67868C13.6715 7.21286 13.4406 6.66391 12.964 6.29911C12.6941 6.09244 12.3981 5.98276 12.0956 5.94962C12.4589 5.06009 12.7334 4.577 12.9333 4.22501L12.9689 4.16245C13.0304 4.05387 13.0978 3.93485 13.1615 3.80594C13.2169 3.6937 13.2697 3.57395 13.3132 3.44699C13.3912 3.22013 13.4333 2.99466 13.4489 2.75119C13.4537 2.67545 13.4561 2.59793 13.4561 2.5181C13.4561 2.38034 13.4335 2.23758 13.4039 2.10886C13.3857 2.02927 13.365 1.95511 13.3453 1.89078C13.2855 1.6951 13.1991 1.47281 13.0865 1.25382C13.0298 1.1434 12.962 1.02542 12.8821 0.907809C12.8064 0.796359 12.7198 0.685153 12.6212 0.580966C12.4227 0.371127 12.12 0.131625 11.7062 0.042697ZM8.68567 11.1385C8.7345 10.828 8.80273 10.4399 8.89319 10.0205L8.91382 9.91318L8.94714 9.74332C9.11157 8.91495 9.33691 7.91776 9.62695 6.94455C9.75977 6.49887 9.90625 6.05826 10.0667 5.64115C10.5646 4.34665 10.9443 3.67752 11.1959 3.23435L11.2288 3.17655C11.3541 2.95536 11.3971 2.86893 11.4219 2.79685C11.4366 2.75388 11.4528 2.69345 11.4556 2.56076L11.4501 2.53775C11.4459 2.52079 11.4401 2.49985 11.4326 2.47531C11.4045 2.38352 11.3616 2.27274 11.3079 2.16843C11.2859 2.12583 11.2648 2.08914 11.2451 2.0582C11.2338 2.04019 11.2229 2.02414 11.2126 2.01004C11.1749 2.01773 11.1298 2.03025 11.0791 2.04892C10.927 2.10507 10.8048 2.18698 10.749 2.24057C10.3589 2.61563 9.82556 3.47312 9.28784 4.48661C9.08948 4.86038 8.90186 5.23294 8.73181 5.57944C8.54712 5.9559 8.38318 6.30167 8.2489 6.58487C8.18457 6.72061 8.12708 6.84189 8.07727 6.94541C7.87708 7.36191 7.59827 8.1785 7.33093 9.11624C7.06787 10.0388 6.83765 11.0003 6.72144 11.6744C6.57678 12.5141 6.38635 13.2834 6.21655 13.9457L6.14917 14.2077C6.00549 14.7657 5.8905 15.2118 5.82507 15.5863L5.73059 16.1267L5.22412 16.3374C4.72607 16.5445 4.20068 16.659 3.76697 16.7485L3.61084 16.7805C3.21875 16.8608 2.91333 16.9233 2.6438 17.0156C2.35217 17.1153 2.21851 17.2143 2.14905 17.2993C2.09277 17.3683 2 17.5223 2 17.9104C2 18.5645 2.13928 19.0945 2.34741 19.4475C2.54333 19.7798 2.78271 19.9384 3.06702 19.9807C3.4729 20.041 3.89587 19.9846 4.55762 19.7481C5.06604 19.5665 5.64026 19.3083 6.39783 18.9679L6.40369 18.9653C6.68103 18.8405 6.98303 18.7048 7.31519 18.5577C7.9054 18.2965 8.45374 18.1004 8.92395 17.9323L9.04065 17.8906C9.55273 17.7071 9.94043 17.5621 10.2673 17.3889C10.4423 17.2962 10.5908 17.1998 10.7197 17.0926C10.8203 17.0091 10.9089 16.919 10.9889 16.8192C11.1733 16.5888 11.35 16.2584 11.4906 15.7373C11.6044 15.3155 11.6842 14.5936 11.7516 13.6806C11.7699 13.432 11.7875 13.166 11.8049 12.8927L11.8279 12.5322C11.8627 11.9814 11.8982 11.4188 11.9395 10.9223C12.0366 9.75626 12.0204 8.78183 11.8635 8.19467C11.8387 8.10172 11.8143 8.03385 11.7937 7.98532C11.765 8.01255 11.7192 8.06156 11.6608 8.14548C11.6099 8.21836 11.5493 8.3176 11.4817 8.45188C11.2815 8.84934 11.1078 9.37784 10.9655 9.9401C10.9246 10.1017 10.8872 10.2624 10.8531 10.4194C10.7657 10.8781 10.6985 11.2762 10.6511 11.5738C10.6227 11.7527 10.6016 11.8947 10.5875 11.9912L10.572 12.1007L10.5684 12.1277L10.5675 12.1338L10.5674 12.135C10.4956 12.6777 10.0009 13.0617 9.4574 12.9968C8.91382 12.9317 8.52356 12.4419 8.58167 11.8976L9.57605 12.0039C8.58167 11.8976 8.58167 11.8976 8.58167 11.8976L8.58191 11.8956L8.58228 11.8919L8.58362 11.8799L8.58862 11.837L8.59595 11.7752L8.60767 11.6821C8.62463 11.5504 8.65027 11.3635 8.68567 11.1385Z"
        fill={color}
      />
    </Svg>
  );
};

export default PrayHandsSvg;
