export type BaseLink = {
  href?: string;
  name?: string;
  openNewTab?: boolean;
  children?: JSX.Element | string | number;
  tw?: string;
};

export interface BaseLinkParent extends Partial<BaseLink> {
  title?: string;
  sublinks?: BaseLink[];
}
