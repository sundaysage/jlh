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
  { value: "15,000+", label: "Kilometres Installed"   },
  { value: "60+",     label: "Countries Served"       },
  { value: "40+",     label: "Years of Experience"    },
  { value: "Zero",    label: "Major Incident Record"  },
];

// ── Engineering Features ──────────────────────────────────────
const ENGINEERING = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Advanced Engineering",
    desc:  "3D modelling, terrain mapping, and stress analysis to optimise routes and guarantee long-term structural integrity across any geography.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Compliance",
    desc:  "Strict adherence to ISO, ASME, and API international standards — ensuring world-class safety, performance, and regulatory acceptance in every jurisdiction.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safety-First Culture",
    desc:  "Every project phase is executed with rigorous HSE protocols — protecting people, assets, and the environment from survey to commissioning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Trenchless Technology",
    desc:  "Horizontal directional drilling and micro-tunnelling methods that minimise environmental disruption in urban, river-crossing, and sensitive terrain environments.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
    title: "Eco-Friendly Materials",
    desc:  "Corrosion-resistant, recyclable alloys and coatings for extended service life — reducing maintenance frequency and environmental impact over decades.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Smart Monitoring",
    desc:  "IoT-enabled SCADA systems, leak detection, and real-time pressure monitoring ensuring operational awareness and rapid incident response 24/7.",
  },
];

// ── Lifecycle Steps ───────────────────────────────────────────
const LIFECYCLE = [
  { num:"01", label:"Route Survey",        desc:"Geotechnical & environmental assessment"  },
  { num:"02", label:"Feasibility Study",   desc:"Technical, financial & regulatory review" },
  { num:"03", label:"Materials & Procurement", desc:"Specification, sourcing & QA/QC"      },
  { num:"04", label:"Construction",        desc:"Welding, coating, civil & mechanical work" },
  { num:"05", label:"Commissioning",       desc:"Pressure testing, instrumentation & sign-off" },
  { num:"06", label:"Inspection & Repair", desc:"Ongoing monitoring, PIGs & integrity management" },
];

// ── Fluid Types ───────────────────────────────────────────────
const FLUID_TYPES = [
  { label:"Crude Oil",          icon:"🛢️" },
  { label:"Natural Gas",        icon:"💨" },
  { label:"Refined Fuels",      icon:"⛽" },
  { label:"Petrochemicals",     icon:"⚗️" },
  { label:"LNG / LPG",         icon:"❄️" },
  { label:"Industrial Liquids", icon:"💧" },
];

// ── Section Label ─────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div style={{ display:"inline-flex", alignItems:"center", gap:"10px", marginBottom:"1rem" }}>
      <span style={{ display:"block", width:"32px", height:"2px", background:"linear-gradient(90deg,#E4AF2B,#EFC75A)" }} />
      <span style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B", fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
        {children}
      </span>
    </div>
  );
}

// ── Reusable Image Block ──────────────────────────────────────
function PipeImage({ src, alt, badge, badgeColor = "#E4AF2B" }) {
  return (
    <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden", background:"#0A1628" }}>
      <Image src={src} alt={alt} fill className="object-cover object-center" />
      <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:`2px solid ${badgeColor}`, borderRight:`2px solid ${badgeColor}` }} />
      <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:`2px solid rgba(228,175,43,0.3)`, borderLeft:`2px solid rgba(228,175,43,0.3)` }} />
      {badge && (
        <div style={{
          position:"absolute", bottom:"1.5rem", left:"1.5rem",
          padding:"10px 16px", background:"rgba(3,11,24,0.92)",
          border:`1px solid rgba(228,175,43,0.25)`, backdropFilter:"blur(10px)"
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:badgeColor, animation:"pulse 2s infinite" }} />
            <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#EFC75A" }}>{badge}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function Pipeline() {
  return (
    <>
      <Head>
        <title>Pipeline Engineering & Installation | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy designs and delivers world-class pipeline systems for crude oil, gas, and petrochemicals — engineered to power industries and communities for generations." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ position:"relative", minHeight:"90vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>

          <Image
            src="/pipe1.jpg"
            alt="Pipeline Engineering & Installation"
            fill
            className="object-cover object-center"
            priority
            style={{ opacity:0.3 }}
          />

          {/* Overlays */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(3,11,24,0.97) 0%,rgba(10,22,40,0.82) 55%,rgba(21,43,85,0.88) 100%)" }} />
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 65% 55% at 50% 60%, rgba(228,175,43,0.07) 0%, transparent 65%)" }} />

          {/* Pipe-inspired horizontal lines */}
          {[20, 40, 60, 80].map((pct, i) => (
            <div key={i} style={{
              position:"absolute", top:`${pct}%`, left:0, right:0,
              height:"1px",
              background:`linear-gradient(90deg, transparent, rgba(228,175,43,${i % 2 === 0 ? "0.05" : "0.03"}), transparent)`,
              pointerEvents:"none"
            }} />
          ))}

          {/* Content */}
          <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:"920px", padding:"0 1.5rem", paddingTop:"110px" }}>

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
              JLH Global Energy — Pipeline Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem,7vw,5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff", marginBottom:"1.5rem"
              }}
            >
              Pipeline Engineering<br />
              <em style={{ color:"#EFC75A", fontStyle:"italic" }}>&amp; Installation</em>
            </motion.h1>

            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"680px", margin:"0 auto 2.5rem" }}
            >
              Designing and delivering world-class pipeline systems that power industries and communities for generations — across the most challenging terrains on earth.
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
                Explore Our Work
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
                Request a Proposal
              </a>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"70px" }}>
              <path d="M0,30 C480,70 960,0 1440,45 L1440,70 L0,70 Z" fill="#030B18" />
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

        {/* ── FLUID TYPES ───────────────────────────────────── */}
        <section style={{ padding:"3.5rem 1.5rem", background:"rgba(6,15,32,0.5)", borderBottom:"1px solid rgba(228,175,43,0.07)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"2rem" }}>
              <SectionLabel>Fluids We Transport</SectionLabel>
            </motion.div>
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {FLUID_TYPES.map((ft, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"1.75rem 1rem", textAlign:"center", background:"#060F20",
                    transition:"background 0.3s", cursor:"default"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  <div style={{ fontSize:"1.75rem", marginBottom:"0.6rem" }}>{ft.icon}</div>
                  <div style={{ fontSize:"0.78rem", color:"#94A3B8", letterSpacing:"0.04em" }}>{ft.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── OVERVIEW ──────────────────────────────────────── */}
        <section id="overview" style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Image */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <PipeImage src="/pipe1.jpg" alt="Pipeline installation" badge="15,000+ km Installed Globally" />
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Overview</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Infrastructure Built to<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Last Generations</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                At <strong style={{ color:"#E2E8F0" }}>JLH Global Energy</strong>, we specialise in the design, construction, and maintenance of high-capacity pipelines for crude oil, refined fuels, natural gas, petrochemicals, and industrial liquids. Our pipelines are engineered to deliver energy reliably and safely under the harshest conditions — ensuring uninterrupted supply across continents.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Whether spanning rugged terrains, crossing major river systems, or traversing dense urban landscapes, our engineering excellence guarantees pipelines that perform for decades with minimal disruption.
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
                ISO 3183 · ASME B31.4 · API 1104 Certified
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── ENGINEERING & CAPABILITIES ────────────────────── */}
        <section style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Engineering Excellence</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Six Dimensions of<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Pipeline Excellence</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  From initial survey and design through to smart operational monitoring — every phase engineered to the highest international standards.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {ENGINEERING.map((item, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"2.5rem", background:"#060F20",
                    transition:"background 0.3s", cursor:"default", position:"relative", overflow:"hidden"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  {/* Ghost number */}
                  <div style={{
                    position:"absolute", top:"1.25rem", right:"1.25rem",
                    fontFamily:"'Cormorant Garamond',serif", fontSize:"3.5rem", fontWeight:700,
                    color:"rgba(228,175,43,0.06)", lineHeight:1, userSelect:"none"
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Top accent */}
                  <div style={{ position:"absolute", top:0, left:0, width:"40px", height:"2px", background:"linear-gradient(90deg,#E4AF2B,transparent)" }} />

                  {/* Icon */}
                  <div style={{
                    width:"48px", height:"48px", marginBottom:"1.25rem",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    border:"1px solid rgba(228,175,43,0.2)", color:"#E4AF2B",
                    background:"rgba(228,175,43,0.06)"
                  }}>
                    {item.icon}
                  </div>

                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.35rem", fontWeight:600, color:"#fff", marginBottom:"0.75rem" }}>
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

        {/* ── SUSTAINABILITY & INNOVATION ───────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Sustainability & Innovation</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Built for the Planet<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>As Much as Industry</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.5rem" }}>
                Our pipeline systems are built with sustainability at their core. By combining innovation with responsibility, we create infrastructure that powers industries while protecting ecosystems and communities.
              </p>

              {/* Feature list */}
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {[
                  "Trenchless HDD & micro-tunnelling — minimal surface disruption",
                  "Corrosion-resistant, recyclable alloys for 50+ year service life",
                  "Seismic & extreme climate resilience by design",
                  "Cathodic protection and continuous leak detection systems",
                  "Carbon-neutral construction programme by 2030",
                ].map((item, i) => (
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

            {/* Image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <PipeImage src="/tddrawing.jpg" alt="Pipeline engineering drawings" badge="ISO 14001 Environmental Certified" />
            </motion.div>
          </div>
        </section>

        {/* ── LIFECYCLE ─────────────────────────────────────── */}
        <section style={{ background:"rgba(6,15,32,0.8)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Full Lifecycle Support</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  From Survey<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>to Decommission</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  Our commitment extends far beyond the construction phase. JLH Global Energy provides full lifecycle pipeline support — across Europe, Africa, the Middle East, and Asia.
                </p>
              </div>
            </motion.div>

            {/* Lifecycle timeline */}
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {LIFECYCLE.map((step, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"2rem 1.5rem", background:"#060F20",
                    transition:"background 0.3s", position:"relative", cursor:"default"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  {/* Step number */}
                  <div style={{
                    fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:600,
                    color:"rgba(228,175,43,0.25)", lineHeight:1, marginBottom:"0.75rem"
                  }}>
                    {step.num}
                  </div>
                  <div style={{ fontSize:"0.85rem", fontWeight:500, color:"#E2E8F0", marginBottom:"0.4rem" }}>{step.label}</div>
                  <div style={{ fontSize:"0.75rem", color:"#475569", lineHeight:1.5 }}>{step.desc}</div>

                  {/* Bottom accent */}
                  <div style={{ position:"absolute", bottom:0, left:0, width:"100%", height:"2px", background:"linear-gradient(90deg,rgba(228,175,43,0.3),transparent)", opacity:0, transition:"opacity 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity="1"}
                    onMouseLeave={e => e.currentTarget.style.opacity="0"}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Global reach image */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginTop:"4rem" }}>
              <PipeImage src="/pipelocation.jpg" alt="Global pipeline network" badge="Active Across 4 Continents" />
            </motion.div>
          </div>
        </section>

        {/* ── QUOTE ─────────────────────────────────────────── */}
        <div style={{
          borderTop:"1px solid rgba(228,175,43,0.1)", borderBottom:"1px solid rgba(228,175,43,0.1)",
          background:"rgba(10,22,40,0.8)", padding:"4rem 1.5rem", textAlign:"center"
        }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }}>
            <div style={{ fontSize:"3rem", color:"rgba(228,175,43,0.2)", fontFamily:"Georgia,serif", lineHeight:1, marginBottom:"1rem" }}>"</div>
            <blockquote style={{
              fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(1.3rem,3vw,2rem)",
              fontStyle:"italic", fontWeight:400, color:"#CBD5E1",
              maxWidth:"800px", margin:"0 auto", lineHeight:1.6
            }}>
              Pipelines are more than infrastructure — they are lifelines that connect communities, fuel industries, and drive global progress.
            </blockquote>
            <div style={{ marginTop:"1.5rem", fontSize:"0.75rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B" }}>
              JLH Global Energy
            </div>
          </motion.div>
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
            <SectionLabel>Work With JLH</SectionLabel>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", marginBottom:"1rem" }}>
              Planning a Pipeline Project?<br />
              <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Let's Engineer It Together.</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"560px", margin:"0 auto 2.5rem", lineHeight:1.75 }}>
              From cross-country transmission lines to last-mile distribution networks — JLH Global Energy has the expertise, equipment, and track record to deliver.
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