'use client';

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
      <body>{children}TEST</body>
    </html>
  );
}
