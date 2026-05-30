import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";


import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

// ── Animation Variants ────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

// ── Data ──────────────────────────────────────────────────────
const STATS = [
  { value: "20+",  label: "Years of Excellence",                },
  { value: "15+",  label: "Countries Served",       sub: "Global footprint"          },
  { value: "10000+", label: "Global Employees",     sub: "Expert teams worldwide"    },
];

const SERVICES = [
  {
    icon: "🛢️",
    title: "Oil & Gas E&P",
    desc:  "Onshore and offshore exploration and production across four continents — from seismic survey to first barrel.",
    href:  "/oil",
  },
  {
    icon: "🌿",
    title: "Renewable & Hybrid Energy",
    desc:  "Solar farms, wind energy, and hybrid systems engineered for the global transition to clean power.",
    href:  "/renewable",
  },
  {
    icon: "🏗️",
    title: "Rig Construction & Offshore",
    desc:  "Heavy fabrication, equipment integration, and full lifecycle management of offshore and onshore rigs.",
    href:  "/rig",
  },
  {
    icon: "🏭",
    title: "Industrial Plant Development",
    desc:  "Full EPC solutions for refineries, LNG plants, and petrochemical facilities — built for maximum uptime.",
    href:  "/mainten",
  },
  {
    icon: "🔩",
    title: "Pipeline Engineering",
    desc:  "15,000+ km of pipeline designed, constructed, and maintained across the world's most challenging terrains.",
    href:  "/pipeline",
  },
  {
    icon: "📋",
    title: "Project Management",
    desc:  "End-to-end consultancy and project leadership for complex energy ventures — on time, on budget.",
    href:  "/projects",
  },
];

const ESG_PILLARS = [
  { icon: "🛡️", label: "Health & Safety First",      color: "#E4AF2B" },
  { icon: "🌍", label: "Environmental Stewardship",   color: "#22C55E" },
  { icon: "🤝", label: "Community Investment",         color: "#60A5FA" },
  { icon: "📊", label: "Transparent Governance",       color: "#A78BFA" },
  { icon: "⚡", label: "Energy Transition",            color: "#34D399" },
];

const NEWS = [
  {
    date:    "27 May 2025",
    tag:     "Operations",
    title:   "Annual General Meeting – Operations Update",
    excerpt: "Key production and cash flow highlights ahead of the AGM; strategy focused on energy security and decarbonisation.",
    href:    "/news/agm-ops-update",
  },
  {
    date:    "12 Feb 2025",
    tag:     "Financial",
    title:   "Full Year 2024 Operations Update & 2025 Guidance",
    excerpt: "Investment scaled to maintain production, maximise cash flow and reduce future emissions and operating costs.",
    href:    "/news/fy24-update",
  },
  {
    date:    "11 Aug 2025",
    tag:     "Decommissioning",
    title:   "Heather Alpha Topsides Removal Completed",
    excerpt: "Major decommissioning milestone achieved with >95% material recovery expected through recycling and repurposing.",
    href:    "/news/heather-alpha-lift",
  },
];

// ── Animated Counter ──────────────────────────────────────────
function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const isDecimal = String(end).includes(".");
        const num = parseFloat(String(end).replace(/[^0-9.]/g, ""));
        const startTime = performance.now();
        const tick = (now) => {
          const p = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(isDecimal ? (num * eased).toFixed(1) : Math.floor(num * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  // If value is non-numeric (like "$18B"), just show it directly
  const isNumeric = !isNaN(parseFloat(String(end).replace(/[^0-9.]/g, "")));

  return (
    <span ref={ref}>
      {isNumeric
        ? `${String(end).replace(/[0-9.]+/, count)}${suffix}`
        : end}
    </span>
  );
}

// ── Section Label ─────────────────────────────────────────────
function SectionLabel({ children, color = "#E4AF2B" }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginBottom:"1rem" }}>
      <span style={{ display:"block", width:"32px", height:"2px", background:`linear-gradient(90deg,${color},transparent)` }} />
      <span style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color, fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
        {children}
      </span>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Home() {
  const [formData, setFormData] = useState({ name:"", email:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation("common");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>

        <title>{t(" JLH Global Energy Ltd — Integrated Energy Solutions")}</title>
        <meta name="description" content="JLH Global Energy delivers integrated energy services — from upstream exploration to renewable transition — across four continents." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }}>

          <Image src="/hero1.jpg" alt="JLH Global Energy offshore platform" fill className="object-cover object-center" priority style={{ opacity:0.3 }} />

          {/* Overlays */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(3,11,24,0.97) 0%,rgba(10,22,40,0.82) 55%,rgba(21,43,85,0.75) 100%)" }} />
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 60% at 40% 55%, rgba(228,175,43,0.07) 0%, transparent 65%)", pointerEvents:"none" }} />

          {/* Grid */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"linear-gradient(rgba(228,175,43,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(228,175,43,0.03) 1px,transparent 1px)",
            backgroundSize:"80px 80px"
          }} />

          {/* Vertical lines */}
          {[15,30,70,85].map((p,i) => (
            <div key={i} style={{
              position:"absolute", top:0, left:`${p}%`, width:"1px", height:"100%",
              background:`linear-gradient(180deg,transparent,rgba(228,175,43,${i%2===0?"0.06":"0.03"}),transparent)`,
              pointerEvents:"none"
            }} />
          ))}

          {/* Content */}
          <div style={{ position:"relative", zIndex:10, maxWidth:"1200px", margin:"0 auto", padding:"0 1.5rem", paddingTop:"100px", width:"100%" }}>
            <div style={{ maxWidth:"780px" }}>

              {/* Pill */}
              <motion.div
                initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:"10px",
                  padding:"8px 20px", marginBottom:"2rem",
                  border:"1px solid rgba(228,175,43,0.3)", background:"rgba(228,175,43,0.06)",
                  fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#EFC75A"
                }}
              >
                <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#E4AF2B", animation:"pulse 2s infinite", display:"block" }} />
                Integrated Global Energy Solutions
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
                style={{
                  fontFamily:"'Cormorant Garamond',Georgia,serif",
                  fontSize:"clamp(3rem,8vw,6.5rem)",
                  fontWeight:600, lineHeight:1.0, color:"#fff", marginBottom:"1.5rem"
                }}
              >
                Energy Security Today,<br />
                <em style={{ color:"#EFC75A", fontStyle:"italic" }}>Decarbonisation</em>
                <br />for Tomorrow
              </motion.h1>

              {/* Gold line */}
              <motion.div
                initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.8 }}
                style={{ width:"80px", height:"2px", background:"linear-gradient(90deg,#E4AF2B,transparent)", marginBottom:"1.5rem" }}
              />

              {/* Subheadline */}
              <motion.p
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:1 }}
                style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"580px", marginBottom:"2.5rem" }}
              >
                Applying operational excellence to optimise existing assets, reduce emissions, and enable the global energy transition — across oil, gas, and renewables.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:1.2 }}
                style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}
              >
                <Link href="#operations"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"14px 32px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                    background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18",
                    transition:"opacity 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity="1"}
                >
                  Our Operations
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="#esg"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"14px 32px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                    border:"1px solid rgba(228,175,43,0.35)", color:"#EFC75A", background:"transparent",
                    transition:"all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background="rgba(228,175,43,0.07)"; e.currentTarget.style.borderColor="rgba(228,175,43,0.6)" }}
                  onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="rgba(228,175,43,0.35)" }}
                >
                  Our ESG Approach
                </Link>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
              style={{ position:"absolute", bottom:"-80px", left:"1.5rem", display:"flex", alignItems:"center", gap:"10px" }}
            >
              <div style={{ width:"1px", height:"40px", background:"linear-gradient(180deg,rgba(228,175,43,0.5),transparent)", animation:"pulse 2s infinite" }} />
              <span style={{ fontSize:"0.65rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#475569" }}>Scroll to explore</span>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"80px" }}>
              <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" fill="#030B18" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STATS BAR
        ══════════════════════════════════════════════════════ */}
        <div style={{ borderTop:"1px solid rgba(228,175,43,0.1)", borderBottom:"1px solid rgba(228,175,43,0.1)", background:"rgba(10,22,40,0.8)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"3rem 1.5rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"2rem" }}>
            {STATS.map((s, i) => (
              <motion.div
                key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }}
                style={{ textAlign:"center", padding:"0 1rem" }}
              >
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:600, color:"#EFC75A", lineHeight:1 }}>
                  <CountUp end={s.value} />
                </div>
                <div style={{ fontSize:"0.8rem", fontWeight:500, color:"#E2E8F0", margin:"0.4rem 0 0.2rem", letterSpacing:"0.02em" }}>{s.label}</div>
                <div style={{ fontSize:"0.7rem", color:"#475569", letterSpacing:"0.05em" }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SERVICES
        ══════════════════════════════════════════════════════ */}
        <section id="operations" style={{ padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"2rem", alignItems:"end" }}>
              <div>
                <SectionLabel>What We Do</SectionLabel>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Integrated Energy<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Across the Value Chain</span>
                </h2>
              </div>
              <p style={{ color:"#64748B", lineHeight:1.75, fontSize:"0.95rem" }}>
                From upstream exploration to renewable transition — JLH Global Energy delivers full-spectrum energy services across six core divisions, operating in over 40 countries.
              </p>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {SERVICES.map((svc, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link href={svc.href} style={{ textDecoration:"none", display:"block" }}>
                    <div
                      style={{
                        padding:"2.5rem", background:"#060F20", height:"100%",
                        position:"relative", overflow:"hidden",
                        transition:"background 0.3s", cursor:"pointer"
                      }}
                      onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                      onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                    >
                      {/* Top accent */}
                      <div style={{ position:"absolute", top:0, left:0, width:"0", height:"2px", background:"linear-gradient(90deg,#E4AF2B,transparent)", transition:"width 0.4s ease" }}
                        onMouseEnter={e => e.currentTarget.style.width="100%"}
                        onMouseLeave={e => e.currentTarget.style.width="0"}
                      />

                      <div style={{ fontSize:"2rem", marginBottom:"1.25rem" }}>{svc.icon}</div>
                      <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.4rem", fontWeight:600, color:"#fff", marginBottom:"0.75rem" }}>
                        {svc.title}
                      </h3>
                      <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.88rem", marginBottom:"1.5rem" }}>
                        {svc.desc}
                      </p>
                      <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#E4AF2B" }}>
                        Learn More
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            OPERATIONS / GLOBAL PRESENCE
        ══════════════════════════════════════════════════════ */}
        <section style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Global Presence</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Operations Across<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>UK, Europe & Asia</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                We focus on mature, late-life assets where we can responsibly optimise production, drive capital efficiency, and reduce emissions. Where possible, we repurpose infrastructure for renewable and decarbonisation projects before executing world-class decommissioning.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem", marginBottom:"2rem" }}>
                {[
                  "Production optimisation & integrity management",
                  "Electrification and flare reduction initiatives",
                  "Safe, efficient decommissioning with high recycling rates",
                ].map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                    <div style={{ width:"20px", height:"20px", borderRadius:"50%", flexShrink:0, background:"rgba(228,175,43,0.1)", border:"1px solid rgba(228,175,43,0.3)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#E4AF2B" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color:"#CBD5E1", fontSize:"0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <Link href="#media"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                    background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18"
                  }}
                >
                  Latest Updates
                </Link>
                <Link href="#contact"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                    border:"1px solid rgba(228,175,43,0.35)", color:"#EFC75A", background:"transparent"
                  }}
                >
                  Talk to Our Team
                </Link>
              </div>
            </motion.div>

            {/* Map image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"72%", overflow:"hidden" }}>
                <Image src="/map.jpg" alt="JLH Global Energy operational footprint" fill className="object-cover" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(228,175,43,0.3)", borderLeft:"2px solid rgba(228,175,43,0.3)" }} />
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"8px 14px", background:"rgba(3,11,24,0.9)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(8px)",
                  fontSize:"0.7rem", color:"#EFC75A", letterSpacing:"0.1em", textTransform:"uppercase"
                }}>
                  Illustrative Global Footprint
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            ABOUT US
        ══════════════════════════════════════════════════════ */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Image */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden" }}>
                <Image src="/fourmen.jpg" alt="JLH Global Energy team" fill className="object-cover" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(228,175,43,0.3)", borderLeft:"2px solid rgba(228,175,43,0.3)" }} />
                <div style={{
                  position:"absolute", top:"1.5rem", right:"1.5rem",
                  padding:"12px 18px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(8px)"
                }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:600, color:"#EFC75A", lineHeight:1 }}>35+</div>
                  <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#64748B", marginTop:"2px" }}>Years of Trust</div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>About JLH Global Energy</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                More Than an<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>{t("Energy Company")}</span></h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                At JLH Global Energy, we are a driving force behind the infrastructure that fuels nations, empowers industries, and supports communities across the globe. From upstream exploration to clean energy transition, we operate with precision, integrity, and a long-term view.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Trusted by governments, national oil companies, and private enterprises across four continents — we combine deep technical expertise with global reach and local knowledge.
              </p>
              <Link href="/aboutus"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                  background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18"
                }}
              >
                Our Full Story
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            ESG
        ══════════════════════════════════════════════════════ */}
        <section id="esg" style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel color="#22C55E">Sustainability</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Environmental, Social<br />
                <span style={{ color:"#4ADE80", fontStyle:"italic" }}>&amp; Governance</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Our Board-approved ESG approach focuses on five pillars: health & safety, environment, people, communities, and business conduct. We embed TCFD-aligned climate reporting and link rewards to multi-year emissions reduction targets.
              </p>

              {/* Pillars */}
              <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", marginBottom:"2rem" }}>
                {ESG_PILLARS.map((p, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"0.75rem 1rem", border:"1px solid rgba(255,255,255,0.06)", background:"rgba(255,255,255,0.02)", transition:"background 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.05)"}
                    onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.02)"}
                  >
                    <span style={{ fontSize:"1.1rem" }}>{p.icon}</span>
                    <span style={{ fontSize:"0.88rem", color:"#CBD5E1" }}>{p.label}</span>
                    <div style={{ marginLeft:"auto", width:"6px", height:"6px", borderRadius:"50%", background:p.color }} />
                  </div>
                ))}
              </div>

              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <Link href="/investors"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                    background:"linear-gradient(135deg,#22C55E,#15803D)", color:"#030B18"
                  }}
                >
                  Reports &amp; Policies
                </Link>
                <Link href="#contact"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                    border:"1px solid rgba(34,197,94,0.35)", color:"#4ADE80", background:"transparent"
                  }}
                >
                  Engage With ESG
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"72%", overflow:"hidden" }}>
                <Image src="/emission.jpg" alt="Decarbonisation in action" fill className="object-cover" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #22C55E", borderRight:"2px solid #22C55E" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(34,197,94,0.3)", borderLeft:"2px solid rgba(34,197,94,0.3)" }} />
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"10px 16px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(34,197,94,0.3)", backdropFilter:"blur(8px)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#22C55E", animation:"pulse 2s infinite" }} />
                    <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4ADE80" }}>-40% UK Emissions Since 2018</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            INVESTORS
        ══════════════════════════════════════════════════════ */}
        <section id="investors" style={{
          position:"relative", overflow:"hidden",
          background:"linear-gradient(135deg,#060F20 0%,#0A1628 50%,#152B55 100%)",
          padding:"6rem 1.5rem"
        }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 70% at 80% 50%, rgba(228,175,43,0.06) 0%, transparent 65%)", pointerEvents:"none" }} />

          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center", position:"relative", zIndex:1 }}>

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Investors</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Transparent Reporting,<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Consistent Returns</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Access the latest results, presentations, and our strategic report. Stay informed on production guidance, capital allocation, and our progress towards emissions reduction targets.
              </p>
              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <Link href="/investors/reports"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                    background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18"
                  }}
                >
                  Reports &amp; Results
                </Link>
                <Link href="/investors/contacts"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                    border:"1px solid rgba(228,175,43,0.35)", color:"#EFC75A", background:"transparent"
                  }}
                >
                  IR Contacts
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"65%", overflow:"hidden" }}>
                <Image src="/greenup.jpeg" alt="Financial charts" fill className="object-cover" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"8px 14px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(8px)",
                  fontSize:"0.7rem", color:"#EFC75A", letterSpacing:"0.1em", textTransform:"uppercase"
                }}>
                  Transparent Reporting
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CAREERS
        ══════════════════════════════════════════════════════ */}
        <section id="careers" style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Careers</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Shape the Future<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>of Global Energy</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Join a team that thrives on problem-solving and continuous improvement. We offer competitive benefits, learning opportunities, and the chance to work on some of the world's most complex and impactful energy projects.
              </p>
              <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                <Link href="/careers"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                    background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18"
                  }}
                >
                  Explore Roles
                </Link>
                <Link href="#contact"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"8px",
                    padding:"12px 28px", fontSize:"0.75rem", letterSpacing:"0.15em",
                    textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                    border:"1px solid rgba(228,175,43,0.35)", color:"#EFC75A", background:"transparent"
                  }}
                >
                  Graduate Pathway
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden" }}>
                <Image src="/team.jpg" alt="JLH Global Energy team" fill className="object-cover" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"8px 14px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(8px)",
                  fontSize:"0.7rem", color:"#EFC75A", letterSpacing:"0.1em", textTransform:"uppercase"
                }}>
                  People First Culture
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════════ */}
        <section id="contact" style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem" }}>

            {/* Form */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Get In Touch</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1rem" }}>
                Have a Project<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>or Enquiry?</span>
              </h2>
              <p style={{ color:"#64748B", lineHeight:1.7, marginBottom:"2rem" }}>We'll respond promptly.</p>

              {submitted ? (
                <div style={{ padding:"2rem", border:"1px solid rgba(34,197,94,0.3)", background:"rgba(34,197,94,0.06)", textAlign:"center" }}>
                  <div style={{ fontSize:"2rem", marginBottom:"0.75rem" }}>✅</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", color:"#4ADE80", marginBottom:"0.5rem" }}>Message Sent!</div>
                  <div style={{ fontSize:"0.85rem", color:"#64748B" }}>Our team will be in touch shortly.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                  {[
                    { key:"name",    placeholder:"Full Name",       type:"text"  },
                    { key:"email",   placeholder:"Email Address",   type:"email" },
                    { key:"company", placeholder:"Company",         type:"text"  },
                  ].map(f => (
                    <input
                      key={f.key}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={formData[f.key] || ""}
                      onChange={e => setFormData(p => ({ ...p, [f.key]: e.target.value }))}
                      style={{
                        width:"100%", padding:"0.875rem 1.25rem",
                        background:"rgba(255,255,255,0.04)",
                        border:"1px solid rgba(255,255,255,0.1)",
                        color:"#E2E8F0", fontSize:"0.9rem",
                        fontFamily:"'DM Sans',sans-serif",
                        outline:"none", transition:"border-color 0.2s"
                      }}
                      onFocus={e => e.target.style.borderColor="rgba(228,175,43,0.5)"}
                      onBlur={e => e.target.style.borderColor="rgba(255,255,255,0.1)"}
                    />
                  ))}
                  <textarea
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    rows={4}
                    style={{
                      width:"100%", padding:"0.875rem 1.25rem",
                      background:"rgba(255,255,255,0.04)",
                      border:"1px solid rgba(255,255,255,0.1)",
                      color:"#E2E8F0", fontSize:"0.9rem",
                      fontFamily:"'DM Sans',sans-serif",
                      outline:"none", resize:"vertical", transition:"border-color 0.2s"
                    }}
                    onFocus={e => e.target.style.borderColor="rgba(228,175,43,0.5)"}
                    onBlur={e => e.target.style.borderColor="rgba(255,255,255,0.1)"}
                  />
                  <button
                    type="submit"
                    style={{
                      padding:"14px 32px", fontSize:"0.75rem", letterSpacing:"0.15em",
                      textTransform:"uppercase", fontWeight:600, border:"none", cursor:"pointer",
                      background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18",
                      transition:"opacity 0.2s", alignSelf:"flex-start"
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity="1"}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ padding:"2.5rem", border:"1px solid rgba(228,175,43,0.12)", background:"rgba(10,22,40,0.6)", height:"100%" }}>
                <div style={{ marginBottom:"2rem" }}>
                  <div style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#E4AF2B", marginBottom:"0.5rem" }}>Head Office</div>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:500, color:"#fff" }}>London, United Kingdom</div>
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom:"2rem" }}>
                  {[
                    { label:"Investor Relations", value:"info@jlhglobalenergy.com" },
                    { label:"Media Enquiries",    value:"+44 774 267 8190"          },
                    { label:"General",            value:"info@jlhglobalenergy.com" },
                    { label:"Careers",            value:"careers@jlhglobal.com"    },
                  ].map((c, i) => (
                    <div key={i} style={{ padding:"1rem", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)" }}>
                      <div style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#475569", marginBottom:"6px" }}>{c.label}</div>
                      <div style={{ fontSize:"0.82rem", color:"#CBD5E1", wordBreak:"break-all" }}>{c.value}</div>
                    </div>
                  ))}
                </div>

                <hr style={{ border:"none", height:"1px", background:"linear-gradient(90deg,transparent,rgba(228,175,43,0.2),transparent)", margin:"1.5rem 0" }} />

                <div style={{ fontSize:"0.78rem", color:"#475569", lineHeight:1.6 }}>{t("Registered in England & Wales.")}
                  <br />
                  Company No. 01234567<br /><br />
                  <span style={{ color:"#334155" }}>JLH Global Energy Ltd operates in compliance with international energy regulations and standards across all jurisdictions.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity:1; box-shadow:0 0 0 0 rgba(228,175,43,0.4); }
          50%       { opacity:0.6; box-shadow:0 0 0 6px rgba(228,175,43,0); }
        }
        * { box-sizing: border-box; }
        ::placeholder { color: rgba(226,232,240,0.3); }
      `}</style>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}