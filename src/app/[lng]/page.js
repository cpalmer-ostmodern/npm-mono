"use client";
import { languages, fallbackLng } from "../i18n/settings";
import { useTranslation } from "../i18n";
import { Footer } from "./components/Footer";

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <main>
        <h2></h2>
        <div style={{ width: "100%" }}>
          <p></p>
          <a href={t("blog.link")}>
            <img
              style={{ width: "50%" }}
              src="https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: "90%" }} />
        <div></div>
      </main>
      <Footer lng={lng} />
    </>
  );
}
