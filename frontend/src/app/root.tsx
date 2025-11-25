import {
  data,
  Meta,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useTranslation } from "react-i18next";
import type { Route } from "./+types/root";

import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { StartProjectForm } from "@widgets/start-project-form";
import { BurgerDropdownMenu } from "features/HeaderNavigation";

import {
  getLocale,
  i18nextMiddleware,
  localeCookie,
} from "./middleware/i18next";

import "./main.css";
import "@shared/styles/index.scss";
import { useEffect } from "react";

export const middleware = [i18nextMiddleware];

export async function loader({ context }: Route.LoaderArgs) {
  let locale = getLocale(context);
  return data(
    { locale },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <html
      lang={i18n.language}
      dir={i18n.dir(i18n.language)}
      data-theme="dark"
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

export default function Root({ loaderData: { locale } }: Route.ComponentProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <StartProjectForm />
      <BurgerDropdownMenu />
    </>
  );
}
