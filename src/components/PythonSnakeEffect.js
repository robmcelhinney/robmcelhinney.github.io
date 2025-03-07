import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

const PythonSnakeEffect = ({ origin, onComplete }) => {
    // Create a container div for the portal
    const containerRef = useRef(document.createElement("div"))

    useEffect(() => {
        const container = containerRef.current
        container.style.position = "fixed"
        container.style.top = 0
        container.style.left = 0
        container.style.width = "100vw"
        container.style.height = "100vh"
        container.style.pointerEvents = "none"
        container.style.zIndex = "10000"
        document.body.appendChild(container)

        // Remove after 3 seconds
        const timeout = setTimeout(() => {
            onComplete && onComplete()
            if (container.parentNode)
                container.parentNode.removeChild(container)
        }, 3000)

        return () => {
            clearTimeout(timeout)
            if (container.parentNode)
                container.parentNode.removeChild(container)
        }
    }, [onComplete])

    // Use the provided origin, defaulting to viewport center
    const startX = origin ? origin.x : window.innerWidth / 2
    const startY = origin ? origin.y : window.innerHeight / 2

    // Define an S-shaped snake path that is centered around (0,0)
    // We offset the coordinates so that the midpoint is at (0,0)
    // For example: from (-150,0) to (150,0) with curves
    const snakePath = "M-150,0 C-100,-50, -50,50, 0,0 C50,-50, 100,50, 150,0"

    // Estimated total path length (you may need to adjust this based on your path)
    const pathLength = 400

    return ReactDOM.createPortal(
        <AnimatePresence>
            <motion.svg
                initial={{ opacity: 1, x: startX, y: startY, rotate: 0 }}
                animate={{
                    // After drawing, move the snake to the right and add slight vertical oscillation.
                    x: [startX, startX + 200],
                    y: [startY, startY + 20],
                    rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                    default: { duration: 3, ease: "easeInOut" },
                }}
                style={{ overflow: "visible", position: "absolute" }}
                width="400"
                height="100"
            >
                <motion.path
                    d={snakePath}
                    fill="transparent"
                    stroke="#306998"
                    strokeWidth="4"
                    initial={{
                        strokeDasharray: pathLength,
                        strokeDashoffset: pathLength,
                    }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />
            </motion.svg>
        </AnimatePresence>,
        containerRef.current
    )
}

export default PythonSnakeEffect
