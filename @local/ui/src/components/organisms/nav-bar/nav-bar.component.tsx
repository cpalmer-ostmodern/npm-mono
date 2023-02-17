import Logo from '../../atoms/logo/logo.component';
import { Menu } from '../../molecules/menu/menu';
import SearchToggle from '../../molecules/search-toggle/search-toggle';

import { BaseLinkParent } from '../../molecules/menu/menu.types';

/* eslint-disable-next-line */
export interface NavBarProps {
  search?: boolean;
  searchComponent?: JSX.Element;
  icon?: boolean;
  menu?: boolean;
  links?: BaseLinkParent[];
  logoTw?: string;
  logoTxt?: boolean;
  logoSize?: number[];
  searchIconSize?: number | string;
  menuIconSize?: number | string;
  tw?: string;
  magazineCoverImage?: string;
  twMagazineIssueText?: string;
  magazineIssueNumber?: string;
  magazineIssueDetails?: string;
  twMagazineCoverImage?: string;
  twMagazineIssueNumber?: string;
  twMagazineWrapper?: string;
  twSearchOverlay?: string;
  twMenuOverlay?: string;
  twMenuLinksWrapper?: string;
  twMenuContentWrapper?: string;
  twMenuSubLink?: string;
  twMenuSubLinkCounter?: string;
  twMenuSubLinkWrapper?: string;
  twMenuParentLinkWrapper?: string;
}

export function NavBar({
  tw,
  logoTw,
  logoTxt,
  logoSize,
  menuIconSize,
  searchIconSize,
  twMenuOverlay,

  magazineCoverImage,
  twMagazineIssueText,
  magazineIssueNumber,
  magazineIssueDetails,
  twMagazineCoverImage,
  twMagazineIssueNumber,
  twMagazineWrapper,
  twMenuLinksWrapper,
  twMenuContentWrapper,
  twSearchOverlay,
  links,
  twMenuSubLink,
  twMenuSubLinkCounter,
  twMenuSubLinkWrapper,
  twMenuParentLinkWrapper,
}: NavBarProps) {
  return (
    <nav className={tw}>
      <SearchToggle size={searchIconSize} twSearchOverlay={twSearchOverlay} />
      <Logo tw={logoTw} hasText={logoTxt} size={logoSize}></Logo>
      <Menu
        size={menuIconSize}
        twMenuOverlay={twMenuOverlay}
        links={links}
        magazineCoverImage={magazineCoverImage}
        magazineIssueNumber={magazineIssueNumber}
        magazineIssueDetails={magazineIssueDetails}
        twMagazineCoverImage={twMagazineCoverImage}
        twMagazineIssueText={twMagazineIssueText}
        twMagazineIssueNumber={twMagazineIssueNumber}
        twMagazineWrapper={twMagazineWrapper}
        twMenuLinksWrapper={twMenuLinksWrapper}
        twMenuContentWrapper={twMenuContentWrapper}
        twMenuSubLink={twMenuSubLink}
        twMenuSubLinkCounter={twMenuSubLinkCounter}
        twMenuSubLinkWrapper={twMenuSubLinkWrapper}
        twMenuParentLinkWrapper={twMenuParentLinkWrapper}
      />
    </nav>
  );
}

export default NavBar;
