import React from 'react';
import githubIcon from '../icons/github.svg';
import linkedinIcon from '../icons/linkedin.svg';
import envelopeIcon from '../icons/envelope.svg';
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
							className={"githubIcon img-icons move-icons"}/>
					</a>
					<a href={"https://www.linkedin.com/in/robmcelhinney/"}>
						<img src={linkedinIcon} alt={"linkedin icon"}
							className={"linkedinIcon img-icons move-icons"}/>
					</a>
					<a href={"mailto:robmcelhinney@hotmail.com"}>
						<img src={envelopeIcon} alt={"envelope icon"}
							className={"envelopeIcon img-icons move-icons"}/>
					</a>
				</span>
			</h1>

			<div className={"standard-text"}>
				<div>
					Enthusiastic, diligent {"<"}software developer
					{">"} motivated to improve my skills wherever possible.
				</div>
				<div>
					Professional experience in Python, Java, & ReactJS.
				</div>
			</div>


			<h3 className={"subHeader"}>Pinned Public Projects</h3>
			<ProjectsList repos={repos} />


			<h3 className={"subHeader"}>Some Software Skills</h3>

			<SkillsList skills={listOfSkills} />

			<div className={"standard-text skills-text"}>
				<div>
				Experience using Python, Java, ReactJS, Javascript, PHP,
				C#, and MySQL.
				</div>
				<div>
				Aspiring for language agnosticism through a greater
				understanding of the fundamentals.
				</div>
			</div>


			<h3 className={"subHeader"}>More Me</h3>

			<div className={"standard-text text-link"}>
				<div>
				I'm Irish based. Always aiming to advance.
				Currently planning to work abroad for a year in China to
				improve my Mandarin.
				</div>
				<div>
				Frequently focusing on new technologies that pique my interest. E.g:
				This website should be accessible on your web3-enabled browser
				using the Ethereum blockchain: <a href="https://robmcelhinney.eth">
				robmcelhinney.eth</a> or through a public
				endpoint: <a href="https://robmcelhinney.eth.link">robmcelhinney.eth.link</a>
				</div>
			</div>
		</div>
	</div>
  );
}

export default App;
