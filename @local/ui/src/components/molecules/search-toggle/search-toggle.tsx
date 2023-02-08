import React, { useState } from "react";
import { TopicButton } from "../../atoms/button";
import { Overlay } from "../../atoms/overlay/overlay.component";
import { Input } from "../../atoms/input/input.component";

/* eslint-disable-next-line */
export interface SearchProps {
  color?: string;
  size?: string | number;
  twSearchOverlay?: string;
  children?: React.ReactNode | string;
}

export function SearchToggle({ twSearchOverlay }: SearchProps) {
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
        icon={menuActive ? "icon icon-cross" : "icon icon-magnifier"}
        size="28px"
      ></TopicButton>

      {menuActive && (
        <Overlay active={menuActive} tw={twSearchOverlay}>
          <Input width="250px" placeholder="ابحث هنا"></Input>
        </Overlay>
      )}
    </>
  );
}

export default SearchToggle;
