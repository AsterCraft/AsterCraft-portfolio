import {
  data,
  Meta,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { useTranslation } from "react-i18next";
import type { Route } from "./+types/root";
import { useEffect } from "react";

import { Header } from "@widgets/header";
import Footer from "@widgets/footer";
import { StartProjectForm } from "@widgets/start-project-form";
import { BurgerDropdownMenu } from "features/HeaderNavigation";
import { GADS_CONVERSION_ID, GTAG_ID } from "@shared/config";
import { getThemeFromRequest, type Theme } from "@shared/lib/theme/cookie";

import {
  getLocale,
  i18nextMiddleware,
  localeCookie,
} from "./middleware/i18next";

import "./main.css";
import "@shared/styles/index.scss";
import { useThemeStore } from "@shared/lib/theme/theme-store";

export const middleware = [i18nextMiddleware];

export async function loader({ context, request }: Route.LoaderArgs) {
  const locale = getLocale(context);
  const theme = await getThemeFromRequest(request);

  return data(
    { locale, theme },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } }
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  const loaderData = useLoaderData<typeof loader>();

  const theme = useThemeStore((state) => state.theme);
  const initializeTheme = useThemeStore((state) => state.initializeTheme);

  useEffect(() => {
    initializeTheme(loaderData.theme);
  }, [loaderData.theme, initializeTheme]);

  console.log("loaderData", loaderData);

  const currentTheme = loaderData.theme || theme;

  console.log("currentTheme", currentTheme);

  return (
    <html
      lang={i18n.language}
      dir={i18n.dir(i18n.language)}
      data-theme={currentTheme}
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

        {/* <!-- Meta Pixel Code --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1575132536720219');
          fbq('track', 'PageView');
`,
          }}
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1575132536720219&ev=PageView&noscript=1"
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}

        {/* Facebook domain verification */}
        <meta
          name="facebook-domain-verification"
          content="40f38e0x8h51kev7ycc6h5mz1gvedg"
        />

        <Meta />
        <Links />
      </head>
      <body>
        {children}

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
