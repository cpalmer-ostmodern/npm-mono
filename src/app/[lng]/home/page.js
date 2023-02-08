"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "../../i18n/home";
import { Footer } from "../components/Footer/client";

import {
  NavBar,
  NavLinks,
  ImageBanner,
  ArticleGrid,
  ArticleGridWithTitle,
  MediaGrid,
} from "srmg-dev-ui-001";

import {
  articles,
  articles_7,
  media_articles,
} from "../../../data/sample-articles";

export default function Page({ params: { lng } }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "موضة", href: "#" },
    { name: "جمال", href: "#" },
    { name: "ترفيه وفنون", href: "#" },
    { name: "لايف ستايل", href: "#" },
    { name: "أخبار", href: "#" },
    { name: "فيديو", href: "#" },
    { name: "بودكاست", href: "#" },
  ];

  const { t } = useTranslation(lng, "client-page");

  const [counter, setCounter] = useState(0);

  const imgCaption = {
    title: "اخترنا لكم",
    body: "Luminous Fantasy روعة البدايات الجديدة مع Van Cleef & Arpels",
  };

  return (
    <>
      <main>
        <section>
          <header
            className={`z-30 visible md:hidden fixed w-full bg-white ease-in ${
              scrollY === 0 ? "h-28" : "h-20"
            }`}
          >
            {/* <div className="fixed">{scrollY}</div> */}
            <NavBar
              sSize={"23px"}
              logoSize={scrollY === 0 ? 56 : 33}
              logoTxt={scrollY === 0 ? true : false}
              tw="relative pl-7 pr-5 pt-3 pb-4 md:pt-4 md:px-10 md:pb-5 bg-white lg:px-20 flex justify-between w-100 sticky"
              twMenuOverlay="-z-10 p-5 bg-gold-500 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
              twSearchOverlay="-z-10 p-5 bg-neutral-400 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
            />
          </header>
          <header
            className={`z-30 collapse fixed md:visible w-full bg-white ease-in ${
              scrollY === 0 ? "h-30" : "h-28"
            }`}
          >
            {/* <div className="fixed">{scrollY}</div> */}
            <NavBar
              sSize={"23px"}
              logoSize={scrollY === 0 ? 72 : 56}
              logoTxt
              tw="relative pl-7 pr-5 pt-3 pb-4 md:pt-4 md:px-10 md:pb-5 bg-white lg:px-20 flex justify-between w-100 sticky"
              twMenuOverlay="-z-10 p-5 bg-gold-500 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
              twSearchOverlay="-z-10 p-5 bg-neutral-400 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
            />
            <NavLinks
              tw="bg-white sm:hidden md:flex -mt-2 pt-2 pb-5 pr-20 pl-20 flex justify-center w-100 flex flex-row content-between space-x-12"
              links={navLinks}
            ></NavLinks>
          </header>
        </section>

        <section>
          <div className="md:h-48 h-[10vh] w-full"></div>
        </section>
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

        {/* <section className="mb-16">
          <ImageCarousel
            width={"100%"}
            height={"100%"}
            gap={3}
            articles={articles_7}
            twCarouselContainer={"col-span-12"}
          ></ImageCarousel>
        </section> */}

        <section className="max-w-container px-6 xl:mx-auto mb-24">
          <ArticleGrid
            articles={articles}
            columns={4}
            buttonText="المزيد"
            twArticleGrid="flex grid grid-cols-1 md:grid-cols-4 gap-12"
            twArticle=""
            twArticleImg="w-full overflow-hidden"
            twArticleButtonBx="flex justify-center mt-14"
            twArticleButton="p-2 bg-white border font-tertiary border-black flex justify-between w-60 md:w-1/5"
            twArticleTitle="text-xl font-primary font-medium text-right mt-4"
            twArticleCategory="mt-4 text-right text-sm font-tertiary"
          />
        </section>
        <section className="max-w-container px-6 xl:mx-auto mb-16">
          <ArticleGridWithTitle
            title="لايف ستايل"
            titleLink=""
            articles={articles_7}
            columns={4}
            buttonText="المزيد"
            titleRightAligned
            twArticle=""
            twGridTitle="w-full text-right text-5xl lg:text-6xl xl:text-8xl font-bold font-primary text-neutral-400 mb-8"
            twArticleGrid="flex-row-reverse grid gap-9 overflow-scroll md:overflow-hidden md:flex-row md:gap-12 max-md:flex"
            twArticleImg="w-full overflow-hidden"
            twArticleButtonBx="flex justify-center mt-14"
            twArticleButton="p-2 bg-white border font-tertiary border-black flex justify-between w-60 md:w-1/5"
            twArticleTitle="text-xl font-primary font-medium text-right mt-4"
            twArticleCategory="mt-4 text-right text-sm font-tertiary"
          />
        </section>
        <section className="mb-16">
          <MediaGrid
            title="بودكاست"
            titleLink=""
            articles={media_articles}
            columns={3}
            buttonText="المزيد"
            twMediaBackground="bg-stone-200 py-10 lg:py-24"
            twMediaGridWrapper="xl:container px-6 xl:px-10 xl:mx-auto"
            twMediaTitle="w-full text-right text-5xl lg:text-9xl font-bold font-primary mt-4 md:mt-0 mb-14 text-neutral-800"
            twMediaItemGrid="grid grid-cols-1 gap-12"
            twMediaImage="w-full overflow-hidden aspect-square"
            twMediaItemTitle="text-2xl font-primary text-right mt-4"
            twMediaButton="p-2 border border-black flex justify-between w-60 md:w-1/5 font-tertiary"
            twMediaButtonWrapper="flex justify-center mt-14"
            twMediaMetaWrapper="flex justify-end text-base font-body mt-4"
            twMediaMetaDivider="relative after:content-['◆'] after:bg-no-repeat after:absolute after:w-6 after:h-6 after:right-0 after:translate-x-8 after:text-[.75rem] font-tertiary"
          />
        </section>
      </main>
      <Footer lng={lng} path="/client-page" />
    </>
  );
}
