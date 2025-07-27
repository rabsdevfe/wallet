import { useEffect, useRef, useState } from "react";

export const useContentSize = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const layoutRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (layoutRef.current) {
        const viewportHeight = window.innerHeight;
        const headerHeight = headerRef.current?.offsetHeight || 0;
        const footerHeight = footerRef.current?.offsetHeight || 0;
        const availableHeight = viewportHeight - headerHeight - footerHeight;
        setContainerHeight(Math.max(0, availableHeight));
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);

    if (layoutRef.current) resizeObserver.observe(layoutRef.current);
    if (headerRef.current) resizeObserver.observe(headerRef.current);
    if (footerRef.current) resizeObserver.observe(footerRef.current);

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { containerHeight, layoutRef, headerRef, footerRef };
};
