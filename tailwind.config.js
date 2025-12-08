/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			// ═══════════════════════════════════════════════════════════════════
			// COLOR SYSTEM - Academic Soft Theme (Enhanced)
			// ═══════════════════════════════════════════════════════════════════
			colors: {
				// ─────────────────────────────────────────────────────────────────
				// SURFACE COLORS - Backgrounds & Containers
				// ─────────────────────────────────────────────────────────────────
				surface: {
					// Light theme surfaces (clean, bright)
					50: "#FFFFFF", // Pure white for cards
					100: "#FAFBFC", // Main background
					150: "#F1F5F9", // Subtle elevated areas
					200: "#E2E8F0", // Borders, dividers
					250: "#CBD5E1", // Stronger borders
					// Dark theme surfaces (rich, refined grays)
					700: "#2A2A30", // Elevated cards in dark mode
					750: "#232328", // Slightly elevated
					800: "#1A1A1F", // Card background in dark mode
					850: "#141418", // Slightly elevated dark
					900: "#0F0F12", // Main dark background
					950: "#0A0A0C", // Deep dark for contrast
				},

				// ─────────────────────────────────────────────────────────────────
				// PRIMARY - Indigo/Violet (Trust, Focus, Intelligence)
				// More vibrant and eye-catching
				// ─────────────────────────────────────────────────────────────────
				primary: {
					50: "#EEF2FF",
					100: "#E0E7FF",
					200: "#C7D2FE",
					300: "#A5B4FC",
					400: "#818CF8",
					500: "#6366F1", // Main primary
					600: "#4F46E5", // Hover state
					700: "#4338CA",
					800: "#3730A3",
					900: "#312E81",
					950: "#1E1B4B",
				},

				// ─────────────────────────────────────────────────────────────────
				// SECONDARY - Teal/Cyan (Calm, Growth, Balance)
				// ─────────────────────────────────────────────────────────────────
				secondary: {
					50: "#F0FDFA",
					100: "#CCFBF1",
					200: "#99F6E4",
					300: "#5EEAD4",
					400: "#2DD4BF",
					500: "#14B8A6", // Main secondary
					600: "#0D9488", // Hover state
					700: "#0F766E",
					800: "#115E59",
					900: "#134E4A",
					950: "#042F2E",
				},

				// ─────────────────────────────────────────────────────────────────
				// ACCENT - Amber/Gold (Achievement, Celebration, Motivation)
				// ─────────────────────────────────────────────────────────────────
				accent: {
					50: "#FFFBEB",
					100: "#FEF3C7",
					200: "#FDE68A",
					300: "#FCD34D",
					400: "#FBBF24",
					500: "#F59E0B", // Main accent
					600: "#D97706", // Hover state
					700: "#B45309",
					800: "#92400E",
					900: "#78350F",
					950: "#451A03",
				},

				// ─────────────────────────────────────────────────────────────────
				// ROSE - Warm Accent (Engagement, Hearts, Premium)
				// ─────────────────────────────────────────────────────────────────
				rose: {
					50: "#FFF1F2",
					100: "#FFE4E6",
					200: "#FECDD3",
					300: "#FDA4AF",
					400: "#FB7185",
					500: "#F43F5E",
					600: "#E11D48",
					700: "#BE123C",
					800: "#9F1239",
					900: "#881337",
					950: "#4C0519",
				},

				// ─────────────────────────────────────────────────────────────────
				// VIOLET - Creative accent
				// ─────────────────────────────────────────────────────────────────
				violet: {
					50: "#F5F3FF",
					100: "#EDE9FE",
					200: "#DDD6FE",
					300: "#C4B5FD",
					400: "#A78BFA",
					500: "#8B5CF6",
					600: "#7C3AED",
					700: "#6D28D9",
					800: "#5B21B6",
					900: "#4C1D95",
					950: "#2E1065",
				},

				// ─────────────────────────────────────────────────────────────────
				// SEMANTIC COLORS
				// ─────────────────────────────────────────────────────────────────
				success: {
					light: "#34D399",
					DEFAULT: "#10B981",
					dark: "#059669",
				},
				warning: {
					light: "#FBBF24",
					DEFAULT: "#F59E0B",
					dark: "#D97706",
				},
				error: {
					light: "#F87171",
					DEFAULT: "#EF4444",
					dark: "#DC2626",
				},
				info: {
					light: "#60A5FA",
					DEFAULT: "#3B82F6",
					dark: "#2563EB",
				},

				// ─────────────────────────────────────────────────────────────────
				// TEXT COLORS - High contrast for readability
				// ─────────────────────────────────────────────────────────────────
				text: {
					// Light mode text colors (darker for better contrast)
					primary: "#0F172A", // slate-900 - Main text (darker)
					secondary: "#334155", // slate-700 - Secondary text
					muted: "#64748B", // slate-500 - Disabled, hints
					inverse: "#F8FAFC", // slate-50 - Text on dark bg
					// Dark mode text colors
					"dark-primary": "#F8FAFC", // Almost white
					"dark-secondary": "#CBD5E1", // slate-300
					"dark-muted": "#64748B", // slate-500
				},

				// ─────────────────────────────────────────────────────────────────
				// BORDER COLORS
				// ─────────────────────────────────────────────────────────────────
				border: {
					light: "#E2E8F0",
					DEFAULT: "#CBD5E1",
					dark: "#2E2E35",
					"dark-light": "#3A3A42",
				},
			},

			// ═══════════════════════════════════════════════════════════════════
			// TYPOGRAPHY SYSTEM - Mixed Fonts (Serif + Sans-Serif)
			// ═══════════════════════════════════════════════════════════════════
			fontFamily: {
				serif: [
					"Fraunces",
					"Newsreader",
					"Playfair Display",
					"Georgia",
					"serif",
				],
				sans: [
					"Plus Jakarta Sans",
					"DM Sans",
					"Inter",
					"system-ui",
					"-apple-system",
					"sans-serif",
				],
				mono: [
					"JetBrains Mono",
					"Fira Code",
					"Consolas",
					"monospace",
				],
			},

			// ─────────────────────────────────────────────────────────────────
			// FONT SIZES
			// ─────────────────────────────────────────────────────────────────
			fontSize: {
				"display-2xl": ["72px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" }],
				"display-xl": ["60px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" }],
				"display-lg": ["48px", { lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.02em" }],
				"display-md": ["36px", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.01em" }],
				"display-sm": ["30px", { lineHeight: "1.25", fontWeight: "600", letterSpacing: "-0.01em" }],
				"heading-xl": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
				"heading-lg": ["24px", { lineHeight: "1.35", fontWeight: "600" }],
				"heading-md": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
				"heading-sm": ["18px", { lineHeight: "1.45", fontWeight: "600" }],
				"body-xl": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
				"body-lg": ["18px", { lineHeight: "1.65", fontWeight: "400" }],
				"body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
				"body-sm": ["14px", { lineHeight: "1.55", fontWeight: "400" }],
				"body-xs": ["12px", { lineHeight: "1.5", fontWeight: "400" }],
				"reading-lg": ["20px", { lineHeight: "1.8", fontWeight: "400" }],
				"reading-md": ["18px", { lineHeight: "1.75", fontWeight: "400" }],
				"reading-sm": ["16px", { lineHeight: "1.7", fontWeight: "400" }],
				"label-lg": ["14px", { lineHeight: "1.4", fontWeight: "500" }],
				"label-md": ["13px", { lineHeight: "1.4", fontWeight: "500" }],
				"label-sm": ["11px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.02em" }],
			},

			// ═══════════════════════════════════════════════════════════════════
			// SPACING SYSTEM
			// ═══════════════════════════════════════════════════════════════════
			spacing: {
				"4.5": "1.125rem",
				"13": "3.25rem",
				"15": "3.75rem",
				"18": "4.5rem",
				"22": "5.5rem",
				"26": "6.5rem",
				"30": "7.5rem",
				"34": "8.5rem",
				"88": "22rem",
				"100": "25rem",
				"112": "28rem",
				"128": "32rem",
			},

			// ═══════════════════════════════════════════════════════════════════
			// BORDER RADIUS
			// ═══════════════════════════════════════════════════════════════════
			borderRadius: {
				"sm": "6px",
				"DEFAULT": "8px",
				"md": "10px",
				"lg": "12px",
				"xl": "16px",
				"2xl": "20px",
				"3xl": "24px",
				"4xl": "32px",
			},

			// ═══════════════════════════════════════════════════════════════════
			// BOX SHADOWS - Enhanced with subtle color tints
			// ═══════════════════════════════════════════════════════════════════
			boxShadow: {
				// Subtle shadows for cards (Light mode with slight blue tint)
				"card-sm": "0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.06)",
				"card": "0 4px 6px rgba(15, 23, 42, 0.04), 0 2px 4px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15, 23, 42, 0.02)",
				"card-md": "0 8px 16px rgba(15, 23, 42, 0.06), 0 4px 8px rgba(15, 23, 42, 0.04)",
				"card-lg": "0 16px 32px rgba(15, 23, 42, 0.08), 0 8px 16px rgba(15, 23, 42, 0.06)",
				"card-xl": "0 24px 48px rgba(15, 23, 42, 0.1), 0 12px 24px rgba(15, 23, 42, 0.08)",

				// Hover shadows
				"hover": "0 8px 24px rgba(15, 23, 42, 0.1), 0 4px 12px rgba(15, 23, 42, 0.08)",

				// Focus shadows
				"focus": "0 0 0 3px rgba(99, 102, 241, 0.3)",
				"focus-secondary": "0 0 0 3px rgba(20, 184, 166, 0.3)",

				// Button shadows
				"btn": "0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.05)",
				"btn-md": "0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)",
				"btn-lg": "0 4px 8px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.06)",

				// Colored shadows for buttons (more vibrant)
				"btn-primary": "0 4px 14px rgba(99, 102, 241, 0.4)",
				"btn-primary-lg": "0 8px 24px rgba(99, 102, 241, 0.45)",
				"btn-secondary": "0 4px 14px rgba(20, 184, 166, 0.4)",
				"btn-accent": "0 4px 14px rgba(245, 158, 11, 0.4)",
				"btn-success": "0 4px 14px rgba(16, 185, 129, 0.4)",
				"btn-error": "0 4px 14px rgba(239, 68, 68, 0.4)",

				// Dark mode shadows
				"dark-card": "0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03)",
				"dark-card-lg": "0 12px 32px rgba(0, 0, 0, 0.5)",
				"dark-hover": "0 8px 24px rgba(0, 0, 0, 0.5)",

				// Inner shadows
				"inner-sm": "inset 0 1px 2px rgba(0, 0, 0, 0.06)",
				"inner": "inset 0 2px 4px rgba(0, 0, 0, 0.08)",

				// Glow effects
				"glow-primary": "0 0 24px rgba(99, 102, 241, 0.35)",
				"glow-secondary": "0 0 24px rgba(20, 184, 166, 0.35)",
				"glow-accent": "0 0 24px rgba(245, 158, 11, 0.35)",
			},

			// ═══════════════════════════════════════════════════════════════════
			// ANIMATIONS
			// ═══════════════════════════════════════════════════════════════════
			animation: {
				"fade-in": "fadeIn 0.4s ease-out forwards",
				"fade-in-fast": "fadeIn 0.2s ease-out forwards",
				"fade-in-slow": "fadeIn 0.6s ease-out forwards",
				"slide-up": "slideUp 0.4s ease-out forwards",
				"slide-up-fast": "slideUp 0.25s ease-out forwards",
				"slide-down": "slideDown 0.4s ease-out forwards",
				"slide-left": "slideLeft 0.4s ease-out forwards",
				"slide-right": "slideRight 0.4s ease-out forwards",
				"scale-in": "scaleIn 0.3s ease-out forwards",
				"scale-in-bounce": "scaleInBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
				"shake": "shake 0.4s ease-in-out",
				"pulse-soft": "pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"pulse-success": "pulseSuccess 0.6s ease-out",
				"bounce-subtle": "bounceSubtle 0.6s ease-out",
				"spin-slow": "spin 3s linear infinite",
				"float": "float 3s ease-in-out infinite",
				"shimmer": "shimmer 2s linear infinite",
				"confetti": "confetti 0.8s ease-out forwards",
				"star-burst": "starBurst 0.6s ease-out forwards",
				"check-mark": "checkMark 0.4s ease-out forwards",
				"progress-fill": "progressFill 1s ease-out forwards",
				"count-up": "countUp 0.8s ease-out forwards",
			},

			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { opacity: "0", transform: "translateY(16px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideDown: {
					"0%": { opacity: "0", transform: "translateY(-16px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideLeft: {
					"0%": { opacity: "0", transform: "translateX(16px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				slideRight: {
					"0%": { opacity: "0", transform: "translateX(-16px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				scaleIn: {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				scaleInBounce: {
					"0%": { opacity: "0", transform: "scale(0.9)" },
					"60%": { opacity: "1", transform: "scale(1.02)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				shake: {
					"0%, 100%": { transform: "translateX(0)" },
					"20%, 60%": { transform: "translateX(-4px)" },
					"40%, 80%": { transform: "translateX(4px)" },
				},
				pulseSoft: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.7" },
				},
				pulseSuccess: {
					"0%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.4)" },
					"50%": { transform: "scale(1.02)" },
					"100%": { transform: "scale(1)", boxShadow: "0 0 0 12px rgba(16, 185, 129, 0)" },
				},
				bounceSubtle: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-4px)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-8px)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "200% 0" },
					"100%": { backgroundPosition: "-200% 0" },
				},
				confetti: {
					"0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
					"50%": { opacity: "1" },
					"100%": { transform: "scale(1) rotate(360deg)", opacity: "0" },
				},
				starBurst: {
					"0%": { transform: "scale(0)", opacity: "1" },
					"100%": { transform: "scale(1.5)", opacity: "0" },
				},
				checkMark: {
					"0%": { strokeDashoffset: "24" },
					"100%": { strokeDashoffset: "0" },
				},
				progressFill: {
					"0%": { width: "0%" },
					"100%": { width: "var(--progress-value, 100%)" },
				},
				countUp: {
					"0%": { opacity: "0", transform: "translateY(8px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},

			// ═══════════════════════════════════════════════════════════════════
			// TRANSITIONS
			// ═══════════════════════════════════════════════════════════════════
			transitionDuration: {
				"250": "250ms",
				"350": "350ms",
				"400": "400ms",
				"600": "600ms",
				"800": "800ms",
			},
			transitionTimingFunction: {
				"bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
				"smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
				"smooth-out": "cubic-bezier(0, 0, 0.2, 1)",
			},

			// ═══════════════════════════════════════════════════════════════════
			// BACKDROP BLUR
			// ═══════════════════════════════════════════════════════════════════
			backdropBlur: {
				xs: "2px",
				"2xl": "40px",
				"3xl": "64px",
			},

			// ═══════════════════════════════════════════════════════════════════
			// BACKGROUND IMAGE - Gradients & Patterns
			// ═══════════════════════════════════════════════════════════════════
			backgroundImage: {
				// Subtle gradients for backgrounds
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-soft": "linear-gradient(135deg, var(--tw-gradient-stops))",
				"gradient-warm": "linear-gradient(135deg, #FAFBFC 0%, #F8F4F0 100%)",
				"gradient-cool": "linear-gradient(135deg, #FAFBFC 0%, #EEF2FF 100%)",
				// Dark mode gradients
				"gradient-dark": "linear-gradient(135deg, #0F0F12 0%, #1A1A1F 100%)",
				"gradient-dark-warm": "linear-gradient(135deg, #14141A 0%, #1A1A1F 100%)",
				// Button gradients (more vibrant)
				"gradient-primary": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
				"gradient-secondary": "linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)",
				"gradient-accent": "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
				// Decorative gradients
				"gradient-shine": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
				// Achievement gradients
				"gradient-gold": "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
				"gradient-silver": "linear-gradient(135deg, #E2E8F0 0%, #94A3B8 50%, #64748B 100%)",
				"gradient-bronze": "linear-gradient(135deg, #F59E0B 0%, #B45309 50%, #78350F 100%)",
				// Special highlight gradient
				"gradient-highlight": "linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
			},

			// ═══════════════════════════════════════════════════════════════════
			// CURSOR
			// ═══════════════════════════════════════════════════════════════════
			cursor: {
				pointer: "pointer",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
