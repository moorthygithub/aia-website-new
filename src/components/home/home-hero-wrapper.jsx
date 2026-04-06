import { useEffect, useState } from "react";
import HomeHeroMobile from "../mobile/home-hero-mobile";
import HomeHero from "./home-hero";

export default function HomeHeroWrapper({ slug, bottombar }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    setMounted(true);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Avoid flash before JS hydrates
  if (!mounted) return null;

  return isMobile ? (
    <HomeHeroMobile slug={slug} bottombar={bottombar} />
  ) : (
    <HomeHero slug={slug} bottombar={bottombar} />
  );
}
