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
  show:   { opacity: 1, x: 0,  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13 } },
};

// ── Energy Solutions ──────────────────────────────────────────
const SOLUTIONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    color: "#F59E0B",
    label: "Solar Energy",
    title: "Solar Farms",
    desc:  "Design, engineering, and installation of utility-scale photovoltaic plants that harness the sun's energy to provide clean, reliable, and cost-efficient power for industries and communities.",
    stat: "40% cost reduction vs. conventional power",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "#22C55E",
    label: "Wind Power",
    title: "Wind Energy",
    desc:  "Turnkey development of onshore and offshore wind farms — from turbine foundation design to grid integration — ensuring maximum energy output while minimising environmental impact.",
    stat: "Turbines rated up to 15 MW capacity",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "#60A5FA",
    label: "Hybrid Systems",
    title: "Hybrid Energy Systems",
    desc:  "Combining renewable energy sources with conventional power generation to deliver stable, efficient, and resilient energy solutions for clients worldwide — bridging the gap to full decarbonisation.",
    stat: "Up to 60% emissions reduction",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
      </svg>
    ),
    color: "#34D399",
    label: "Net Zero",
    title: "Sustainability Goals",
    desc:  "Supporting clients in achieving net-zero targets through tailored solutions that reduce carbon emissions, increase efficiency, and promote long-term environmental and economic sustainability.",
    stat: "Net-zero roadmaps for 80+ clients",
  },
];

// ── Impact Stats ──────────────────────────────────────────────
const IMPACT = [
  { value: "2.4 GW",  label: "Clean Energy Capacity Installed" },
  { value: "18+",     label: "Countries with Active Projects"  },
  { value: "3.2M t",  label: "CO₂ Avoided Annually"           },
  { value: "98%",     label: "Project Delivery Rate"          },
];

// ── Section Label ─────────────────────────────────────────────
function SectionLabel({ children, color = "#22C55E" }) {
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
export default function RenewableHybridEnergy() {
  return (
    <>
      <Head>
        <title>Renewable & Hybrid Energy | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy integrates solar, wind, and hybrid energy solutions — delivering clean, reliable, and sustainable power across global markets." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ position:"relative", minHeight:"88vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>

          {/* Background image */}
          <Image
            src="/renewable.jpg"
            alt="Renewable & Hybrid Energy"
            fill
            className="object-cover"
            priority
            style={{ opacity:0.3 }}
          />

          {/* Gradient overlays */}
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(135deg, rgba(3,11,24,0.97) 0%, rgba(6,24,12,0.85) 50%, rgba(3,11,24,0.9) 100%)"
          }} />

          {/* Green radial glow */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            background:"radial-gradient(ellipse 70% 55% at 50% 60%, rgba(34,197,94,0.08) 0%, transparent 65%)"
          }} />

          {/* Grid lines */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"linear-gradient(rgba(34,197,94,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(34,197,94,0.035) 1px,transparent 1px)",
            backgroundSize:"72px 72px"
          }} />

          {/* Floating green orbs */}
          <div style={{ position:"absolute", top:"20%", left:"8%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"25%", right:"10%", width:"200px", height:"200px", borderRadius:"50%", background:"radial-gradient(circle, rgba(228,175,43,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

          {/* Content */}
          <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:"900px", padding:"0 1.5rem", paddingTop:"100px" }}>

            {/* Pill */}
            <motion.div
              initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"8px 22px", marginBottom:"2rem",
                border:"1px solid rgba(34,197,94,0.3)", background:"rgba(34,197,94,0.06)",
                fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#4ADE80"
              }}
            >
              <span style={{ display:"block", width:"7px", height:"7px", borderRadius:"50%", background:"#22C55E", animation:"pulse 2s infinite" }} />
              JLH Global Energy — Clean Energy Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem,7vw,5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff", marginBottom:"1.5rem"
              }}
            >
              Renewable &{" "}
              <em style={{ color:"#4ADE80", fontStyle:"italic" }}>Hybrid Energy</em>
              <br />Projects
            </motion.h1>

            {/* Green divider line */}
            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#22C55E,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"680px", margin:"0 auto 2.5rem" }}
            >
              Recognising the global shift towards clean energy, JLH Global Energy integrates renewable solutions into our core operations — ensuring a balance between sustainability, efficiency, and reliability.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:1.1 }}
              style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}
            >
              <a href="#solutions"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 32px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                  background:"linear-gradient(135deg,#22C55E,#15803D)", color:"#030B18",
                  transition:"opacity 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity="1"}
              >
                Explore Solutions
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="/contact"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 32px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                  border:"1px solid rgba(34,197,94,0.35)", color:"#4ADE80", background:"transparent",
                  transition:"all 0.2s"
                }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(34,197,94,0.07)"; e.currentTarget.style.borderColor="rgba(34,197,94,0.6)" }}
                onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.borderColor="rgba(34,197,94,0.35)" }}
              >
                Talk to an Expert
              </a>
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"70px" }}>
              <path d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,20 1440,35 L1440,70 L0,70 Z" fill="#030B18"/>
            </svg>
          </div>
        </section>

        {/* ── IMPACT STATS ──────────────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(34,197,94,0.1)", borderBottom:"1px solid rgba(34,197,94,0.1)", background:"rgba(6,24,12,0.4)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"3rem 1.5rem", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"2rem", textAlign:"center" }}>
            {IMPACT.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true }}
                custom={i}
              >
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.8rem", fontWeight:600, color:"#4ADE80", lineHeight:1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#475569", marginTop:"0.5rem" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SOLUTIONS GRID ────────────────────────────────── */}
        <section id="solutions" style={{ padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            {/* Header */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Our Solutions</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Clean Energy Solutions<br />
                  <span style={{ color:"#4ADE80", fontStyle:"italic" }}>Built to Last</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  From utility-scale solar to offshore wind and intelligent hybrid systems — JLH Global Energy delivers end-to-end renewable energy solutions engineered for performance.
                </p>
              </div>
            </motion.div>

            {/* 2x2 solution cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:"rgba(34,197,94,0.07)" }}
            >
              {SOLUTIONS.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    padding:"2.5rem",
                    background:"#060F20",
                    transition:"background 0.3s",
                    cursor:"default",
                    position:"relative",
                    overflow:"hidden",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1A12"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  {/* Top color bar */}
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,${item.color},transparent)` }} />

                  {/* Label badge */}
                  <div style={{
                    display:"inline-flex", alignItems:"center", gap:"6px",
                    padding:"4px 10px", marginBottom:"1.25rem",
                    background:`rgba(${item.color === "#F59E0B" ? "245,158,11" : item.color === "#22C55E" ? "34,197,94" : item.color === "#60A5FA" ? "96,165,250" : "52,211,153"},0.1)`,
                    border:`1px solid rgba(${item.color === "#F59E0B" ? "245,158,11" : item.color === "#22C55E" ? "34,197,94" : item.color === "#60A5FA" ? "96,165,250" : "52,211,153"},0.25)`,
                    fontSize:"0.65rem", letterSpacing:"0.15em", textTransform:"uppercase",
                    color: item.color
                  }}>
                    <span style={{ color: item.color }}>{item.icon}</span>
                    {item.label}
                  </div>

                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.5rem", fontWeight:600, color:"#fff", marginBottom:"0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color:"#64748B", lineHeight:1.75, fontSize:"0.9rem", marginBottom:"1.5rem" }}>
                    {item.desc}
                  </p>

                  {/* Stat highlight */}
                  <div style={{
                    display:"flex", alignItems:"center", gap:"8px",
                    padding:"8px 12px",
                    background:"rgba(255,255,255,0.03)",
                    borderLeft:`2px solid ${item.color}`,
                    fontSize:"0.78rem", color:"#94A3B8"
                  }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke={item.color} strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {item.stat}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── APPROACH SECTION ──────────────────────────────── */}
        <section style={{ background:"rgba(6,15,32,0.8)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Image */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"75%", overflow:"hidden" }}>
                <Image
                  src="/renewable.jpg"
                  alt="JLH Renewable Energy Operations"
                  fill
                  className="object-cover"
                />
                {/* Decorative borders */}
                <div style={{ position:"absolute", bottom:0, right:0, width:"80px", height:"80px", borderBottom:"2px solid #22C55E", borderRight:"2px solid #22C55E" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"80px", height:"80px", borderTop:"2px solid rgba(34,197,94,0.35)", borderLeft:"2px solid rgba(34,197,94,0.35)" }} />

                {/* Floating badge */}
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"12px 18px",
                  background:"rgba(3,11,24,0.92)", border:"1px solid rgba(34,197,94,0.3)",
                  backdropFilter:"blur(10px)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#22C55E", boxShadow:"0 0 10px rgba(34,197,94,0.7)", animation:"pulse 2s infinite" }} />
                    <span style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4ADE80" }}>
                      Carbon Neutral Operations — 2030 Target
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Our Approach</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                A Smarter Path to<br />
                <span style={{ color:"#4ADE80", fontStyle:"italic" }}>Sustainable Energy</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                JLH Global Energy doesn't just build renewable projects — we architect integrated energy ecosystems. Our hybrid approach intelligently combines solar, wind, storage, and gas backup to ensure 24/7 power reliability with the lowest possible carbon footprint.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Every project begins with a rigorous feasibility study and resource assessment, ensuring our clients receive solutions optimised for their geography, grid constraints, and long-term sustainability goals.
              </p>

              {/* Checklist */}
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                {[
                  "Full lifecycle project development from feasibility to commissioning",
                  "Smart grid integration and energy storage (BESS) solutions",
                  "Carbon credit advisory and ESG reporting support",
                  "O&M services with performance-guaranteed SLAs",
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
          </div>
        </section>

        {/* ── COMMITMENT STRIP ──────────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(34,197,94,0.1)", padding:"2.5rem 1.5rem", background:"rgba(3,11,24,0.95)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1.5rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
              <div style={{ width:"2px", height:"40px", background:"linear-gradient(180deg,#22C55E,transparent)" }} />
              <div>
                <div style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#4ADE80", marginBottom:"4px" }}>Our Commitment</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", color:"#fff", fontWeight:500 }}>
                  Delivering clean energy without compromising on performance or reliability.
                </div>
              </div>
            </div>
            {/* Certification badges */}
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              {["ISO 14001", "IEC 61400", "LEED Certified", "UN SDG Aligned"].map((cert, i) => (
                <div key={i} style={{
                  padding:"6px 14px",
                  border:"1px solid rgba(34,197,94,0.2)", background:"rgba(34,197,94,0.05)",
                  fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4ADE80"
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
          background:"linear-gradient(135deg, #060F20 0%, #0A1A12 50%, #060F20 100%)",
          borderTop:"1px solid rgba(34,197,94,0.12)", borderBottom:"1px solid rgba(34,197,94,0.12)",
          padding:"5rem 1.5rem", textAlign:"center"
        }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 60% 80% at 50% 50%, rgba(34,197,94,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ position:"relative", zIndex:1 }}>
            <SectionLabel>Get Started</SectionLabel>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", marginBottom:"1rem" }}>
              Ready to Transition to<br />
              <span style={{ color:"#4ADE80", fontStyle:"italic" }}>Clean Energy?</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"540px", margin:"0 auto 2.5rem", lineHeight:1.75 }}>
              Whether you're planning a greenfield renewable project or integrating clean power into existing operations — JLH Global Energy has the expertise to deliver.
            </p>
            <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
              <a href="/contact"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 36px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                  background:"linear-gradient(135deg,#22C55E,#15803D)", color:"#030B18"
                }}
              >
                Request a Consultation
              </a>
              <a href="/services"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"14px 36px", fontSize:"0.75rem", letterSpacing:"0.15em",
                  textTransform:"uppercase", fontWeight:500, textDecoration:"none",
                  border:"1px solid rgba(34,197,94,0.35)", color:"#4ADE80", background:"transparent"
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
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { opacity: 0.7; box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
      `}</style>
    </>
  );
}
