import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
			<div className="w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="text-center">
					<div className="mb-8 flex justify-center gap-8">
						<a
							href="https://vite.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<img
								src={viteLogo}
								className="h-24 p-6 drop-shadow-lg transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
								alt="Vite logo"
							/>
						</a>
						<a
							href="https://react.dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<img
								src={reactLogo}
								className="h-24 p-6 drop-shadow-lg transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin"
								style={{ animationDuration: "20s" }}
								alt="React logo"
							/>
						</a>
					</div>

					<h1 className="text-5xl font-bold text-white mb-6">Vite + React</h1>

					<div className="bg-slate-800 border border-slate-700 rounded-lg p-8 mb-8 shadow-xl">
						<button
							onClick={() => setCount((count) => count + 1)}
							className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
						>
							count is {count}
						</button>
						<p className="mt-4 text-gray-300 text-base">
							Edit{" "}
							<code className="bg-slate-700 px-2 py-1 rounded text-cyan-300">
								src/App.tsx
							</code>{" "}
							and save to test HMR
						</p>
					</div>

					<p className="text-gray-400 text-sm">
						Click on the Vite and React logos to learn more
					</p>
				</div>
			</div>
		</div>
	);
}
export default App;
