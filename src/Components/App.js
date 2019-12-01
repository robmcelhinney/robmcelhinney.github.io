import React from 'react';
import githubIcon from '../icons/github.svg';
import linkedinIcon from '../icons/linkedin.svg';
import SkillsList from "./SkillsList";
import ProjectsList from "./ProjectsList";


const listOfSkills = [{"name": "python", "percent":  1},
		{"name": "java", "percent": 1}, {"name": "react", "percent": 1},
		{"name": "javascript", "percent": 1}, {"name": "git",
		"percent": 1}, {"name": "mysql", "percent": 1},
		{"name": "php", "percent": 0.4}, {"name": "csharp", "percent": 0.3}];
const repos = ["OireachtasVote", "MiddleEarthSearch", "phone-block", "asoiaf-search"];

function App() {
  return (
	<div className="App">
		<div id={"maincontent"}>

			<h1 id={"mainHeader"}>
				<span id={"name"}>Robert McElhinney</span>
				<span id={"icons"}>
					<a href={"https://github.com/robmcelhinney"}>
						<img src={githubIcon} alt={"github icon"}
							className={"githubIcon img_icons"}/>
					</a>
					<a href={"https://www.linkedin.com/in/robmcelhinney/"}>
						<img src={linkedinIcon} alt={"linkedin icon"}
							className={"linkedinIcon img_icons"}/>
					</a>
				</span>
			</h1>

			<div className={"about_me"}>
				Enthusiastic, diligent software developer looking to improve my
				skills in any interesting area. <br />
				Professional experience in Python, Java, & ReactJS.
			</div>


			<h3 className={"subHeader"}>Some Projects</h3>
			<ProjectsList repos={repos} />

			<h3 className={"subHeader"}>Skills</h3>

			<SkillsList skills={listOfSkills} />

		</div>
	</div>
  );
}

export default App;
