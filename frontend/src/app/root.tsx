import { Meta, Links, Outlet, Scripts, ScrollRestoration } from "react-router";
import { useTranslation } from "react-i18next";

import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { ModalStartProject } from "@widgets/start-project-form";
import { BurgerDropdownMenu } from "features/HeaderNavigation";

import "@shared/lib/i18n";

import "./main.css";
import "@shared/styles/index.scss";

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <html lang={i18n.language}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <link
          rel="icon"
          type="image/png"
          href="/img/logo/image.png"
        />
        {/* define title only in routes to get rid of duplicate title? */}
        {/* <title>Aster Craft</title> */}

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
