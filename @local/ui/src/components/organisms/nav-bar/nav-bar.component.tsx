import Logo from "../../atoms/logo/logo.component";
import { Menu } from "../../molecules/menu/menu";
import SearchToggle from "../../molecules/search-toggle/search-toggle";

/* eslint-disable-next-line */
export interface NavBarProps {
  search?: boolean;
  searchComponent?: JSX.Element;
  icon?: boolean;
  menu?: boolean;
  links?: string[];
  sSize: string;
  logoTxt?: boolean;
  logoSize?: number;
  tw?: string;
  twSearchOverlay?: string;
  twMenuOverlay?: string;
}

export function NavBar({
  tw,
  sSize,
  logoTxt,
  logoSize,
  twMenuOverlay,
  twSearchOverlay,
}: NavBarProps) {
  return (
    <nav className={tw}>
      <SearchToggle twSearchOverlay={twSearchOverlay} />
      <Logo hasText={logoTxt} size={logoSize}></Logo>
      <Menu twMenuOverlay={twMenuOverlay}></Menu>
    </nav>
  );
}

export default NavBar;
