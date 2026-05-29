import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import JLHLogo from "./UI/JLHLogo.";
import { Icon } from "lucide-react";
const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Operations",
    href: "#operations",
    sublinks: [
      { label: "Oil & Gas E&P", href: "/oil", icon: "🛢️" },
      { label: "Industrial Plant & Maint.", href: "/mainten", icon: "🏭" },
      { label: "Project Management", href: "/projects", icon: "📋" },
      { label: "Pipeline Engineering", href: "/pipeline", icon: "🔩" },
      { label: "Renewable & Hybrid Energy", href: "/renewable", icon: "🌿" },
      { label: "Rig Construction & Offshore", href: "/rig", icon: "🏗️" },
      { label: "Fuel Depot & Storage", href: "/fuel-depot", icon: "⛽" },
      { label: "Nuclear & AEI", href: "/nuclear" },
    ],
  },
  { label: "About Us", href: "/aboutus" },
  { label: "Investors", href: "/#investors" },
  { label: "News", href: "/#media" },
  { label: "Contact", href: "/#contact", isCta: true },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile on resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(3,11,24,0.97)"
            : "linear-gradient(180deg, rgba(3,11,24,0.9) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(228,175,43,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(3,11,24,0.5)" : "none",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <JLHLogo height={42} />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav
              ref={dropdownRef}
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
              className="desktop-nav"
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
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.85")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      {label}
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
                        position: "relative",
                      }}
                      onMouseEnter={(e) => {
                        if (!sublinks) e.currentTarget.style.color = "#EFC75A";
                      }}
                      onMouseLeave={(e) => {
                        if (!sublinks) e.currentTarget.style.color = "#94A3B8";
                      }}
                    >
                      {label}
                      {sublinks && (
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          style={{
                            transition: "transform 0.2s",
                            transform:
                              openDropdown === label
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>
                  )}

                  {/* ── Dropdown ── */}
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
                      }}
                    >
                      {/* Triangle pointer */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-6px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 0,
                          height: 0,
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderBottom: "6px solid rgba(228,175,43,0.15)",
                        }}
                      />

                      {sublinks.map((sub, i) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "0.7rem 1.25rem",
                            fontSize: "0.82rem",
                            textDecoration: "none",
                            color: "#94A3B8",
                            borderBottom:
                              i < sublinks.length - 1
                                ? "1px solid rgba(255,255,255,0.04)"
                                : "none",
                            transition: "all 0.15s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(228,175,43,0.07)";
                            e.currentTarget.style.color = "#EFC75A";
                            e.currentTarget.style.paddingLeft = "1.5rem";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#94A3B8";
                            e.currentTarget.style.paddingLeft = "1.25rem";
                          }}
                        >
                          <span style={{ fontSize: "1rem", flexShrink: 0 }}>
                            {sub.icon}
                          </span>
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((s) => !s)}
              style={{
                display: "none",
                flexDirection: "column",
                gap: "5px",
                padding: "8px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              className="mobile-btn"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "#94A3B8",
                  transition: "all 0.3s",
                  transform: mobileOpen
                    ? "rotate(45deg) translate(4px, 4px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "#94A3B8",
                  transition: "all 0.3s",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "#94A3B8",
                  transition: "all 0.3s",
                  transform: mobileOpen
                    ? "rotate(-45deg) translate(4px, -4px)"
                    : "none",
                }}
              />
            </button>
          </div>

          {/* ── Mobile Menu ── */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: mobileOpen ? "600px" : "0",
              transition: "max-height 0.4s ease",
              borderTop: mobileOpen ? "1px solid rgba(228,175,43,0.1)" : "none",
            }}
            className="mobile-menu"
          >
            <nav
              style={{
                padding: "1rem 0 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0",
              }}
            >
              {NAV_LINKS.map(({ label, href, sublinks, isCta }) => (
                <div key={label}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <Link
                      href={href}
                      onClick={() => {
                        if (!sublinks) setMobileOpen(false);
                      }}
                      style={{
                        fontSize: "0.85rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        textDecoration: "none",
                        color: isCta ? "#EFC75A" : "#94A3B8",
                        flex: 1,
                      }}
                    >
                      {label}
                    </Link>
                    {sublinks && (
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === label ? null : label,
                          )
                        }
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          color: "#64748B",
                          padding: "4px 8px",
                          fontSize: "1.1rem",
                        }}
                      >
                        {mobileExpanded === label ? "−" : "+"}
                      </button>
                    )}
                  </div>

                  {/* Mobile sublinks */}
                  {sublinks && mobileExpanded === label && (
                    <div
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {sublinks.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileExpanded(null);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "0.6rem 1rem",
                            fontSize: "0.82rem",
                            textDecoration: "none",
                            color: "#64748B",
                            borderBottom: "1px solid rgba(255,255,255,0.03)",
                            transition: "color 0.15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#EFC75A")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#64748B")
                          }
                        >
                          <span style={{ fontSize: "0.9rem" }}>{sub.icon}</span>
                          {sub.label}
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

      {/* Spacer so page content isn't hidden under fixed nav */}
      <div style={{ height: "70px" }} />

      <style jsx global>{`
        @keyframes dropFade {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-btn {
            display: flex !important;
          }
        }
        @media (min-width: 768px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
