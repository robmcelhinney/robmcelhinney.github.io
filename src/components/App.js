import React, { useEffect, useState } from "react"
import Header from "./Header"
import ProjectsList from "./ProjectsList"

const projects = [
    {
        name: "lobbyieng",
        url: "https://github.com/robmcelhinney/lobbyieng",
        site: "https://www.lobbyieng.com/",
        info: {
            en: "Irish Government lobbying explorer",
            zh: "爱尔兰政府游说数据浏览工具",
        },
    },
    {
        name: "OireachtasVote",
        url: "https://github.com/robmcelhinney/OireachtasVote",
        site: "https://robmcelhinney.com/OireachtasVote/",
        info: {
            en: "Irish parliament vote explorer",
            zh: "爱尔兰议会投票数据浏览工具",
        },
    },
    {
        name: "dental-deserts",
        url: "https://github.com/robmcelhinney/dental-deserts",
        site: "https://robmcelhinney.com/dental-deserts/",
        info: {
            en: "Dental deserts in England",
            zh: "英格兰牙科资源短缺地区分析",
        },
    },
    {
        name: "blink-morse",
        url: "https://github.com/robmcelhinney/blink-morse",
        info: {
            en: "Webcam blink to type",
            zh: "通过摄像头眨眼进行文字输入",
        },
    },
    {
        name: "screen-commentator",
        url: "https://github.com/robmcelhinney/screen-commentator",
        info: {
            en: "Local LLM narrates your screen.",
            zh: "本地运行的 LLM 实时解说屏幕内容。",
        },
    },
    {
        name: "spanforge",
        url: "https://github.com/robmcelhinney/spanforge",
        info: {
            en: "Generates realistic traces to test o11y pipelines.",
            zh: "生成逼真的链路追踪，用于测试可观测性流水线。",
        },
    },
]

const content = {
    en: {
        role: "Software / Systems Engineer",
        intro: "Software and systems engineer focused on reliable platforms, practical automation, and clear developer workflows.",
        projectsTitle: "Projects",
        siteLabel: "site",
        profileLabel: "Switch profile image",
        themeLabel: "Toggle dark mode",
    },
    zh: {
        role: "软件与系统工程师",
        intro: "专注于可靠平台、实用自动化与清晰开发流程的软件与系统工程师。",
        projectsTitle: "项目",
        siteLabel: "网站",
        profileLabel: "切换头像",
        themeLabel: "切换深色模式",
    },
}

function App() {
    const [theme, setTheme] = useState("dark")
    const [language, setLanguage] = useState("en")
    const [cursorGlow, setCursorGlow] = useState({
        x: 0,
        y: 0,
        active: false,
    })

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme")
        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme)
            return
        }

        if (!window.matchMedia) {
            setTheme("dark")
            return
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        if (mediaQuery.media === "not all") {
            setTheme("dark")
            return
        }

        setTheme(mediaQuery.matches ? "dark" : "light")
    }, [])

    useEffect(() => {
        const savedLanguage = window.localStorage.getItem("language")
        if (savedLanguage === "en" || savedLanguage === "zh") {
            setLanguage(savedLanguage)
        }
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        window.localStorage.setItem("theme", theme)
    }, [theme])

    useEffect(() => {
        document.documentElement.lang = language === "zh" ? "zh-CN" : "en"
        window.localStorage.setItem("language", language)
    }, [language])

    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
    }

    const handleMouseMove = (event) => {
        if (theme !== "dark") {
            return
        }
        setCursorGlow({
            x: event.clientX,
            y: event.clientY,
            active: true,
        })
    }

    const handleMouseLeave = () => {
        setCursorGlow((prevGlow) => ({
            ...prevGlow,
            active: false,
        }))
    }

    return (
        <div
            className="site-shell"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                "--spot-x": `${cursorGlow.x}px`,
                "--spot-y": `${cursorGlow.y}px`,
                "--spot-opacity": theme === "dark" && cursorGlow.active ? 1 : 0,
            }}
        >
            <main className="site-main">
                <Header
                    theme={theme}
                    onThemeToggle={handleThemeToggle}
                    language={language}
                    onLanguageChange={setLanguage}
                    roleText={content[language].role}
                    profileLabel={content[language].profileLabel}
                    themeLabel={content[language].themeLabel}
                />
                <p className="intro">{content[language].intro}</p>
                <section className="section">
                    <h2>{content[language].projectsTitle}</h2>
                    <ProjectsList
                        projects={projects}
                        language={language}
                        siteLabel={content[language].siteLabel}
                    />
                </section>
            </main>
        </div>
    )
}

export default App
