import React from "react";
import { BaseLink } from "../menu.types";
import MenuLink from "../../../atoms/menu-link/menu-link.component";

import ArrowLeftIconSVG from "../../../assets/icons/arrow-left";

/* eslint-disable-next-line */
export interface SubMenuContainerProps {
  links?: BaseLink[];
  twMenuSubLink?: string;
  twMenuSubLinkWrapper?: string;
}

export function SubMenuContainer({
  links,
  twMenuSubLink,
  twMenuSubLinkWrapper,
}: SubMenuContainerProps) {
  return (
    <ul
      className={`${twMenuSubLinkWrapper} md:before:bg-[url('${ArrowLeftIconSVG}')]`}
    >
      {links?.map((link, index) => {
        return (
          <li className="block" key={`sub-link-${index}`}>
            <MenuLink
              href={link.href}
              name={link.name}
              openNewTab={link.openNewTab}
              tw={twMenuSubLink}
            >
              {link.children}
            </MenuLink>
          </li>
        );
      })}
    </ul>
  );
}

export default SubMenuContainer;
