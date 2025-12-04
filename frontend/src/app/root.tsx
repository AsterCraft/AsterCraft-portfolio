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
import { useEffect } from "react";

import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { StartProjectForm } from "@widgets/start-project-form";
import { BurgerDropdownMenu } from "features/HeaderNavigation";
import { GADS_CONVERSION_ID, GTAG_ID } from "@shared/config";

import {
  getLocale,
  i18nextMiddleware,
  localeCookie,
} from "./middleware/i18next";

import "./main.css";
import "@shared/styles/index.scss";

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

        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "${GTAG_ID}");
`,
          }}
        />

        {/* Event snippet for Submit lead form conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          function gtag_report_conversion(url) {
            var callback = function() {
              if (typeof(url) != "undefined") {
                window.location = url;
              }
            };
            gtag("event", "conversion", {
              "send_to": "${GADS_CONVERSION_ID}",
              "event_callback": callback
            });
            return false;
          }
`,
          }}
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
