import { create } from "zustand";
import { type Theme, themeCookie } from "./cookie.ts";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initializeTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "dark",

  initializeTheme: () => {
    (async () => {
      const savedTheme = (await themeCookie.parse(
        document.cookie
      )) as Theme | null;

      if (savedTheme) {
        set({ theme: savedTheme });
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";

        get().setTheme(systemTheme);
      }
    })();
  },

  setTheme: (theme: Theme) => {
    set({ theme });
    document.documentElement.setAttribute("data-theme", theme);

    themeCookie.serialize(theme).then((cookieValue) => {
      document.cookie = cookieValue;
    });
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    get().setTheme(newTheme);
  },
}));
