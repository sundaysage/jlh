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

// ── Capabilities ──────────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    title: "Design & Engineering",
    desc:  "Process optimisation, 3D plant modelling, HAZOP safety studies, and full environmental compliance from concept to detailed design.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Construction",
    desc:  "Civil works, heavy lifting, steel fabrication, piping, and full mechanical installations — delivered safely and on schedule.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Maintenance & Turnarounds",
    desc:  "Planned shutdowns, equipment repairs, inspections, and modernisation upgrades executed with minimal production downtime.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Energy Efficiency",
    desc:  "Implementing advanced process control systems and heat integration strategies to reduce emissions and cut operating costs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Digitalisation",
    desc:  "Smart plant monitoring, predictive analytics, and IoT integration delivering real-time performance visibility and proactive risk management.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Global Compliance",
    desc:  "Full adherence to ASME, ISO, API, and international refinery and LNG safety standards across every jurisdiction we operate in.",
  },
];

// ── Stats ─────────────────────────────────────────────────────
const STATS = [
  { value: "120+", label: "Plants Commissioned"    },
  { value: "40+",  label: "Years EPC Experience"   },
  { value: "99.2%",label: "Uptime Guarantee"       },
  { value: "4",    label: "Continents Operational" },
];

// ── Plant Types ───────────────────────────────────────────────
const PLANT_TYPES = [
  { icon: "🏭", label: "Refineries"             },
  { icon: "❄️", label: "LNG Facilities"         },
  { icon: "⚗️", label: "Petrochemical Complexes" },
  { icon: "⚡", label: "Power Generation Plants" },
  { icon: "💧", label: "Water Treatment Plants"  },
  { icon: "🌿", label: "Biofuel Facilities"      },
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

// ── Image Block (handles missing images gracefully) ───────────
function PlantImage({ src, alt, badge }) {
  return (
    <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden", background:"#0A1628" }}>
      <Image src={src} alt={alt} fill className="object-cover" />
      {/* Corner decorators */}
      <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
      <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(228,175,43,0.35)", borderLeft:"2px solid rgba(228,175,43,0.35)" }} />
      {badge && (
        <div style={{
          position:"absolute", bottom:"1.5rem", left:"1.5rem",
          padding:"10px 16px", background:"rgba(3,11,24,0.92)",
          border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(10px)"
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#E4AF2B", animation:"pulse 2s infinite" }} />
            <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#EFC75A" }}>{badge}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function IndustrialPlant() {
  return (
    <>
      <Head>
        <title>Industrial Plant Development & Maintenance | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy delivers full-scale EPC solutions for refineries, LNG plants, and petrochemical facilities — built for productivity, profitability, and environmental responsibility." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ position:"relative", minHeight:"88vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>

          <Image
            src="/images/industrial-plant-hero.jpg"
            alt="Industrial Plant Development & Maintenance"
            fill
            className="object-cover"
            priority
            style={{ opacity:0.28 }}
          />

          {/* Overlays */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(3,11,24,0.97) 0%,rgba(10,22,40,0.85) 50%,rgba(21,43,85,0.9) 100%)" }} />
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 70% 55% at 50% 60%, rgba(228,175,43,0.06) 0%, transparent 65%)" }} />

          {/* Dot grid */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"radial-gradient(rgba(228,175,43,0.12) 1px, transparent 1px)",
            backgroundSize:"40px 40px"
          }} />

          {/* Vertical accent lines */}
          {[15, 30, 70, 85].map((pct, i) => (
            <div key={i} style={{
              position:"absolute", top:0, left:`${pct}%`, width:"1px", height:"100%",
              background:`linear-gradient(180deg, transparent, rgba(228,175,43,${i % 2 === 0 ? "0.06" : "0.03"}), transparent)`,
              pointerEvents:"none"
            }} />
          ))}

          {/* Content */}
          <div style={{ position:"relative", zIndex:10, textAlign:"center", maxWidth:"940px", padding:"0 1.5rem", paddingTop:"110px" }}>

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
              JLH Global Energy — EPC Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem,7vw,5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff", marginBottom:"1.5rem"
              }}
            >
              Industrial Plant{" "}
              <em style={{ color:"#EFC75A", fontStyle:"italic" }}>Development</em>
              <br />&amp; Maintenance
            </motion.h1>

            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"700px", margin:"0 auto 2.5rem" }}
            >
              Delivering full-scale EPC solutions for refineries, LNG plants, and petrochemical facilities — built for productivity, profitability, and environmental responsibility.
            </motion.p>

            <motion.div
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:1.1 }}
              style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}
            >
              <a href="#capabilities"
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
                Our Capabilities
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
              <path d="M0,50 C360,10 720,70 1080,30 C1260,10 1380,50 1440,40 L1440,70 L0,70 Z" fill="#030B18" />
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

        {/* ── PLANT TYPES ───────────────────────────────────── */}
        <section style={{ padding:"4rem 1.5rem", background:"rgba(6,15,32,0.6)", borderBottom:"1px solid rgba(228,175,43,0.07)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"2.5rem" }}>
              <SectionLabel>Facility Types</SectionLabel>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:600, color:"#fff" }}>
                Plants We Design, Build &amp; Maintain
              </h3>
            </motion.div>
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {PLANT_TYPES.map((pt, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  style={{
                    padding:"2rem 1.5rem", textAlign:"center", background:"#060F20",
                    transition:"background 0.3s", cursor:"default"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  <div style={{ fontSize:"2rem", marginBottom:"0.75rem" }}>{pt.icon}</div>
                  <div style={{ fontSize:"0.82rem", color:"#94A3B8", lineHeight:1.4, letterSpacing:"0.02em" }}>{pt.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Building for the<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Future of Industry</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                At <strong style={{ color:"#E2E8F0" }}>JLH Global Energy</strong>, we specialise in delivering end-to-end industrial plant solutions — from conceptual design and detailed engineering to construction, commissioning, and lifecycle maintenance.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Our portfolio spans refineries, LNG facilities, petrochemical complexes, and specialised industrial plants across Europe, Africa, the Middle East, and Southeast Asia. With advanced technologies and a highly skilled workforce, we ensure our plants remain efficient, compliant, and future-ready.
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
                ASME · ISO 9001 · API Q1 · ATEX Certified
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <PlantImage
                src="/lngplant.jpeg"
                alt="Refinery or LNG Plant"
                badge="EPC Excellence Since 1985"
              />
            </motion.div>
          </div>
        </section>

        {/* ── CAPABILITIES GRID ─────────────────────────────── */}
        <section id="capabilities" style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Our Capabilities</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Full-Spectrum<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>EPC Services</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  From the first line of design to the final bolt on site — JLH Global Energy manages every phase of industrial plant development with precision and accountability.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {CAPABILITIES.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
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

                  {/* Top gold bar */}
                  <div style={{ position:"absolute", top:0, left:0, width:"32px", height:"2px", background:"linear-gradient(90deg,#E4AF2B,transparent)" }} />

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

        {/* ── LIFECYCLE COMMITMENT ──────────────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Image */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <PlantImage
                src="/industrialplant.jpg"
                alt="Petrochemical Facility or LNG Storage"
                badge="99.2% Uptime Guaranteed"
              />
            </motion.div>

            {/* Text */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel>Beyond Construction</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Lifecycle<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Commitment</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                Our approach extends well beyond construction. We remain strategic partners with clients throughout the full lifecycle of their industrial facilities — with predictive maintenance, digital monitoring, and on-demand support that maximises uptime and minimises operational risk.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2.5rem" }}>
                By integrating sustainability practices at every stage, we ensure that every plant we deliver contributes to a cleaner, safer, and more energy-efficient future.
              </p>

              {/* Lifecycle phases */}
              <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
                {[
                  { phase:"01", label:"Design & Engineering",   desc:"Concept through detailed design" },
                  { phase:"02", label:"Build & Commission",     desc:"Construction to first production" },
                  { phase:"03", label:"Operate & Optimise",     desc:"Performance monitoring & tuning"  },
                  { phase:"04", label:"Maintain & Upgrade",     desc:"Planned turnarounds & modernisation" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display:"flex", alignItems:"center", gap:"1.25rem",
                      padding:"1rem 0",
                      borderBottom:"1px solid rgba(228,175,43,0.08)"
                    }}
                  >
                    <div style={{
                      fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:600,
                      color:"rgba(228,175,43,0.4)", flexShrink:0, width:"28px"
                    }}>
                      {item.phase}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ color:"#E2E8F0", fontSize:"0.9rem", fontWeight:500, marginBottom:"2px" }}>{item.label}</div>
                      <div style={{ color:"#475569", fontSize:"0.8rem" }}>{item.desc}</div>
                    </div>
                    <div style={{ width:"24px", height:"1px", background:"rgba(228,175,43,0.3)", flexShrink:0 }} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SUSTAINABILITY STRIP ──────────────────────────── */}
        <div style={{ borderTop:"1px solid rgba(34,197,94,0.1)", background:"rgba(6,24,12,0.35)", padding:"3rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1.5rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
              <div style={{ width:"2px", height:"40px", background:"linear-gradient(180deg,#22C55E,transparent)" }} />
              <div>
                <div style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#4ADE80", marginBottom:"4px" }}>Sustainability Commitment</div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.05rem", color:"#fff", fontWeight:500 }}>
                  Every plant we build is engineered for a lower-carbon, more efficient future.
                </div>
              </div>
            </div>
            <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
              {["Net Zero 2040", "ISO 14001", "LEED Certified", "Zero Harm Policy"].map((tag, i) => (
                <div key={i} style={{
                  padding:"6px 14px",
                  border:"1px solid rgba(34,197,94,0.2)", background:"rgba(34,197,94,0.05)",
                  fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#4ADE80"
                }}>
                  {tag}
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
            <SectionLabel>Start Your Project</SectionLabel>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:600, color:"#fff", marginBottom:"1rem" }}>
              Ready to Build Your<br />
              <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Next Industrial Facility?</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"560px", margin:"0 auto 2.5rem", lineHeight:1.75 }}>
              From greenfield refineries to brownfield upgrades and full plant maintenance programmes — JLH Global Energy is your end-to-end EPC partner.
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
                Request a Proposal
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






// "use client";
// import { motion } from "framer-motion";
// import { Construction } from "lucide-react";
// import Image from "next/image";

// export default function IndustrialPlant() {
//   return (
//     <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
//       {/* Hero Section */}
//       <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-emerald-800 to-emerald-500 text-white">
//         <div className="absolute inset-0">
//           {/* Banner Image Placeholder */}
//           <div className="w-full h-full bg-black opacity-30"></div>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-6"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold">
//             Industrial Plant Development & Maintenance
//           </h1>
//           <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
//             Delivering full-scale EPC solutions for refineries, LNG plants, and
//             petrochemical facilities worldwide.
//           </p>
//         </motion.div>
//       </section>

//       {/* Section 1 - Overview */}
//       <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image Placeholder */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className=" relative w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
//         >
//           <Image
//             src="/industrialplant.jpg"
//             fill
//             className="object-cover object-center rounded-2xl"
//           />
//         </motion.div>

//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
//           <p className="text-lg leading-relaxed">
//             At ML Global Energy Limited, we provide end-to-end EPC (Engineering,
//             Procurement & Construction) services for large-scale industrial
//             facilities including refineries, LNG plants, and petrochemical
//             complexes.
//           </p>
//           <p className="mt-4 text-lg leading-relaxed">
//             From groundbreaking to commissioning, our projects are designed to
//             achieve productivity, profitability, and environmental
//             responsibility — ensuring plants remain competitive and efficient
//             for decades.
//           </p>
//         </motion.div>
//       </section>

//       {/* Section 2 - Design & Construction */}
//       <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Design & Construction
//           </h2>
//           <p className="text-lg leading-relaxed">
//             Our expert teams bring advanced engineering and construction
//             expertise to every project:
//           </p>
//           <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
//             <li>
//               <strong>Design & Engineering:</strong> Process optimization,
//               safety studies, and environmental compliance built into every
//               plan.
//             </li>
//             <li>
//               <strong>Construction:</strong> Civil works, heavy lifting, and
//               mechanical installations executed with precision.
//             </li>
//             <li>
//               <strong>Project Delivery:</strong> On-time, on-budget execution
//               supported by world-class procurement systems.
//             </li>
//           </ul>
//         </motion.div>

//         {/* Image Placeholder */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className=" relative w-full h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
//         >
//           <Image
//             src="/maintain/constructionsite.jpg"
//             fill
//             className=" rounded-2xl object-cover object-center"
//           />
//         </motion.div>
//       </section>

//       {/* Section 3 - Maintenance & Modernization */}
//       <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Image Placeholder */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full relative h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
//         >
//           <Image src="/maintain/maintaina.jpg" fill className=" rounded-2xl object-cover object-center"/>
//         </motion.div>

//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Maintenance & Modernization
//           </h2>
//           <p className="text-lg leading-relaxed">
//             We don’t just build plants — we keep them operating at peak
//             performance. Our services include:
//           </p>
//           <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
//             <li>Planned shutdowns and turnaround management</li>
//             <li>Routine inspections, repairs, and safety upgrades</li>
//             <li>Modernization projects to extend plant life cycles</li>
//             <li>Integration of new technologies with minimal downtime</li>
//           </ul>
//           <p className="mt-4 text-lg leading-relaxed">
//             This ensures plants remain competitive, reliable, and ready to meet
//             future energy demands.
//           </p>
//         </motion.div>
//       </section>

//       {/* Section 4 - Energy Efficiency & Sustainability */}
//       <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
//         {/* Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Energy Efficiency & Sustainability
//           </h2>
//           <p className="text-lg leading-relaxed">
//             Our commitment to sustainability drives us to deliver solutions that
//             lower costs and reduce environmental impact:
//           </p>
//           <ul className="list-disc pl-6 mt-4 space-y-2 text-lg">
//             <li>Energy-efficient process systems that cut emissions</li>
//             <li>Heat recovery technologies to optimize fuel use</li>
//             <li>
//               Green building materials and eco-friendly construction methods
//             </li>
//             <li>Digital monitoring systems for smarter, cleaner operations</li>
//           </ul>
//           <p className="mt-4 text-lg leading-relaxed italic font-medium">
//             “Our plants are built not just for today’s productivity, but for
//             tomorrow’s sustainability.” — ML Global Energy
//           </p>
//         </motion.div>

//         {/* Image Placeholder */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full relative h-80 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center"
//         >
//           <Image
//             src="/maintain/energy.jpg"
//             fill
//             className=" rounded-2xl object-cover object-center"
//           />
//         </motion.div>
//       </section>
//     </div>
//   );
// }
