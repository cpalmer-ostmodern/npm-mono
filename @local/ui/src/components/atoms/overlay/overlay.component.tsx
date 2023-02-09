import { useEffect } from "react";
import React from "react";
import { useScrollLock } from "../../../hooks/use-scroll-lock";

/* eslint-disable-next-line */
export interface OverlayProps {
  tw?: string;
  active: boolean;
  children: string | number | JSX.Element;
}

export function Overlay({ active, children, tw }: OverlayProps) {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (active) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [active, lockScroll, unlockScroll]);

  return <div className={tw}>{children}</div>;
}

export default Overlay;
