import React, { useState } from "react"
import { motion } from "framer-motion"
import Header from "./Header"
import SkillsList from "./SkillsList"
import ProjectsList from "./ProjectsList"

const listOfSkills = [
    { name: "python", percent: 1 },
    { name: "bash", percent: 1 },
    { name: "java", percent: 1 },
    { name: "react", percent: 1 },
    { name: "docker", percent: 1 },
    { name: "git", percent: 1 },
    { name: "mysql", percent: 1 },
    { name: "node-js", percent: 1, description: "NodeJS personal projects" },
]
const repos = [
    "blink-morse",
    "OireachtasVote",
    "MiddleEarthSearch",
    "ens-avatar",
    "phone-block",
    "cast-media",
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function App() {
    const [cursor, setCursor] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        percentX: 50,
        percentY: 50,
    })

    // Control custom cursor size.
    const [cursorSize, setCursorSize] = useState(30)

    const handleMouseMove = (e) => {
        const x = e.clientX
        const y = e.clientY
        const percentX = (x / window.innerWidth) * 100
        const percentY = (y / window.innerHeight) * 100
        setCursor({ x, y, percentX, percentY })

        // If hovering over an image or link, shrink the cursor; otherwise, default size.
        if (e.target.closest("a") || e.target.closest("img")) {
            setCursorSize(10)
        } else {
            setCursorSize(30)
        }
    }

    // Background: almost white with a pronounced white glow around the cursor.
    const bgStyle = {
        background: `radial-gradient(circle at ${cursor.percentX}% ${cursor.percentY}%, white 0%, rgba(243,244,246,0.6) 40%, rgba(243,244,246,0.8) 70%)`,
        transition: "background 0.3s ease",
    }

    // Use a fast tween transition for default cursor movement; use spring when shrinking.
    const cursorTransition =
        cursorSize === 30
            ? { type: "tween", duration: 0.05 }
            : { type: "spring", stiffness: 300 }

    return (
        <div
            className="relative min-h-screen bg-gray-200 overflow-hidden"
            onMouseMove={handleMouseMove}
            style={{ cursor: "none" }}
        >
            {/* Background Layer */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                style={bgStyle}
            />

            <motion.div
                className="relative z-10 p-6 max-w-5xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Header with fun profile pic animation */}
                <Header />

                <motion.div
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                >
                    Full-stack{" "}
                    <code className="text-yellow-500 sm:text-green-600 md:text-indigo-600 lg:text-red-600 xl:text-black">
                        {"<software developer>"}
                    </code>{" "}
                    experienced in Python and Docker. Leveraging expertise in
                    observability and platform reliability to boost system
                    clarity, slash TTD, and rapidly troubleshoot.
                </motion.div>

                <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-semibold mb-4 border-b pb-2"
                >
                    Pinned Public Projects
                </motion.h3>
                <ProjectsList repos={repos} />

                <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-semibold mt-8 mb-4 border-b pb-2"
                >
                    Some Software Skills
                </motion.h3>
                <SkillsList skills={listOfSkills} />

                <motion.div
                    variants={itemVariants}
                    className="text-xl text-gray-700 mb-8 mt-6 leading-relaxed"
                >
                    Experience using Python, Java, ReactJS, NodeJS, Docker.
                    Aiming to improve my software skills in all areas.
                </motion.div>

                <motion.h3
                    variants={itemVariants}
                    className="text-2xl font-semibold mb-4 border-b pb-2"
                >
                    More Me
                </motion.h3>
                <motion.div
                    variants={itemVariants}
                    className="text-xl text-gray-700 leading-relaxed"
                >
                    <p className="mb-2">
                        Frequently focusing on new technologies that pique my
                        interest.
                    </p>
                    <p>
                        Check out my site via IPFS with an Ethereum-enabled
                        domain:
                        <a
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                            href="https://robmcelhinney.eth"
                        >
                            robmcelhinney.eth
                        </a>{" "}
                        or at:
                        <a
                            className="underline text-blue-600 hover:text-blue-800 ml-1"
                            href="https://robmcelhinney.eth.link"
                        >
                            robmcelhinney.eth.limo
                        </a>
                    </p>
                </motion.div>
            </motion.div>

            {/* Custom Cursor with conditional transition */}
            <motion.div
                className="fixed z-20 pointer-events-none"
                animate={{
                    width: cursorSize,
                    height: cursorSize,
                    left: cursor.x - cursorSize / 2,
                    top: cursor.y - cursorSize / 2,
                }}
                transition={cursorTransition}
                style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
                }}
            />
        </div>
    )
}

export default App
