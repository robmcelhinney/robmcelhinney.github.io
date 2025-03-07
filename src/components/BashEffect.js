import React from "react"
import ReactDOM from "react-dom"
import { motion, AnimatePresence } from "framer-motion"

const BashEffect = ({ onComplete }) => {
    const currentDate = new Date().toString()
    const lines = [
        "robmcelhinney@MacBook-Pro:~$ echo 'Welcome to Robert's Terminal!'",
        "Welcome to Robert's Terminal!",
        "robmcelhinney@MacBook-Pro:~$ ls -la",
        "total 64",
        "drwxr-xr-x   6 robmcelhinney  staff   192 Mar  6 12:00 .",
        "drwxr-xr-x  18 robmcelhinney  staff   576 Mar  6 11:00 ..",
        "robmcelhinney@MacBook-Pro:~$ date",
        currentDate,
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const lineVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    }

    const overlay = (
        <AnimatePresence>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.1 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#000",
                    color: "#0f0",
                    fontFamily: "monospace",
                    fontSize: "1.2rem",
                    padding: "20px",
                    overflow: "auto",
                    zIndex: 10000,
                    pointerEvents: "none",
                }}
                onAnimationComplete={onComplete}
            >
                {/* Terminal Title Bar */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "30px",
                        backgroundColor: "#333",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "10px",
                        fontSize: "1rem",
                        zIndex: 10001,
                    }}
                >
                    Robert's Terminal
                </motion.div>
                {/* Terminal Content */}
                <div style={{ marginTop: "40px" }}>
                    {lines.map((line, index) => (
                        <motion.p
                            key={index}
                            variants={lineVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{ margin: 0, whiteSpace: "pre-wrap" }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    )

    return ReactDOM.createPortal(overlay, document.body)
}

export default BashEffect
