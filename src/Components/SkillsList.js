import React from 'react';
import Skill from "./Skill";

const SkillsList = ({ skills }) => {
	return (
		<span id={"skills_list"}>
			{skills.map(skill => (
				<Skill key={skill.name} skill={skill} />
			))}
		</span>
	);
};

export default SkillsList;