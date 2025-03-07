import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

// Generate a randomized network of nodes and connections.
const generateNetwork = (nodeCount = 20) => {
    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            id: i,
            // x and y as percentages of the viewport.
            x: Math.random() * 100,
            y: Math.random() * 100,
        })
    }
    const connections = []
    // Each node connects to 2 random nodes.
    nodes.forEach((node) => {
        for (let i = 0; i < 2; i++) {
            const targetIndex = Math.floor(Math.random() * nodeCount)
            if (targetIndex !== node.id) {
                const a = Math.min(node.id, targetIndex)
                const b = Math.max(node.id, targetIndex)
                if (!connections.some((conn) => conn.a === a && conn.b === b)) {
                    connections.push({ a, b })
                }
            }
        }
    })
    return { nodes, connections }
}

const { nodes, connections } = generateNetwork(20)

const NodeEffect = ({ onComplete }) => {
    const overlay = (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "#111",
                    zIndex: 10000,
                    pointerEvents: "none",
                }}
                onAnimationComplete={onComplete}
            >
                <svg width="100%" height="100%">
                    {/* Draw connecting lines */}
                    {connections.map((conn, i) => {
                        const start = nodes[conn.a]
                        const end = nodes[conn.b]
                        return (
                            <motion.line
                                key={i}
                                x1={`${start.x}vw`}
                                y1={`${start.y}vh`}
                                x2={`${end.x}vw`}
                                y2={`${end.y}vh`}
                                stroke="#68A063"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                }}
                            />
                        )
                    })}
                    {/* Draw nodes as circles */}
                    {nodes.map((node, i) => (
                        <motion.circle
                            key={node.id}
                            cx={`${node.x}vw`}
                            cy={`${node.y}vh`}
                            r="5"
                            fill="#68A063"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                        />
                    ))}
                    {/* Data pulses along connections */}
                    {connections.map((conn, i) => {
                        const start = nodes[conn.a]
                        const end = nodes[conn.b]
                        return (
                            <motion.circle
                                key={`pulse-${i}`}
                                cx={`${start.x}vw`}
                                cy={`${start.y}vh`}
                                r="4"
                                fill="#ffffff"
                                animate={{ cx: `${end.x}vw`, cy: `${end.y}vh` }}
                                transition={{
                                    duration: 1,
                                    ease: "linear",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: Math.random(),
                                }}
                            />
                        )
                    })}
                </svg>
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default NodeEffect
