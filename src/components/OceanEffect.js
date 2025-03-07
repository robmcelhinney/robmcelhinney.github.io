import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import Whale from "../assets/whale.svg" // ensure this path is correct

const OceanEffect = ({ onComplete }) => {
    const overlay = (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    // Fade in over 0.3s, hold for ~2s, then fade out over 0.3s.
                    opacity: { duration: 0.3, ease: "easeInOut", delay: 0.3 },
                }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, #1E90FF, #00BFFF)",
                    zIndex: 9999,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
                onAnimationComplete={onComplete}
            >
                {/* Whale centered in the viewport */}
                <motion.img
                    src={Whale}
                    alt="Whale"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.3,
                    }}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "200px",
                        opacity: 0.9,
                        zIndex: 10,
                    }}
                />
                {/* Full-width animated wave at the top */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "200%", // 200% of viewport width
                        height: "200px",
                        overflow: "hidden",
                    }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 3,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    <svg
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,117.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                        ></path>
                    </svg>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default OceanEffect
