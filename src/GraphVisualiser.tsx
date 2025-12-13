import React, { useState, useEffect, useRef } from "react";
import { Database, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

const GraphVisualizer = () => {
	const canvasRef = useRef(null);
	const [selectedNode, setSelectedNode] = useState(null);
	const [hoveredNode, setHoveredNode] = useState(null);
	const [zoom, setZoom] = useState(1);
	const [pan, setPan] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

	const nodes = [
		// Core user node - center
		{
			id: "user_profiles",
			x: 400,
			y: 300,
			group: "users",
			color: "#3B82F6",
			label: "user_profiles",
		},

		// Content cluster - top
		{
			id: "passages",
			x: 400,
			y: 100,
			group: "content",
			color: "#A855F7",
			label: "passages",
		},
		{
			id: "questions",
			x: 550,
			y: 100,
			group: "content",
			color: "#A855F7",
			label: "questions",
		},

		// Vocabulary cluster - top right
		{
			id: "vocab_entries",
			x: 650,
			y: 200,
			group: "vocabulary",
			color: "#10B981",
			label: "vocab_entries",
		},
		{
			id: "user_vocab_progress",
			x: 650,
			y: 300,
			group: "vocabulary",
			color: "#10B981",
			label: "user_vocab_progress",
		},

		// Practice cluster - right
		{
			id: "practice_sessions",
			x: 600,
			y: 400,
			group: "practice",
			color: "#F97316",
			label: "practice_sessions",
		},
		{
			id: "question_attempts",
			x: 550,
			y: 500,
			group: "practice",
			color: "#F97316",
			label: "question_attempts",
		},

		// Analytics cluster - bottom right
		{
			id: "user_analytics",
			x: 400,
			y: 500,
			group: "analytics",
			color: "#06B6D4",
			label: "user_analytics",
		},
		{
			id: "user_proficiency_signals",
			x: 300,
			y: 550,
			group: "analytics",
			color: "#06B6D4",
			label: "user_proficiency_signals",
		},

		// Social cluster - left
		{
			id: "study_groups",
			x: 150,
			y: 250,
			group: "social",
			color: "#EC4899",
			label: "study_groups",
		},
		{
			id: "study_group_members",
			x: 100,
			y: 350,
			group: "social",
			color: "#EC4899",
			label: "study_group_members",
		},
		{
			id: "group_chat_messages",
			x: 50,
			y: 450,
			group: "social",
			color: "#EC4899",
			label: "group_chat_messages",
		},
		{
			id: "leaderboard_entries",
			x: 200,
			y: 400,
			group: "social",
			color: "#EC4899",
			label: "leaderboard_entries",
		},
		{
			id: "peer_challenges",
			x: 250,
			y: 200,
			group: "social",
			color: "#EC4899",
			label: "peer_challenges",
		},
		{
			id: "social_activity_feed",
			x: 200,
			y: 100,
			group: "social",
			color: "#EC4899",
			label: "social_activity_feed",
		},

		// Quality cluster - bottom left
		{
			id: "content_appeals",
			x: 150,
			y: 550,
			group: "quality",
			color: "#EF4444",
			label: "content_appeals",
		},
		{
			id: "content_review_queue",
			x: 50,
			y: 600,
			group: "quality",
			color: "#EF4444",
			label: "content_review_queue",
		},

		// System cluster - top left
		{
			id: "embeddings",
			x: 250,
			y: 50,
			group: "system",
			color: "#EAB308",
			label: "embeddings",
		},
		{
			id: "generation_cache",
			x: 100,
			y: 100,
			group: "system",
			color: "#EAB308",
			label: "generation_cache",
		},
		{
			id: "daily_challenges",
			x: 550,
			y: 50,
			group: "system",
			color: "#EAB308",
			label: "daily_challenges",
		},
		{
			id: "feature_flags",
			x: 700,
			y: 100,
			group: "system",
			color: "#EAB308",
			label: "feature_flags",
		},
		{
			id: "system_metrics",
			x: 50,
			y: 50,
			group: "system",
			color: "#EAB308",
			label: "system_metrics",
		},
	];

	const edges = [
		// User connections
		{ from: "user_profiles", to: "practice_sessions" },
		{ from: "user_profiles", to: "question_attempts" },
		{ from: "user_profiles", to: "user_vocab_progress" },
		{ from: "user_profiles", to: "user_analytics" },
		{ from: "user_profiles", to: "user_proficiency_signals" },
		{ from: "user_profiles", to: "leaderboard_entries" },
		{ from: "user_profiles", to: "study_group_members" },
		{ from: "user_profiles", to: "peer_challenges" },
		{ from: "user_profiles", to: "social_activity_feed" },
		{ from: "user_profiles", to: "content_appeals" },

		// Content connections
		{ from: "passages", to: "questions" },
		{ from: "passages", to: "practice_sessions" },
		{ from: "passages", to: "question_attempts" },
		{ from: "passages", to: "embeddings" },
		{ from: "questions", to: "question_attempts" },
		{ from: "questions", to: "embeddings" },

		// Vocabulary connections
		{ from: "vocab_entries", to: "user_vocab_progress" },
		{ from: "vocab_entries", to: "embeddings" },

		// Practice connections
		{ from: "practice_sessions", to: "question_attempts" },
		{ from: "practice_sessions", to: "study_groups" },
		{ from: "practice_sessions", to: "peer_challenges" },

		// Social connections
		{ from: "study_groups", to: "study_group_members" },
		{ from: "study_groups", to: "group_chat_messages" },
		{ from: "study_groups", to: "practice_sessions" },

		// Appeals
		{ from: "content_appeals", to: "question_attempts" },
	];

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		const width = canvas.width;
		const height = canvas.height;

		// Clear canvas
		ctx.clearRect(0, 0, width, height);
		ctx.save();

		// Apply transformations
		ctx.translate(pan.x, pan.y);
		ctx.scale(zoom, zoom);

		// Draw edges first
		edges.forEach((edge) => {
			const fromNode = nodes.find((n) => n.id === edge.from);
			const toNode = nodes.find((n) => n.id === edge.to);

			if (fromNode && toNode) {
				const isHighlighted =
					selectedNode === edge.from ||
					selectedNode === edge.to ||
					hoveredNode === edge.from ||
					hoveredNode === edge.to;

				ctx.beginPath();
				ctx.moveTo(fromNode.x, fromNode.y);
				ctx.lineTo(toNode.x, toNode.y);
				ctx.strokeStyle = isHighlighted ? "#3B82F6" : "#E5E7EB";
				ctx.lineWidth = isHighlighted ? 2 : 1;
				ctx.stroke();

				// Draw arrow
				if (isHighlighted) {
					const angle = Math.atan2(
						toNode.y - fromNode.y,
						toNode.x - fromNode.x
					);
					const arrowLength = 10;
					const arrowWidth = 6;

					const endX = toNode.x - Math.cos(angle) * 30;
					const endY = toNode.y - Math.sin(angle) * 30;

					ctx.beginPath();
					ctx.moveTo(endX, endY);
					ctx.lineTo(
						endX - arrowLength * Math.cos(angle - Math.PI / 6),
						endY - arrowLength * Math.sin(angle - Math.PI / 6)
					);
					ctx.lineTo(
						endX - arrowLength * Math.cos(angle + Math.PI / 6),
						endY - arrowLength * Math.sin(angle + Math.PI / 6)
					);
					ctx.closePath();
					ctx.fillStyle = "#3B82F6";
					ctx.fill();
				}
			}
		});

		// Draw nodes
		nodes.forEach((node) => {
			const isSelected = selectedNode === node.id;
			const isHovered = hoveredNode === node.id;
			const isConnected =
				selectedNode &&
				edges.some(
					(e) =>
						(e.from === selectedNode && e.to === node.id) ||
						(e.to === selectedNode && e.from === node.id)
				);

			// Node circle
			ctx.beginPath();
			ctx.arc(
				node.x,
				node.y,
				isSelected ? 35 : isHovered ? 32 : 28,
				0,
				2 * Math.PI
			);
			ctx.fillStyle = isSelected
				? node.color
				: isConnected
				? "#FCD34D"
				: node.color;
			ctx.fill();

			// Border
			ctx.strokeStyle = isSelected
				? "#1F2937"
				: isConnected
				? "#F59E0B"
				: "#FFFFFF";
			ctx.lineWidth = isSelected ? 4 : isConnected ? 3 : 2;
			ctx.stroke();

			// Icon (database symbol)
			ctx.fillStyle = "#FFFFFF";
			ctx.font = "bold 16px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText("DB", node.x, node.y);

			// Label
			ctx.fillStyle = "#1F2937";
			ctx.font = isSelected ? "bold 12px Arial" : "11px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "top";

			const labelY = node.y + 40;
			const maxWidth = 100;
			const words = node.label.split("_");
			let line = "";
			let lineY = labelY;

			words.forEach((word, i) => {
				const testLine = line + (line ? "_" : "") + word;
				const metrics = ctx.measureText(testLine);

				if (metrics.width > maxWidth && line) {
					ctx.fillText(line, node.x, lineY);
					line = word;
					lineY += 14;
				} else {
					line = testLine;
				}
			});
			ctx.fillText(line, node.x, lineY);
		});

		ctx.restore();
	}, [selectedNode, hoveredNode, zoom, pan]);

	const handleCanvasClick = (e) => {
		const canvas = canvasRef.current;
		const rect = canvas.getBoundingClientRect();
		const x = (e.clientX - rect.left - pan.x) / zoom;
		const y = (e.clientY - rect.top - pan.y) / zoom;

		const clickedNode = nodes.find((node) => {
			const distance = Math.sqrt(
				Math.pow(node.x - x, 2) + Math.pow(node.y - y, 2)
			);
			return distance <= 30;
		});

		setSelectedNode(
			clickedNode
				? selectedNode === clickedNode.id
					? null
					: clickedNode.id
				: null
		);
	};

	const handleCanvasMouseMove = (e) => {
		if (isDragging) {
			const dx = e.clientX - dragStart.x;
			const dy = e.clientY - dragStart.y;
			setPan({ x: pan.x + dx, y: pan.y + dy });
			setDragStart({ x: e.clientX, y: e.clientY });
			return;
		}

		const canvas = canvasRef.current;
		const rect = canvas.getBoundingClientRect();
		const x = (e.clientX - rect.left - pan.x) / zoom;
		const y = (e.clientY - rect.top - pan.y) / zoom;

		const hoveredNode = nodes.find((node) => {
			const distance = Math.sqrt(
				Math.pow(node.x - x, 2) + Math.pow(node.y - y, 2)
			);
			return distance <= 30;
		});

		setHoveredNode(hoveredNode ? hoveredNode.id : null);
		canvas.style.cursor = hoveredNode
			? "pointer"
			: isDragging
			? "grabbing"
			: "grab";
	};

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setDragStart({ x: e.clientX, y: e.clientY });
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const getConnections = (nodeId) => {
		if (!nodeId) return { incoming: [], outgoing: [] };

		const incoming = edges.filter((e) => e.to === nodeId).map((e) => e.from);
		const outgoing = edges.filter((e) => e.from === nodeId).map((e) => e.to);

		return { incoming, outgoing };
	};

	const connections = getConnections(selectedNode);
	const selectedNodeData = nodes.find((n) => n.id === selectedNode);

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="bg-white rounded-lg shadow-xl p-6 mb-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
								<Database className="w-8 h-8 text-blue-600" />
								Preptodo Database Graph
							</h1>
							<p className="text-gray-600 mt-1">
								Interactive node graph • Click nodes to explore connections •
								Drag to pan
							</p>
						</div>
						<div className="flex gap-2">
							<button
								onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
								className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
							>
								<ZoomIn className="w-5 h-5" />
							</button>
							<button
								onClick={() => setZoom(Math.max(zoom - 0.1, 0.5))}
								className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
							>
								<ZoomOut className="w-5 h-5" />
							</button>
							<button
								onClick={() => {
									setZoom(1);
									setPan({ x: 0, y: 0 });
									setSelectedNode(null);
								}}
								className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
							>
								<Maximize2 className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
					{/* Canvas */}
					<div className="lg:col-span-3">
						<div className="bg-white rounded-lg shadow-xl p-4">
							<canvas
								ref={canvasRef}
								width={800}
								height={700}
								onClick={handleCanvasClick}
								onMouseMove={handleCanvasMouseMove}
								onMouseDown={handleMouseDown}
								onMouseUp={handleMouseUp}
								onMouseLeave={handleMouseUp}
								className="w-full h-auto border-2 border-gray-200 rounded cursor-grab active:cursor-grabbing"
							/>
						</div>
					</div>

					{/* Info Panel */}
					<div className="space-y-4">
						{/* Legend */}
						<div className="bg-white rounded-lg shadow-xl p-4">
							<h3 className="font-bold text-gray-900 mb-3">Legend</h3>
							<div className="space-y-2 text-sm">
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-800"></div>
									<span>Selected</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 bg-yellow-300 rounded-full border-2 border-yellow-600"></div>
									<span>Connected</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
									<span>Content</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
									<span>Vocabulary</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
									<span>Practice</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white"></div>
									<span>Social</span>
								</div>
							</div>
						</div>

						{/* Selected Node Info */}
						{selectedNode && selectedNodeData && (
							<div className="bg-white rounded-lg shadow-xl p-4">
								<h3 className="font-bold text-gray-900 mb-2">Selected Node</h3>
								<div
									className="mb-3 p-3 rounded-lg"
									style={{ backgroundColor: selectedNodeData.color + "20" }}
								>
									<div className="font-semibold text-gray-900">
										{selectedNode}
									</div>
									<div className="text-xs text-gray-600 mt-1">
										{selectedNodeData.group}
									</div>
								</div>

								<div className="space-y-3 text-sm">
									{connections.outgoing.length > 0 && (
										<div>
											<div className="font-semibold text-gray-700 mb-1">
												Outgoing ({connections.outgoing.length})
											</div>
											<div className="space-y-1">
												{connections.outgoing.map((conn) => (
													<div
														key={conn}
														onClick={() => setSelectedNode(conn)}
														className="text-xs bg-blue-50 p-2 rounded cursor-pointer hover:bg-blue-100"
													>
														→ {conn}
													</div>
												))}
											</div>
										</div>
									)}

									{connections.incoming.length > 0 && (
										<div>
											<div className="font-semibold text-gray-700 mb-1">
												Incoming ({connections.incoming.length})
											</div>
											<div className="space-y-1">
												{connections.incoming.map((conn) => (
													<div
														key={conn}
														onClick={() => setSelectedNode(conn)}
														className="text-xs bg-green-50 p-2 rounded cursor-pointer hover:bg-green-100"
													>
														← {conn}
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						)}

						{/* Stats */}
						<div className="bg-white rounded-lg shadow-xl p-4">
							<h3 className="font-bold text-gray-900 mb-3">Statistics</h3>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-600">Total Nodes:</span>
									<span className="font-semibold">{nodes.length}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Total Edges:</span>
									<span className="font-semibold">{edges.length}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600">Zoom:</span>
									<span className="font-semibold">
										{(zoom * 100).toFixed(0)}%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GraphVisualizer;
