import React, { useState, useEffect } from "react"
import axios from "axios"
import dateFormat from "dateformat"

const ProjectCard = ({ user, repo }) => {
    const [githubResponse, setGithubResponse] = useState(null)

    const axios_options = {
        headers: { Accept: "application/vnd.github.mercy-preview+json" },
    }

    useEffect(() => {
        const fetchData = async () => {
            const cacheKey = `${user}-${repo}`
            const cachedData = sessionStorage.getItem(cacheKey)
            if (cachedData) {
                setGithubResponse(JSON.parse(cachedData))
            } else {
                try {
                    const result = await axios.get(
                        `https://api.github.com/repos/${user}/${repo}`,
                        axios_options
                    )
                    const data = result.data
                    setGithubResponse(data)
                    sessionStorage.setItem(cacheKey, JSON.stringify(data))
                } catch (error) {
                    console.error("Error fetching GitHub data:", error)
                    // Fallback data so we don't remain in a loading state indefinitely.
                    setGithubResponse({
                        name: `${repo}`,
                        description: "Unable to load repo details",
                        language: "",
                        topics: [],
                        created_at: new Date().toISOString(),
                        html_url: `https://github.com/${user}/${repo}`,
                    })
                }
            }
        }
        fetchData()
    }, [user, repo])

    if (!githubResponse) return <div>Loading...</div>

    return (
        <div className="project-card flex">
            <div className="repo-item">
                <span className="text-link name">
                    <a href={githubResponse.html_url}>{githubResponse.name}</a>
                    {githubResponse.homepage && (
                        <>
                            {" "}
                            | <a href={githubResponse.homepage}>Website</a>
                        </>
                    )}
                </span>
                <div className="description">{githubResponse.description}</div>
            </div>
            <div className="repo-extra repo-item mb-0">
                <div className="language text-grey">
                    Language: {githubResponse.language}
                </div>
                <div className="language text-grey">
                    Topics: {githubResponse.topics.join(", ")}
                </div>
                <div className="updated text-grey">
                    Created:{" "}
                    {dateFormat(githubResponse.created_at, "mmmm dS, yyyy")}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
