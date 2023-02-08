import React from "react";

export type IconProps = {
  size?: string;
  icon?: string;
};

export function Icon({ icon, size }: IconProps) {
  return (
    <i
      className={icon ? icon : `icomoon-icon icon-menu-48`}
      style={{ fontSize: size }}
    ></i>
  );
}

export default Icon;
