import React from 'react';
import Link from 'next/link';
import { ExternalLink } from '../external-link/external-link.component';

import { BaseLink } from '../../molecules/menu/menu.types';

export interface MenuLinkProps extends BaseLink {
  isParent?: boolean;
};

export function MenuLink({isParent, href, name, openNewTab, children, tw}: MenuLinkProps) {

  const classNames = `${tw} ${isParent ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`;

  return (
    <>
      {openNewTab &&
        <ExternalLink openNewTab href={href} classes={classNames} name={name}>
          {children}
        </ExternalLink>
      }
  
      {!openNewTab &&
        <Link href={href}>
          <span className={classNames}>{children}</span>
        </Link>
      }
    </>
  );
}

export default MenuLink;