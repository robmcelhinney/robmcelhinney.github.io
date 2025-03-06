import React from "react"
import Skill from "./Skill"
import { motion } from "framer-motion"

const SkillsList = ({ skills }) => {
    return (
        <motion.div
            id="skills-list"
            className="flex mb-10 md:mb-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.1 },
                },
            }}
        >
            {skills.map((skill) => (
                <Skill key={skill.name} skill={skill} />
            ))}
        </motion.div>
    )
}

export default SkillsList
