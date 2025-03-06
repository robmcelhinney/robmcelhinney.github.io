import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import githubIcon from "../icons/github.svg"
import linkedinIcon from "../icons/linkedin.svg"
import envelopeIcon from "../icons/envelope.svg"

const Header = () => {
    const controls = useAnimation()
    const images = [
        require("../assets/me0.png"),
        require("../assets/me1.png"),
        require("../assets/me2.png"),
    ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleProfileClick = async () => {
        // Animate to 180° with fade out
        await controls.start({
            rotate: 180,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
        })
        // Switch to the next image (cycle through array)
        setCurrentImageIndex((currentImageIndex + 1) % images.length)
        // Animate from 180° to 360° with fade in
        await controls.start({
            rotate: 360,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
        })
        // Reset rotation to 0 for next click
        controls.set({ rotate: 0 })
    }

    return (
        <motion.header
            id="mainHeader"
            className="md:flex items-center justify-between bg-white/70 backdrop-blur-md rounded-lg px-6 py-4 shadow-md mb-6"
        >
            <div className="flex items-center">
                {/* Profile picture cycles images on click */}
                <motion.img
                    onClick={handleProfileClick}
                    animate={controls}
                    whileHover={{ opacity: 0.9 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-16 w-16 md:h-24 md:w-24 rounded-full border-2 border-gray-300 mr-4 cursor-pointer"
                    src={images[currentImageIndex]}
                    alt="Robert profile"
                />
                <div className="text-left">
                    <h1 id="name" className="py-2 my-0 md:py-0 text-xl">
                        Robert McElhinney
                    </h1>
                    <h2 className="md:text-indigo-600 lg:text-red-600 xl:text-black text-lg">
                        Software/Systems Engineer
                    </h2>
                </div>
            </div>
            <nav className="flex space-x-4 mt-4 md:mt-0">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/robmcelhinney"
                >
                    <img
                        src={githubIcon}
                        alt="github icon"
                        className="h-8 md:h-10 mt-2"
                    />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/robmcelhinney/"
                >
                    <img
                        src={linkedinIcon}
                        alt="linkedin icon"
                        className="h-8 md:h-10 mt-2"
                    />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:site@robmcelhinney.com"
                >
                    <img
                        src={envelopeIcon}
                        alt="envelope icon"
                        className="h-8 md:h-10 mt-2 mr-2"
                    />
                </motion.a>
            </nav>
        </motion.header>
    )
}

export default Header
