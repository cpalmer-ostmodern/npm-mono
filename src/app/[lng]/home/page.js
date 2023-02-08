"use client";

import { useTranslation } from "../../i18n/client";
import { Footer } from "../components/Footer/client";
import { useState } from "react";

import {
  ImageBanner,
  ArticleGrid,
  ArticleGridWithTitle,
  MediaGrid,
} from "srmg-dev-ui-001";

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, "client-page");

  const [counter, setCounter] = useState(0);

  const imgCaption = {
    title: "اخترنا لكم",
    body: "Luminous Fantasy روعة البدايات الجديدة مع Van Cleef & Arpels",
  };

  return (
    <>
      <main>
        <section className="relative">
          <ImageBanner
            title={imgCaption.title}
            body={imgCaption.body}
            tw="md:-mt-[20px] md:h-[441px] w-auto bg-center flex w-screen mb-24 justify-center"
            twTxtBx="w-auto 2xl:w-full 2xl:mx-0 xl:mx-50 lg:mx-32 md:mt-[64.5vh] md:mx-6 text-base block absolute bg-white text-center pt-[24px] pr-[16px] pb-[24px] pl-[16px] z-10 mt-[26rem] mb-20 border-b-[1px] border-black border-solid"
            twTitle="text-lg mb-4"
            twBody="text-5xl font-primary"
            desktopImg="https://static.hiamag.com/styles/1680x729/public/2023-01/MAIN%20JAN.jpg?h=bde28bee&itok=0XO87sBJ"
            mobileImg="https://static.hiamag.com/styles/375x471/public/2023-01/MAIN%20MOBILE.jpg?h=827069f2&itok=JVtZQfy8"
            media="(min-width: 769px)"
            twImg="md:h-[69vh] w-full h-[61.5vh] object-cover object-top"
          />
        </section>
      </main>
      <Footer lng={lng} path="/client-page" />
    </>
  );
}
