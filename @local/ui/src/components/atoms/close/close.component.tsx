import React from "react";

import Icon from "../../assets/icons/close";

export type IconProps = {
  color?: string;
  size?: number | string;
};

export function CloseMenuIcon({ color = "black", size }: IconProps) {
  return <Icon />;
}

export default CloseMenuIcon;
