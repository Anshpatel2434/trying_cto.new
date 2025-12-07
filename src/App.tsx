import { useState } from "react";
import LoginPage from "./LoginPage";

type View = "landing" | "dashboard";

const navLinks = [
	{ label: "Platform", href: "#platform" },
	{ label: "Solutions", href: "#solutions" },
	{ label: "Docs", href: "#docs" },
	{ label: "Pricing", href: "#pricing" },
];

const landingStats = [
	{ label: "Requests / day", value: "2.1B" },
	{ label: "Global regions", value: "38" },
	{ label: "Uptime SLA", value: "99.99%" },
];

const featureHighlights = [
	{
		title: "Passkeys + Biometrics",
		description:
			"Launch passwordless flows with WebAuthn and platform biometrics in minutes.",
	},
	{
		title: "Edge Authorisation",
		description:
			"Latency under 80ms worldwide thanks to our 38 region PoPs and smart caching.",
	},
	{
		title: "Brand-ready UI kit",
		description:
			"Craft fully themed auth surfaces using our composable React + Tailwind primitives.",
	},
	{
		title: "Adaptive security",
		description:
			"Machine learning powered anomaly detection, MFA escalation, and audit trails.",
	},
];

const dashboardStats = [
	{ label: "Total users", value: "148,920", change: "+14.2%", positive: true },
	{ label: "Active sessions", value: "6,421", change: "+6.9%", positive: true },
	{ label: "Success rate", value: "98.4%", change: "-0.3%", positive: false },
	{ label: "Avg latency", value: "46 ms", change: "-12%", positive: true },
];

const activityFeed = [
	{ user: "Skyline Labs", action: "enabled passkeys", time: "2m ago" },
	{ user: "Pulse Security", action: "added 3 admins", time: "16m ago" },
	{ user: "Northwind", action: "rotated signing keys", time: "58m ago" },
	{ user: "Lumos AI", action: "exported audit log", time: "1h ago" },
];

const securityBreakdown = [
	{
		label: "Passkeys enrolled",
		value: "68%",
		color: "from-indigo-500 to-purple-500",
	},
	{ label: "MFA enabled", value: "87%", color: "from-emerald-400 to-lime-400" },
	{
		label: "WebAuthn-ready devices",
		value: "74%",
		color: "from-sky-400 to-cyan-400",
	},
];

const trustBadges = [
	"SOC 2 Type II",
	"GDPR compliant",
	"ISO 27001",
	"HIPAA ready",
];

function App() {
	const [view, setView] = useState<View>("landing");
	const [showLogin, setShowLogin] = useState(false);

	const openLogin = () => setShowLogin(true);
	const closeLogin = () => setShowLogin(false);

	const handleLoginSuccess = () => {
		setShowLogin(false);
		setView("dashboard");
	};

	const handleLogout = () => {
		setView("landing");
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.25),_transparent_55%)]"></div>
			<div className="pointer-events-none absolute inset-0 opacity-70">
				<div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
				<div className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
				<div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
			</div>

			<div className="relative z-10 flex min-h-screen flex-col">
				<Header view={view} onShowLogin={openLogin} onLogout={handleLogout} />

				<main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-16 pt-10">
					<div
						className={`absolute inset-0 overflow-y-auto pb-12 transition-all duration-700 ${
							view === "landing"
								? "opacity-100 translate-y-0"
								: "pointer-events-none opacity-0 -translate-y-6"
						}`}
						aria-hidden={view !== "landing"}
					>
						<LandingContent onShowLogin={openLogin} />
					</div>

					<div
						className={`absolute inset-0 overflow-y-auto pb-12 transition-all duration-700 ${
							view === "dashboard"
								? "opacity-100 translate-y-0"
								: "pointer-events-none opacity-0 translate-y-6"
						}`}
						aria-hidden={view !== "dashboard"}
					>
						<DashboardContent onLogout={handleLogout} />
					</div>
				</main>

				<footer className="mx-auto w-full max-w-6xl px-6 pb-10 text-center text-sm text-slate-400">
					&copy; 2024 Aurora Identity — Built for teams who obsess over craft
					and security.
				</footer>
			</div>

			<LoginOverlay
				show={showLogin}
				onClose={closeLogin}
				onSuccess={handleLoginSuccess}
			/>
		</div>
	);
}

function Header({
	view,
	onShowLogin,
	onLogout,
}: {
	view: View;
	onShowLogin: () => void;
	onLogout: () => void;
}) {
	return (
		<header
			className="mx-auto w-full max-w-6xl px-6 pt-8"
			style={{ animation: "slide-down 0.6s ease-out" }}
		>
			<div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-lg shadow-indigo-900/30">
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/40">
						<svg
							className="h-6 w-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3.5 6.75L12 3l8.5 3.75v7.5L12 18l-8.5-3.75v-7.5z"
							/>
						</svg>
					</div>
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
							Aurora
						</p>
						<p className="text-lg font-semibold">Identity Platform</p>
					</div>
				</div>

				<nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="transition hover:text-white"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<button className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:text-white">
						Product tour
					</button>
					{view === "dashboard" ? (
						<button
							onClick={onLogout}
							className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
						>
							Sign out
						</button>
					) : (
						<button
							onClick={onShowLogin}
							className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:shadow-indigo-500/60"
						>
							Sign in
						</button>
					)}
				</div>
			</div>
		</header>
	);
}

function LandingContent({ onShowLogin }: { onShowLogin: () => void }) {
	return (
		<div
			className="flex h-full flex-col gap-12"
			style={{ animation: "fade-in 0.5s ease-out" }}
		>
			<div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="space-y-8">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 shadow-lg shadow-indigo-900/30">
						<span className="relative flex h-2.5 w-2.5">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
							<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
						</span>
						Rebuilt for passkeys + biometrics
					</div>

					<div className="space-y-6">
						<h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
							Zero-friction authentication for ambitious teams
						</h1>
						<p className="text-lg text-slate-300 sm:text-xl">
							Ship delightful login experiences with enterprise-grade security
							baked in. Tailor every pixel, integrate effortlessly, and scale to
							billions of requests.
						</p>
					</div>

					<div className="flex flex-wrap gap-4">
						<button
							onClick={onShowLogin}
							className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-indigo-900/50 transition hover:shadow-indigo-500/60"
						>
							Launch Console
							<svg
								className="h-5 w-5 transition group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</button>
						<button className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-slate-200 transition hover:border-white/30">
							Watch product film
						</button>
					</div>

					<div className="grid gap-6 sm:grid-cols-3">
						{landingStats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left"
							>
								<p className="text-3xl font-semibold text-white">
									{stat.value}
								</p>
								<p className="text-sm uppercase tracking-[0.2em] text-slate-400">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="relative">
					<div
						className="absolute -inset-4 bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-sky-500/20 blur-3xl"
						aria-hidden="true"
					></div>
					<div className="relative space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl">
						<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 shadow-xl">
							<div className="flex items-center justify-between text-sm">
								<p className="font-semibold text-white">Live sessions</p>
								<span className="text-emerald-300">+8.4%</span>
							</div>
							<div className="mt-4 h-32 w-full rounded-xl bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-cyan-400/40">
								<div className="h-full w-full rounded-xl bg-[linear-gradient(120deg,_rgba(255,255,255,0.2)_25%,_transparent_25%)] bg-[length:12px_12px]"></div>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
								<p className="text-sm text-slate-300">Avg. latency</p>
								<p className="mt-1 text-3xl font-semibold text-white">46 ms</p>
								<p className="text-xs text-emerald-300">-12% vs last week</p>
							</div>
							<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
								<p className="text-sm text-slate-300">Risk events</p>
								<p className="mt-1 text-3xl font-semibold text-white">12</p>
								<p className="text-xs text-amber-300">2 awaiting review</p>
							</div>
						</div>

						<div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 p-5 shadow-xl">
							<p className="text-sm uppercase tracking-[0.3em] text-slate-200">
								Next-gen stack
							</p>
							<p className="mt-2 text-lg text-white/90">
								Edge auth, adaptive MFA, real-time alerts
							</p>
							<div className="mt-4 flex flex-wrap gap-3 text-xs text-white/80">
								<span className="rounded-full border border-white/30 px-3 py-1">
									Passkeys
								</span>
								<span className="rounded-full border border-white/30 px-3 py-1">
									SSO
								</span>
								<span className="rounded-full border border-white/30 px-3 py-1">
									Audit trail
								</span>
								<span className="rounded-full border border-white/30 px-3 py-1">
									Flows API
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{featureHighlights.map((feature) => (
					<div
						key={feature.title}
						className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition hover:border-white/20"
					>
						<p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
							Feature
						</p>
						<h3 className="mt-3 text-xl font-semibold text-white">
							{feature.title}
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-slate-300">
							{feature.description}
						</p>
					</div>
				))}
			</div>

			<div className="flex flex-wrap gap-6 text-sm text-slate-400">
				{trustBadges.map((badge) => (
					<span
						key={badge}
						className="rounded-full border border-white/10 px-4 py-2"
					>
						{badge}
					</span>
				))}
			</div>
		</div>
	);
}

function DashboardContent({ onLogout }: { onLogout: () => void }) {
	const [tasks, setTasks] = useState([
		{ id: 1, label: "Enable passkeys for all regions", completed: true },
		{ id: 2, label: "Review anomaly alerts", completed: false },
		{ id: 3, label: "Rotate signing certificates", completed: false },
		{ id: 4, label: "Invite finance to audit workspace", completed: true },
	]);

	const toggleTask = (id: number) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div
			className="flex h-full flex-col gap-8"
			style={{ animation: "fade-in 0.6s ease-out" }}
		>
			<div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 shadow-2xl shadow-indigo-900/30">
				<div>
					<p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
						Control center
					</p>
					<h2 className="mt-2 text-3xl font-bold text-white">
						Great to see you again
					</h2>
					<p className="text-sm text-slate-300">
						Here&apos;s the live pulse from the last 24 hours.
					</p>
				</div>
				<div className="flex flex-wrap gap-3 text-sm">
					<button className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-semibold text-slate-200 transition hover:border-white/30">
						Generate report
					</button>
					<button
						onClick={onLogout}
						className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-5 py-2 font-semibold text-white shadow-lg shadow-indigo-900/40"
					>
						Log out
					</button>
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{dashboardStats.map((stat) => (
					<div
						key={stat.label}
						className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur"
					>
						<p className="text-sm text-slate-300">{stat.label}</p>
						<p className="mt-2 text-3xl font-semibold text-white">
							{stat.value}
						</p>
						<p
							className={`text-sm font-semibold ${
								stat.positive ? "text-emerald-300" : "text-rose-300"
							}`}
						>
							{stat.change} vs last month
						</p>
					</div>
				))}
			</div>

			<div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
				<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-white">
							Realtime activity
						</h3>
						<span className="text-xs uppercase tracking-[0.3em] text-slate-400">
							Live
						</span>
					</div>
					<div className="mt-5 space-y-4">
						{activityFeed.map((activity) => (
							<div
								key={activity.user}
								className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
							>
								<div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600"></div>
								<div className="flex-1">
									<p className="text-sm font-semibold text-white">
										{activity.user}
									</p>
									<p className="text-xs text-slate-400">{activity.action}</p>
								</div>
								<p className="text-xs text-slate-500">{activity.time}</p>
							</div>
						))}
					</div>
				</div>

				<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
					<h3 className="text-lg font-semibold text-white">Security posture</h3>
					<p className="text-sm text-slate-400">Week-on-week adoption</p>
					<div className="mt-6 space-y-5">
						{securityBreakdown.map((item) => (
							<div key={item.label}>
								<div className="mb-2 flex items-center justify-between text-sm text-slate-300">
									<span>{item.label}</span>
									<span className="font-semibold text-white">{item.value}</span>
								</div>
								<div className="h-2 w-full rounded-full bg-white/10">
									<div
										className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
										style={{ width: item.value }}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="grid gap-6 lg:grid-cols-2">
				<div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-white">Runbook</h3>
						<span className="text-xs text-slate-400">Auto-saved</span>
					</div>
					<ul className="mt-4 space-y-3">
						{tasks.map((task) => (
							<li key={task.id}>
								<label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-white/20">
									<input
										type="checkbox"
										checked={task.completed}
										onChange={() => toggleTask(task.id)}
										className="h-4 w-4 rounded border-white/30 bg-transparent text-indigo-400 focus:ring-indigo-400"
									/>
									<span
										className={
											task.completed ? "line-through text-slate-500" : ""
										}
									>
										{task.label}
									</span>
								</label>
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-indigo-900/60 p-6 shadow-2xl">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold text-white">
							Latency heatmap
						</h3>
						<span className="text-xs text-slate-400">Edge mesh</span>
					</div>
					<div className="mt-6 grid grid-cols-4 gap-3 text-center text-xs">
						{Array.from({ length: 12 }).map((_, index) => (
							<div key={index} className="space-y-2">
								<div className="h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
									<div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.35),_transparent)]"></div>
								</div>
								<p className="text-[0.65rem] text-slate-400">
									Region {index + 1}
								</p>
							</div>
						))}
					</div>
					<p className="mt-4 text-xs text-slate-400">
						Median response 46ms • 0.02% error budget used
					</p>
				</div>
			</div>
		</div>
	);
}

function LoginOverlay({
	show,
	onClose,
	onSuccess,
}: {
	show: boolean;
	onClose: () => void;
	onSuccess: () => void;
}) {
	return (
		<div
			className={`fixed inset-0 z-40 flex items-center justify-center px-4 py-10 transition duration-500 ${
				show ? "visible opacity-100" : "invisible opacity-0"
			}`}
			aria-hidden={!show}
		>
			<div
				className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl"
				onClick={onClose}
			></div>
			<div
				className={`relative z-10 w-full max-w-5xl transition-all duration-500 ${
					show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
				}`}
			>
				<LoginPage onClose={onClose} onSuccess={onSuccess} />
			</div>
		</div>
	);
}

export default App;
