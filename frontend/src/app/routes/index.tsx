import { redirect } from "react-router";
import type { Route } from "./+types/index";
import { getLocale } from "app/middleware/i18next";

export async function loader({ request, context }: Route.LoaderArgs) {
  const locale = getLocale(context);

  const url = new URL(request.url);
  const searchParams = url.searchParams.toString();
  const destination = `/${locale}/${searchParams ? "?" + searchParams : ""}`;

  throw redirect(destination);
}

export default function Index() {
  return null;
}
