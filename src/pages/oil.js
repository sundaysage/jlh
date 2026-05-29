import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

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
  show:   { transition: { staggerChildren: 0.11 } },
};

// ── Stats ─────────────────────────────────────────────────────
const STATS = [
  { value: "2.4M",  label: "Barrels Produced Daily"   },
  { value: "30+",   label: "Active Fields"             },
  { value: "4",     label: "Continents Operational"    },
  { value: "99.6%", label: "Operational Uptime"        },
];

// ── Expertise Items ───────────────────────────────────────────
const EXPERTISE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Seismic Exploration & Reservoir Mapping",
    desc:  "Advanced 3D/4D seismic imaging and geological modelling to precisely locate and characterise hydrocarbon reserves before a single drill bit turns.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Offshore & Onshore Drilling Operations",
    desc:  "From ultra-deepwater platforms to desert land rigs — full-cycle drilling operations with automated control systems and zero-compromise safety standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Production Optimisation & EOR",
    desc:  "Enhanced oil recovery techniques — including CO₂ injection, polymer flooding, and smart well completion — to maximise reservoir yield and extend field life.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: "AI-Driven Reservoir Modelling",
    desc:  "Machine-learning algorithms that analyse petro-physical data in real time — predicting production decline, optimising well placement, and reducing dry-hole risk.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
    title: "Integrated Refining & Petrochemicals",
    desc:  "Downstream integration connecting upstream production to refining, cracking, and petrochemical processing — capturing value at every stage of the hydrocarbon chain.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Pipeline Engineering & Safe Transport",
    desc:  "End-to-end pipeline solutions connecting wellheads to refineries and export terminals — engineered for the highest international safety and integrity standards.",
  },
];

// ── Technology Points ─────────────────────────────────────────
const TECH = [
  "AI-driven reservoir modelling & predictive analytics",
  "Advanced 3D/4D seismic imaging systems",
  "Automated rotary steerable drilling technology",
  "Digital twin wellbore simulation",
  "Real-time production monitoring via SCADA",
  "Carbon capture & flare-gas recovery integration",
];

// ── Sustainability Points ─────────────────────────────────────
const SUSTAIN = [
  "Net-zero emissions roadmap across all assets by 2040",
  "Flaring reduction — 90% below industry average",
  "Community investment funds in every operating region",
  "Renewable energy powering onshore field operations",
  "Biodiversity protection plans for all new drill sites",
];

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

// ── Reusable Image Block ──────────────────────────────────────
function OilImage({ src, alt, badge, accentColor = "#E4AF2B" }) {
  return (
    <div style={{ position:"relative", width:"100%", paddingBottom:"72%", overflow:"hidden", background:"#0A1628" }}>
      <Image src={src} alt={alt} fill className="object-cover object-center" />
      <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:`2px solid ${accentColor}`, borderRight:`2px solid ${accentColor}` }} />
      <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(228,175,43,0.3)", borderLeft:"2px solid rgba(228,175,43,0.3)" }} />
      {badge && (
        <div style={{
          position:"absolute", bottom:"1.5rem", left:"1.5rem",
          padding:"10px 16px", background:"rgba(3,11,24,0.92)",
          border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(10px)"
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:accentColor, animation:"pulse 2s infinite" }} />
            <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#EFC75A" }}>{badge}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function OilGas() {
  return (
    <>
      <Head>
        <title>Oil & Gas Exploration & Production | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy drives energy discovery and production through innovation, safety, and sustainable practices — spanning onshore and offshore operations worldwide." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ position:"relative", minHeight:"92vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>

          <Image
            src="/oilhero.jpg"
            alt="Oil & Gas Exploration & Production"
            fill
            className="object-cover object-center"
            priority
            style={{ opacity:0.32 }}
          />

          {/* Layered overlays */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(3,11,24,0.97) 0%,rgba(10,22,40,0.8) 55%,rgba(21,43,85,0.88) 100%)" }} />
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 65% 55% at 50% 60%, rgba(228,175,43,0.07) 0%, transparent 65%)" }} />

          {/* Animated grid */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"linear-gradient(rgba(228,175,43,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(228,175,43,0.03) 1px,transparent 1px)",
            backgroundSize:"80px 80px"
          }} />

          {/* Diagonal light rays */}
          {[10, 30, 70, 90].map((pct, i) => (
            <div key={i} style={{
              position:"absolute", top:"-20%", left:`${pct}%`,
              width:"1px", height:"140%",
              background:`linear-gradient(180deg,transparent,rgba(228,175,43,${i % 2 === 0 ? "0.05" : "0.025"}),transparent)`,
              transform:"skewX(-15deg)", pointerEvents:"none"
            }} />
          ))}

          {/* Content */}
          <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:"960px", padding:"0 1.5rem", paddingTop:"110px" }}>

            <motion.div
              initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"8px 22px", marginBottom:"2rem",
                border:"1px solid rgba(228,175,43,0.3)", background:"rgba(228,175,43,0.06)",
                fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#EFC75A"
              }}
            >
              <span style={{ display:"block", width:"7px", height:"7px", borderRadius:"50%", background:"#E4AF2B", animation:"pulse 2s infinite" }} />
              JLH Global Energy — Exploration & Production Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem,7vw,5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff", marginBottom:"1.5rem"
              }}
            >
              Oil &amp; Gas{" "}
              <em style={{ color:"#EFC75A", fontStyle:"italic" }}>Exploration</em>
              <br />&amp; Production
            </motion.h1>

            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"680px", margin:"0 auto 2.5rem" }}
            >
              Driving energy discovery and production through innovation, safety, and sustainable practices — across onshore and offshore reserves worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:1.1 }}
              style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}
            >
              <a href="#overview"
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
                Explore Our Operations
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="/contact"
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
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div style={{ position:"absolute", bottom:"2.5rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:"8px" }}>
            <span style={{ fontSize:"0.65rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"#475569" }}>Scroll</span>
            <div style={{ width:"1px", height:"40px", background:"linear-gradient(180deg,rgba(228,175,43,0.5),transparent)", animation:"pulse 2s infinite" }} />
          </div>

          {/* Bottom wave */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"70px" }}>
              <path d="M0,40 C360,0 720,70 1080,30 C1260,10 1380,55 1440,40 L1440,70 L0,70 Z" fill="#030B18" />
            </svg>
          </div>
        </section>

        {/* ── STATS BAR ──────────────────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(228,175,43,0.1)", borderBottom:"1px solid rgba(228,175,43,0.1)", background:"rgba(10,22,40,0.7)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"3rem 1.5rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:"2rem", textAlign:"center" }}>
            {STATS.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:600, color:"#EFC75A", lineHeight:1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#475569", marginTop:"0.5rem" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── OVERVIEW ──────────────────────────────────────── */}
        <section id="overview" style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <OilImage src="/oilexplor.jpg" alt="Oil exploration process" badge="Active in 30+ Fields Globally" />
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Overview</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                The Backbone of<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Global Energy Supply</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                Oil & Gas exploration and production form the backbone of the global energy industry. At <strong style={{ color:"#E2E8F0" }}>JLH Global Energy</strong>, we specialise in identifying, extracting, and refining hydrocarbons from both onshore and offshore reserves — powering industries and communities across the world.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                From seismic surveys and geological studies to advanced drilling techniques, our approach integrates precision engineering with sustainable practices — ensuring maximum efficiency while minimising environmental impact.
              </p>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"10px 18px",
                border:"1px solid rgba(228,175,43,0.2)", background:"rgba(228,175,43,0.05)",
                fontSize:"0.8rem", color:"#EFC75A"
              }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#E4AF2B" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                API · ISO 14001 · OSPAR Compliant Operations
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── EXPERTISE GRID ────────────────────────────────── */}
        <section style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Our Expertise</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Six Pillars of E&amp;P<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Excellence</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  Decades of combined geoscience and engineering expertise — from the first seismic shot to the last barrel produced.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {EXPERTISE.map((item, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"2.5rem", background:"#060F20",
                    transition:"background 0.3s", cursor:"default", position:"relative", overflow:"hidden"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  <div style={{
                    position:"absolute", top:"1.25rem", right:"1.25rem",
                    fontFamily:"'Cormorant Garamond',serif", fontSize:"3.5rem", fontWeight:700,
                    color:"rgba(228,175,43,0.06)", lineHeight:1, userSelect:"none"
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ position:"absolute", top:0, left:0, width:"40px", height:"2px", background:"linear-gradient(90deg,#E4AF2B,transparent)" }} />
                  <div style={{
                    width:"48px", height:"48px", marginBottom:"1.25rem",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    border:"1px solid rgba(228,175,43,0.2)", color:"#E4AF2B",
                    background:"rgba(228,175,43,0.06)"
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:600, color:"#fff", marginBottom:"0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color:"#64748B", lineHeight:1.75, fontSize:"0.9rem" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TECHNOLOGY & INNOVATION ───────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <OilImage src="/oiltech.jpg" alt="Oil & gas technology" badge="AI-Powered Field Operations" />
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Technology & Innovation</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Where Engineering<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Meets Intelligence</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.5rem" }}>
                We leverage state-of-the-art technologies to maximise efficiency and safety across every operation. Innovation is at the heart of JLH Global Energy — enabling us to push exploration boundaries while maintaining the highest global standards.
              </p>

              <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem" }}>
                {TECH.map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"12px" }}>
                    <div style={{
                      width:"20px", height:"20px", borderRadius:"50%", flexShrink:0, marginTop:"2px",
                      background:"rgba(228,175,43,0.1)", border:"1px solid rgba(228,175,43,0.3)",
                      display:"flex", alignItems:"center", justifyContent:"center"
                    }}>
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#E4AF2B" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color:"#CBD5E1", fontSize:"0.9rem", lineHeight:1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── DRILLING RIG FEATURE ──────────────────────────── */}
        <section style={{ background:"rgba(6,15,32,0.8)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Operations at Scale</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Drilling in the World's<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Most Challenging Environments</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.5rem" }}>
                With decades of combined experience, our engineers and geoscientists deliver cutting-edge solutions whether operating in ultra-deepwater basins, arctic conditions, or remote desert terrains.
              </p>

              {/* Operation types */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                {[
                  { label:"Deepwater Offshore",  icon:"🌊" },
                  { label:"Desert Land Rigs",    icon:"🏜️" },
                  { label:"Arctic Operations",   icon:"❄️" },
                  { label:"Jungle & Remote",     icon:"🌿" },
                ].map((op, i) => (
                  <div key={i} style={{
                    padding:"1.25rem",
                    border:"1px solid rgba(228,175,43,0.12)",
                    background:"rgba(10,22,40,0.6)",
                    display:"flex", alignItems:"center", gap:"12px",
                    transition:"border-color 0.3s, background 0.3s"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(228,175,43,0.3)"; e.currentTarget.style.background="rgba(10,22,40,0.9)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(228,175,43,0.12)"; e.currentTarget.style.background="rgba(10,22,40,0.6)" }}
                  >
                    <span style={{ fontSize:"1.5rem" }}>{op.icon}</span>
                    <span style={{ fontSize:"0.82rem", color:"#94A3B8" }}>{op.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <OilImage src="/drillingrig.jpg" alt="Offshore drilling rig" badge="Zero Major Incident Record — 2024" />
            </motion.div>
          </div>
        </section>

        {/* ── GLOBAL IMPACT & SUSTAINABILITY ───────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <OilImage src="/sustain.jpg" alt="Sustainability in oil and gas" badge="Net Zero Target — 2040" accentColor="#22C55E" />
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel color="#22C55E">Global Impact & Sustainability</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Energy Security<br />
                <span style={{ color:"#4ADE80", fontStyle:"italic" }}>Without Compromise</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.5rem" }}>
                Our exploration and production projects span Europe, Africa, the Middle East, and Southeast Asia — ensuring energy security for millions of people. Beyond profitability, JLH Global Energy is committed to reducing emissions and engaging local communities for long-term shared growth.
              </p>

              <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem" }}>
                {SUSTAIN.map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"12px" }}>
                    <div style={{
                      width:"20px", height:"20px", borderRadius:"50%", flexShrink:0, marginTop:"2px",
                      background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)",
                      display:"flex", alignItems:"center", justifyContent:"center"
                    }}>
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#22C55E" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ color:"#CBD5E1", fontSize:"0.9rem", lineHeight:1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CERTIFICATIONS STRIP ──────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(228,175,43,0.1)", background:"rgba(6,15,32,0.8)", padding:"3rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1.5rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
              <div style={{ width:"2px", height:"40px", background:"linear-gradient(180deg,#E4AF2B,transparent)" }} />
              <div>
                <div style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#EFC75A", marginBottom:"4px" }}>Industry Standards</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", color:"#fff", fontWeight:500 }}>
                  Every operation certified, audited, and held to the highest global benchmarks.
                </div>
              </div>
            </div>
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              {["API Q1", "ISO 14001", "ISO 45001", "OSPAR", "IOGP Member"].map((cert, i) => (
                <div key={i} style={{
                  padding:"6px 14px",
                  border:"1px solid rgba(228,175,43,0.2)", background:"rgba(228,175,43,0.05)",
                  fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#EFC75A"
                }}>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA BANNER ────────────────────────────────────── */}
        <section style={{
          position:"relative", overflow:"hidden",
          background:"linear-gradient(135deg, #0A1628 0%, #152B55 50%, #0A1628 100%)",
          borderTop:"1px solid rgba(228,175,43,0.15)",
          padding:"5rem 1.5rem", textAlign:"center"
        }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 80% at 50% 50%, rgba(228,175,43,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ position:"relative", zIndex:1 }}>
            <SectionLabel>Partner With JLH</SectionLabel>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", marginBottom:"1rem" }}>
              Unlocking the World's<br />
              <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Energy Potential Together</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"560px", margin:"0 auto 2.5rem", lineHeight:1.75 }}>
              Whether you're seeking an E&P partner, joint venture operator, or technical services provider — JLH Global Energy brings the expertise, assets, and commitment to deliver results.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <a href="/contact"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 36px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                  background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18"
                }}
              >
                Start a Conversation
              </a>
              <a href="/services"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 36px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                  border:"1px solid rgba(228,175,43,0.35)", color:"#EFC75A", background:"transparent"
                }}
              >
                All Services
              </a>
            </div>
          </motion.div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity:1; box-shadow:0 0 0 0 rgba(228,175,43,0.4); }
          50%       { opacity:0.6; box-shadow:0 0 0 6px rgba(228,175,43,0); }
        }
      `}</style>
    </>
  );
}