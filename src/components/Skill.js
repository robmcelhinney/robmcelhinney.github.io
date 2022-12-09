import React from 'react'

const Skill = ({ skill }) => {

	return (
			<span className={"skills-icons-tips"}>
				<img src={require("../icons/" + skill["name"] + ".svg")}
						alt={skill["name"]} className={"skills-icons"}
						style={{opacity: skill['percent']}}
				/>
			</span>
	)
}

export default Skill
