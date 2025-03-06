import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const Skill = ({ skill }) => {
    const [hovered, setHovered] = React.useState(false)

    // Use description if available, else default text
    const tooltipText = skill.description
        ? skill.description
        : `Proficient in ${skill.name}`

    return (
        <motion.span
            className="skills-icons-tips mx-2 relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
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
        </motion.span>
    )
}

export default Skill
