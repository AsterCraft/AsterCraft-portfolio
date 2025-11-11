import { Meta, Links, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useTranslation } from "react-i18next";

import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { ModalStartProject } from "@widgets/start-project-form";
import { BurgerDropdownMenu } from "features/HeaderNavigation";

import "@shared/i18n";

import "./main.css";
import "@shared/styles/index.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <html
      lang={i18n.language}
      data-theme="light"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />

        <Meta />
        <Links />
      </head>
      <body>
        {children}

        {/* doesnt restore scroll? */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <ModalStartProject />
      <BurgerDropdownMenu />
    </>
  );
}
