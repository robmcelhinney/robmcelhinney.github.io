import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

// Generate an array of blocks representing data
const generateBlocks = (count) =>
    Array.from({ length: count }).map((_, i) => ({
        id: i,
        angle: Math.random() * 2 * Math.PI, // random direction
        distance: 100 + Math.random() * 150, // random travel distance
    }))

const blocks = generateBlocks(50)

const MySQLEffect = ({ onComplete }) => {
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
                    background: "linear-gradient(135deg, #4479A1, #5A9BD4)",
                    zIndex: 10000,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
                onAnimationComplete={onComplete}
            >
                {/* Database Cylinder in the Center */}
                <motion.svg
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewBox="0 0 200 200"
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "150px",
                        height: "150px",
                    }}
                >
                    {/* Top ellipse */}
                    <ellipse
                        cx="100"
                        cy="40"
                        rx="80"
                        ry="20"
                        fill="#fff"
                        opacity="0.8"
                    />
                    {/* Body */}
                    <rect
                        x="20"
                        y="40"
                        width="160"
                        height="100"
                        fill="#fff"
                        opacity="0.8"
                    />
                    {/* Bottom ellipse */}
                    <ellipse
                        cx="100"
                        cy="140"
                        rx="80"
                        ry="20"
                        fill="#fff"
                        opacity="0.8"
                    />
                </motion.svg>
                {/* Blocks Container: Centered relative to the viewport */}
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 0,
                        height: 0,
                    }}
                >
                    {blocks.map((block, i) => (
                        <motion.div
                            key={block.id}
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{
                                x: Math.cos(block.angle) * block.distance,
                                y: Math.sin(block.angle) * block.distance,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6 + i * 0.02,
                                ease: "easeOut",
                            }}
                            style={{
                                position: "absolute",
                                width: "8px",
                                height: "8px",
                                backgroundColor: "#fff",
                                borderRadius: "2px",
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default MySQLEffect
