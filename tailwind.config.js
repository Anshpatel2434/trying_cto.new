/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			// ═══════════════════════════════════════════════════════════════════
			// COLOR SYSTEM - Academic Soft Theme
			// ═══════════════════════════════════════════════════════════════════
			colors: {
				// ─────────────────────────────────────────────────────────────────
				// SURFACE COLORS - Backgrounds & Containers
				// ─────────────────────────────────────────────────────────────────
				surface: {
					// Light theme surfaces (warm off-whites)
					50: "#FEFEFE", // Pure white for cards
					100: "#FAFBFD", // Main background - soft blue-white
					150: "#F5F7FA", // Subtle elevated areas
					200: "#EEF1F6", // Borders, dividers
					// Dark theme surfaces (gray-based, NOT pure black)
					700: "#3F3F46", // Elevated cards in dark mode
					800: "#27272A", // Card background in dark mode
					850: "#1F1F23", // Slightly elevated dark
					900: "#18181B", // Main dark background
					950: "#09090B", // Deep dark for contrast
				},

				// ─────────────────────────────────────────────────────────────────
				// PRIMARY - Indigo (Trust, Focus, Intelligence)
				// Used for: Primary buttons, links, active states, focus rings
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
				// SECONDARY - Teal (Calm, Focus, Concentration)
				// Used for: Secondary actions, progress indicators, highlights
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
				// Used for: Badges, streaks, achievements, highlights
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
				// ROSE - Warm Accent (Engagement, Notifications, Hearts)
				// Used for: Likes, favorites, premium features
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
				// SEMANTIC COLORS
				// ─────────────────────────────────────────────────────────────────
				success: {
					light: "#34D399", // emerald-400
					DEFAULT: "#10B981", // emerald-500
					dark: "#059669", // emerald-600
				},
				warning: {
					light: "#FBBF24", // amber-400
					DEFAULT: "#F59E0B", // amber-500
					dark: "#D97706", // amber-600
				},
				error: {
					light: "#F87171", // red-400
					DEFAULT: "#EF4444", // red-500
					dark: "#DC2626", // red-600
				},
				info: {
					light: "#60A5FA", // blue-400
					DEFAULT: "#3B82F6", // blue-500
					dark: "#2563EB", // blue-600
				},

				// ─────────────────────────────────────────────────────────────────
				// TEXT COLORS - Optimized for readability
				// ─────────────────────────────────────────────────────────────────
				text: {
					// Light mode text colors
					primary: "#1E293B", // slate-800 - Main text
					secondary: "#475569", // slate-600 - Secondary text
					muted: "#94A3B8", // slate-400 - Disabled, hints
					inverse: "#F8FAFC", // slate-50 - Text on dark bg
					// Dark mode text colors (prefix with 'dark-')
					"dark-primary": "#F4F4F5", // zinc-100
					"dark-secondary": "#A1A1AA", // zinc-400
					"dark-muted": "#71717A", // zinc-500
				},

				// ─────────────────────────────────────────────────────────────────
				// BORDER COLORS
				// ─────────────────────────────────────────────────────────────────
				border: {
					light: "#E2E8F0", // slate-200
					DEFAULT: "#CBD5E1", // slate-300
					dark: "#3F3F46", // zinc-700
					"dark-light": "#52525B", // zinc-600
				},
			},

			// ═══════════════════════════════════════════════════════════════════
			// TYPOGRAPHY SYSTEM - Mixed Fonts (Serif + Sans-Serif)
			// ═══════════════════════════════════════════════════════════════════
			fontFamily: {
				// Serif - For headings, editorial content (Academic feel)
				serif: [
					"Fraunces",
					"Newsreader",
					"Playfair Display",
					"Merriweather",
					"Georgia",
					"Times New Roman",
					"serif",
				],
				// Sans - For body text, UI elements (Modern, readable)
				sans: [
					"Plus Jakarta Sans",
					"DM Sans",
					"Inter",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"sans-serif",
				],
				// Mono - For code, technical content
				mono: [
					"JetBrains Mono",
					"Fira Code",
					"SF Mono",
					"Consolas",
					"monospace",
				],
			},

			// ─────────────────────────────────────────────────────────────────
			// FONT SIZES - Optimized type scale
			// ─────────────────────────────────────────────────────────────────
			fontSize: {
				// Display sizes (Serif headings)
				"display-2xl": ["72px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" }],
				"display-xl": ["60px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" }],
				"display-lg": ["48px", { lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.02em" }],
				"display-md": ["36px", { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.01em" }],
				"display-sm": ["30px", { lineHeight: "1.25", fontWeight: "600", letterSpacing: "-0.01em" }],

				// Heading sizes (Can be serif or sans)
				"heading-xl": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
				"heading-lg": ["24px", { lineHeight: "1.35", fontWeight: "600" }],
				"heading-md": ["20px", { lineHeight: "1.4", fontWeight: "600" }],
				"heading-sm": ["18px", { lineHeight: "1.45", fontWeight: "600" }],

				// Body sizes (Sans-serif)
				"body-xl": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
				"body-lg": ["18px", { lineHeight: "1.65", fontWeight: "400" }],
				"body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
				"body-sm": ["14px", { lineHeight: "1.55", fontWeight: "400" }],
				"body-xs": ["12px", { lineHeight: "1.5", fontWeight: "400" }],

				// Reading sizes (Optimized for RC passages)
				"reading-lg": ["20px", { lineHeight: "1.8", fontWeight: "400" }],
				"reading-md": ["18px", { lineHeight: "1.75", fontWeight: "400" }],
				"reading-sm": ["16px", { lineHeight: "1.7", fontWeight: "400" }],

				// Label/Caption sizes
				"label-lg": ["14px", { lineHeight: "1.4", fontWeight: "500" }],
				"label-md": ["13px", { lineHeight: "1.4", fontWeight: "500" }],
				"label-sm": ["11px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.02em" }],
			},

			// ═══════════════════════════════════════════════════════════════════
			// SPACING SYSTEM
			// ═══════════════════════════════════════════════════════════════════
			spacing: {
				"4.5": "1.125rem", // 18px
				"13": "3.25rem", // 52px
				"15": "3.75rem", // 60px
				"18": "4.5rem", // 72px
				"22": "5.5rem", // 88px
				"26": "6.5rem", // 104px
				"30": "7.5rem", // 120px
				"34": "8.5rem", // 136px
				"88": "22rem",
				"100": "25rem",
				"112": "28rem",
				"128": "32rem",
			},

			// ═══════════════════════════════════════════════════════════════════
			// BORDER RADIUS - Soft, rounded aesthetic
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
			// BOX SHADOWS - Elevated, soft aesthetic
			// ═══════════════════════════════════════════════════════════════════
			boxShadow: {
				// Subtle shadows for cards (Light mode)
				"card-sm": "0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.04)",
				"card": "0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06)",
				"card-md": "0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.08)",
				"card-lg": "0 8px 16px rgba(0, 0, 0, 0.06), 0 16px 48px rgba(0, 0, 0, 0.1)",
				"card-xl": "0 12px 24px rgba(0, 0, 0, 0.08), 0 24px 64px rgba(0, 0, 0, 0.12)",

				// Hover/Focus shadows
				"hover": "0 4px 12px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.1)",
				"focus": "0 0 0 3px rgba(99, 102, 241, 0.25)",
				"focus-secondary": "0 0 0 3px rgba(20, 184, 166, 0.25)",

				// Button shadows
				"btn": "0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)",
				"btn-md": "0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.06)",
				"btn-lg": "0 4px 8px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.08)",

				// Colored shadows for buttons
				"btn-primary": "0 4px 12px rgba(99, 102, 241, 0.35)",
				"btn-primary-lg": "0 8px 24px rgba(99, 102, 241, 0.4)",
				"btn-secondary": "0 4px 12px rgba(20, 184, 166, 0.35)",
				"btn-accent": "0 4px 12px rgba(245, 158, 11, 0.35)",
				"btn-success": "0 4px 12px rgba(16, 185, 129, 0.35)",
				"btn-error": "0 4px 12px rgba(239, 68, 68, 0.35)",

				// Dark mode shadows (more subtle)
				"dark-card": "0 2px 8px rgba(0, 0, 0, 0.3)",
				"dark-card-lg": "0 8px 24px rgba(0, 0, 0, 0.4)",
				"dark-hover": "0 4px 16px rgba(0, 0, 0, 0.4)",

				// Inner shadows
				"inner-sm": "inset 0 1px 2px rgba(0, 0, 0, 0.06)",
				"inner": "inset 0 2px 4px rgba(0, 0, 0, 0.08)",

				// Glow effects
				"glow-primary": "0 0 20px rgba(99, 102, 241, 0.3)",
				"glow-secondary": "0 0 20px rgba(20, 184, 166, 0.3)",
				"glow-accent": "0 0 20px rgba(245, 158, 11, 0.3)",
			},

			// ═══════════════════════════════════════════════════════════════════
			// ANIMATIONS - Smooth, delightful micro-interactions
			// ═══════════════════════════════════════════════════════════════════
			animation: {
				// Entrance animations
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

				// Feedback animations
				"shake": "shake 0.4s ease-in-out",
				"pulse-soft": "pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"pulse-success": "pulseSuccess 0.6s ease-out",
				"bounce-subtle": "bounceSubtle 0.6s ease-out",

				// Continuous animations
				"spin-slow": "spin 3s linear infinite",
				"float": "float 3s ease-in-out infinite",
				"shimmer": "shimmer 2s linear infinite",

				// Celebration animations
				"confetti": "confetti 0.8s ease-out forwards",
				"star-burst": "starBurst 0.6s ease-out forwards",
				"check-mark": "checkMark 0.4s ease-out forwards",

				// Progress animations
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
				"1000": "1000ms",
				"2000": "2000ms",
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
				"gradient-warm": "linear-gradient(135deg, #FAFBFD 0%, #F5F0EB 100%)",
				"gradient-cool": "linear-gradient(135deg, #FAFBFD 0%, #EEF2FF 100%)",
				// Dark mode gradients
				"gradient-dark": "linear-gradient(135deg, #18181B 0%, #1F1F23 100%)",
				"gradient-dark-warm": "linear-gradient(135deg, #1C1917 0%, #1F1F23 100%)",
				// Button gradients
				"gradient-primary": "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
				"gradient-secondary": "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
				"gradient-accent": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
				// Decorative gradients
				"gradient-shine": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
				// Achievement gradients
				"gradient-gold": "linear-gradient(135deg, #FCD34D 0%, #F59E0B 50%, #D97706 100%)",
				"gradient-silver": "linear-gradient(135deg, #E2E8F0 0%, #94A3B8 50%, #64748B 100%)",
				"gradient-bronze": "linear-gradient(135deg, #F59E0B 0%, #B45309 50%, #78350F 100%)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
