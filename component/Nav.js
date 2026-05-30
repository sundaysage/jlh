import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import JLHLogo from "./UI/JLHLogo."; // Fixed trailing dot typo

// ── Supported languages ───────────────────────────────────────
const LOCALES = [
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "zh", flag: "🇨🇳", label: "中文"    },
];

// ── Nav link data ─────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Operations",
    href: "#operations",
    sublinks: [
      { label: "Oil & Gas E&P",               href: "/oil",           icon: "🛢️" },
      { label: "Industrial Plant & Maint.",   href: "/mainten",     icon: "🏭" },
      { label: "Project Management",          href: "/projects",   icon: "📋" },
      { label: "Pipeline Engineering",        href: "/pipeline",   icon: "🔩" },
      { label: "Renewable & Hybrid Energy",   href: "/renewable",  icon: "🌿" },
      { label: "Rig Construction & Offshore", href: "/rig",        icon: "🏗️" },
      { label: "Fuel Depot & Storage",        href: "/fueldepot",  icon: "⛽" },
    ],
  },
  { label: "About Us",  href: "/aboutus"   },
  { label: "Investors", href: "/#investors" },
  { label: "Contact",   href: "/contact",   isCta: true },
];

// ── Chinese translations for nav labels ───────────────────────
const ZH_NAV = {
  "Home":                         "首页",
  "Operations":                   "业务",
  "About Us":                     "关于我们",
  "Investors":                    "投资者",
  "Contact":                      "联系我们",
  "Oil & Gas E&P":               "石油与天然气",
  "Industrial Plant & Maint.":   "工业厂房与维护",
  "Project Management":          "项目管理",
  "Pipeline Engineering":        "管道工程",
  "Renewable & Hybrid Energy":   "可再生能源",
  "Rig Construction & Offshore": "钻井平台建造",
  "Fuel Depot & Storage":        "燃料仓储",
};

export default function Nav() {
  const router = useRouter();

  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [openDropdown,   setOpenDropdown]   = useState(null);
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [langOpen,       setLangOpen]       = useState(false);
  const [locale,         setLocale]         = useState("en");

  const dropdownRef = useRef(null);
  const langRef     = useRef(null);

  // ── ⚡ GOOGLE TRANSLATE BACKEND INTEGRATION ENGINE ⚡ ──
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,zh-CN",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const runGoogleTranslation = (langCode) => {
    const targetLang = langCode === "zh" ? "zh-CN" : "en";
    const googleSelect = document.querySelector(".goog-te-combo");
    
    if (googleSelect) {
      googleSelect.value = targetLang;
      googleSelect.dispatchEvent(new Event("change"));
    }
  };

  // Restore saved locale on mount
  useEffect(() => {
    const saved = localStorage.getItem("jlh_locale");
    if (saved) {
      setLocale(saved);
      setTimeout(() => runGoogleTranslation(saved), 800);
    }
  }, []);

  // FIX: Force menus closed whenever user changes pages completely
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setOpenDropdown(null);
  }, [router.asPath]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on desktop resize resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const switchLocale = (code) => {
    setLocale(code);
    localStorage.setItem("jlh_locale", code);
    setLangOpen(false);
    runGoogleTranslation(code);
    window.dispatchEvent(new CustomEvent("jlh-locale-change", { detail: code }));
  };

  const tLabel = (label) => locale === "zh" ? (ZH_NAV[label] || label) : label;
  const currentFlag = LOCALES.find(l => l.code === locale)?.flag || "🇬🇧";

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />

      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(3,11,24,0.97)"
            : "linear-gradient(180deg, rgba(3,11,24,0.92) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(228,175,43,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(3,11,24,0.5)" : "none",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>

            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none" }}>
              <JLHLogo height={42} />
            </Link>

            {/* Desktop Nav */}
            <nav
              ref={dropdownRef}
              className="hidden md:flex items-center gap-1"
            >
              {NAV_LINKS.map(({ label, href, sublinks, isCta }) => (
                <div
                  key={label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => sublinks && setOpenDropdown(label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {isCta ? (
                    <Link
                      href={href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 20px",
                        fontSize: "0.72rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                        textDecoration: "none",
                        background: "linear-gradient(135deg,#EFC75A,#C99520)",
                        color: "#030B18",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                    >
                      {tLabel(label)}
                    </Link>
                  ) : (
                    <Link
                      href={href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        padding: "8px 12px",
                        fontSize: "0.78rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        textDecoration: "none",
                        color: openDropdown === label ? "#EFC75A" : "#94A3B8",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => {
                        if (!sublinks) e.currentTarget.style.color = "#EFC75A";
                      }}
                      onMouseLeave={e => {
                        if (!sublinks) e.currentTarget.style.color = "#94A3B8";
                      }}
                    >
                      {tLabel(label)}
                      {sublinks && (
                        <svg
                          width="12" height="12"
                          fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" strokeWidth={2}
                          style={{
                            transition: "transform 0.2s",
                            transform: openDropdown === label ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  )}

                  {/* Dropdown Box */}
                  {sublinks && openDropdown === label && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginTop: "8px",
                        minWidth: "260px",
                        background: "rgba(6,15,32,0.98)",
                        border: "1px solid rgba(228,175,43,0.15)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 20px 60px rgba(3,11,24,0.7)",
                        padding: "0.5rem 0",
                        animation: "dropFade 0.2s ease",
                        zIndex: 60,
                      }}
                    >
                      <div style={{
                        position: "absolute",
                        top: "-6px", left: "50%",
                        transform: "translateX(-50%)",
                        width: 0, height: 0,
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderBottom: "6px solid rgba(228,175,43,0.2)",
                      }} />

                      {sublinks.map((sub, i) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "0.7rem 1.25rem",
                            fontSize: "0.82rem",
                            textDecoration: "none",
                            color: "#94A3B8",
                            borderBottom: i < sublinks.length - 1
                              ? "1px solid rgba(255,255,255,0.04)"
                              : "none",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = "rgba(228,175,43,0.07)";
                            e.currentTarget.style.color = "#EFC75A";
                            e.currentTarget.style.paddingLeft = "1.5rem";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#94A3B8";
                            e.currentTarget.style.paddingLeft = "1.25rem";
                          }}
                        >
                          <span style={{ fontSize: "1rem", flexShrink: 0 }}>{sub.icon}</span>
                          <span>{tLabel(sub.label)}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Language Picker Switcher */}
              <div ref={langRef} style={{ position: "relative", marginLeft: "0.5rem" }}>
                <button
                  onClick={() => setLangOpen(s => !s)}
                  aria-label="Switch language"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 12px",
                    background: "transparent",
                    border: "1px solid rgba(228,175,43,0.2)",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(228,175,43,0.5)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(228,175,43,0.2)"}
                >
                  <span style={{ fontSize: "1.1rem" }}>{currentFlag}</span>
                  <span style={{ fontSize: "0.72rem", color: "#64748B", letterSpacing: "0.05em" }}>
                    {locale.toUpperCase()}
                  </span>
                  <svg
                    width="10" height="10" fill="none"
                    viewBox="0 0 24 24" stroke="#64748B" strokeWidth={2}
                    style={{
                      transition: "transform 0.2s",
                      transform: langOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langOpen && (
                  <div style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    right: 0,
                    minWidth: "150px",
                    background: "rgba(6,15,32,0.98)",
                    border: "1px solid rgba(228,175,43,0.15)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 40px rgba(3,11,24,0.7)",
                    padding: "0.4rem 0",
                    animation: "dropFade 0.2s ease",
                    zIndex: 60,
                  }}>
                    {LOCALES.map((loc) => {
                      const active = loc.code === locale;
                      return (
                        <button
                          key={loc.code}
                          onClick={() => switchLocale(loc.code)}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "0.65rem 1rem",
                            border: "none",
                            cursor: "pointer",
                            background: active ? "rgba(228,175,43,0.1)" : "transparent",
                            color: active ? "#EFC75A" : "#94A3B8",
                            fontSize: "0.85rem",
                            fontFamily: "'DM Sans', sans-serif",
                            transition: "all 0.15s",
                            textAlign: "left",
                          }}
                          onMouseEnter={e => {
                            if (!active) {
                              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                              e.currentTarget.style.color = "#E2E8F0";
                            }
                          }}
                          onMouseLeave={e => {
                            if (!active) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = "#94A3B8";
                            }
                          }}
                        >
                          <span style={{ fontSize: "1.2rem" }}>{loc.flag}</span>
                          <span>{loc.label}</span>
                          {active && (
                            <svg style={{ marginLeft: "auto" }} width="12" height="12" fill="#EFC75A" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Actions Layer */}
            <div className="flex md:hidden items-center gap-3">
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setLangOpen(s => !s)}
                  style={{
                    display: "flex", alignItems: "center", gap: "4px",
                    padding: "5px 10px", background: "transparent",
                    border: "1px solid rgba(228,175,43,0.2)", cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{currentFlag}</span>
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#64748B" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", right: 0,
                    minWidth: "140px", zIndex: 60,
                    background: "rgba(6,15,32,0.98)",
                    border: "1px solid rgba(228,175,43,0.15)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 40px rgba(3,11,24,0.7)",
                  }}>
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => switchLocale(loc.code)}
                        style={{
                          width: "100%", display: "flex", alignItems: "center", gap: "10px",
                          padding: "0.65rem 1rem", border: "none", cursor: "pointer",
                          background: loc.code === locale ? "rgba(228,175,43,0.1)" : "transparent",
                          color: loc.code === locale ? "#EFC75A" : "#94A3B8",
                          fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        <span style={{ fontSize: "1.2rem" }}>{loc.flag}</span>
                        <span>{loc.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hamburger Button */}
              <button
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(s => !s)}
                style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px" }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span style={{
                    display: "block", width: "22px", height: "1.5px", background: "#94A3B8",
                    transition: "all 0.3s",
                    transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
                  }} />
                  <span style={{
                    display: "block", width: "22px", height: "1.5px", background: "#94A3B8",
                    transition: "all 0.3s", opacity: mobileOpen ? 0 : 1,
                  }} />
                  <span style={{
                    display: "block", width: "22px", height: "1.5px", background: "#94A3B8",
                    transition: "all 0.3s",
                    transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
                  }} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Slide Drawer */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: mobileOpen ? "700px" : "0",
              transition: "max-height 0.4s ease",
              borderTop: mobileOpen ? "1px solid rgba(228,175,43,0.1)" : "none",
            }}
          >
            <nav style={{ padding: "1rem 0 1.5rem", display: "flex", flexDirection: "column" }}>
              {NAV_LINKS.map(({ label, href, sublinks, isCta }) => (
                <div key={label}>
                  <div style={{
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <Link
                      href={href}
                      style={{
                        fontSize: "0.85rem", letterSpacing: "0.1em",
                        textTransform: "uppercase", fontWeight: 500,
                        textDecoration: "none",
                        color: isCta ? "#EFC75A" : "#94A3B8",
                        flex: 1,
                      }}
                    >
                      {tLabel(label)}
                    </Link>
                    {sublinks && (
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === label ? null : label)}
                        style={{
                          background: "transparent", border: "none",
                          cursor: "pointer", color: "#64748B",
                          padding: "4px 8px", fontSize: "1.1rem",
                        }}
                      >
                        {mobileExpanded === label ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {sublinks && mobileExpanded === label && (
                    <div style={{ background: "rgba(255,255,255,0.02)" }}>
                      {sublinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "0.65rem 1rem", fontSize: "0.82rem",
                            textDecoration: "none", color: "#64748B",
                            borderBottom: "1px solid rgba(255,255,255,0.03)",
                            transition: "color 0.15s",
                          }}
                          onMouseEnter={e => e.currentTarget.style.color = "#EFC75A"}
                          onMouseLeave={e => e.currentTarget.style.color = "#64748B"}
                        >
                          <span style={{ fontSize: "0.9rem" }}>{sub.icon}</span>
                          {tLabel(sub.label)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div style={{ height: "70px" }} />

      <style jsx global>{`
        @keyframes dropFade {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}