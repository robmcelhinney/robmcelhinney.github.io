import React from "react"

const ProjectsList = ({ projects, language, siteLabel }) => {
    return (
        <ul className="project-list">
            {projects.map((project) => (
                <li key={project.name}>
                    <a href={project.url}>{project.name}</a>
                    {project.info?.[language] && (
                        <span className="project-info">
                            {" "}
                            - {project.info[language]}
                        </span>
                    )}
                    {(project.site || project.website) && (
                        <>
                            <span className="project-dot"> / </span>
                            <a
                                className="project-site"
                                href={project.site || project.website}
                            >
                                {siteLabel}
                            </a>
                        </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default ProjectsList
