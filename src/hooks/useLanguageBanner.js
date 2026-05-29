import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CHINESE_CODES = ["zh", "zh-CN", "zh-Hans", "zh-SG", "zh-Hans-CN"];
const DISMISSED_KEY = "jlh_banner_dismissed";

export function useLanguageBanner() {
  const router = useRouter();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Already on Chinese locale — no banner needed
    if (router.locale === "zh") return;

    // Already dismissed this session
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    // Check browser languages
    const langs = Array.from(navigator.languages ?? [navigator.language]);
    const isChinese = langs.some((lang) =>
      CHINESE_CODES.some((code) => lang.startsWith(code.split("-")[0]))
    );

    if (isChinese) {
      // Small delay so page renders first
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [router.locale]);

  const accept = () => {
    sessionStorage.setItem(DISMISSED_KEY, "1");
    setShowBanner(false);
    router.push(router.asPath, router.asPath, { locale: "zh" });
  };

  const dismiss = () => {
    sessionStorage.setItem(DISMISSED_KEY, "1");
    setShowBanner(false);
  };

  return { showBanner, accept, dismiss };
}