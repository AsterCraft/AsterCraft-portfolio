import { create } from "zustand";
import type { Theme } from "./cookie.ts";
import { themeCookieMaxAge } from "./cookie.ts";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initializeTheme: (initialTheme: Theme) => void;
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "dark",

  initializeTheme: (serverTheme: Theme) => {
    const savedTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="))
      ?.split("=")[1] as Theme | undefined;

    if (savedTheme) {
      set({ theme: savedTheme });
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      if (systemTheme !== serverTheme) {
        set({ theme: systemTheme });
        document.documentElement.setAttribute("data-theme", systemTheme);

        document.cookie = `theme=${systemTheme}; path=/; max-age=${themeCookieMaxAge}; SameSite=Lax`;
      } else {
        set({ theme: serverTheme });
      }
    }
  },

  setTheme: (theme: Theme) => {
    set({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=${themeCookieMaxAge}; SameSite=Lax`;
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    get().setTheme(newTheme);
  },
}));
