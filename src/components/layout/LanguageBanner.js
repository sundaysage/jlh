export default function LanguageBanner({ show, onAccept, onDismiss }) {
  if (!show) return null;

  return (
    <>
      <div
        role="alert"
        aria-live="polite"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "0.75rem 1.5rem",
          background: "linear-gradient(90deg, #0A1628 0%, #152B55 50%, #0A1628 100%)",
          borderBottom: "1px solid rgba(228,175,43,0.3)",
          boxShadow: "0 4px 24px rgba(3,11,24,0.6)",
          animation: "bannerSlide 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: "1.5rem", flexShrink: 0 }} aria-hidden="true">🇨🇳</span>
          <p style={{ fontSize: "0.85rem", color: "#CBD5E1", margin: 0, lineHeight: 1.5 }}>
            我们检测到您的浏览器语言为中文。是否以简体中文查看此网站？
            <span style={{ color: "#94A3B8", marginLeft: "6px", fontSize: "0.78rem" }}>
              (Switch to Simplified Chinese?)
            </span>
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <button
            onClick={onAccept}
            style={{
              padding: "7px 18px", fontSize: "0.72rem", letterSpacing: "0.1em",
              textTransform: "uppercase", fontWeight: 600, border: "none", cursor: "pointer",
              background: "linear-gradient(135deg,#EFC75A,#C99520)", color: "#030B18",
              fontFamily: "'DM Sans',sans-serif", transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            是，切换为中文
          </button>
          <button
            onClick={onDismiss}
            style={{
              padding: "7px 16px", fontSize: "0.72rem", letterSpacing: "0.1em",
              textTransform: "uppercase", fontWeight: 500, cursor: "pointer",
              background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
              color: "#64748B", fontFamily: "'DM Sans',sans-serif", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#94A3B8"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#64748B"; }}
          >
            No thanks
          </button>
          <button
            onClick={onDismiss}
            aria-label="Close"
            style={{
              background: "transparent", border: "none", color: "#475569",
              cursor: "pointer", fontSize: "1.2rem", lineHeight: 1, padding: "4px",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#94A3B8"}
            onMouseLeave={e => e.currentTarget.style.color = "#475569"}
          >
            ×
          </button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bannerSlide {
          from { transform: translateY(-110%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
      `}</style>
    </>
  );
}