import React from 'react';
import Link from 'next/link';
import { TopicButton } from '../../atoms/button/button.component';

/* eslint-disable-next-line */
export interface HeroProps {
  title?: string;
  tagline?: string;
  link?: string;
  buttonText?: string;
  bgImage?: string;
  twTitle?: string;
  twTagline?: string;
  twHeroContainer?: string;
  twHeroWrapper?: string;
  twHeroButton?: string;
  twHeroButtonBx?: string;
}

export function Hero({
  title,
  tagline,
  link,
  buttonText,
  bgImage,
  twTitle,
  twTagline,
  twHeroContainer,
  twHeroWrapper,
  twHeroButton,
  twHeroButtonBx,
}: HeroProps) {
  return (
    <div
      className={twHeroWrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={twHeroContainer}>
        <div className="flex flex-col gap-6 md:gap-12">
          {title && (
            <Link href={link ? link : '#'}>
              <h2 className={twTitle}>{title}</h2>
            </Link>
          )}

          {twTagline && <div className={twTagline}>{tagline}</div>}
        </div>

        {buttonText && (
          <div className={twHeroButtonBx}>
            <TopicButton
              topicName={buttonText}
              icon="icon icon-arrow-left"
              tw={twHeroButton}
              size="28px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
