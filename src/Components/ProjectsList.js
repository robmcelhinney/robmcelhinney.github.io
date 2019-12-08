import React from 'react';
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ repos }) => {
	return (
		<div className={"d-flex repos-list"}>
			{repos.map(repo => (
				<ProjectCard key={repo} user={"robmcelhinney"} repo={repo} />
			))}
		</div>
	);
};

export default ProjectsList;