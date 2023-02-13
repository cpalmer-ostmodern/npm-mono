import React from 'react';
import Link from 'next/link';

export type linkPropDto = {
  href: string;
  name: string;
};

/* eslint-disable-next-line */
export interface NavLinksProps {
  tw?: string;
  links?: linkPropDto[];
  twLink?: string;
}

export function NavLinks({ tw, links, twLink }: NavLinksProps) {
  return (
    <ul className={tw}>
      {links &&
        links?.map(function (item, index) {
          return (
            <li className={twLink} key={index}>
              <Link className={twLink} href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default NavLinks;
