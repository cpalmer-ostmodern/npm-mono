import React from 'react';
import { Logo } from '../../atoms/logo/logo.component';
import { NewsletterForm } from '../../molecules/forms/newsletter-form';
import { NavLinks, linkPropDto } from '../../molecules/nav-links';

const navLinks: linkPropDto[] = [
  { name: 'سياسة الخصوصية', href: '#' },
  { name: 'من نحن', href: '#' },
  { name: 'شروط الإستخدام', href: '#' },
  { name: 'الرئيسية', href: '#' },
];

/* eslint-disable-next-line */
export interface FooterProps {
  newsletterTitle?: string;
  newsletterText?: string;
  summary?: string;
  socialMediaTitle?: string;
  socialMediaText?: string;
  copyrightText?: string;
  formButtonText?: string;
  navLinks?: string;
  logoText?: boolean;
  logoSize?: number[];
  twLogo?: string;
  twHeader?: string;
  twText?: string;
  twFormInput?: string;
  twFormCheckbox?: string;
  twFormCheckboxWrapper?: string;
  twFormButton?: string;
  twFormErrorMessage?: string;
  twFormWrapper?: string;
  twNewsletterWrapper?: string;
  twLogoWrapper?: string;
  twSocialWrapper?: string;
  twCopyright?: string;
  twNavLinks?: string;
  twUpperGrid?: string;
  twLowerGrid?: string;
  twContainer?: string;
  twBackground?: string;
}

export function Footer({
  newsletterTitle,
  newsletterText,
  summary,
  socialMediaTitle,
  socialMediaText,
  copyrightText,
  formButtonText,
  logoText,
  logoSize,
  twLogo,
  twHeader,
  twText,
  twFormInput,
  twFormCheckbox,
  twFormCheckboxWrapper,
  twFormButton,
  twFormErrorMessage,
  twFormWrapper,
  twNewsletterWrapper,
  twLogoWrapper,
  twSocialWrapper,
  twCopyright,
  twNavLinks,
  twUpperGrid,
  twLowerGrid,
  twContainer,
  twBackground,
}: FooterProps) {
  return (
    <footer className={twBackground}>
      <div className={twContainer}>
        <div className={twUpperGrid}>
          <div className={twNewsletterWrapper}>
            <div className="flex justify-center mb-4 lg:hidden">
              <Logo tw={twLogo} hasText={logoText} size={logoSize} />
            </div>

            {newsletterTitle && <h5 className={twHeader}>{newsletterTitle}</h5>}

            {newsletterText && <div className={twText}>{newsletterText}</div>}

            <div className={twFormWrapper}>
              <NewsletterForm
                buttonText={formButtonText}
                twFormInput={twFormInput}
                twFormErrorMessage={twFormErrorMessage}
                twFormCheckbox={twFormCheckbox}
                twFormCheckboxWrapper={twFormCheckboxWrapper}
                twFormButton={twFormButton}
              />
            </div>
          </div>
          <div className={twLogoWrapper}>
            <Logo tw={twLogo} hasText={logoText} size={logoSize} />

            {summary && <div className={twText}>{summary}</div>}
          </div>
          <div className={twSocialWrapper}>
            {navLinks && (
              <div className="block lg:hidden">
                <NavLinks tw={twNavLinks} links={navLinks} />
              </div>
            )}

            {socialMediaTitle && (
              <h5 className={twHeader}>{socialMediaTitle}</h5>
            )}

            {socialMediaText && <div className={twText}>{socialMediaText}</div>}

            {/* Add icon component here for social icons...  */}
          </div>
        </div>
        <div className={twLowerGrid}>
          {copyrightText && <div className={twCopyright}>{copyrightText}</div>}

          {navLinks && (
            <div className="hidden lg:block">
              <NavLinks tw={twNavLinks} links={navLinks} />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
