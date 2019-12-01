import React from 'react';

const Skill = ({ skill }) => {
	return (
			<img src={require("../icons/" + skill["name"] + ".svg")}
				 alt={skill["name"]}
				 className={"skills_icons"} style={{opacity: skill['percent']}}
			/>
	);
};

export default Skill;