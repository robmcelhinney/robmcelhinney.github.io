import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
}

const nodeVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
}

const GitEffect = ({ onComplete }) => {
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
                    background: "#111",
                    zIndex: 10000,
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onAnimationComplete={onComplete}
            >
                <svg
                    width="1440"
                    height="320"
                    viewBox="0 0 1440 320"
                    style={{ display: "block" }}
                >
                    {/* Main branch horizontal line */}
                    <motion.path
                        d="M100,160 L1340,160"
                        stroke="#f34f29"
                        strokeWidth="4"
                        fill="none"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    {/* Commit nodes on main branch */}
                    {[200, 400, 600, 800, 1000, 1200].map((cx, i) => (
                        <motion.circle
                            key={i}
                            cx={cx}
                            cy="160"
                            r="8"
                            fill="#f34f29"
                            variants={nodeVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        />
                    ))}
                    {/* Branch A: upward branch from commit at 600 merging at 800 */}
                    <motion.path
                        d="M600,160 Q700,80 800,160"
                        stroke="#f34f29"
                        strokeWidth="4"
                        fill="none"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.8,
                        }}
                    />
                    <motion.circle
                        cx="700"
                        cy="80"
                        r="6"
                        fill="#f34f29"
                        variants={nodeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3, delay: 1.0 }}
                    />
                    {/* Branch B: downward branch from commit at 1000 merging at 1200 */}
                    <motion.path
                        d="M1000,160 Q1100,240 1200,160"
                        stroke="#f34f29"
                        strokeWidth="4"
                        fill="none"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.9,
                        }}
                    />
                    <motion.circle
                        cx="1100"
                        cy="240"
                        r="6"
                        fill="#f34f29"
                        variants={nodeVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3, delay: 1.1 }}
                    />
                </svg>
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default GitEffect
