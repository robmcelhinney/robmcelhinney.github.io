import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PythonSnakeEffect from "./PythonSnakeEffect"
import OceanEffect from "./OceanEffect"
import BashEffect from "./BashEffect"
import JavaEffect from "./JavaEffect"
import ReactEffect from "./ReactEffect"
import GitEffect from "./GitEffect"
import MySQLEffect from "./MySQLEffect"
import NodeEffect from "./NodeEffect"

const Skill = ({ skill }) => {
    const [hovered, setHovered] = useState(false)
    // For Python, track the snake effect origin; for Docker, track the ocean effect.
    const [showSnake, setShowSnake] = useState(null)
    const [showOcean, setShowOcean] = useState(false)
    const [showBash, setShowBash] = useState(false)
    const [showJava, setShowJava] = useState(false)
    const [showReact, setShowReact] = useState(false)
    const [showGit, setShowGit] = useState(false)
    const [showMySql, setShowMySql] = useState(false)
    const [showNode, setShowNode] = useState(false)

    const tooltipText = skill.description
        ? skill.description
        : `Proficient in ${skill.name}`

    const handleClick = (e) => {
        if (skill.name === "python") {
            const rect = e.currentTarget.getBoundingClientRect()
            const origin = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            }
            setShowSnake(origin)
            setTimeout(() => setShowSnake(null), 3000)
        }
        if (skill.name === "docker") {
            setShowOcean(true)
            setTimeout(() => setShowOcean(false), 3000)
        }
        if (skill.name === "bash") {
            setShowBash(true)
            setTimeout(() => setShowBash(false), 3000)
        }
        if (skill.name === "java") {
            setShowJava(true)
            setTimeout(() => setShowJava(false), 3000)
        }
        if (skill.name === "react") {
            setShowReact(true)
            setTimeout(() => setShowReact(false), 3000)
        }
        if (skill.name === "git") {
            setShowGit(true)
            setTimeout(() => setShowGit(false), 3000)
        }
        if (skill.name === "mysql") {
            setShowMySql(true)
            setTimeout(() => setShowMySql(false), 3000)
        }
        if (skill.name === "node-js") {
            setShowNode(true)
            setTimeout(() => setShowNode(false), 3000)
        }
    }

    return (
        <motion.span
            className="skills-icons-tips mx-2 relative cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.img
                src={require("../icons/" + skill.name + ".svg")}
                alt={skill.name}
                className="skills-icons"
                style={{ opacity: skill.percent }}
            />
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: -15 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs px-2 py-1 rounded pointer-events-none"
                    >
                        {tooltipText}
                    </motion.div>
                )}
            </AnimatePresence>
            {skill.name === "python" && showSnake && (
                <PythonSnakeEffect origin={showSnake} />
            )}
            {skill.name === "docker" && showOcean && <OceanEffect />}
            {skill.name === "bash" && showBash && <BashEffect />}
            {skill.name === "java" && showJava && <JavaEffect />}
            {skill.name === "react" && showReact && <ReactEffect />}
            {skill.name === "git" && showGit && <GitEffect />}
            {skill.name === "mysql" && showMySql && <MySQLEffect />}
            {skill.name === "node-js" && showNode && <NodeEffect />}
        </motion.span>
    )
}

export default Skill
