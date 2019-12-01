import React from 'react';
import ProjectCard from "./ProjectCard";

const ProjectsList = ({ repos }) => {
	return (
		<div className={"d-flex repos_list"}>
			{repos.map(repo => (
				<ProjectCard key={repo} user={"robmcelhinney"} repo={repo} />
			))}
		</div>
	);
};

export default ProjectsList;