import React from 'react'
import Skill from "./Skill"

const SkillsList = ({ skills }) => {
	return (
		<span id={"skills-list"}  className={"flex mb-10 md:mb-4"}>
			{skills.map(skill => (
				<Skill key={skill.name} skill={skill} />
			))}
		</span>
	)
}

export default SkillsList
