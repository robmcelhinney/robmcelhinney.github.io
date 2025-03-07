import React, { useState, useEffect } from "react"
import axios from "axios"
import dateFormat from "dateformat"

const ProjectCard = (props) => {
    const [githubResponse, setGithubResponse] = useState({
        name: "getting info from github",
        description: "...",
        language: "english/中文",
        topics: ["lorem", "ipsum"],
    })

    const axios_options = {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
    }

    useEffect(() => {
        axios
            .get(
                `https://api.github.com/repos/${props.user}/${props.repo}`,
                axios_options
            )
            .then((result) => {
                const data = result.data
                setGithubResponse(data)
            })

        return () => {}
    })

    return (
        <div className={"project-card flex"}>
            <div className={"repo-item"}>
                <>
                    <span className={"text-link name"}>
                        <a href={githubResponse.html_url}>
                            {githubResponse.name}
                        </a>
                        {githubResponse.homepage && (
                            <>
                                {" "}
                                | <a href={githubResponse.homepage}>Website</a>
                            </>
                        )}
                    </span>
                    <div className={"description"}>
                        {githubResponse.description}
                    </div>
                </>
            </div>
            <div className={"repo-extra repo-item mb-0"}>
                <div className={"language text-grey"}>
                    Language: {githubResponse.language}
                </div>
                <div className={"language text-grey"}>
                    Topics: {githubResponse.topics.join(", ")}
                    {/*{(githubResponse.topics).map(topic => (*/}
                    {/*topic + "."*/}
                    {/*))}*/}
                </div>
                <div className={"updated text-grey"}>
                    Created:{" "}
                    {dateFormat(githubResponse.created_at, "mmmm dS, yyyy")}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
