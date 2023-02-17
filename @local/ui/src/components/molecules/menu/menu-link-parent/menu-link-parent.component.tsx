import React, { useState } from 'react';
import { SubMenuContainer } from '../sub-menu-container/sub-menu-container.component';
import { SubMenuCounter } from '../../../atoms/sub-menu-counter/sub-menu-counter.component';
import { MenuLink } from '../../../atoms/menu-link/menu-link.component';
import { BaseLinkParent } from '../menu.types';

export interface MenuLinkParentProps extends BaseLinkParent {
  twMenuSubLink?: string;
  twMenuSubLinkCounter?: string;
  twMenuSubLinkWrapper?: string;
  twMenuParentLinkWrapper?: string;
}

export function MenuLinkParent({
  href,
  name,
  openNewTab,
  children,
  sublinks,
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

  const hasSubLinks = sublinks;

  const totalSubLinks = () => {
    if (sublinks) {
      return sublinks.length;
    }
  };

  return (
    <li
      onMouseEnter={handleMenuLinkEnter}
      onMouseLeave={handleMenuLinkLeave}
      className={`
        ${twMenuParentLinkWrapper}
        ${sublinksVisible ? 'before:rotate-90' : 'before:-rotate-90'}
        ${
          hasSubLinks
            ? `before:bg-[url('ArrowLeftIconSVG')] menu-link__parent`
            : ''
        }
      `}
    >
      <div>
        {hasSubLinks && (
          <SubMenuCounter
            totalLinks={totalSubLinks()}
            tw={twMenuSubLinkCounter}
          />
        )}

        {children && (
          <MenuLink isParent href={href} name={name} openNewTab={openNewTab}>
            {children}
          </MenuLink>
        )}
      </div>

      {hasSubLinks && sublinksVisible && (
        <SubMenuContainer
          links={sublinks}
          twMenuSubLink={twMenuSubLink}
          twMenuSubLinkWrapper={twMenuSubLinkWrapper}
        />
      )}
    </li>
  );
}

export default MenuLinkParent;
