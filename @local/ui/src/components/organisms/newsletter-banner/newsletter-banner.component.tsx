import React from 'react';
import { NewsletterForm } from '../../molecules/forms/newsletter-form';

/* eslint-disable-next-line */
export interface NewsletterBannerProps {
  title?: string;
  text?: string;
  buttonText?: string;
  twTitle?: string;
  twText?: string;
  twTitleWrapper?: string;
  twFormInput?: string;
  twFormCheckbox?: string;
  twFormCheckboxWrapper?: string;
  twFormButton?: string;
  twFormErrorMessage?: string;
  twFormWrapper?: string;
  twContainer?: string;
  twBackground?: string;
}

export function NewsletterBanner({
  title = 'Newsletter',
  text,
  buttonText,
  twTitle,
  twText,
  twTitleWrapper,
  twFormInput,
  twFormCheckbox,
  twFormCheckboxWrapper,
  twFormButton,
  twFormErrorMessage,
  twFormWrapper,
  twContainer,
  twBackground,
}: NewsletterBannerProps) {
  return (
    <div className={twBackground}>
      <div className={twContainer}>
        <div className={twFormWrapper}>
          {text && <div className={twText}>{text}</div>}
          <NewsletterForm
            buttonText={buttonText}
            twFormInput={twFormInput}
            twFormErrorMessage={twFormErrorMessage}
            twFormCheckbox={twFormCheckbox}
            twFormCheckboxWrapper={twFormCheckboxWrapper}
            twFormButton={twFormButton}
          />
        </div>
        <div className={twTitleWrapper}>
          {title && <h2 className={twTitle}>{title}</h2>}
        </div>
      </div>
    </div>
  );
}

export default NewsletterBanner;
