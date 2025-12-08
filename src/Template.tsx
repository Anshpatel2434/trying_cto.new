import React, { useState } from "react";

const DesignSystem = () => {
	const [theme, setTheme] = useState("light");

	return (
		<div
			className={`min-h-screen ${
				theme === "dark" ? "bg-slate-900" : "bg-slate-50"
			} transition-colors duration-300`}
		>
			{/* Theme Toggle */}
			<div className="flex justify-end p-6">
				<button
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					className={`px-6 py-2 rounded-lg font-medium transition-all ${
						theme === "light"
							? "bg-slate-900 text-white hover:bg-slate-800"
							: "bg-white text-slate-900 hover:bg-slate-100"
					}`}
				>
					Toggle to {theme === "light" ? "Dark" : "Light"} Mode
				</button>
			</div>

			<div
				className={`max-w-7xl mx-auto px-6 pb-12 ${
					theme === "dark" ? "text-white" : "text-slate-900"
				}`}
			>
				{/* Header */}
				<div className="mb-12">
					<h1
						className={`text-4xl font-bold mb-3 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						VARC Learning Platform
					</h1>
					<p
						className={`text-xl ${
							theme === "dark" ? "text-slate-300" : "text-slate-600"
						}`}
					>
						Complete Design System & UI Components
					</p>
				</div>

				{/* Color Palette Section */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Color Palette
					</h2>

					{/* Primary Colors - Blue (Focus & Trust) */}
					<div className="mb-8">
						<h3
							className={`text-xl font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Primary - Blue (Focus & Concentration)
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							{[
								{
									name: "Blue 50",
									light: "bg-blue-50",
									dark: "bg-blue-950",
									hex: theme === "light" ? "#eff6ff" : "#172554",
								},
								{
									name: "Blue 100",
									light: "bg-blue-100",
									dark: "bg-blue-900",
									hex: theme === "light" ? "#dbeafe" : "#1e3a8a",
								},
								{
									name: "Blue 500",
									light: "bg-blue-500",
									dark: "bg-blue-500",
									hex: "#3b82f6",
								},
								{
									name: "Blue 600",
									light: "bg-blue-600",
									dark: "bg-blue-400",
									hex: theme === "light" ? "#2563eb" : "#60a5fa",
								},
								{
									name: "Blue 700",
									light: "bg-blue-700",
									dark: "bg-blue-300",
									hex: theme === "light" ? "#1d4ed8" : "#93c5fd",
								},
							].map((color) => (
								<div key={color.name} className="text-center">
									<div
										className={`h-24 rounded-lg ${
											theme === "light" ? color.light : color.dark
										} border border-slate-200 dark:border-slate-700`}
									></div>
									<p
										className={`mt-2 text-sm font-medium ${
											theme === "dark" ? "text-slate-300" : "text-slate-700"
										}`}
									>
										{color.name}
									</p>
									<p
										className={`text-xs ${
											theme === "dark" ? "text-slate-400" : "text-slate-500"
										}`}
									>
										{color.hex}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Secondary Colors - Green (Growth & Balance) */}
					<div className="mb-8">
						<h3
							className={`text-xl font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Secondary - Green (Growth & Progress)
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							{[
								{
									name: "Green 50",
									light: "bg-green-50",
									dark: "bg-green-950",
									hex: theme === "light" ? "#f0fdf4" : "#052e16",
								},
								{
									name: "Green 100",
									light: "bg-green-100",
									dark: "bg-green-900",
									hex: theme === "light" ? "#dcfce7" : "#14532d",
								},
								{
									name: "Green 500",
									light: "bg-green-500",
									dark: "bg-green-500",
									hex: "#22c55e",
								},
								{
									name: "Green 600",
									light: "bg-green-600",
									dark: "bg-green-400",
									hex: theme === "light" ? "#16a34a" : "#4ade80",
								},
								{
									name: "Green 700",
									light: "bg-green-700",
									dark: "bg-green-300",
									hex: theme === "light" ? "#15803d" : "#86efac",
								},
							].map((color) => (
								<div key={color.name} className="text-center">
									<div
										className={`h-24 rounded-lg ${
											theme === "light" ? color.light : color.dark
										} border border-slate-200 dark:border-slate-700`}
									></div>
									<p
										className={`mt-2 text-sm font-medium ${
											theme === "dark" ? "text-slate-300" : "text-slate-700"
										}`}
									>
										{color.name}
									</p>
									<p
										className={`text-xs ${
											theme === "dark" ? "text-slate-400" : "text-slate-500"
										}`}
									>
										{color.hex}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Accent Colors - Amber (Achievement & Energy) */}
					<div className="mb-8">
						<h3
							className={`text-xl font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Accent - Amber (Achievement & Celebration)
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
							{[
								{
									name: "Amber 50",
									light: "bg-amber-50",
									dark: "bg-amber-950",
									hex: theme === "light" ? "#fffbeb" : "#451a03",
								},
								{
									name: "Amber 100",
									light: "bg-amber-100",
									dark: "bg-amber-900",
									hex: theme === "light" ? "#fef3c7" : "#78350f",
								},
								{
									name: "Amber 400",
									light: "bg-amber-400",
									dark: "bg-amber-400",
									hex: "#fbbf24",
								},
								{
									name: "Amber 500",
									light: "bg-amber-500",
									dark: "bg-amber-500",
									hex: "#f59e0b",
								},
								{
									name: "Amber 600",
									light: "bg-amber-600",
									dark: "bg-amber-300",
									hex: theme === "light" ? "#d97706" : "#fcd34d",
								},
							].map((color) => (
								<div key={color.name} className="text-center">
									<div
										className={`h-24 rounded-lg ${
											theme === "light" ? color.light : color.dark
										} border border-slate-200 dark:border-slate-700`}
									></div>
									<p
										className={`mt-2 text-sm font-medium ${
											theme === "dark" ? "text-slate-300" : "text-slate-700"
										}`}
									>
										{color.name}
									</p>
									<p
										className={`text-xs ${
											theme === "dark" ? "text-slate-400" : "text-slate-500"
										}`}
									>
										{color.hex}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Neutral Colors */}
					<div className="mb-8">
						<h3
							className={`text-xl font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Neutral - Slate (Base & Structure)
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-6 gap-4">
							{[
								{
									name: "Slate 50",
									light: "bg-slate-50",
									dark: "bg-slate-950",
									hex: theme === "light" ? "#f8fafc" : "#020617",
								},
								{
									name: "Slate 100",
									light: "bg-slate-100",
									dark: "bg-slate-900",
									hex: theme === "light" ? "#f1f5f9" : "#0f172a",
								},
								{
									name: "Slate 200",
									light: "bg-slate-200",
									dark: "bg-slate-800",
									hex: theme === "light" ? "#e2e8f0" : "#1e293b",
								},
								{
									name: "Slate 600",
									light: "bg-slate-600",
									dark: "bg-slate-400",
									hex: theme === "light" ? "#475569" : "#94a3b8",
								},
								{
									name: "Slate 700",
									light: "bg-slate-700",
									dark: "bg-slate-300",
									hex: theme === "light" ? "#334155" : "#cbd5e1",
								},
								{
									name: "Slate 900",
									light: "bg-slate-900",
									dark: "bg-slate-100",
									hex: theme === "light" ? "#0f172a" : "#f1f5f9",
								},
							].map((color) => (
								<div key={color.name} className="text-center">
									<div
										className={`h-24 rounded-lg ${
											theme === "light" ? color.light : color.dark
										} border border-slate-200 dark:border-slate-700`}
									></div>
									<p
										className={`mt-2 text-sm font-medium ${
											theme === "dark" ? "text-slate-300" : "text-slate-700"
										}`}
									>
										{color.name}
									</p>
									<p
										className={`text-xs ${
											theme === "dark" ? "text-slate-400" : "text-slate-500"
										}`}
									>
										{color.hex}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Semantic Colors */}
					<div className="mb-8">
						<h3
							className={`text-xl font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Semantic Colors
						</h3>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{[
								{
									name: "Success",
									light: "bg-green-500",
									dark: "bg-green-400",
									text: "text-white",
								},
								{
									name: "Warning",
									light: "bg-amber-500",
									dark: "bg-amber-400",
									text: "text-white",
								},
								{
									name: "Error",
									light: "bg-red-500",
									dark: "bg-red-400",
									text: "text-white",
								},
								{
									name: "Info",
									light: "bg-blue-500",
									dark: "bg-blue-400",
									text: "text-white",
								},
							].map((color) => (
								<div key={color.name} className="text-center">
									<div
										className={`h-24 rounded-lg flex items-center justify-center ${
											theme === "light" ? color.light : color.dark
										} ${color.text}`}
									>
										<span className="font-semibold">{color.name}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Typography Section */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Typography
					</h2>

					<div
						className={`rounded-xl p-6 mb-6 ${
							theme === "dark" ? "bg-slate-800" : "bg-white"
						} border ${
							theme === "dark" ? "border-slate-700" : "border-slate-200"
						}`}
					>
						<h3
							className={`text-lg font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Font Stack: Inter (Primary)
						</h3>
						<p
							className={`mb-4 ${
								theme === "dark" ? "text-slate-300" : "text-slate-600"
							}`}
						>
							Inter is a highly readable sans-serif font optimized for screens,
							perfect for learning platforms
						</p>

						<div className="space-y-4">
							<div>
								<p
									className={`text-5xl font-bold mb-2 ${
										theme === "dark" ? "text-white" : "text-slate-900"
									}`}
								>
									Display Heading 48px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 48px, font-weight: 700, line-height: 1.2
								</p>
							</div>
							<div>
								<p
									className={`text-4xl font-bold mb-2 ${
										theme === "dark" ? "text-white" : "text-slate-900"
									}`}
								>
									Heading 1 - 36px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 36px, font-weight: 700, line-height: 1.25
								</p>
							</div>
							<div>
								<p
									className={`text-3xl font-bold mb-2 ${
										theme === "dark" ? "text-white" : "text-slate-900"
									}`}
								>
									Heading 2 - 30px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 30px, font-weight: 700, line-height: 1.3
								</p>
							</div>
							<div>
								<p
									className={`text-2xl font-semibold mb-2 ${
										theme === "dark" ? "text-white" : "text-slate-900"
									}`}
								>
									Heading 3 - 24px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 24px, font-weight: 600, line-height: 1.35
								</p>
							</div>
							<div>
								<p
									className={`text-xl font-semibold mb-2 ${
										theme === "dark" ? "text-slate-200" : "text-slate-800"
									}`}
								>
									Heading 4 - 20px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 20px, font-weight: 600, line-height: 1.4
								</p>
							</div>
							<div>
								<p
									className={`text-lg font-medium mb-2 ${
										theme === "dark" ? "text-slate-200" : "text-slate-700"
									}`}
								>
									Subheading - 18px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 18px, font-weight: 500, line-height: 1.5
								</p>
							</div>
							<div>
								<p
									className={`text-base mb-2 ${
										theme === "dark" ? "text-slate-300" : "text-slate-700"
									}`}
								>
									Body Text - 16px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 16px, font-weight: 400, line-height: 1.6
								</p>
							</div>
							<div>
								<p
									className={`text-sm mb-2 ${
										theme === "dark" ? "text-slate-400" : "text-slate-600"
									}`}
								>
									Small Text - 14px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 14px, font-weight: 400, line-height: 1.5
								</p>
							</div>
							<div>
								<p
									className={`text-xs mb-2 ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									Caption - 12px
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-500"
									}`}
								>
									font-size: 12px, font-weight: 400, line-height: 1.4
								</p>
							</div>
						</div>
					</div>

					{/* Reading Content Typography */}
					<div
						className={`rounded-xl p-6 ${
							theme === "dark" ? "bg-slate-800" : "bg-white"
						} border ${
							theme === "dark" ? "border-slate-700" : "border-slate-200"
						}`}
					>
						<h3
							className={`text-lg font-semibold mb-4 ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							Reading Content (RC Passages)
						</h3>
						<p
							className={`text-lg leading-relaxed ${
								theme === "dark" ? "text-slate-200" : "text-slate-800"
							}`}
						>
							For reading comprehension passages, we use 18px font size with 1.7
							line height for optimal readability. This ensures comfortable
							reading during extended practice sessions. The generous line
							spacing reduces eye strain and helps maintain focus during timed
							tests. Research shows that proper typography can improve reading
							speed by up to 20% while reducing cognitive load.
						</p>
						<p
							className={`text-sm mt-4 ${
								theme === "dark" ? "text-slate-400" : "text-slate-500"
							}`}
						>
							font-size: 18px, font-weight: 400, line-height: 1.7
						</p>
					</div>
				</section>

				{/* Button Components */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Button Components
					</h2>

					<div className="space-y-8">
						{/* Primary Buttons */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Primary Buttons
							</h3>
							<div className="flex flex-wrap gap-4">
								<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
									Start Practice
								</button>
								<button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm">
									Medium Button
								</button>
								<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm">
									Small Button
								</button>
								<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg opacity-50 cursor-not-allowed">
									Disabled
								</button>
							</div>
						</div>

						{/* Secondary Buttons */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Secondary Buttons
							</h3>
							<div className="flex flex-wrap gap-4">
								<button
									className={`px-6 py-3 border-2 font-medium rounded-lg transition-colors ${
										theme === "dark"
											? "border-slate-600 text-slate-200 hover:bg-slate-800"
											: "border-slate-300 text-slate-700 hover:bg-slate-50"
									}`}
								>
									View Progress
								</button>
								<button
									className={`px-5 py-2.5 border-2 font-medium rounded-lg transition-colors text-sm ${
										theme === "dark"
											? "border-slate-600 text-slate-200 hover:bg-slate-800"
											: "border-slate-300 text-slate-700 hover:bg-slate-50"
									}`}
								>
									Medium Button
								</button>
								<button
									className={`px-4 py-2 border-2 font-medium rounded-lg transition-colors text-sm ${
										theme === "dark"
											? "border-slate-600 text-slate-200 hover:bg-slate-800"
											: "border-slate-300 text-slate-700 hover:bg-slate-50"
									}`}
								>
									Small Button
								</button>
							</div>
						</div>

						{/* Success Buttons */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Success & Action Buttons
							</h3>
							<div className="flex flex-wrap gap-4">
								<button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
									Submit Answer
								</button>
								<button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors">
									Continue Streak
								</button>
								<button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
									End Session
								</button>
							</div>
						</div>

						{/* Ghost Buttons */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Ghost Buttons
							</h3>
							<div className="flex flex-wrap gap-4">
								<button
									className={`px-6 py-3 font-medium rounded-lg transition-colors ${
										theme === "dark"
											? "text-slate-200 hover:bg-slate-800"
											: "text-slate-700 hover:bg-slate-100"
									}`}
								>
									Skip
								</button>
								<button className="px-6 py-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 font-medium rounded-lg transition-colors">
									Learn More
								</button>
							</div>
						</div>

						{/* Icon Buttons */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Icon Buttons
							</h3>
							<div className="flex flex-wrap gap-4">
								<button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center">
									▶
								</button>
								<button
									className={`w-12 h-12 border-2 rounded-lg transition-colors flex items-center justify-center ${
										theme === "dark"
											? "border-slate-600 text-slate-200 hover:bg-slate-800"
											: "border-slate-300 text-slate-700 hover:bg-slate-50"
									}`}
								>
									☆
								</button>
								<button
									className={`w-10 h-10 rounded-lg transition-colors flex items-center justify-center ${
										theme === "dark"
											? "text-slate-200 hover:bg-slate-800"
											: "text-slate-700 hover:bg-slate-100"
									}`}
								>
									⋮
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Card Components */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Card Components
					</h2>

					<div className="grid md:grid-cols-2 gap-6">
						{/* Basic Card */}
						<div
							className={`rounded-xl p-6 ${
								theme === "dark" ? "bg-slate-800" : "bg-white"
							} border ${
								theme === "dark" ? "border-slate-700" : "border-slate-200"
							}`}
						>
							<h3
								className={`text-lg font-semibold mb-2 ${
									theme === "dark" ? "text-white" : "text-slate-900"
								}`}
							>
								Basic Card
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								Standard card with rounded corners, subtle border, and proper
								padding.
							</p>
						</div>

						{/* Elevated Card */}
						<div
							className={`rounded-xl p-6 shadow-lg ${
								theme === "dark" ? "bg-slate-800" : "bg-white"
							}`}
						>
							<h3
								className={`text-lg font-semibold mb-2 ${
									theme === "dark" ? "text-white" : "text-slate-900"
								}`}
							>
								Elevated Card
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								Card with shadow for emphasis on important content or
								interactive elements.
							</p>
						</div>

						{/* Colored Card - Blue */}
						<div className="rounded-xl p-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900">
							<h3
								className={`text-lg font-semibold mb-2 ${
									theme === "dark" ? "text-blue-200" : "text-blue-900"
								}`}
							>
								Info Card
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-blue-300" : "text-blue-700"
								}`}
							>
								Used for informational content, tips, or focus areas.
							</p>
						</div>

						{/* Colored Card - Green */}
						<div className="rounded-xl p-6 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900">
							<h3
								className={`text-lg font-semibold mb-2 ${
									theme === "dark" ? "text-green-200" : "text-green-900"
								}`}
							>
								Success Card
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-green-300" : "text-green-700"
								}`}
							>
								Displays achievements, completed tasks, or positive feedback.
							</p>
						</div>

						{/* Colored Card - Amber */}
						<div className="rounded-xl p-6 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900">
							<h3
								className={`text-lg font-semibold mb-2 ${
									theme === "dark" ? "text-amber-200" : "text-amber-900"
								}`}
							>
								Achievement Card
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-amber-300" : "text-amber-700"
								}`}
							>
								Highlights streaks, badges, and milestone celebrations.
							</p>
						</div>

						{/* Interactive Card */}
						<div
							className={`rounded-xl p-6 cursor-pointer transition-all ${
								theme === "dark"
									? "bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-blue-500"
									: "bg-white hover:shadow-lg border border-slate-200 hover:border-blue-400"
							}`}
						>
							<h3
								className={`text-lg font-semibold mb-2 ${
									theme === "dark" ? "text-white" : "text-slate-900"
								}`}
							>
								Interactive Card
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								Hover me! Used for clickable practice sessions or navigation.
							</p>
						</div>
					</div>
				</section>

				{/* Input Components */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Input Components
					</h2>

					<div className="space-y-6 max-w-2xl">
						{/* Text Input */}
						<div>
							<label
								className={`block text-sm font-medium mb-2 ${
									theme === "dark" ? "text-slate-200" : "text-slate-700"
								}`}
							>
								Text Input
							</label>
							<input
								type="text"
								placeholder="Enter your answer..."
								className={`w-full px-4 py-3 rounded-lg border transition-colors ${
									theme === "dark"
										? "bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
										: "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
								}`}
							/>
						</div>

						{/* Textarea */}
						<div>
							<label
								className={`block text-sm font-medium mb-2 ${
									theme === "dark" ? "text-slate-200" : "text-slate-700"
								}`}
							>
								Textarea
							</label>
							<textarea
								rows={4}
								placeholder="Write your explanation..."
								className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
									theme === "dark"
										? "bg-slate-800 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
										: "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
								}`}
							/>
						</div>

						{/* Select */}
						<div>
							<label
								className={`block text-sm font-medium mb-2 ${
									theme === "dark" ? "text-slate-200" : "text-slate-700"
								}`}
							>
								Select Dropdown
							</label>
							<select
								className={`w-full px-4 py-3 rounded-lg border transition-colors ${
									theme === "dark"
										? "bg-slate-800 border-slate-600 text-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
										: "bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
								}`}
							>
								<option>Easy</option>
								<option>Medium</option>
								<option>Hard</option>
							</select>
						</div>

						{/* Radio Buttons */}
						<div>
							<label
								className={`block text-sm font-medium mb-3 ${
									theme === "dark" ? "text-slate-200" : "text-slate-700"
								}`}
							>
								Multiple Choice (Radio)
							</label>
							<div className="space-y-2">
								{["Option A", "Option B", "Option C", "Option D"].map((opt) => (
									<label
										key={opt}
										className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
											theme === "dark"
												? "hover:bg-slate-800"
												: "hover:bg-slate-50"
										}`}
									>
										<input
											type="radio"
											name="answer"
											className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500/20"
										/>
										<span
											className={`ml-3 ${
												theme === "dark" ? "text-slate-200" : "text-slate-700"
											}`}
										>
											{opt}
										</span>
									</label>
								))}
							</div>
						</div>

						{/* Checkbox */}
						<div>
							<label
								className={`flex items-center cursor-pointer ${
									theme === "dark" ? "text-slate-200" : "text-slate-700"
								}`}
							>
								<input
									type="checkbox"
									className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500/20"
								/>
								<span className="ml-3">Remember my preferences</span>
							</label>
						</div>
					</div>
				</section>

				{/* Badge & Tag Components */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Badges & Tags
					</h2>

					<div className="space-y-6">
						{/* Status Badges */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Status Badges
							</h3>
							<div className="flex flex-wrap gap-3">
								<span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
									Active
								</span>
								<span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
									In Progress
								</span>
								<span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-medium rounded-full">
									Pending
								</span>
								<span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-full">
									Completed
								</span>
							</div>
						</div>

						{/* Difficulty Tags */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Difficulty Tags
							</h3>
							<div className="flex flex-wrap gap-3">
								<span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded">
									Easy
								</span>
								<span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded">
									Medium
								</span>
								<span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded">
									Hard
								</span>
							</div>
						</div>

						{/* Achievement Badges */}
						<div>
							<h3
								className={`text-xl font-semibold mb-4 ${
									theme === "dark" ? "text-slate-200" : "text-slate-800"
								}`}
							>
								Achievement Badges
							</h3>
							<div className="flex flex-wrap gap-3">
								<span className="px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-sm font-semibold rounded-lg shadow">
									🔥 7 Day Streak
								</span>
								<span className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-semibold rounded-lg shadow">
									⭐ 100 Questions
								</span>
								<span className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-semibold rounded-lg shadow">
									🏆 Top 10%
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* Notification Components */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Notifications & Alerts
					</h2>

					<div className="space-y-4 max-w-2xl">
						{/* Success Alert */}
						<div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-lg">
							<div className="flex">
								<span className="text-green-600 dark:text-green-400 mr-3">
									✓
								</span>
								<div>
									<h4 className="font-semibold text-green-900 dark:text-green-200 mb-1">
										Success!
									</h4>
									<p className="text-sm text-green-700 dark:text-green-300">
										Your answer has been submitted successfully.
									</p>
								</div>
							</div>
						</div>

						{/* Info Alert */}
						<div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 rounded-lg">
							<div className="flex">
								<span className="text-blue-600 dark:text-blue-400 mr-3">ℹ</span>
								<div>
									<h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-1">
										Tip
									</h4>
									<p className="text-sm text-blue-700 dark:text-blue-300">
										Take breaks every 30 minutes for better retention.
									</p>
								</div>
							</div>
						</div>

						{/* Warning Alert */}
						<div className="p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900 rounded-lg">
							<div className="flex">
								<span className="text-amber-600 dark:text-amber-400 mr-3">
									⚠
								</span>
								<div>
									<h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-1">
										Warning
									</h4>
									<p className="text-sm text-amber-700 dark:text-amber-300">
										You have only 5 minutes remaining.
									</p>
								</div>
							</div>
						</div>

						{/* Error Alert */}
						<div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900 rounded-lg">
							<div className="flex">
								<span className="text-red-600 dark:text-red-400 mr-3">✕</span>
								<div>
									<h4 className="font-semibold text-red-900 dark:text-red-200 mb-1">
										Error
									</h4>
									<p className="text-sm text-red-700 dark:text-red-300">
										Connection lost. Please check your internet.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Progress Indicators */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Progress Indicators
					</h2>

					<div className="space-y-8 max-w-2xl">
						{/* Progress Bar */}
						<div>
							<div className="flex justify-between mb-2">
								<span
									className={`text-sm font-medium ${
										theme === "dark" ? "text-slate-200" : "text-slate-700"
									}`}
								>
									Course Progress
								</span>
								<span
									className={`text-sm font-medium ${
										theme === "dark" ? "text-slate-200" : "text-slate-700"
									}`}
								>
									65%
								</span>
							</div>
							<div
								className={`h-3 rounded-full overflow-hidden ${
									theme === "dark" ? "bg-slate-700" : "bg-slate-200"
								}`}
							>
								<div
									className="h-full bg-blue-600 rounded-full"
									style={{ width: "65%" }}
								></div>
							</div>
						</div>

						{/* Multi-Step Progress */}
						<div>
							<div className="flex items-center justify-between">
								{[1, 2, 3, 4].map((step, i) => (
									<React.Fragment key={step}>
										<div className="flex flex-col items-center">
											<div
												className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
													step <= 2
														? "bg-blue-600 text-white"
														: theme === "dark"
														? "bg-slate-700 text-slate-400"
														: "bg-slate-200 text-slate-500"
												}`}
											>
												{step <= 2 ? "✓" : step}
											</div>
											<span
												className={`mt-2 text-xs ${
													theme === "dark" ? "text-slate-400" : "text-slate-500"
												}`}
											>
												Step {step}
											</span>
										</div>
										{i < 3 && (
											<div
												className={`flex-1 h-1 mx-2 ${
													step < 2
														? "bg-blue-600"
														: theme === "dark"
														? "bg-slate-700"
														: "bg-slate-200"
												}`}
											></div>
										)}
									</React.Fragment>
								))}
							</div>
						</div>

						{/* Circular Progress */}
						<div className="flex items-center gap-6">
							<div className="relative w-24 h-24">
								<svg className="transform -rotate-90 w-24 h-24">
									<circle
										cx="48"
										cy="48"
										r="40"
										stroke="currentColor"
										strokeWidth="8"
										fill="transparent"
										className={
											theme === "dark" ? "text-slate-700" : "text-slate-200"
										}
									/>
									<circle
										cx="48"
										cy="48"
										r="40"
										stroke="currentColor"
										strokeWidth="8"
										fill="transparent"
										strokeDasharray="251.2"
										strokeDashoffset="62.8"
										className="text-blue-600"
										strokeLinecap="round"
									/>
								</svg>
								<div className="absolute inset-0 flex items-center justify-center">
									<span
										className={`text-lg font-bold ${
											theme === "dark" ? "text-white" : "text-slate-900"
										}`}
									>
										75%
									</span>
								</div>
							</div>
							<div>
								<p
									className={`font-semibold ${
										theme === "dark" ? "text-white" : "text-slate-900"
									}`}
								>
									Vocabulary Mastery
								</p>
								<p
									className={`text-sm ${
										theme === "dark" ? "text-slate-400" : "text-slate-600"
									}`}
								>
									450 / 600 words
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Spacing System */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Spacing System
					</h2>

					<div
						className={`rounded-xl p-6 ${
							theme === "dark" ? "bg-slate-800" : "bg-white"
						} border ${
							theme === "dark" ? "border-slate-700" : "border-slate-200"
						}`}
					>
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">xs (4px)</div>
								<div className="h-4 bg-blue-600" style={{ width: "4px" }}></div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">sm (8px)</div>
								<div className="h-4 bg-blue-600" style={{ width: "8px" }}></div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">md (12px)</div>
								<div
									className="h-4 bg-blue-600"
									style={{ width: "12px" }}
								></div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">base (16px)</div>
								<div
									className="h-4 bg-blue-600"
									style={{ width: "16px" }}
								></div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">lg (24px)</div>
								<div
									className="h-4 bg-blue-600"
									style={{ width: "24px" }}
								></div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">xl (32px)</div>
								<div
									className="h-4 bg-blue-600"
									style={{ width: "32px" }}
								></div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-32 text-sm font-medium">2xl (48px)</div>
								<div
									className="h-4 bg-blue-600"
									style={{ width: "48px" }}
								></div>
							</div>
						</div>
					</div>
				</section>

				{/* Border Radius */}
				<section className="mb-16">
					<h2
						className={`text-3xl font-bold mb-6 ${
							theme === "dark" ? "text-white" : "text-slate-900"
						}`}
					>
						Border Radius
					</h2>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						<div className="text-center">
							<div
								className={`h-24 rounded ${
									theme === "dark" ? "bg-slate-700" : "bg-slate-200"
								} mb-2`}
							></div>
							<p
								className={`text-sm ${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								rounded (4px)
							</p>
						</div>
						<div className="text-center">
							<div
								className={`h-24 rounded-md ${
									theme === "dark" ? "bg-slate-700" : "bg-slate-200"
								} mb-2`}
							></div>
							<p
								className={`text-sm ${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								rounded-md (6px)
							</p>
						</div>
						<div className="text-center">
							<div
								className={`h-24 rounded-lg ${
									theme === "dark" ? "bg-slate-700" : "bg-slate-200"
								} mb-2`}
							></div>
							<p
								className={`text-sm ${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								rounded-lg (8px)
							</p>
						</div>
						<div className="text-center">
							<div
								className={`h-24 rounded-xl ${
									theme === "dark" ? "bg-slate-700" : "bg-slate-200"
								} mb-2`}
							></div>
							<p
								className={`text-sm ${
									theme === "dark" ? "text-slate-300" : "text-slate-600"
								}`}
							>
								rounded-xl (12px)
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default DesignSystem;
