import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import JLHLogo from "./UI/JLHLogo.";
const SERVICES = [
  { label: "Oil & Gas E&P",            href: "oil"               },
  { label: "Renewable & Hybrid Energy", href: "renewable" },
  { label: "Rig Construction",          href: "rig"       },
  { label: "Industrial Plant",          href: "mainten"       },
  { label: "Pipeline Engineering",      href: "pipeline"               },
  { label: "Project Management",        href: "projects"     },
  { label: "Fuel Depot & Storage",      href: "fueldepot"             },
];

const COMPANY = [
  { label: "About Us",     href: "/aboutus"    },
  { label: "Operations",   href: "/#operations" },
  { label: "ESG",          href: "/#esg"        },
  { label: "Investors",    href: "/#investors"  },
  { label: "Careers",      href: "/#careers"    },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookies",        href: "/cookies" },
  { label: "Terms of Use",   href: "/terms"   },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:"18px", height:"18px" }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:"18px", height:"18px" }}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:"18px", height:"18px" }}>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Layout({ children }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", minHeight:"100vh", background:"#030B18" }}>
      <Nav />
      <main style={{ flex:1 }}>{children}</main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background:"#060F20", borderTop:"1px solid rgba(228,175,43,0.12)", fontFamily:"'DM Sans',sans-serif" }}>

        {/* Top section */}
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"4rem 1.5rem 3rem" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"3rem" }}>

            {/* Brand column */}
            <div style={{ gridColumn:"span 1" }}>
              <JLHLogo height={40}/>
              {/* Logo */}
              {/* <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1.25rem" }}>
                <div style={{ position:"relative", width:"40px", height:"40px", flexShrink:0 }}>
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", height:"100%" }}>
                    <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" fill="none" stroke="#E4AF2B" strokeWidth="1.5"/>
                    <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" fill="rgba(228,175,43,0.12)" stroke="#EFC75A" strokeWidth="1"/>
                    <circle cx="18" cy="18" r="3" fill="#E4AF2B"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"1.2rem", fontWeight:600, color:"#fff", lineHeight:1 }}>
                    JLH Global
                  </div>
                  <div style={{ fontSize:"0.6rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B", marginTop:"2px" }}>
                    Energy Ltd
                  </div>
                </div>
              </div> */}

              <p style={{ fontSize:"0.85rem", color:"#475569", lineHeight:1.75, maxWidth:"240px", marginBottom:"1.5rem" }}>
                Independent energy company focused on delivering energy security and driving the global decarbonisation transition.
              </p>

              {/* Social icons */}
              <div style={{ display:"flex", gap:"0.75rem" }}>
                {SOCIALS.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    style={{
                      width:"36px", height:"36px",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      border:"1px solid rgba(228,175,43,0.15)",
                      color:"#475569",
                      transition:"all 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(228,175,43,0.5)"; e.currentTarget.style.color="#E4AF2B" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(228,175,43,0.15)"; e.currentTarget.style.color="#475569" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B", marginBottom:"1.25rem", fontWeight:500 }}>
                Services
              </h4>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                {SERVICES.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      style={{ fontSize:"0.85rem", color:"#475569", textDecoration:"none", transition:"color 0.2s", display:"flex", alignItems:"center", gap:"6px" }}
                      onMouseEnter={e => e.currentTarget.style.color="#E2E8F0"}
                      onMouseLeave={e => e.currentTarget.style.color="#475569"}
                    >
                      <span style={{ display:"block", width:"4px", height:"4px", borderRadius:"50%", background:"rgba(228,175,43,0.3)", flexShrink:0 }} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h4 style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B", marginBottom:"1.25rem", fontWeight:500 }}>
                Company
              </h4>
              <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                {COMPANY.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      style={{ fontSize:"0.85rem", color:"#475569", textDecoration:"none", transition:"color 0.2s", display:"flex", alignItems:"center", gap:"6px" }}
                      onMouseEnter={e => e.currentTarget.style.color="#E2E8F0"}
                      onMouseLeave={e => e.currentTarget.style.color="#475569"}
                    >
                      <span style={{ display:"block", width:"4px", height:"4px", borderRadius:"50%", background:"rgba(228,175,43,0.3)", flexShrink:0 }} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h4 style={{ fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#E4AF2B", marginBottom:"1.25rem", fontWeight:500 }}>
                Contact
              </h4>

              <div style={{ display:"flex", flexDirection:"column", gap:"1rem", marginBottom:"1.5rem" }}>
                {[
                  {
                    icon: (
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                      </svg>
                    ),
                    label: "Head Office",
                    value: "London, United Kingdom",
                  },
                  {
                    icon: (
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "info@jlhglobalenergy.com",
                  },
                  {
                    icon: (
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                      </svg>
                    ),
                    label: "Phone",
                    value: "+44 774 267 8190",
                  },
                ].map((c, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:"10px" }}>
                    <div style={{ color:"#E4AF2B", flexShrink:0, marginTop:"2px" }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize:"0.65rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"#334155", marginBottom:"2px" }}>{c.label}</div>
                      <div style={{ fontSize:"0.82rem", color:"#64748B" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/#contact"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"6px",
                  padding:"10px 20px", fontSize:"0.72rem", letterSpacing:"0.12em",
                  textTransform:"uppercase", fontWeight:600, textDecoration:"none",
                  background:"linear-gradient(135deg,#EFC75A,#C99520)", color:"#030B18",
                  transition:"opacity 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.opacity="0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity="1"}
              >
                Get in Touch
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,rgba(228,175,43,0.15),transparent)", maxWidth:"1200px", margin:"0 auto" }} />

        {/* Bottom bar */}
        <div style={{ maxWidth:"1200px", margin:"0 auto", padding:"1.5rem", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>

          {/* Copyright */}
          <div style={{ fontSize:"0.78rem", color:"#334155" }}>
            © {new Date().getFullYear()} JLH Global Energy Ltd. All rights reserved.
            <span style={{ marginLeft:"1rem", color:"#1E293B" }}>Registered in London Company No: 2778741</span>
          </div>

          {/* Legal links */}
          <div style={{ display:"flex", alignItems:"center", gap:"1.5rem" }}>
            {LEGAL.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{ fontSize:"0.75rem", color:"#334155", textDecoration:"none", transition:"color 0.2s", letterSpacing:"0.05em" }}
                onMouseEnter={e => e.currentTarget.style.color="#E4AF2B"}
                onMouseLeave={e => e.currentTarget.style.color="#334155"}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>

      {/* Google fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
      `}</style>
    </div>
  );
}