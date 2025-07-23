import { useMediaQuery } from "react-responsive";

export function useResponsive() {
  // Mobile: < 640px
  const isMobile = useMediaQuery({ maxWidth: 639, minWidth: 375 });
  const isMobileSmall = useMediaQuery({ maxWidth: 374 });

  // Tablet: >= 640px và < 1024px
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

  // Desktop: >= 1024px
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return { isMobileSmall, isMobile, isDesktop, isTablet };
}
