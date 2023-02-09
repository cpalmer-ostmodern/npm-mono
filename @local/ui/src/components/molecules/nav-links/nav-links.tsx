import React from 'react';
import Link from 'next/link';

export type linkPropDto = {
  href: string;
  name: string;
};

/* eslint-disable-next-line */
export interface NavLinksProps {
  tw: string;
  links: linkPropDto[];
}

export function NavLinks(props: NavLinksProps) {
  return (
    <ul className={props.tw}>
      {props.links &&
        props.links?.map(function (item, index) {
          return (
            <li className="" key={index}>
              <Link className="font-primary text-lg" href={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default NavLinks;
