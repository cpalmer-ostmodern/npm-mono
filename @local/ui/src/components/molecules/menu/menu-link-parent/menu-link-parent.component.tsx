import React, { useState } from "react";
import { BaseLink } from "../menu.types";

import { SubMenuContainer } from "../sub-menu-container/sub-menu-container.component";
import { SubMenuCounter } from "../../../atoms/sub-menu-counter/sub-menu-counter.component";
import { MenuLink } from "../../../atoms/menu-link/menu-link.component";

import ArrowLeftIconSVG from "../../../assets/icons/arrow-left";

export interface BaseParentLink {
  links?: BaseLink[];
  twMenuSubLink?: string;
  twMenuSubLinkCounter?: string;
  twMenuSubLinkWrapper?: string;
  twMenuParentLinkWrapper?: string;
}

/* eslint-disable-next-line */
export type MenuLinkParentProps = Partial<BaseLink> & BaseParentLink;

export function MenuLinkParent({
  href,
  name,
  openNewTab,
  children,
  links,
  twMenuSubLink,
  twMenuSubLinkCounter,
  twMenuSubLinkWrapper,
  twMenuParentLinkWrapper,
}: MenuLinkParentProps) {
  const [sublinksVisible, setSubLinksVisible] = useState<boolean>(false);

  const handleMenuLinkEnter = () => {
    setSubLinksVisible(true);
  };

  const handleMenuLinkLeave = () => {
    setSubLinksVisible(false);
  };

  const totalSubLinks = () => {
    if (links && links.length > 0) {
      return links.length;
    }
    return 0;
  };

  return (
    <li
      onMouseEnter={handleMenuLinkEnter}
      onMouseLeave={handleMenuLinkLeave}
      className={`
        ${twMenuParentLinkWrapper}
        ${sublinksVisible ? "before:rotate-90" : "before:-rotate-90"}
        before:bg-[url('${ArrowLeftIconSVG}')]
      `}
    >
      <div>
        {links && links.length > 0 && (
          <SubMenuCounter
            totalLinks={totalSubLinks()}
            tw={twMenuSubLinkCounter}
          />
        )}

        <MenuLink
          isParent
          href={href ? href : "#"}
          name={name}
          openNewTab={openNewTab ? openNewTab : true}
        >
          {children ? children : ""}
        </MenuLink>
      </div>

      {links && links.length > 0 && sublinksVisible && (
        <SubMenuContainer
          links={links}
          twMenuSubLink={twMenuSubLink}
          twMenuSubLinkWrapper={twMenuSubLinkWrapper}
        />
      )}
    </li>
  );
}

export default MenuLinkParent;
