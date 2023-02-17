import { useState } from 'react';

import { TopicButton } from '../../atoms/button';
import { Overlay } from '../../atoms/overlay/overlay.component';
import { MenuLinkParent } from './menu-link-parent/menu-link-parent.component';
import { MenuMagazineCover } from './menu-magazine-cover/menu-magazine-cover.component';

import { BaseLinkParent } from './menu.types';

/* eslint-disable-next-line */
export interface MenuProps {
  color?: string;
  size?: string | number | undefined;
  links?: BaseLinkParent[];
  magazineCoverImage?: string;
  magazineIssueNumber?: number | string;
  magazineIssueDetails?: string;
  twMagazineCoverImage?: string;
  twMagazineIssueText?: string;
  twMagazineIssueNumber?: string;
  twMagazineWrapper?: string;
  twMenuOverlay?: string;
  twMenuLinksWrapper?: string;
  twMenuContentWrapper?: string;
  twMenuSubLink?: string;
  twMenuSubLinkCounter?: string;
  twMenuSubLinkWrapper?: string;
  twMenuParentLinkWrapper?: string;
}

export function Menu({
  color = 'black',
  size = '2.1rem',
  magazineCoverImage,
  magazineIssueNumber,
  magazineIssueDetails,
  twMagazineCoverImage,
  twMagazineIssueText,
  twMagazineIssueNumber,
  twMagazineWrapper,
  twMenuOverlay,
  twMenuLinksWrapper,
  twMenuContentWrapper,
  links,
  twMenuSubLink,
  twMenuSubLinkCounter,
  twMenuSubLinkWrapper,
  twMenuParentLinkWrapper,
}: MenuProps) {
  const [menuActive, setMenuActive] = useState<boolean>(false);

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
        icon={menuActive ? 'icon icon-cross' : 'icon icon-menu1'}
        size={size}
      ></TopicButton>

      {menuActive && (
        <Overlay active={menuActive} tw={twMenuOverlay}>
          <div className={twMenuContentWrapper}>
            {magazineCoverImage && (
              <MenuMagazineCover
                issueNumber={magazineIssueNumber}
                issueDetails={magazineIssueDetails}
                coverImage={magazineCoverImage}
                twCoverImage={twMagazineCoverImage}
                twIssueText={twMagazineIssueText}
                twIssueNumber={twMagazineIssueNumber}
                twWrapper={twMagazineWrapper}
              />
            )}

            {links && (
              <ul className={twMenuLinksWrapper}>
                {links.map((link, index) => {
                  return (
                    <MenuLinkParent
                      key={`link-${index}`}
                      href=""
                      sublinks={link.sublinks}
                      twMenuSubLink={twMenuSubLink}
                      twMenuParentLinkWrapper={twMenuParentLinkWrapper}
                      twMenuSubLinkCounter={twMenuSubLinkCounter}
                      twMenuSubLinkWrapper={twMenuSubLinkWrapper}
                    >
                      {link.title}
                    </MenuLinkParent>
                  );
                })}
              </ul>
            )}
          </div>
        </Overlay>
      )}
    </>
  );
}

export default Menu;
