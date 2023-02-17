import React from 'react';

/* eslint-disable-next-line */
export interface ExternalLinkProps {
  href: string | undefined;
  name?: string;
  openNewTab: boolean;
  classes?: string;
  children: JSX.Element | string | number | undefined;
}

export function ExternalLink({
  href,
  name,
  openNewTab = true,
  classes,
  children,
}: ExternalLinkProps) {
  const targetValue = openNewTab ? '_blank' : '_self';

  return children ? (
    <a
      href={href ? href : '#'}
      title={name}
      target={targetValue}
      rel="noreferrer noopener"
      className={classes}
    >
      {children}
    </a>
  ) : null;
}

export default ExternalLink;
