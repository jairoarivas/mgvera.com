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
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </symbol>
            <symbol
                id="map-pin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />    
            </symbol>
            <symbol
                id="email"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 7l9 6l9 -6" />    
            </symbol>
            <symbol
                id="facebook"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.50"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </symbol>
            <symbol
                id="instagram"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.50"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M16.5 7.5v.01" />    
            </symbol>
            <symbol
                id="linkedin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.50"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />   
            </symbol>
            {/* ======================
                SERVICES: Surveying
                ====================== */}

            <symbol
                id="surveying"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />
                
                <g transform="translate(3 3) scale(0.75)">
                    <path d="M4 19l4 -14" />
                    <path d="M16 5l4 14" />
                    <path d="M12 8v-2" />
                    <path d="M12 13v-2" />
                    <path d="M12 18v-2" />
                </g>

            </symbol>

            {/* ======================
                SERVICES: Subsurface Utilities (SUE)
                ====================== */}
            <symbol
                id="sue"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />

                <g transform="translate(3 3) scale(0.75)">
                    <path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
                    <path d="M16 9a5 5 0 1 0 -7 7" />
                    <path d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
                </g>
            </symbol>

            {/* ======================
                SERVICES: Utility Coordination (UC)
                ====================== */}
            <symbol
                id="uc"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />

                <g transform="translate(3 3) scale(0.75)">
                    <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M7 8l0 8" />
                    <path d="M7 8a4 4 0 0 0 4 4h4" />
                </g>
            </symbol>

            {/* ======================
                SERVICES: LiDAR
                ====================== */}
            <symbol
                id="lidar"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />

                <g transform="translate(3 3) scale(0.75)">
                    <path d="M3 20l9 -7" />
                    <path d="M12 3v10l9 7" />
                    <path d="M17 12v.015" />
                    <path d="M17 4.015v.015" />
                    <path d="M21 8.015v.015" />
                    <path d="M12 19.015v.015" />
                    <path d="M3 12.015v.015" />
                    <path d="M7 8.015v.015" />
                    <path d="M3 4.015v.015" />
                </g>
            </symbol>

            {/* ======================
                SERVICES: Construction
                ====================== */}
            <symbol
                id="construction"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />
                    <g transform="translate(3 3) scale(0.75)">
                        <path d="M4 20l16 0" />
                        <path d="M9.4 10l5.2 0" />
                        <path d="M7.8 15l8.4 0" />
                        <path d="M6 20l5 -15h2l5 15" />    
                    </g>
            </symbol>

            {/* ======================
                SERVICES: Residential / Commercial
                ====================== */}
            <symbol
                id="residential"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth=".75"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* Shared badge */}
                <rect x="3" y="3" width="18" height="18" rx="1" />

                <g transform="translate(3 3) scale(0.75)">
                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                    <path d="M13 7l0 .01" />
                    <path d="M17 7l0 .01" />
                    <path d="M17 11l0 .01" />
                    <path d="M17 15l0 .01" />
                </g>
            </symbol>
        </svg>
    );
}
