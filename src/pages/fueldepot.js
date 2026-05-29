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
  { value: "8M+",  label: "Barrels Storage Capacity" },
  { value: "60+",  label: "Depots Constructed"        },
  { value: "35+",  label: "Years Experience"          },
  { value: "100%", label: "Compliance Record"         },
];

// ── Core Capabilities ─────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Tank Construction",
    desc:  "We design and build aboveground and underground tanks compliant with API 650/653 standards — engineered for long-term durability, resilience against extreme environments, and minimal maintenance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Terminal Facilities",
    desc:  "Advanced loading/unloading systems for trucks, rail, and marine vessels. Designed for high throughput — ensuring smooth, safe, and efficient energy transfer at every stage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Safety Systems",
    desc:  "Modern fire suppression, leak detection, and bunded containment solutions that exceed NFPA and OSHA requirements — prioritising human safety and environmental protection above all.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Automation & Digital Monitoring",
    desc:  "Smart automation delivers real-time inventory management, predictive maintenance, and instant reporting — enabling cost savings and full operational transparency 24/7.",
  },
];

// ── Benefits ──────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: "🛡️",
    title: "Unmatched Safety & Compliance",
    desc:  "API 650/653, NFPA, OSHA, and ISO certified across every facility we operate or deliver.",
  },
  {
    icon: "💰",
    title: "Cost-Efficient Operations",
    desc:  "Smart automation and modular construction reduce CAPEX and OPEX from day one.",
  },
  {
    icon: "📈",
    title: "Scalable & Future-Proof",
    desc:  "Facilities designed to expand with your business — from single-tank to multi-product terminals.",
  },
  {
    icon: "🌿",
    title: "Environmentally Responsible",
    desc:  "Secondary containment, vapour recovery, and low-emission designs built into every project.",
  },
];

// ── Process Steps ─────────────────────────────────────────────
const PROCESS = [
  { num:"01", label:"Design & Engineering",         desc:"Site studies, process design, 3D modelling" },
  { num:"02", label:"Civil & Mechanical Works",     desc:"Foundations, structural steel, piping"      },
  { num:"03", label:"Tank & Terminal Construction", desc:"API-compliant tank erection & fitting"      },
  { num:"04", label:"Automation Integration",       desc:"SCADA, DCS, metering & safety systems"     },
  { num:"05", label:"Commissioning & Handover",     desc:"Testing, training & full sign-off"          },
];

// ── Products Stored ───────────────────────────────────────────
const PRODUCTS = [
  { label:"Crude Oil",           icon:"🛢️" },
  { label:"Refined Petroleum",   icon:"⛽" },
  { label:"LNG / LPG",          icon:"❄️" },
  { label:"Jet Fuel (Avgas)",   icon:"✈️" },
  { label:"Industrial Chemicals",icon:"⚗️" },
  { label:"Biofuels",           icon:"🌿" },
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

// ── Main Page ─────────────────────────────────────────────────
export default function FuelDepot() {
  return (
    <>
      <Head>
        <title>Fuel Depot & Storage Facilities | JLH Global Energy</title>
        <meta name="description" content="JLH Global Energy develops cutting-edge storage infrastructure — delivering safe, efficient, and sustainable energy storage solutions that power industries and communities worldwide." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background:"#030B18", color:"#E2E8F0", fontFamily:"'DM Sans',sans-serif", overflowX:"hidden" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ position:"relative", minHeight:"90vh", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>

          <Image
            src="/depot.jpg"
            alt="Fuel Depot & Storage Facilities"
            fill
            className="object-cover"
            priority
            style={{ opacity:0.3 }}
          />

          {/* Overlays */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(3,11,24,0.97) 0%,rgba(10,22,40,0.83) 55%,rgba(21,43,85,0.88) 100%)" }} />
          <div style={{ position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse 65% 55% at 50% 60%, rgba(228,175,43,0.07) 0%, transparent 65%)" }} />

          {/* Dot grid */}
          <div style={{
            position:"absolute", inset:0, pointerEvents:"none",
            backgroundImage:"radial-gradient(rgba(228,175,43,0.1) 1px, transparent 1px)",
            backgroundSize:"44px 44px"
          }} />

          {/* Tank-inspired circular accent */}
          <div style={{
            position:"absolute", top:"50%", right:"8%", transform:"translateY(-50%)",
            width:"500px", height:"500px", borderRadius:"50%",
            border:"1px solid rgba(228,175,43,0.06)",
            pointerEvents:"none"
          }} />
          <div style={{
            position:"absolute", top:"50%", right:"8%", transform:"translateY(-50%)",
            width:"360px", height:"360px", borderRadius:"50%",
            border:"1px solid rgba(228,175,43,0.04)",
            pointerEvents:"none"
          }} />

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
              JLH Global Energy — Storage & Terminals Division
            </motion.div>

            <motion.h1
              initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:0.2 }}
              style={{
                fontFamily:"'Cormorant Garamond',Georgia,serif",
                fontSize:"clamp(2.5rem,7vw,5.5rem)",
                fontWeight:600, lineHeight:1.05, color:"#fff", marginBottom:"1.5rem"
              }}
            >
              Fuel Depot &amp;<br />
              <em style={{ color:"#EFC75A", fontStyle:"italic" }}>Storage Facilities</em>
            </motion.h1>

            <motion.div
              initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.8, delay:0.7 }}
              style={{ width:"64px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)", margin:"0 auto 1.5rem" }}
            />

            <motion.p
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.9 }}
              style={{ fontSize:"1.1rem", color:"#94A3B8", lineHeight:1.75, maxWidth:"680px", margin:"0 auto 2.5rem" }}
            >
              Delivering safe, efficient, and sustainable energy storage solutions that power industries and communities worldwide — from crude oil terminals to LNG storage hubs.
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
              <path d="M0,30 C360,70 720,10 1080,50 C1260,65 1380,25 1440,40 L1440,70 L0,70 Z" fill="#030B18" />
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

        {/* ── PRODUCTS STORED ───────────────────────────────── */}
        <section style={{ padding:"4rem 1.5rem", background:"rgba(6,15,32,0.5)", borderBottom:"1px solid rgba(228,175,43,0.07)" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"2rem" }}>
              <SectionLabel>Products We Store</SectionLabel>
            </motion.div>
            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {PRODUCTS.map((p, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"2rem 1rem", textAlign:"center", background:"#060F20",
                    transition:"background 0.3s", cursor:"default"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  <div style={{ fontSize:"1.75rem", marginBottom:"0.6rem" }}>{p.icon}</div>
                  <div style={{ fontSize:"0.78rem", color:"#94A3B8", letterSpacing:"0.04em" }}>{p.label}</div>
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
              <SectionLabel>About Our Division</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Building the Backbone of<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Global Energy Storage</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.25rem" }}>
                <strong style={{ color:"#E2E8F0" }}>JLH Global Energy</strong> develops cutting-edge storage infrastructure that ensures secure handling of crude oil, refined petroleum products, LNG, and industrial chemicals. With decades of expertise in engineering, construction, and operations, we provide facilities that meet the highest international safety and environmental standards.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Our depots are not just storage — they are critical hubs of energy distribution, supporting both domestic industries and global trade. Each facility is engineered as a strategic asset for the long term.
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
                API 650/653 · NFPA · OSHA · ISO 9001 Certified
              </div>
            </motion.div>

            {/* Image */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ position:"relative", width:"100%", paddingBottom:"70%", overflow:"hidden" }}>
                <Image src="/tanker.jpg" alt="Fuel storage facility" fill className="object-cover" />
                <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(228,175,43,0.35)", borderLeft:"2px solid rgba(228,175,43,0.35)" }} />
                <div style={{
                  position:"absolute", bottom:"1.5rem", left:"1.5rem",
                  padding:"10px 16px", background:"rgba(3,11,24,0.92)",
                  border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(10px)"
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#E4AF2B", animation:"pulse 2s infinite" }} />
                    <span style={{ fontSize:"0.7rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#EFC75A" }}>8M+ Barrels Capacity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CORE CAPABILITIES ─────────────────────────────── */}
        <section id="capabilities" style={{ background:"rgba(6,15,32,0.9)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ marginBottom:"4rem" }}>
              <SectionLabel>Core Capabilities</SectionLabel>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem", alignItems:"end" }}>
                <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                  Four Pillars of<br />
                  <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Storage Excellence</span>
                </h2>
                <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.95rem" }}>
                  Every facility JLH Global Energy designs and operates is built around safety, efficiency, technology, and sustainability — without compromise.
                </p>
              </div>
            </motion.div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>
              {/* Capability list */}
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ display:"flex", flexDirection:"column", gap:"0" }}>
                {CAPABILITIES.map((item, i) => (
                  <motion.div
                    key={i} variants={fadeUp}
                    style={{
                      padding:"2rem",
                      borderBottom:"1px solid rgba(228,175,43,0.08)",
                      borderLeft:"2px solid transparent",
                      transition:"all 0.3s", cursor:"default"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderLeftColor="#E4AF2B"; e.currentTarget.style.background="rgba(228,175,43,0.03)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderLeftColor="transparent"; e.currentTarget.style.background="transparent" }}
                  >
                    <div style={{ display:"flex", alignItems:"flex-start", gap:"1rem" }}>
                      <div style={{
                        width:"44px", height:"44px", flexShrink:0,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        border:"1px solid rgba(228,175,43,0.2)", color:"#E4AF2B",
                        background:"rgba(228,175,43,0.06)"
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:600, color:"#fff", marginBottom:"0.5rem" }}>
                          {item.title}
                        </h3>
                        <p style={{ color:"#64748B", lineHeight:1.7, fontSize:"0.88rem" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Image */}
              <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
                <div style={{ position:"relative", width:"100%", paddingBottom:"110%", overflow:"hidden" }}>
                  <Image src="/depot.jpg" alt="Storage depot operations" fill className="object-cover" />
                  <div style={{ position:"absolute", bottom:0, right:0, width:"72px", height:"72px", borderBottom:"2px solid #E4AF2B", borderRight:"2px solid #E4AF2B" }} />
                  <div style={{ position:"absolute", top:0, left:0, width:"72px", height:"72px", borderTop:"2px solid rgba(228,175,43,0.35)", borderLeft:"2px solid rgba(228,175,43,0.35)" }} />

                  {/* Safety badge */}
                  <div style={{
                    position:"absolute", top:"1.5rem", right:"1.5rem",
                    padding:"12px 18px", background:"rgba(3,11,24,0.92)",
                    border:"1px solid rgba(228,175,43,0.25)", backdropFilter:"blur(10px)"
                  }}>
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:600, color:"#EFC75A", lineHeight:1 }}>100%</div>
                    <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#64748B", marginTop:"4px" }}>Compliance Record</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ──────────────────────────────────────── */}
        <section style={{ padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"4rem" }}>
              <SectionLabel>Why Choose JLH</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1, marginBottom:"1rem" }}>
                Why Choose<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>JLH Global Energy?</span>
              </h2>
              <p style={{ color:"#64748B", maxWidth:"560px", margin:"0 auto", lineHeight:1.7 }}>
                Our storage solutions deliver measurable value across safety, efficiency, and long-term sustainability.
              </p>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"3rem 2rem", background:"#060F20", textAlign:"center",
                    transition:"background 0.3s", cursor:"default", position:"relative", overflow:"hidden"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:"40px", height:"2px", background:"linear-gradient(90deg,transparent,#E4AF2B,transparent)" }} />
                  <div style={{ fontSize:"2.5rem", marginBottom:"1.25rem" }}>{b.icon}</div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.3rem", fontWeight:600, color:"#fff", marginBottom:"0.75rem" }}>
                    {b.title}
                  </h3>
                  <p style={{ color:"#64748B", fontSize:"0.88rem", lineHeight:1.7 }}>{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS TIMELINE ──────────────────────────────── */}
        <section style={{ background:"rgba(6,15,32,0.8)", padding:"6rem 1.5rem" }}>
          <div style={{ maxWidth:"1200px", margin:"0 auto" }}>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"4rem" }}>
              <SectionLabel>How We Deliver</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, color:"#fff", lineHeight:1.1 }}>
                Our Project<br />
                <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Delivery Process</span>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true }}
              style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))", gap:"1px", background:"rgba(228,175,43,0.07)" }}
            >
              {PROCESS.map((step, i) => (
                <motion.div
                  key={i} variants={fadeUp}
                  style={{
                    padding:"2.5rem 1.5rem", background:"#060F20", textAlign:"center",
                    position:"relative", transition:"background 0.3s", cursor:"default"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                  onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                >
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,transparent,rgba(228,175,43,${0.1 + i * 0.15}),transparent)` }} />
                  <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.5rem", fontWeight:600, color:"rgba(228,175,43,0.2)", lineHeight:1, marginBottom:"1rem" }}>
                    {step.num}
                  </div>
                  <div style={{ fontSize:"0.85rem", fontWeight:500, color:"#E2E8F0", marginBottom:"0.5rem", lineHeight:1.3 }}>{step.label}</div>
                  <div style={{ fontSize:"0.75rem", color:"#475569", lineHeight:1.5 }}>{step.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── COMPLIANCE & SUSTAINABILITY ───────────────────── */}
        <section style={{ maxWidth:"1200px", margin:"0 auto", padding:"6rem 1.5rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"4rem", alignItems:"center" }}>

            {/* Text */}
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <SectionLabel color="#22C55E">Compliance & Sustainability</SectionLabel>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:600, lineHeight:1.1, color:"#fff", marginBottom:"1.5rem" }}>
                Built for Today,<br />
                <span style={{ color:"#4ADE80", fontStyle:"italic" }}>Designed for Tomorrow</span>
              </h2>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"1.5rem" }}>
                Every project we deliver is fully compliant with international standards such as API, NFPA, OSHA, and ISO. Beyond compliance, we prioritise sustainability by incorporating energy-efficient systems, reducing emissions, and adopting eco-friendly construction practices.
              </p>
              <p style={{ color:"#94A3B8", lineHeight:1.8, marginBottom:"2rem" }}>
                Our storage depots are built to support the global transition toward cleaner and safer energy — future-proofed for hydrogen, biofuels, and next-generation energy carriers.
              </p>

              {/* Green feature list */}
              <div style={{ display:"flex", flexDirection:"column", gap:"0.875rem" }}>
                {[
                  "Secondary containment and bunded tank farms",
                  "Vapour recovery units (VRUs) on all installations",
                  "Solar-powered facility lighting and control systems",
                  "Rainwater harvesting and zero liquid discharge",
                  "Full lifecycle environmental impact assessments",
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

            {/* Certs */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once:true }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1px", background:"rgba(228,175,43,0.07)", marginBottom:"1px" }}>
                {["API 650/653", "NFPA 30", "OSHA 1910", "ISO 9001", "ISO 14001", "ISO 45001", "ATEX Rated", "LEED Certified"].map((cert, i) => (
                  <div key={i} style={{
                    padding:"1.75rem", background:"#060F20", textAlign:"center",
                    transition:"background 0.3s"
                  }}
                    onMouseEnter={e => e.currentTarget.style.background="#0A1628"}
                    onMouseLeave={e => e.currentTarget.style.background="#060F20"}
                  >
                    <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.1rem", fontWeight:600, color:"#EFC75A", marginBottom:"4px" }}>{cert}</div>
                    <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#475569" }}>Certified</div>
                  </div>
                ))}
              </div>

              {/* Sustainability stat card */}
              <div style={{
                marginTop:"1rem", padding:"2rem",
                background:"rgba(34,197,94,0.05)", border:"1px solid rgba(34,197,94,0.2)"
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"0.75rem" }}>
                  <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#22C55E", animation:"pulse 2s infinite" }} />
                  <span style={{ fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"#4ADE80" }}>2030 Target</span>
                </div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"2.5rem", fontWeight:600, color:"#4ADE80", lineHeight:1, marginBottom:"0.5rem" }}>
                  Net Zero
                </div>
                <div style={{ fontSize:"0.82rem", color:"#64748B", lineHeight:1.6 }}>
                  All JLH Global Energy storage facilities operating at net zero by 2030 through renewable integration and carbon offsetting.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
              Planning a Storage or<br />
              <span style={{ color:"#EFC75A", fontStyle:"italic" }}>Terminal Facility?</span>
            </h2>
            <p style={{ color:"#64748B", maxWidth:"560px", margin:"0 auto 2.5rem", lineHeight:1.75 }}>
              From greenfield tank farms to multi-product terminal upgrades — JLH Global Energy delivers safe, compliant, and future-proof energy storage solutions.
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