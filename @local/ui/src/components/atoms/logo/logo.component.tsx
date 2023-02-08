import React from 'react';
import HiaLogo from '../../assets/logos/hia-logo';
import HiaLogoText from '../../assets/logos/hia-logo-text';

interface LogoProps {
  color?: string;
  size?: number[];
  height?: number | string;
  hasText?: boolean;
  tw?: string;
}

export function Logo({ color = 'black', size, hasText = true, tw }: LogoProps) {
  return (
    <>
      {hasText ? (
        <HiaLogoText
          className={tw}
          fill={color}
          width={size ? size[0] : 72}
          height={size ? size[1] : 72}
          viewBox="0 0 172 172"
          style={{
            minWidth: size && size[0] ? size[0] : 72,
            minHeight: size && size[1] ? size[1] : 144,
          }}
        ></HiaLogoText>
      ) : (
        <HiaLogo
          className={tw}
          fill={color}
          width={size ? size[0] : 72}
          height={size ? size[1] : 72}
          viewBox="0 0 172 172"
          style={{
            minWidth: size && size[0] ? size[0] : 72,
            minHeight: size && size[1] ? size[1] : 144,
          }}
        ></HiaLogo>
      )}
    </>
  );
}

export default Logo;
