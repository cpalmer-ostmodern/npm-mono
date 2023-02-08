import React from "react";
import HiaLogo from "../../assets/logos/hia-logo";
import HiaLogoText from "../../assets/logos/hia-logo-text";

interface LogoProps {
  color?: string;
  size?: number | string;
  hasText?: boolean;
}

export function Logo({ color = "black", size, hasText = true }: LogoProps) {
  return (
    <>
      {hasText ? (
        <HiaLogoText
          fill={color}
          width={size}
          viewBox="0 0 172 172"
          style={{
            minWidth: size,
            minHeight: size,
          }}
        ></HiaLogoText>
      ) : (
        <HiaLogo
          fill={color}
          width={size}
          viewBox="0 0 172 172"
          style={{
            minWidth: size,
            minHeight: size,
          }}
        ></HiaLogo>
      )}
    </>
  );
}

export default Logo;
