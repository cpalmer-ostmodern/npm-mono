import React from "react";

export type ImageContainerProps = {
  children?: Element;
  desktopImg?: string;
  mobileImg?: string;
  media?: string;
  twImg?: string;
};

const ImageContainer = ({
  desktopImg,
  mobileImg,
  media,
  twImg,
  children,
}: any) => {
  return (
    <picture>
      {children}
      <source media={media} srcSet={desktopImg}></source>
      <img className={twImg} src={mobileImg}></img>
    </picture>
  );
};

/* eslint-disable-next-line */
export type TextContainerProps = {
  title?: string;
  body?: string;
  tw?: string;
  twTitle?: string;
  twBody?: string;
  links?: string[];
};

const TextContainer = ({
  title,
  body,
  tw,
  twTitle,
  twBody,
}: TextContainerProps) => {
  return (
    <div className={tw}>
      <p className={twTitle}>{title}</p>
      <h2 className={twBody}>{body}</h2>
    </div>
  );
};

export type ImageBannerProps = {
  // props are designed to be clear & readable for storybook
  children?: Element;
  title?: string;
  body?: string;
  src?: string;
  tw?: string;
  twTxtBx?: string;
  twTitle?: string;
  twBody?: string;
  desktopImg?: string;
  mobileImg?: string;
  media?: string;
  twImg?: string;
};

export const ImageBanner = ({
  title,
  body,
  tw,
  twTxtBx,
  twTitle,
  twBody,
  desktopImg,
  mobileImg,
  media,
  twImg,
}: ImageBannerProps) => {
  return (
    <ImageContainer
      desktopImg={desktopImg}
      mobileImg={mobileImg}
      media={media}
      twImg={twImg}
    >
      <TextContainer
        tw={twTxtBx}
        twTitle={twTitle}
        twBody={twBody}
        title={title}
        body={body}
      />
    </ImageContainer>
  );
};
