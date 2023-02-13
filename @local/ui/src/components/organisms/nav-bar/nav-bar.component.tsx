import Logo from '../../atoms/logo/logo.component';
import { Menu } from '../../molecules/menu/menu';
import SearchToggle from '../../molecules/search-toggle/search-toggle';

/* eslint-disable-next-line */
export interface NavBarProps {
  search?: boolean;
  searchComponent?: JSX.Element;
  icon?: boolean;
  menu?: boolean;
  links?: string[];
  logoTw?: string;
  logoTxt?: boolean;
  logoSize?: number[];
  searchIconSize?: number | string;
  menuIconSize?: number | string;
  tw?: string;
  twSearchOverlay?: string;
  twMenuOverlay?: string;
}

export function NavBar({
  tw,
  logoTw,
  logoTxt,
  logoSize,
  menuIconSize,
  searchIconSize,
  twMenuOverlay,
  twSearchOverlay,
}: NavBarProps) {
  return (
    <nav className={tw}>
      <SearchToggle size={searchIconSize} twSearchOverlay={twSearchOverlay} />
      <Logo tw={logoTw} hasText={logoTxt} size={logoSize}></Logo>
      <Menu size={menuIconSize} twMenuOverlay={twMenuOverlay}></Menu>
    </nav>
  );
}

export default NavBar;
