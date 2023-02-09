export interface BaseLink {
  href: string;
  name?: string;
  openNewTab: boolean;
  children: JSX.Element | string | number;
  tw?: string;
}