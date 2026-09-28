import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!hash) { window.scrollTo({ top: 0, behavior: "instant" }); return; }
      const id = hash.slice(1);
      const mobileId = id === "projets-perso" ? "projets-mobile" : `${id}-mobile`;
      const mobile = window.matchMedia("(max-width: 1023px)").matches;
      const target = (mobile ? document.getElementById(mobileId) : null) ?? document.getElementById(id);
      target?.scrollIntoView({ block: "start", behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}
