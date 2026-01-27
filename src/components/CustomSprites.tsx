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
                <path d="M34 85 L31 80 L37 80 Z" fill="currentColor" />
                <path d="M73 46 L68 43 L68 49 Z" fill="currentColor" />
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
                <path d="M34 46 L34 21 A25 25 0 0 0 9 46 Z" fill="var(--color-brand-light)" />
                <path d="M34 46 L59 46 A25 25 0 0 1 34 71 Z" fill="var(--color-brand-light)" />

                {/* Target circle */}
                <circle cx="34" cy="46" r="25" fill="none" stroke="currentColor" strokeWidth="2" />

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

                <path d="M34 105 L31 100 L37 100 Z" fill="currentColor" />
                <path d="M260 46 L255 43 L255 49 Z" fill="currentColor" />
                
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
                    x="165"
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
        </svg>
    );
}