import React, { useState } from "react";
import { TopicButton } from "../../atoms/button";
import { Overlay } from "../../atoms/overlay/overlay.component";

/* eslint-disable-next-line */
export interface MenuProps {
  color?: string;
  size?: string | number;
  twMenuOverlay?: string;
  children?: React.ReactNode | string;
}

export function Menu({
  color = "black",
  size = "2.1rem",
  twMenuOverlay,
}: MenuProps) {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuState = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <TopicButton
        tw="p-3 bg-transparent flex justify-between w-auto text-xl"
        onClick={handleMenuState}
        aria-label="Menu toggle"
        aria-haspopup="true"
        aria-expanded={menuActive}
        icon={menuActive ? "icon icon-cross" : "icon icon-menu1"}
        size="30px"
      ></TopicButton>

      {menuActive && (
        <Overlay active={menuActive} tw={twMenuOverlay}>
          Overlay text...
        </Overlay>
      )}
    </>
  );
}

export default Menu;
