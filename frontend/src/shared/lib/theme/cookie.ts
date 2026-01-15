import { createCookie } from "react-router";

export type Theme = "light" | "dark";

export const themeCookie = createCookie("theme", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: false,
  maxAge: 60 * 60 * 24 * 365,
});

export async function getThemeFromRequest(request: Request): Promise<Theme> {
  const cookieHeader = request.headers.get("Cookie");
  const theme = (await themeCookie.parse(cookieHeader)) as Theme | null;

  return theme || "dark";
}
