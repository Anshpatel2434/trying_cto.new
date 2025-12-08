/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				// Primary - Blue (Focus & Concentration)
				primary: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
					950: "#172554",
				},
				// Secondary - Green (Growth & Progress)
				secondary: {
					50: "#f0fdf4",
					100: "#dcfce7",
					200: "#bbf7d0",
					300: "#86efac",
					400: "#4ade80",
					500: "#22c55e",
					600: "#16a34a",
					700: "#15803d",
					800: "#166534",
					900: "#14532d",
					950: "#052e16",
				},
				// Accent - Amber (Achievement & Celebration)
				accent: {
					50: "#fffbeb",
					100: "#fef3c7",
					200: "#fde68a",
					300: "#fcd34d",
					400: "#fbbf24",
					500: "#f59e0b",
					600: "#d97706",
					700: "#b45309",
					800: "#92400e",
					900: "#78350f",
					950: "#451a03",
				},
				// Neutral - Extended Slate
				slate: {
					750: "#293548", // Custom mid-tone for dark theme
				},
				// Semantic Colors
				success: {
					light: "#22c55e",
					DEFAULT: "#16a34a",
					dark: "#15803d",
				},
				warning: {
					light: "#fbbf24",
					DEFAULT: "#f59e0b",
					dark: "#d97706",
				},
				error: {
					light: "#ef4444",
					DEFAULT: "#dc2626",
					dark: "#b91c1c",
				},
				info: {
					light: "#3b82f6",
					DEFAULT: "#2563eb",
					dark: "#1d4ed8",
				},
			},
			fontFamily: {
				sans: [
					"Inter",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
				],
				mono: [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"Monaco",
					"Courier New",
					"monospace",
				],
			},
			fontSize: {
				// Custom font sizes for learning platform
				display: ["48px", { lineHeight: "1.2", fontWeight: "700" }],
				"4xl": ["36px", { lineHeight: "1.25", fontWeight: "700" }],
				"3xl": ["30px", { lineHeight: "1.3", fontWeight: "700" }],
				"2xl": ["24px", { lineHeight: "1.35", fontWeight: "600" }],
				xl: ["20px", { lineHeight: "1.4", fontWeight: "600" }],
				lg: ["18px", { lineHeight: "1.5", fontWeight: "500" }],
				base: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
				sm: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
				xs: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
				// Special reading content size
				reading: ["18px", { lineHeight: "1.7", fontWeight: "400" }],
			},
			spacing: {
				18: "4.5rem",
				88: "22rem",
				100: "25rem",
				112: "28rem",
				128: "32rem",
			},
			borderRadius: {
				DEFAULT: "4px",
				md: "6px",
				lg: "8px",
				xl: "12px",
				"2xl": "16px",
				"3xl": "24px",
			},
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
				DEFAULT:
					"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
				md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
				lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
				xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
				"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
				// Card shadows for elevation
				card: "0 2px 8px rgba(0, 0, 0, 0.08)",
				"card-hover": "0 4px 16px rgba(0, 0, 0, 0.12)",
			},
			transitionDuration: {
				2000: "2000ms",
				3000: "3000ms",
			},
			animation: {
				"fade-in": "fadeIn 0.3s ease-out",
				"slide-up": "slideUp 0.3s ease-out",
				"slide-down": "slideDown 0.3s ease-out",
				"scale-in": "scaleIn 0.2s ease-out",
				confetti: "confetti 0.5s ease-out",
				"pulse-subtle": "pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { transform: "translateY(10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				slideDown: {
					"0%": { transform: "translateY(-10px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				scaleIn: {
					"0%": { transform: "scale(0.95)", opacity: "0" },
					"100%": { transform: "scale(1)", opacity: "1" },
				},
				confetti: {
					"0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
					"50%": { opacity: "1" },
					"100%": { transform: "scale(1) rotate(360deg)", opacity: "0" },
				},
				pulseSubtle: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" },
				},
			},
			backdropBlur: {
				xs: "2px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
