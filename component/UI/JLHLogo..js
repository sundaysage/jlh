export default function JLHLogo({ height = 48 }) {
  return (
    <svg
      height={height}
      viewBox="0 0 280 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JLH Global Energy"
    >
      {/* ── Drop + Bolt icon ── */}
      <g transform="translate(2, 4) scale(0.88)">
        {/* Drop — navy body */}
        <path
          d="M26 2 C26 2 4 28 4 42 C4 55 14 64 26 64 C38 64 48 55 48 42 C48 28 26 2 26 2 Z"
          fill="#0F2040"
        />
        {/* Drop — green right half */}
        <path
          d="M26 2 C26 2 36 18 42 30 C46 38 48 42 48 42 C48 55 38 64 26 64 L26 2 Z"
          fill="#2E8B57"
        />
        {/* Lightning bolt — white cutout */}
        <path
          d="M30 14 L20 36 L27 36 L22 54 L36 30 L29 30 L36 14 Z"
          fill="#ffffff"
        />
      </g>

      {/* ── JLH letters ── */}
      <defs>
        <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#0F2040" />
          <stop offset="100%" stopColor="#2E8B57" />
        </linearGradient>
      </defs>

      {/* J */}
      <text
        x="58" y="68"
        fontFamily="'Arial Black', Impact, sans-serif"
        fontWeight="900"
        fontSize="62"
        fill="#0F2040"
      >J</text>

      {/* L */}
      <text
        x="100" y="68"
        fontFamily="'Arial Black', Impact, sans-serif"
        fontWeight="900"
        fontSize="62"
        fill="#0F2040"
      >L</text>

      {/* H — navy to green gradient */}
      <text
        x="142" y="68"
        fontFamily="'Arial Black', Impact, sans-serif"
        fontWeight="900"
        fontSize="62"
        fill="url(#hGrad)"
      >H</text>

      {/* ── GLOBAL ENERGY subtitle ── */}
      {/* Left dash */}
      <line x1="58"  y1="80" x2="82"  y2="80" stroke="#0F2040" strokeWidth="1.8"/>
      {/* GLOBAL */}
      <text
        x="86" y="83"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="8"
        letterSpacing="2.5"
        fill="#0F2040"
      >GLOBAL</text>
      {/* ENERGY — green */}
      <text
        x="133" y="83"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="8"
        letterSpacing="2.5"
        fill="#2E8B57"
      > ENERGY</text>
      {/* Right dash */}
      <line x1="200" y1="80" x2="224" y2="80" stroke="#2E8B57" strokeWidth="1.8"/>
    </svg>
  );
}