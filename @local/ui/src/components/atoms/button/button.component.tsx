// libs/shared/ui/src/lib/topic-button/topic-button.tsx
import React, { useEffect, useState } from "react";

export interface TopicButtonProps {
  topicName?: any;
  icon?: string;
  tw?: string;
  bold?: boolean;
  size?: number | string;
  onClick?: (topicName: string) => void;
  children?: JSX.Element | JSX.Element[];
}

export function TopicButton({
  topicName,
  icon,
  tw,
  bold,
  size,
  onClick,
  children,
}: TopicButtonProps) {
  const onClickHandler = () => {
    if (onClick) {
      onClick(topicName);
    } else {
      console.warn(
        `no click handler defined on topic button with topic ${topicName}`
      );
    }
  };

  return (
    <button className={`${tw}`} onClick={onClickHandler}>
      <i className={icon} style={{ fontSize: size }}></i>
      {children}
      <h2 className={`${bold ? "text-bold" : ""}`}>{topicName}</h2>
    </button>
  );
}

export default TopicButton;
