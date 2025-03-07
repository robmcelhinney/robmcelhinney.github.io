import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import GalaxyTexture from "../assets/stardust.png"

const generateStars = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100, // percentage of viewport height
        left: Math.random() * 100, // percentage of viewport width
        size: 1 + Math.random() * 2, // size between 1 and 3 px
        delay: Math.random() * 2,
    }))
}

const stars = generateStars(50)

const ReactEffect = ({ onComplete }) => {
    const overlay = (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "fixed",
                    inset: 0, // covers full viewport
                    backgroundColor: "#000",
                    zIndex: 9999,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}
                onAnimationComplete={onComplete}
            >
                {/* Rotating starfield background covering entire viewport */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "fixed",
                        top: "0%",
                        left: "0%",
                        width: "200vw",
                        height: "200vh",
                        transform: "translate(0%, 0%)",
                        backgroundImage: `url(${GalaxyTexture})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        filter: "brightness(0.3)",
                        transformOrigin: "center center",
                    }}
                />
                {/* Twinkling stars */}
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                            delay: star.delay,
                        }}
                        style={{
                            position: "fixed",
                            top: `${star.top}vh`,
                            left: `${star.left}vw`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            pointerEvents: "none",
                            zIndex: 1000,
                        }}
                    />
                ))}
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default ReactEffect
