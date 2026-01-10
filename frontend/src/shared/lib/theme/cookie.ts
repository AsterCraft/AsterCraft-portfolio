import { createCookie } from "react-router";

export type Theme = "light" | "dark";

export const themeCookieMaxAge = 60 * 60 * 24 * 365;

export const themeCookie = createCookie("theme", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: false,
  maxAge: themeCookieMaxAge,
});

export async function getThemeFromRequest(request: Request): Promise<Theme> {
  const cookieHeader = request.headers.get("Cookie");

  console.log("cookieHeader:", cookieHeader);

  if (!cookieHeader) return "dark" as Theme;

  const theme = cookieHeader
    .split("; ")
    .find((row) => row.startsWith("theme="))
    ?.split("=")[1] as Theme | undefined;

  console.log("theme:", theme);

  return (theme as Theme) || "dark";
}
