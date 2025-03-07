import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import CoffeeCup from "../assets/coffee.svg" // your coffee cup SVG

const JavaEffect = ({ onComplete }) => {
    const overlay = (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.3, ease: "easeInOut" },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3, delay: 2 } }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(135deg, #6f4e37, #8b5e3c)",
                    zIndex: 9999,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
                onAnimationComplete={onComplete}
            >
                {/* Coffee cup centered */}
                <motion.img
                    src={CoffeeCup}
                    alt="Coffee Cup"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.5,
                        transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    style={{
                        position: "absolute",
                        bottom: "30%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "150px",
                        zIndex: 10,
                    }}
                />
                {/* "Brewing Java..." text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.2,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        y: 20,
                        transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    style={{
                        position: "absolute",
                        bottom: "15%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                        fontFamily: "monospace",
                        fontSize: "1.5rem",
                        zIndex: 10,
                    }}
                >
                    Brewing Java...
                </motion.div>
                {/* Animated steam */}
                <motion.div
                    style={{
                        position: "absolute",
                        bottom: "35%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 11,
                        display: "flex",
                    }}
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: [0, 1, 0], y: [-10, -40, -70] }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            style={{
                                width: "2px",
                                height: "70px",
                                background: "rgba(255,255,255,0.8)",
                                margin: "0 5px",
                                borderRadius: "1px",
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default JavaEffect
