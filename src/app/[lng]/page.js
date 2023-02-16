'use client';
import {
  useState,
  useEffect,
  Suspense,
} from 'react';
import { useTranslation } from '../i18n/home';
import { Footer } from './components/Footer/client';

import {
  NavBar,
  NavLinks,
  ImageBanner,
  ImageCarousel,
  ArticleGrid,
  ArticleGridWithTitle,
  VideoArticleBanner,
  MediaGrid,
  FeaturedArticle,
  Hero,
  ArticleFeatureGrid,
} from 'srmg-dev-ui-003';

import {
  articles,
  articles_7,
  articles_2,
  media_articles,
  article_grid_7,
  video_articles,
} from '../../data/sample-articles';

export default function Page({
  params: { lng },
}) {
  const [scrollY, setScrollY] =
    useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener(
      'scroll',
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll,
      );
    };
  }, []);

  const { t } = useTranslation(
    lng,
    'home-page',
  );

  const navLinks = [
    {
      name: t('links.nav1'),
      href: t('links.href1'),
    },
    {
      name: t('links.nav2'),
      href: t('links.href2'),
    },
    {
      name: t('links.nav3'),
      href: t('links.href3'),
    },
    {
      name: t('links.nav4'),
      href: t('links.href4'),
    },
    {
      name: t('links.nav5'),
      href: t('links.href5'),
    },
    {
      name: t('links.nav6'),
      href: t('links.href6'),
    },
    {
      name: t('links.nav7'),
      href: t('links.href7'),
    },
  ];

  return (
    <>
      <main>
        <section>
          <Suspense>
            <header
              className={`z-30 visible md:hidden fixed w-full bg-white ease-in ${
                scrollY === 0
                  ? 'h-28'
                  : 'h-20'
              }`}
            >
              {/* <div className="fixed">{scrollY}</div> */}
              <NavBar
                logoSize={
                  scrollY === 0
                    ? [50, 110]
                    : [33, 72]
                }
                logoTw={
                  scrollY === 0
                    ? `mb-[2rem] -mt-[2rem]`
                    : `-mt-[2rem] mb-0`
                }
                tw="relative pl-7 pr-5 pt-3 pb-4 md:pt-4 md:px-10 md:pb-5 bg-white lg:px-20 flex justify-between w-100 sticky"
                twMenuOverlay="-z-10 p-5 bg-gold-500 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
                twSearchOverlay="-z-10 p-5 bg-neutral-400 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
              />
            </header>
            <header
              className={`z-30 collapse fixed md:visible w-full bg-white ease-in ${
                scrollY === 0
                  ? 'h-30'
                  : 'h-28'
              }`}
            >
              {/* <div className="fixed">{scrollY}</div> */}
              <NavBar
                logoSize={
                  scrollY === 0
                    ? [72, 144]
                    : [50, 110]
                }
                logoTw={
                  scrollY === 0
                    ? `mb-[2rem] -mt-[0.75rem]`
                    : `-mt-[2rem] mb-0`
                }
                menuIconSize={38}
                searchIconSize={28}
                tw="relative pl-7 pr-5 pt-3 pb-4 md:pt-4 md:px-10 md:pb-5 bg-white lg:px-20 flex justify-between w-100 sticky"
                twMenuOverlay="-z-10 p-5 bg-gold-500 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
                twSearchOverlay="-z-10 p-5 bg-neutral-400 min-h-screen flex justify-center items-center absolute left-0 top-0 w-full"
              />
              <NavLinks
                tw="bg-white sm:hidden md:flex -mt-2 pt-2 pb-5 pr-20 pl-20 flex justify-center w-100 flex flex-row content-between space-x-12 font-tertiary font-lg line-height-[22px]"
                links={navLinks}
                twLink="font-tertiary text-lg"
              ></NavLinks>
            </header>
          </Suspense>
        </section>
        <section>
          <div className="md:h-48 h-[10vh] w-full"></div>
        </section>
        <section className="relative">
          <Suspense>
            <ImageBanner
              title={t('img-title')}
              body={t('h1')}
              subText={t(
                'back-to-home',
              )}
              tw="md:-mt-[20px] md:h-[441px] bg-center flex w-screen mb-24 justify-center"
              twTxtBx="w-full 2xl:w-full 2xl:mx-0 md:mt-[64.5vh] text-base block absolute bg-white text-center pt-[24px] pr-[16px] pb-[24px] pl-[16px] z-10 mt-[26rem] mb-20 border-b-[1px] border-black border-solid"
              twTitle="text-lg mb-4"
              twBody="text-5xl font-primary"
              desktopImg="https://static.hiamag.com/styles/1680x729/public/2023-01/Mainp_0.jpg?h=bde28bee&itok=PYdejC5C"
              mobileImg="https://static.hiamag.com/styles/375x471/public/2023-01/Mainp.jpg?h=bde28bee&itok=BXpokzmn"
              media="(min-width: 769px)"
              twImg="md:h-[69vh] w-full h-[61.5vh] object-cover object-top"
            />
          </Suspense>
        </section>
        <section className="mb-16 text-center ml-20">
          <Suspense>
            <ImageCarousel
              width={'100%'}
              height={'100%'}
              gap={'3rem'}
              columns={12}
              direction="rtl"
              articles={articles_7}
              twCarouselContainer="col-span-8 p-5"
              title={t('img-title')}
              twArticleImg="w-full overflow-hidden"
              twArticleTitle="text-xl font-primary font-medium text-right mt-4"
              twArticleCategory="mt-4 text-right text-sm font-tertiary"
            ></ImageCarousel>
          </Suspense>
        </section>
        <section>
          <FeaturedArticle
            title="موضة"
            articleLink="#"
            articleCategory="مشاهير و موضة"
            articleCategoryLink="#"
            articleTitle="إطلالات النجمات في حفل توزيع جوائز GRAMMYs.. الفساتين ذات التصميمات التقليدية تسيطر"
            articleExcerpt="شاهدوا أجمل إطلالات النجمات في حفل توزيع جوائز GRAMMYs جرامي، في نسخته الـ65، حيث اتسمت الإطلالات بكون تصميماتها تقليدية وبعيدة عن الغرابة ومن بين النجمات اللواتي تألقن وخطفن الأنظار، كانت جينيفر لوبيز وأديل وبيونسيه ودوجا كات وتايلور سويفت وكاردي بي وغيرهن"
            articleAuthor="سما جابر"
            articleImage="https://static.hiamag.com/styles/673x940/public/2023-02/063_1463248144_0.jpg?h=463e0f9c&itok=-RPq10to"
            articleImageAlt=""
            reverseOrder={false}
            twBackground="bg-white py-10 lg:px-24 lg:py-24"
            twWrapper="max-md:flex-col-reverse mt-8 xl:-mt-32 items-end flex justify-between gap-12 text-right text-neutral-800 xl:container px-6 xl:px-10 xl:mx-auto"
            twTitle="font-primary font-bold text-5xl lg:text-8xl 2xl:text-9xl text-neutral-800"
            twArticleTextWrapper="flex gap-y-6 flex-col max-w-2xl 2xl:pb-28"
            twArticleCategory="font-tertiary"
            twArticleTitle="text-4xl font-primary font-bold text-neutral-800"
            twArticleExcerpt="font-secondary font-light text-lg"
            twArticleAuthor="font-tertiary text-xs"
            twArticleImage=""
          />
        </section>
        <section className="max-w-container px-6 xl:mx-auto mb-24">
          <Suspense>
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
          </Suspense>
        </section>
        <section>
          <Suspense>
            <VideoArticleBanner
              articles={video_articles}
              title="فيديو"
              buttonText="المزيد"
              twTitle="font-primary text-right font-bold text-5xl md:text-9xl mb-10 md:mb-20"
              twArticleGrid="flex flex-col md:flex-row justify-between gap-y-12 md:gap-x-20 xl:gap-x-52"
              twArticle=""
              twArticleImg="aspect-video mb-4 relative"
              twArticleImgIcon="absolute bottom-0 origin-bottom-left"
              twPrimaryArticle="md:max-w-md"
              twSecondaryArticle="lg:text-2xl"
              twSecondaryArticleIconSize="scale-50"
              twArticleButtonBx="mt-14"
              twArticleButton="absolute p-2 border border-white flex justify-between w-48 font-tertiary"
              twArticleTitle="font-primary text-right mb-2"
              twArticleCategory="font-tertiary text-right"
              twContainer="max-w-container px-6 xl:mx-auto mb-24"
              twBackground="bg-zinc-800 text-white py-11"
            />
          </Suspense>
        </section>
        <section>
          <FeaturedArticle
            title="جمال"
            articleLink="#"
            articleCategory="مشاهير وجمال"
            articleCategoryLink="#"
            articleTitle="أبرز الصيحات الجمالية الجديدة بأسلوب النجمات العالميات في حفل Grammy Awards.. استوحي منها"
            articleExcerpt="عند شراء الأحجار الكريمة، ينصح الخبراء باختيار الأحجار الصلدة. في ما يلي قائمة بأحجار كريمة قوية تناسب ترصيع المجوهرات اليومية."
            articleAuthor=""
            articleImage="https://static.hiamag.com/styles/673x940/public/2023-02/1%20%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9%20%D8%A7%D8%B7%D9%84%D8%A7%D9%84%D8%A9%20Taylor%20Swift%D8%A8%D8%AA%D8%B3%D8%B1%D9%8A%D8%AD%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B4%D8%B9%D8%B1%20%D8%A7%D9%84%D9%85%D8%B1%D9%81%D9%88%D8%B9%D8%A9%20%D9%85%D8%B9%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%83%D8%AB%D9%8A%D9%81%D8%A9.jpg?h=69f2b9d0&itok=lpRTR3rO"
            articleImageAlt=""
            reverseOrder
            twBackground="bg-beigetaupe-100 py-10 lg:px-24 lg:py-24"
            twWrapper="max-md:flex-col-reverse mt-8 xl:-mt-32 items-end flex justify-between gap-12 text-right text-neutral-800 xl:container px-6 xl:px-10 xl:mx-auto"
            twTitle="font-primary font-bold text-5xl lg:text-8xl 2xl:text-9xl text-neutral-800"
            twArticleTextWrapper="flex gap-y-6 flex-col max-w-2xl 2xl:pb-28"
            twArticleCategory="font-tertiary"
            twArticleTitle="text-4xl font-primary font-bold text-neutral-800"
            twArticleExcerpt="font-secondary font-light text-lg"
            twArticleAuthor="font-tertiary text-xs"
            twArticleImage=""
          />
        </section>
        <section>
          <ArticleFeatureGrid
            articles={articles_2}
            buttonText="المزيد"
            reverseOrder
            twArticleFeatureGridGrid="md:flex md:gap-12"
            twArticleFeatureGridWrapper="grid grid-cols-1 md:grid-cols-2 gap-12"
            twArticle=""
            twArticleImg="w-full overflow-hidden"
            twArticleButtonBx="flex justify-center items-center mt-14 lg:mt-0"
            twArticleButton="p-2 border font-tertiary border-black flex justify-between w-40"
            twArticleTitle="text-xl font-primary font-medium text-right mt-4"
            twArticleCategory="mt-4 text-right text-sm font-tertiary"
            twArticleFeatureGridBackground="bg-beigetaupe-100 py-14"
            twArticleFeatureGridContainer="max-w-container px-6 xl:mx-auto"
          />
        </section>
        <section>
          <Hero
            title="عروض أزياء مجموعات ربيع وصيف 2023"
            tagline="Spring / Summer 2023 Fashion Shows"
            link="#"
            buttonText="المزيد"
            bgImage="https://static.hiamag.com/styles/1680x729/public/2022-12/xxl1%20%281%29.jpeg?h=0d167294&itok=f1qpSL6A"
            twTitle="text-3xl md:text-6xl xl:text-8xl font-primary md:font-bold !leading-tight"
            twTagline="text-2xl lg:text-3xl font-quaternary"
            twHeroContainer="
              relative flex justify-center items-center
              xl:container px-6 xl:px-10 mx-auto h-[80vh] md:h-[40vw]
            "
            twHeroWrapper="bg-cover bg-black text-white text-center md:text-right"
            twHeroButtonBx="w-full left-0 md:left-10 absolute bottom-14"
            twHeroButton="w-60 mx-auto md:mx-0 p-2 border border-white font-tertiary flex justify-between"
          />
        </section>
        <section>
          <FeaturedArticle
            title="مجوهرات"
            articleLink="#"
            articleCategory="مجوهرات وساعات"
            articleCategoryLink="#"
            articleTitle="تعرفي على الأحجار الكريمة الصلبة التي تناسب إطلالاتك اليومية"
            articleExcerpt="عند شراء الأحجار الكريمة، ينصح الخبراء باختيار الأحجار الصلدة. في ما يلي قائمة بأحجار كريمة قوية تناسب ترصيع المجوهرات اليومية."
            articleAuthor="عبير شرارة"
            articleImage="https://static.hiamag.com/styles/673x940/public/2023-02/WhatsApp%20Image%202023-02-02%20at%2010.56.18%20AM.jpeg?h=ccc2f15d&itok=8MIsiFE0"
            articleImageAlt=""
            reverseOrder
            twBackground="bg-mauve-450 py-10 lg:px-24 lg:py-24"
            twWrapper="max-md:flex-col-reverse mt-8 xl:-mt-32 items-end flex justify-between gap-12 text-right text-neutral-800 xl:container px-6 xl:px-10 xl:mx-auto"
            twTitle="font-primary font-bold text-5xl lg:text-8xl 2xl:text-9xl text-neutral-800"
            twArticleTextWrapper="flex gap-y-6 flex-col max-w-2xl 2xl:pb-28"
            twArticleCategory="font-tertiary"
            twArticleTitle="text-4xl font-primary font-bold text-neutral-800"
            twArticleExcerpt="font-secondary font-light text-lg"
            twArticleAuthor="font-tertiary text-xs"
            twArticleImage=""
          />
          <ArticleFeatureGrid
            articles={articles_2}
            buttonText="المزيد"
            reverseOrder
            twArticleFeatureGridGrid="md:flex md:gap-12"
            twArticleFeatureGridWrapper="grid grid-cols-1 md:grid-cols-2 gap-12"
            twArticle=""
            twArticleImg="w-full overflow-hidden"
            twArticleButtonBx="flex justify-center items-center mt-14 lg:mt-0"
            twArticleButton="p-2 border font-tertiary border-black flex justify-between w-40"
            twArticleTitle="text-xl font-primary font-medium text-right mt-4"
            twArticleCategory="mt-4 text-right text-sm font-tertiary"
            twArticleFeatureGridBackground="bg-mauve-450 py-14"
            twArticleFeatureGridContainer="max-w-container px-6 xl:mx-auto"
          />
        </section>
        <section className="mb-16">
          <Suspense>
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
          </Suspense>
        </section>
        <section className="max-w-container px-6 xl:mx-auto mb-16">
          <Suspense>
            <ArticleGridWithTitle
              title="لايف ستايل"
              titleLink=""
              articles={article_grid_7}
              direction="ltr"
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
          </Suspense>
        </section>
      </main>
      <Footer
        lng={lng}
        path="/client-page"
      />
    </>
  );
}
