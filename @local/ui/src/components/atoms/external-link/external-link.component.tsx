import React from "react";

/* eslint-disable-next-line */
export interface ExternalLinkProps {
  href: string;
  name?: string;
  openNewTab: boolean;
  classes?: string;
  children: JSX.Element | string | number;
}

export function ExternalLink({href, name, openNewTab = true, classes, children}: ExternalLinkProps) {

  const targetValue = openNewTab ? '_blank' : '_self';

  return (
    <a
      href={href}
      title={name}
      target={targetValue}
      rel='noreferrer noopener'
      className={classes}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
