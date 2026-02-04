export function CustomSprites() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="0"
            style={{ position: "absolute" }}
            aria-hidden="true"
            focusable="false"
        >            
            <symbol
                id="phone"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2
                        19.8 19.8 0 0 1-8.6-3.1
                        19.5 19.5 0 0 1-6-6
                        19.8 19.8 0 0 1-3.1-8.6
                        A2 2 0 0 1 4.1 2h3
                        a2 2 0 0 1 2 1.7
                        c.1 1 .3 2 .6 3
                        a2 2 0 0 1-.5 2.1L8 10
                        a16 16 0 0 0 6 6l2.2-1.2
                        a2 2 0 0 1 2.1-.5
                        c1 .3 2 .5 3 .6
                        a2 2 0 0 1 1.7 2z" />
            </symbol>
            {/* ======================
                SERVICES: Surveying
                ====================== */}

            <symbol
                id="surveying"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.00"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                    {/* Shared badge */}
                    <rect x="3" y="3" width="18" height="18" rx="1" />

                    {/* Glyph (baseline ~16) */}
                    <path d="M7 16h10" />
                    <path d="M12 16v-5" />
                    <circle cx="12" cy="9" r="2.25" />
                    <circle cx="12" cy="9" r="0.9" />
            </symbol>


            {/* Horizontal & Vertical Control Surveys */}
            <symbol
                id="control"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="7" />
                <circle cx="12" cy="12" r="2" />
                <path d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4" />
            </symbol>

            {/* GPS & RTK Surveys */}
            <symbol
                id="gps-rtk"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 20s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10z" />
                <circle cx="12" cy="10" r="1.8" />
                <path d="M9.5 6.8a5 5 0 0 1 5 0" />
                <path d="M8 5.2a7 7 0 0 1 8 0" />
            </symbol>

            {/* Topographic Surveys */}
            <symbol
                id="topographic"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3.5 16c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0" />
                <path d="M3.5 12c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0" />
                <path d="M3.5 8c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0" />
                <path d="M6 20h12" />
            </symbol>

            {/* As-Built Surveys */}
            <symbol
                id="as-built"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                <path d="M14 3v3h3" />
                <path d="M8 12h8" />
                <path d="M8 16h5" />
                <path d="M16.5 13.5l-4.2 4.2-1.6.4.4-1.6 4.2-4.2 1.2 1.2z" />
            </symbol>

            {/* Boundary, Jurisdictional & Sectional Line Surveys */}
            <symbol
                id="boundary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="5" y="5" width="14" height="14" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h8" />
                <path d="M5 12h14" strokeDasharray="2 2" />
            </symbol>

            {/* Construction & Right-of-Way Surveys */}
            <symbol
                id="construction"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 20h12" />
                <path d="M9 20v-6h6v6" />
                <path d="M8 14l4-4 4 4" />
                <path d="M5 10l7-6 7 6" />
            </symbol>

            {/* ======================
                SERVICES: Utility Locates
                ====================== */}
            <symbol
                id="utility"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.00"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />

                {/* Glyph */}
                <path d="M7 16h10" strokeDasharray="2 2" />
                {/* <path d="M9.5 10.5a2.5 2.5 0 0 1 5 0" /> */}
                {/* <circle cx="12" cy="9" r="1" /> */}
                {/* <path d="M12 10v4" /> */}

                {/* Ground */}
                <path d="M5.5 12h13" />

                {/* Buried utility */}
                {/* <path d="M5 14h14" strokeDasharray="3 3" /> */}

                {/* Locator */}
                <circle cx="12" cy="8" r="1.5" />
                <path d="M12 9.5v4.5" />
            </symbol>
            {/* Subsurface Utility Engineering (SUE) */}
            <symbol
                id="sue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 7h16" />
                <path d="M6 7v9a6 6 0 0 0 12 0V7" />
                <path d="M9 10h6" />
                <path d="M12 10v7" />
            </symbol>

            {/* Ground Penetrating Radar (GPR) */}
            <symbol
                id="gpr"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 17h16" />
                <path d="M6 17c1.8-1.6 3.2-1.6 5 0s3.2 1.6 5 0 3.2-1.6 5 0" />
                <path d="M6 13c1.8-1.6 3.2-1.6 5 0s3.2 1.6 5 0 3.2-1.6 5 0" opacity="0.9" />
                <path d="M12 4v7" />
                <path d="M10 6l2-2 2 2" />
            </symbol>

            {/* Electromagnetic Utility Detection */}
            <symbol
                id="em-detection"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 20v-6a4 4 0 0 1 8 0v6" />
                <path d="M7 10a6 6 0 0 1 10 0" />
                <path d="M5 8a8 8 0 0 1 14 0" />
                <path d="M10 20h4" />
            </symbol>

            {/* Vacuum Excavation */}
            <symbol
                id="vacuum"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 10h12v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-6z" />
                <path d="M10 10V6a2 2 0 0 1 4 0v4" />
                <path d="M18 11c2-1 2-4 0-5" />
                <path d="M6 14h12" />
            </symbol>

            {/* ======================
                SERVICES: 3D Rendering & Advanced Data Collection
                ====================== */}
            <symbol
                id="3d"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.00"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />

                {/* Glyph (terrain + points, baseline ~16) */}
                <path d="M7 16h10" />
                <path d="M7 15l3-3 2 2 3-4 2 3" />
                <circle cx="10" cy="12" r="0.6" />
                <circle cx="12" cy="14" r="0.6" />
                <circle cx="15" cy="10" r="0.6" />
            </symbol>


            {/* Digital Terrain Modeling (DTM) */}
            <symbol
                id="dtm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 16l4-5 4 3 4-6 4 8" />
                <path d="M4 20h16" />
                <path d="M8 11v-2M12 14v-2M16 10V8" />
            </symbol>

            {/* Hydrographic & Bathymetric Surveys */}
            <symbol
                id="bathymetric"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3.5 9c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0" />
                <path d="M3.5 12c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0" />
                <path d="M8 12v7" />
                <path d="M8 19l-2-2" />
                <path d="M8 19l2-2" />
                <path d="M14 16h6" />
            </symbol>

            {/* Digital Scanning Surveys */}
            <symbol
                id="laser-scan"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 7l5-3 5 3v10l-5 3-5-3V7z" />
                <path d="M12 4v16" />
                <path d="M4 10h3" />
                <path d="M17 14h3" />
                <path d="M4.5 14l2-2" />
                <path d="M17.5 10l2 2" />
            </symbol>

            {/* Aerial Photogrammetry Control */}
            <symbol
                id="aerial"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 9l5-4 5 4" />
                <path d="M6 10h12" />
                <path d="M8 10l-2 5 3-1 3 4 3-4 3 1-2-5" />
                <path d="M12 12v3" />
                <circle cx="12" cy="16.5" r="1" />
            </symbol>
            <symbol
                id="logo"
                viewBox="0 12 75 75"
                role="img"
                aria-label="M.G. VERA ASSOCIATES logo"
            >
                {/* Quadrants */}
                <path d="M34 46 L34 21 A25 25 0 0 0 9 46 Z" fill="var(--color-brand-light)" />
                <path d="M34 46 L59 46 A25 25 0 0 1 34 71 Z" fill="var(--color-brand-light)" />

                {/* Target circle outline */}
                <circle cx="34" cy="46" r="25" fill="none" stroke="currentColor" strokeWidth="2" />

                {/* Crosshair lines */}
                <line
                    x1="34"
                    y1="15"
                    x2="34"
                    y2="85"
                    stroke="currentColor"
                    strokeWidth="2"
                    markerEnd="url(#arrow)"
                />
                <line
                    x1="4"
                    y1="46"
                    x2="73"
                    y2="46"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path d="M34 88 L31 80 L37 80 Z" fill="currentColor" />
                <path d="M76 46 L68 43 L68 49 Z" fill="currentColor" />
            </symbol>
            <symbol
                id="logo-full"
                viewBox="0 0 278 106"
                role="img"
                aria-label="M.G. VERA ASSOCIATES logo"
                >

                {/* Background (transparent) */}
                <rect x="0" y="0" width="278" height="106" fill="none" />

                {/* Quadrants */}
                <path d="M34 46 L34 18 A23 28 0 0 0 11 46 Z" fill="var(--color-brand-light)" />
                <path d="M34 46 L57 46 A23 28 0 0 1 34 74 Z" fill="var(--color-brand-light)" />

                {/* Target circle */}
                <ellipse cx="34" cy="46" rx="23" ry="28" fill="none" stroke="currentColor" strokeWidth="2" />

                {/* Crosshair lines */}
                <line
                    x1="34"
                    y1="15"
                    x2="34"
                    y2="105"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <line
                    x1="5"
                    y1="46"
                    x2="260"
                    y2="46"
                    stroke="currentColor"
                    strokeWidth="2"
                />

                <path d="M34 108 L31 100 L37 100 Z" fill="currentColor" />
                <path d="M264 46 L255 43 L255 49 Z" fill="currentColor" />
                
                {/* Text */}
                <text
                    x="64"
                    y="40"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="35"
                    fontWeight="700"
                    fill="currentColor"
                    letterSpacing="-1"
                >
                    M.G. V
                </text>

                <text
                    x="168"
                    y="40"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="28"
                    fontWeight="700"
                    fill="currentColor"
                    letterSpacing="-1"
                >
                    ERA
                </text>

                <text
                    x="64"
                    y="68"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="20"
                    fontWeight="700"
                    fill="var(--color-brand-light)"
                >
                    &amp;
                </text>

                <text
                    x="83"
                    y="68"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontSize="24"
                    fontWeight="700"
                    fill="var(--color-brand-light)"
                    letterSpacing="-1"
                >
                    ASSOCIATES
                </text>
            </symbol>
            <symbol
                id="logo-longs"
                viewBox="0 0 620 100"
                role="img"
                aria-label="M.G. VERA & ASSOCIATES logo"
            >
                <g transform="translate(0,-10)">
                    <path d="M34 50 L34 22 A23 28 0 0 0 11 50 Z" fill="var(--color-brand-light)" />
                    <path d="M34 50 L57 50 A23 28 0 0 1 34 78 Z" fill="var(--color-brand-light)" />

                    <ellipse cx="34" cy="50" rx="23" ry="28" fill="none" stroke="currentColor" stroke-width="2" />

                    <line x1="34" y1="15" x2="34" y2="94" stroke="currentColor" stroke-width="2" />
                    <line x1="4" y1="50" x2="73" y2="50" stroke="currentColor" stroke-width="2" />

                    <path d="M34 97 L31 89 L37 89 Z" fill="currentColor" />
                    <path d="M76 50 L68 47 L68 53 Z" fill="currentColor" />
                </g>

                <text
                    x="92"
                    y="42"
                    font-family="Georgia, 'Times New Roman', serif"
                    font-size="45"
                    font-weight="700"
                    fill="currentColor"
                    letter-spacing="-1"
                    dominant-baseline="middle"
                >
                    M.G. V
                </text>

                <text
                    x="228"
                    y="42"
                    font-family="Georgia, 'Times New Roman', serif"
                    font-size="38"
                    font-weight="700"
                    fill="currentColor"
                    letter-spacing="-1"
                    dominant-baseline="middle"
                >
                    ERA
                </text>

                <text
                    x="315"
                    y="42"
                    font-family="Georgia, 'Times New Roman', serif"
                    font-size="30"
                    font-weight="700"
                    fill="var(--color-brand-light)"
                    dominant-baseline="middle"
                >
                    &amp;
                </text>

                <text
                    x="345"
                    y="42"
                    font-family="Georgia, 'Times New Roman', serif"
                    font-size="34"
                    font-weight="700"
                    fill="var(--color-brand-light)"
                    letter-spacing="-1"
                    dominant-baseline="middle"
                    textLength="245"
                    lengthAdjust="spacingAndGlyphs"
                >
                    ASSOCIATES
                </text>
            </symbol>
        </svg>
    );
}
