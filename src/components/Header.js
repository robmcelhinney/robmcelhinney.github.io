import React, { useState } from "react"
import profileImage0 from "../assets/me0.png"
import profileImage1 from "../assets/me1.png"
import profileImage2 from "../assets/me2.png"
import githubIcon from "../icons/github.svg"
import linkedinIcon from "../icons/linkedin.svg"
import envelopeIcon from "../icons/envelope.svg"

const Header = ({
    theme,
    onThemeToggle,
    language,
    onLanguageChange,
    roleText,
    profileLabel,
    themeLabel,
}) => {
    const profileImages = [profileImage0, profileImage1, profileImage2]
    const [profileIndex, setProfileIndex] = useState(0)

    const handleProfileClick = () => {
        setProfileIndex((prevIndex) => (prevIndex + 1) % profileImages.length)
    }

    const content = {
        en: {
            name: "Robert McElhinney",
        },
        zh: {
            name: "罗伟德",
        },
    }

    return (
        <header className="site-header">
            <div className="site-title-wrap">
                <h1
                    className={
                        language === "zh"
                            ? "site-name site-name-zh"
                            : "site-name"
                    }
                >
                    {content[language].name}
                </h1>
                <p className="site-role">{roleText}</p>
                <nav className="site-nav" aria-label="Profiles">
                    <a
                        href="https://github.com/robmcelhinney"
                        aria-label="GitHub"
                    >
                        <img src={githubIcon} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robmcelhinney/"
                        aria-label="LinkedIn"
                    >
                        <img src={linkedinIcon} alt="" />
                    </a>
                    <a href="mailto:hello@robmcelhinney.com" aria-label="Email">
                        <img src={envelopeIcon} alt="" />
                    </a>
                </nav>
            </div>
            <div className="site-header-right">
                <button
                    className="site-avatar-button"
                    onClick={handleProfileClick}
                    type="button"
                    aria-label={profileLabel}
                >
                    <img
                        className="site-avatar"
                        src={profileImages[profileIndex]}
                        alt="Robert McElhinney profile"
                    />
                </button>
                <button
                    className="theme-switch"
                    onClick={onThemeToggle}
                    type="button"
                    aria-label={themeLabel}
                    aria-pressed={theme === "dark"}
                >
                    <span className="theme-switch-icon" aria-hidden="true">
                        {theme === "dark" ? (
                            <svg viewBox="0 0 24 24" focusable="false">
                                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" focusable="false">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
                            </svg>
                        )}
                    </span>
                    <span className="theme-switch-track">
                        <span
                            className={
                                theme === "dark"
                                    ? "theme-switch-thumb is-dark"
                                    : "theme-switch-thumb"
                            }
                        />
                    </span>
                </button>
                <div className="language-switch" aria-label="Language switcher">
                    <button
                        className={
                            language === "en"
                                ? "lang-btn is-active"
                                : "lang-btn"
                        }
                        type="button"
                        onClick={() => onLanguageChange("en")}
                    >
                        EN
                    </button>
                    <span>/</span>
                    <button
                        className={
                            language === "zh"
                                ? "lang-btn is-active"
                                : "lang-btn"
                        }
                        type="button"
                        onClick={() => onLanguageChange("zh")}
                    >
                        中文
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
