import { useEffect, useState } from "react";

/**
 * Breakpoints на основі Material Design 3
 * @link https://m3.material.io/foundations/layout/applying-layout/window-size-classes
 */
const BREAKPOINTS = {
  mobile: 840, // 600-839px - Tablets in portrait
  desktop: 1200, // 840-1199px - Tablets in landscape
} as const;

export interface UseWindowWidthReturn {
  /** Поточна ширина вікна в пікселях */
  windowWidth: number;

  /** Чи екран мобільний (менше 840px) */
  isMobile: boolean;
  /** Чи екран десктопний (більше або дорівнює 1200) */
  isDesktop: boolean;
}

/**
 * Хук для відстеження ширини вікна браузера з підтримкою SSR
 *
 * @returns Об'єкт з шириною вікна та breakpoint-перевірками
 *
 * @example
 * const { width, isMobile, isDesktop } = useWindowWidth();
 *
 * if (isMobile) {
 *   return <MobileView />;
 * }
 *
 * @example
 * const { isCompact, isMedium } = useWindowWidth();
 */
export const useWindowWidth = (): UseWindowWidthReturn => {
  // Для SSR повертаємо дефолтне значення (можна налаштувати під свої потреби)
  const getInitialWidth = () => {
    if (typeof window === "undefined") {
      return 1440; // дефолтна ширина для серверного рендерингу
    }
    return window.innerWidth;
  };

  const [windowWidth, setWindowWidth] = useState<number>(getInitialWidth);

  useEffect(() => {
    // Перевіряємо що код виконується на клієнті
    if (typeof window === "undefined") {
      return;
    }

    // Оновлюємо значення одразу після монтування на клієнті
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Очищення слухача при демонтуванні компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    windowWidth,
    isMobile: windowWidth < BREAKPOINTS.mobile,
    isDesktop: windowWidth >= BREAKPOINTS.desktop,
  };
};
