'use client';

import { Suspense } from 'react';
import { Footer } from 'srmg-dev-ui-003';
import './global.css';
import '@splidejs/react-splide/css';

// disable dir = direction for now due to alignment issues
// import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({
    lng,
  }));
}

export default function RootLayout({
  children,
  params: { lng },
}) {
  return (
    // dir={dir(lng)}
    <html lang={lng}>
      <head />
      <body>
        {children}
        <Suspense>
          <Footer
            newsletterTitle="NEWSLETTER"
            newsletterText="اشتركي في النشرة الإلكترونية ليصلك الجديد"
            summary="محتوى الموقع حديث يضم آخر الأخبار وذو صلة وثيقة بالمرأة، بحيث يركز على العلامات التجارية الفاخرة والتجارب والخبرات التي من شأنها أن تلهم النساء، وترفعهن أكثر على جميع المستويات وفي كل مجالات حياتهن ."
            socialMediaTitle="SOCIAL MEDIA"
            socialMediaText="تابعونا على مواقع التواصل الاجتماعي"
            copyrightText="HIA MAGAZINE © 2023 ALL RIGHT RESERVED"
            formButtonText=""
            twHeader="font-quaternary text-xs text-center lg:text-right tracking-wider pb-2"
            twText="font-tertiary text-xs"
            twFormErrorMessage="text-beigetaupe-100 font-primary mt-[-24px] translate-y-[1.875rem]"
            twFormCheckbox="ml-3"
            twFormCheckboxWrapper="flex gap-4 justify-end mt-4 mb-6"
            twFormButton="p-2 border font-tertiary border-black flex justify-between mt-[-62px] bg-gold-500 relative"
            twFormInput="w-full bg-transparent border-zinc-800 border-b text-right py-4"
            twNewsletterWrapper="w-full lg:max-w-xs flex flex-col justify-end text-center lg:text-right"
            twFormWrapper="px-10 md:px-0"
            twLogoWrapper="px-6 md:px-0 lg:max-w-lg hidden lg:flex flex-col gap-8 items-center text-center"
            twSocialWrapper="border-t lg:border-t-0 pt-6 lg:pt-0 border-black w-full lg:max-w-xs flex flex-col justify-end text-center lg:text-right"
            twCopyright="mt-5 lg:mt-0 font-quaternary text-xs tracking-wider text-center lg:text-left"
            twNavLinks="
              text-sm font-tertiary flex flex-col lg:flex-row gap-6 lg:gap-12 font-bold lg:font-normal justify-center
              max-lg:border-b max-lg:border-black max-lg:pb-6 max-lg:mb-6
            "
            twUpperGrid="flex flex-col lg:flex-row mb-20 gap-8 justify-between"
            twLowerGrid="flex flex-col lg:flex-row border-t border-black pt-3 flex justify-between"
            twContainer="max-w-container lg:px-6 xl:mx-auto"
            twBackground="bg-gold-500 pt-10 lg:pt-20 pb-10 text-neutral-800"
          />
        </Suspense>
      </body>
    </html>
  );
}
