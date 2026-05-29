import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Head from "next/head";

// ── Animation Variants ────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

// ── Expertise items ───────────────────────────────────────────
const EXPERTISE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
      </svg>
    ),
    title: "Heavy Fabrication",
    desc:  "Designing and assembling steel structures, derricks, and sub-sea platforms capable of withstanding harsh marine environments.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
      </svg>
    ),
    title: "Equipment Integration",
    desc:  "Installation of drilling systems, blowout preventers (BOPs), risers, and safety devices that ensure operational integrity.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"/>
      </svg>
    ),
    title: "Offshore Logistics",
    desc:  "End-to-end vessel support, supply chain coordination, helicopter transport, and crew accommodation solutions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
    ),
    title: "Hybrid Energy Integration",
    desc:  "Incorporating renewable systems such as offshore wind and solar to reduce emissions and improve operational efficiency.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"/>
      </svg>
    ),
    title: "End-of-Life Services",
    desc:  "Safe dismantling, recycling, and decommissioning of rigs — ensuring full compliance with international environmental standards.",
  },
];

// ── Safety Stats ──────────────────────────────────────────────
const STATS = [
  { value: "98%",  label: "Safety Compliance Rate" },
  { value: "500+", label: "Rigs Commissioned" },
  { value: "35+",  label: "Years of Engineering" },
  { value: "24/7", label: "Monitoring & Support" },
];

// ── Section Label ─────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span style={{ display:"block", width:"32px", height:"2px", background:"linear-gradient(90deg,#E4AF2B,#EFC75A)" }} />
      <span style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B", fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
        {children}
      </span>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function RigConstruction() {
  return (
    <>
      <Head>
        <title>Rig Construction & Offshore Engineering | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy designs, constructs, and maintains offshore and onshore rigs for oil, gas, and renewable energy operations." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative flex items-center justify-center" style={{ minHeight:"90vh", overflow:"hidden" }}>
          {/* Background image */}
          <Image
            src="/offshore.jpg"
            alt="Rig Construction & Offshore Engineering"
            fill
            className="object-cover"
            priority
            style={{ opacity: 0.35 }}
          />

          {/* Gradient overlays */}
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(135deg, rgba(3,11,24,0.95) 0%, rgba(10,22,40,0.8) 50%, rgba(21,43,85,0.7) 100%)"
          }} />
          <div style={{
            position:"absolute", inset:0,
            background:"radial-gradient(ellipse 80% 60% at 50% 60%, rgba(228,175,43,0.06) 0%, transparent 70%)"
          }} />

          {/* Grid texture */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"linear-gradient(rgba(228,175,43,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(228,175,43,0.03) 1px,transparent 1px)",
            backgroundSize:"72px 72px"
          }} />

          {/* Hero content */}
          <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:"900px", padding:"0 1.5rem" }}>

            {/* Breadcrumb pill */}
            <motion.div
              initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:"8px",
                padding:"8px 20px", marginBottom:"2rem",
                border:"1px solid rgba(228,175,43,0.3)", background:"rgba(228,175,43,0.06)",
                fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#EFC75A"
              }}
            >
              <span style={{ display:"block", width:"6px", height:"6px", borderRadius:"50%", background:"#E4AF2B", animation:"pulse 2s infinite" }} />
              JLH Global Energy — Engineering Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem, 7vw, 5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff",
                marginBottom:"1.5rem",
              }}
            >
              Rig Construction &{" "}
              <em style={{ color:"#EFC75A", fontStyle:"italic" }}>Offshore Engineering</em>
            </motion.h1>

            {/* Gold line */}
            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.7, maxWidth:"680px", margin:"0 auto 2.5rem" }}
            >
              We design, construct, and maintain offshore and onshore rigs for oil, gas, and renewable energy operations — engineered for strength, safety, and long-term reliability.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:1.1 }}
              style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}
            >
              <a href="#expertise"
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
                Explore Our Expertise
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
                Contact Our Team
              </a>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"70px" }}>
              <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,28 1440,35 L1440,70 L0,70 Z" fill="#030B18"/>
            </svg>
          </div>
        </section>

        {/* ── INTRO / ABOUT ─────────────────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>About Our Division</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Building the Future<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>of Energy Infrastructure</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1rem" }}>
                At <strong style={{ color:"#E2E8F0" }}>JLH Global Energy</strong>, our offshore and onshore rigs are engineered to operate in some of the world's most challenging environments. Whether it's deepwater drilling in turbulent seas or land rigs in remote desert locations, our teams combine cutting-edge engineering with decades of fabrication experience.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                We provide end-to-end solutions — from design and heavy fabrication to logistics, crew support, and environmentally responsible decommissioning.
              </p>

              {/* Green accent tag */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"10px 18px",
                border:"1px solid rgba(34,197,94,0.25)", background:"rgba(34,197,94,0.06)",
                fontSize:"0.8rem", color:"#4ADE80"
              }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                ISO 9001 & API Q1 Certified Operations
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden" }}>
                <Image
                  src="/offshore2.jpg"
                  alt="JLH Offshore Operations"
                  fill
                  className="object-cover"
                  style={{ transition:"transform 0.6s ease" }}
                  onMouseEnter={e => e.currentTarget.style.transform="scale(1.04)"}
                  onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
                />
                {/* Decorative corner */}
                <div style={{
                  position:"absolute", bottom:0, right:0,
                  width:"80px", height:"80px",
                  borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B"
                }} />
                <div style={{
                  position:"absolute", top:0, left:0,
                  width:"80px", height:"80px",
                  borderTop:"2px solid rgba(228,175,43,0.4)", borderLeft:"2px solid rgba(228,175,43,0.4)"
                }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ──────────────────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(228,175,43,0.1)", borderBottom:"1px solid rgba(228,175,43,0.1)", background:"rgba(10,22,40,0.6)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"3rem 1.5rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"2rem", textAlign:"center" }}>
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:600, color:"#EFC75A", lineHeight:1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#64748B", marginTop:"0.5rem" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── EXPERTISE ─────────────────────────────────────── */}
        <section id="expertise" style={{ padding:"6rem 1.5rem", background:"rgba(6,15,32,0.8)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            {/* Header */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Our Capabilities</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Offshore Engineering<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Expertise</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  From heavy fabrication to end-of-life services, JLH Global Energy delivers full-spectrum rig solutions built to international standards.
                </p>
              </div>
            </motion.div>

            {/* Expertise Grid */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.5px", background:"rgba(228,175,43,0.08)" }}
            >
              {EXPERTISE.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    padding:"2.5rem",
                    background:"#060F20",
                    borderBottom:"1px solid rgba(228,175,43,0.08)",
                    transition:"background 0.3s",
                    cursor:"default",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
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
                  <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.9rem" }}>
                    {item.desc}
                  </p>
                  {/* Bottom accent line on hover */}
                  <div style={{ marginTop:"1.5rem", height:"1px", background:"linear-gradient(90deg,#E4AF2B,transparent)", width:"0", transition:"width 0.4s ease" }}
                    onMouseEnter={e => e.currentTarget.style.width="100%"}
                    onMouseLeave={e => e.currentTarget.style.width="0"}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── INNOVATION & SAFETY ───────────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Image */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"75%", overflow:"hidden" }}>
                <Image
                  src="/rigst.jpg"
                  alt="Safety and Innovation"
                  fill
                  className="object-cover"
                />
                {/* Green accent badge */}
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"12px 20px",
                  background:"rgba(3,11,24,0.92)", border:"1px solid rgba(34,197,94,0.3)",
                  backdropFilter:"blur(10px)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#22C55E", boxShadow:"0 0 10px rgba(34,197,94,0.6)" }} />
                    <span style={{ fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4ADE80" }}>
                      Zero Lost Time Incidents — 2024
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Safety & Innovation</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Innovation &{" "}
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Safety First</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                Our offshore engineering teams prioritize safety above all else. Every rig is equipped with advanced monitoring systems, automated safety shut-offs, and real-time condition tracking to minimize risk and protect lives.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                By combining robust engineering with digital innovation, we ensure our rigs deliver maximum uptime, operational efficiency, and reduced environmental impact.
              </p>

              {/* Feature list */}
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {[
                  "Real-time structural health monitoring",
                  "Automated blowout prevention systems",
                  "Digital twin modelling for predictive maintenance",
                  "HSE compliance across all international jurisdictions",
                ].map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"12px" }}>
                    <div style={{
                      width:"20px", height:"20px", borderRadius:"50%", flexShrink:0, marginTop:"2px",
                      background:"rgba(228,175,43,0.1)", border:"1px solid rgba(228,175,43,0.3)",
                      display:"flex", alignItems:"center", justifyContent:"center"
                    }}>
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#E4AF2B" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span style={{ color:"#CBD5E1", fontSize:"0.9rem", lineHeight:1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA BANNER ────────────────────────────────────── */}
        <section style={{
          position:"relative", overflow:"hidden",
          background:"linear-gradient(135deg, #0A1628 0%, #152B55 50%, #0A1628 100%)",
          borderTop:"1px solid rgba(228,175,43,0.15)", borderBottom:"1px solid rgba(228,175,43,0.15)",
          padding:"5rem 1.5rem", textAlign:"center"
        }}>
          {/* BG glow */}
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 80% at 50% 50%, rgba(228,175,43,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ position:"relative", zIndex:1 }}>
            <SectionLabel>Work With Us</SectionLabel>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", marginBottom:"1rem" }}>
              Ready to Engineer Your<br />
              <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Next Project?</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"540px", margin:"0 auto 2.5rem", lineHeight:1.7 }}>
              Whether you need a new offshore platform, rig upgrades, or full decommissioning services — JLH Global Energy has the expertise to deliver.
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
                Request a Consultation
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

      {/* ── Pulse animation ── */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}
