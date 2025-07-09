import { useMediaQuery } from "react-responsive";

export function useReponsive() {
  // Mobile: < 640px
  const isMobile = useMediaQuery({ maxWidth: 639 });

  // Tablet: >= 640px và < 1024px
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });

  // Desktop: >= 1024px
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return { isMobile, isDesktop, isTablet };
}
