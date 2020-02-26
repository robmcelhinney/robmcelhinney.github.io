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
	<div className={"App bg-white rounded-lg p-6"}>
		<div id={"mainContent"}>
			<header id={"mainHeader"} className={"md:flex bg-white rounded-lg"}>
				{/*<div className={"md:flex-shrink-0"}>*/}
				<img className="h-12 w-12 md:h-20 md:w-20 rounded-full mx-auto md:mx-0 md:mr-6"
						src={require('../assets/me.jpg')}
						alt={"Robert profile"}/>
				{/*</div>*/}
				<div className={"text-center md:text-left"}>
					<h1 id={"name"} className={"text-xl"}>Robert McElhinney</h1>
					<h2 className={"text-yellow-900"}>Software Developer</h2>
					{/*<p className={"mt--k2 text-gray-600"}>Contact Me</p>*/}
				</div>
				<nav className={"flex contactLinks"}>
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
				</nav>
			</header>

			<div className={"text-lg md:text-3xl text-gray-700 mb-10"}>
				Enthusiastic, diligent
				<span className={"text-yellow-500 sm:text-green-600 " +
				"md:text-indigo-600 lg:text-red-600 xl:text-black"}
				> {"<"}software developer{">"} </span>
				motivated to improve my skills wherever possible.
				Professional experience in Python, Java, & ReactJS.
			</div>

			<h3 className={"subHeader"}>Pinned Public Projects</h3>
			<ProjectsList repos={repos} />

			<h3 className={"subHeader"}>Some Software Skills</h3>
			<SkillsList skills={listOfSkills} />

			<div className={"text-xl text-gray-700 skills-text mb-10"}>
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

			<div className={"text-xl text-gray-700 text-link"}>
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
