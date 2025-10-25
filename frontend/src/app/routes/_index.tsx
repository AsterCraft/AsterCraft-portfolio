import { redirect } from "react-router";
import type { Route } from "./+types/_index";

export async function loader({ request }: Route.LoaderArgs) {
  const acceptLanguage = request.headers.get("Accept-Language");

  // use better logic when we will support multiple langs
  const lang = acceptLanguage?.includes("uk") ? "uk" : "uk";

  return redirect(`/${lang}/`);
}

export default function Index() {
  return null;
}
