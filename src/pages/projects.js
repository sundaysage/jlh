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
  show:   { transition: { staggerChildren: 0.11 } },
};

// ── Expertise Items ───────────────────────────────────────────
const EXPERTISE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: "Feasibility Studies",
    desc:  "Technical, commercial, financial, and environmental risk assessments to validate project viability before committing capital.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Procurement & Supply Chain",
    desc:  "Strategic sourcing, vendor evaluation, contract negotiations, and just-in-time delivery for cost efficiency across global supply chains.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Regulatory Navigation",
    desc:  "Securing permits, licences, environmental clearances, and government approvals across multiple international jurisdictions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Stakeholder Coordination",
    desc:  "Effective alignment of contractors, suppliers, government agencies, financiers, and investors under one seamless project framework.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Risk & Compliance",
    desc:  "Ensuring full adherence to international safety standards, ESG commitments, and legal frameworks across every project jurisdiction.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Digital PM Tools",
    desc:  "AI-driven dashboards, BIM models, and cloud-based tracking for full project transparency and real-time decision-making.",
  },
];

// ── Stats ─────────────────────────────────────────────────────
const STATS = [
  { value: "250+", label: "Projects Delivered"    },
  { value: "4",    label: "Continents Active"     },
  { value: "$18B", label: "Project Value Managed" },
  { value: "99%",  label: "On-Budget Delivery"    },
];

// ── Regions ───────────────────────────────────────────────────
const REGIONS = [
  { name: "Africa",      projects: "60+ projects", icon: "🌍" },
  { name: "Middle East", projects: "80+ projects", icon: "🌏" },
  { name: "Europe",      projects: "55+ projects", icon: "🌍" },
  { name: "Asia",        projects: "45+ projects", icon: "🌏" },
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

// ── Main Page ─────────────────────────────────────────────────
export default function ProjectManagement() {
  return (
    <>
      <Head>
        <title>Project Management & Consultancy | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy provides world-class project management and consultancy for complex energy and industrial ventures across four continents." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ position:"relative", minHeight:"88vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>

          <Image
            src="/projectupdate.jpg"
            alt="Global Project Management & Consultancy"
            fill
            className="object-cover object-center"
            priority
            style={{ opacity:0.28 }}
          />

          {/* Overlays */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(3,11,24,0.97) 0%, rgba(10,22,40,0.82) 50%, rgba(21,43,85,0.88) 100%)" }} />
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 70% 55% at 50% 60%, rgba(228,175,43,0.06) 0%, transparent 65%)", pointerEvents:"none" }} />

          {/* Grid */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"linear-gradient(rgba(228,175,43,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(228,175,43,0.03) 1px,transparent 1px)",
            backgroundSize:"72px 72px"
          }} />

          {/* Diagonal accent lines */}
          <div style={{ position:"absolute", top:0, right:"15%", width:"1px", height:"100%", background:"linear-gradient(180deg, transparent, rgba(228,175,43,0.08), transparent)", transform:"skewX(-20deg)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", top:0, right:"25%", width:"1px", height:"100%", background:"linear-gradient(180deg, transparent, rgba(228,175,43,0.04), transparent)", transform:"skewX(-20deg)", pointerEvents:"none" }} />

          {/* Content */}
          <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:"920px", padding:"0 1.5rem", paddingTop:"100px" }}>

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
              JLH Global Energy — Consultancy Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem,7vw,5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff", marginBottom:"1.5rem"
              }}
            >
              Global Project Management{" "}
              <br />
              <em style={{ color:"#EFC75A", fontStyle:"italic" }}>&amp; Consultancy</em>
            </motion.h1>

            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"680px", margin:"0 auto 2.5rem" }}
            >
              End-to-end leadership for complex industrial and energy ventures — ensuring projects are delivered on time, on budget, and beyond expectations.
            </motion.p>

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
                Our Expertise
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

          {/* Bottom wave */}
          <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block", width:"100%", height:"70px" }}>
              <path d="M0,20 C480,70 960,0 1440,40 L1440,70 L0,70 Z" fill="#030B18" />
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

        {/* ── STRATEGIC LEADERSHIP ──────────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Strategic Leadership<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>at Every Stage</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                At <strong style={{ color:"#E2E8F0" }}>JLH Global Energy</strong>, we bring world-class consultancy and management expertise to every project. From mega-refineries and LNG terminals to renewable energy parks and hybrid power systems, our project teams provide the clarity, structure, and execution needed to transform vision into reality.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                We act as the central command — aligning engineers, contractors, investors, regulators, and supply chain partners under one seamless project management framework.
              </p>

              {/* Tag */}
              <div style={{
                display:"inline-flex", alignItems:"center", gap:"10px",
                padding:"10px 18px",
                border:"1px solid rgba(228,175,43,0.2)", background:"rgba(228,175,43,0.05)",
                fontSize:"0.8rem", color:"#EFC75A"
              }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#E4AF2B" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                PMI & PRINCE2 Certified Project Teams
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden" }}>
                <Image src="/projectDiscuss.jpg" alt="Strategic project discussion" fill className="object-cover object-center" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"80px", height:"80px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"80px", height:"80px", borderTop:"2px solid rgba(228,175,43,0.35)", borderLeft:"2px solid rgba(228,175,43,0.35)" }} />

                {/* Floating stat */}
                <div style={{
                  position:"absolute", top:"1.5rem", right:"1.5rem",
                  padding:"12px 18px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(10px)"
                }}>
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:600, color:"#EFC75A", lineHeight:1 }}>$18B+</div>
                  <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#64748B", marginTop:"4px" }}>Project Value</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── EXPERTISE GRID ────────────────────────────────── */}
        <section id="expertise" style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Our Capabilities</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Six Pillars of<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Project Excellence</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  Our integrated approach covers every dimension of project delivery — from first concept to final handover.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {EXPERTISE.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    padding:"2.5rem", background:"#060F20",
                    transition:"background 0.3s", cursor:"default", position:"relative"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  {/* Number */}
                  <div style={{
                    position:"absolute", top:"1.5rem", right:"1.5rem",
                    fontFamily:"'Cormorant Garamond',serif", fontSize:"3rem", fontWeight:700,
                    color:"rgba(228,175,43,0.07)", lineHeight:1, userSelect:"none"
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

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
                  <div style={{ marginTop:"1.5rem", height:"1px", background:"linear-gradient(90deg,#E4AF2B,transparent)", width:"32px" }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── GLOBAL REACH ──────────────────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Image */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"72%", overflow:"hidden" }}>
                <Image src="/mapoperate.jpg" alt="Global operations map" fill className="object-cover object-center" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"80px", height:"80px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"80px", height:"80px", borderTop:"2px solid rgba(228,175,43,0.35)", borderLeft:"2px solid rgba(228,175,43,0.35)" }} />

                {/* Live badge */}
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"12px 18px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(10px)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#E4AF2B", boxShadow:"0 0 10px rgba(228,175,43,0.6)", animation:"pulse 2s infinite" }} />
                    <span style={{ fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#EFC75A" }}>
                      Active in 18+ Countries
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text + Region cards */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Our Footprint</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Global Reach,<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Local Impact</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                Our consultancy teams are active across Africa, the Middle East, Europe, and Asia — leveraging global best practices while adapting to local regulations, cultural expectations, and regional challenges.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                By combining technical expertise with strategic insights, we ensure that every project is managed with precision, transparency, and maximum value for all stakeholders.
              </p>

              {/* Region cards */}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                {REGIONS.map((r, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    style={{
                      padding:"1.25rem",
                      border:"1px solid rgba(228,175,43,0.12)",
                      background:"rgba(10,22,40,0.6)",
                      transition:"border-color 0.3s, background 0.3s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(228,175,43,0.3)"; e.currentTarget.style.background="rgba(10,22,40,0.9)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(228,175,43,0.12)"; e.currentTarget.style.background="rgba(10,22,40,0.6)" }}
                  >
                    <div style={{ fontSize:"1.5rem", marginBottom:"6px" }}>{r.icon}</div>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:600, color:"#fff", marginBottom:"2px" }}>{r.name}</div>
                    <div style={{ fontSize:"0.75rem", color:"#E4AF2B", letterSpacing:"0.05em" }}>{r.projects}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS STRIP ─────────────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(228,175,43,0.1)", background:"rgba(6,15,32,0.8)", padding:"4rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"3rem" }}>
              <SectionLabel>How We Work</SectionLabel>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2rem", fontWeight:600, color:"#fff" }}>
                Our Project Delivery Process
              </h3>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"0", position:"relative" }}
            >
              {["Initiation & Feasibility", "Design & Planning", "Procurement", "Execution", "Monitoring", "Handover"].map((phase, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{ padding:"2rem 1.5rem", textAlign:"center", borderRight: i < 5 ? "1px solid rgba(228,175,43,0.08)" : "none", position:"relative" }}
                >
                  {/* Step number */}
                  <div style={{
                    width:"36px", height:"36px", borderRadius:"50%", margin:"0 auto 1rem",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    background:"rgba(228,175,43,0.1)", border:"1px solid rgba(228,175,43,0.3)",
                    fontFamily:"'Cormorant Garamond',serif", fontSize:"1rem", fontWeight:600, color:"#EFC75A"
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ fontSize:"0.8rem", color:"#94A3B8", lineHeight:1.5 }}>{phase}</div>
                  {/* Connector arrow */}
                  {i < 5 && (
                    <div style={{ position:"absolute", top:"50%", right:"-8px", transform:"translateY(-50%)", color:"rgba(228,175,43,0.3)", fontSize:"1rem", zIndex:1 }}>›</div>
                  )}
                </motion.div>
              ))}
            </motion.div>
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
            <SectionLabel>Work With JLH</SectionLabel>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", marginBottom:"1rem" }}>
              Your Next Major Project<br />
              <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Deserves the Best Team</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"560px", margin:"0 auto 2.5rem", lineHeight:1.75 }}>
              From initial feasibility through to commissioning and beyond — JLH Global Energy has the expertise, global reach, and commitment to deliver exceptional results.
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
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(228,175,43,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 6px rgba(228,175,43,0); }
        }
      `}</style>
    </>
  );
}
