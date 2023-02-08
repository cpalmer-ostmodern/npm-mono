"use client";

import { useTranslation } from "../../i18n/client";
import { Footer } from "../components/Footer/client";
import { useState } from "react";

import { NavBar } from "srmg-dev-ui-001";

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, "client-page");

  const [counter, setCounter] = useState(0);

  return (
    <>
      <main>
        <NavBar></NavBar>
      </main>
      <Footer lng={lng} path="/client-page" />
    </>
  );
}
