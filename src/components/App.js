import React from 'react'
import githubIcon from '../icons/github.svg'
import linkedinIcon from '../icons/linkedin.svg'
import envelopeIcon from '../icons/envelope.svg'
import SkillsList from "./SkillsList"
import ProjectsList from "./ProjectsList"


const listOfSkills = [{"name": "python", "percent":  1},
		{"name": "java", "percent": 1}, {"name": "react", "percent": 1},
		{"name": "node-js", "percent": 1}, {"name": "docker", "percent":  1}, {"name": "git",
		"percent": 1}, {"name": "mysql", "percent": 1}]
const repos = ["blink-morse", "OireachtasVote", "MiddleEarthSearch", "ens-avatar", "phone-block", "cast-media"]

function App() {
  return (
	<div className={"App bg-white rounded-lg p-6"}>
		<div id={"mainContent"}>
			<header id={"mainHeader"} className={"md:flex bg-white rounded-lg"}>
				<img className="h-12 w-12 md:h-20 md:w-20 rounded-full
						mx-auto md:mx-0 md:mr-4 border-solid border-2
						border-black-500 md:border-transparent"
						src={require('../assets/me.jpg')}
						alt={"Robert profile"}/>
				<div className={"my-auto text-center md:text-left"}>
					<h1 id={"name"} className={"py-2 my-0 md:py-0 text-xl"}>Robert McElhinney</h1>
					<h2 className={"md:text-indigo-600 lg:text-red-600 xl:text-black text-lg"}>Software/Systems Engineer</h2>
				</div>
				<nav className={"flex contactLinks my-auto"}>
					<a href={"https://github.com/robmcelhinney"}>
						<img src={githubIcon} alt={"github icon"}
							 className={"githubIcon img-icons move-icons " +
							 "mx-3 md:mx-4 h-8 md:h-10"}/>
					</a>
					<a href={"https://www.linkedin.com/in/robmcelhinney/"}>
						<img src={linkedinIcon} alt={"linkedin icon"}
							 className={"linkedinIcon img-icons move-icons " +
							 "mx-3 md:mx-4 h-8 md:h-10"}/>
					</a>
					<a href={"mailto:site@robmcelhinney.com"}>
						<img src={envelopeIcon} alt={"envelope icon"}
							 className={"envelopeIcon img-icons move-icons " +
							 "mx-3 md:mx-4 h-8 md:h-10"}/>
					</a>
				</nav>
			</header>

			<div className={"text-lg md:text-2xl text-gray-700 mb-10"}>
				Full-stack
				<code><span className={"text-yellow-500 sm:text-green-600 " +
				"md:text-indigo-600 lg:text-red-600 xl:text-black"}
				> {"<"}software developer{">"} </span></code> experienced in Python and Docker.
				Utilizing expertise in Observability and Platform reliability to enhance system visibility, slash TTD, swiftly identify issues, and prevent recurring incidents.
			</div>

			<h3 className={"subHeader"}>Pinned Public Projects</h3>
			<ProjectsList repos={repos} />

			<h3 className={"subHeader"}>Some Software Skills</h3>
			<SkillsList skills={listOfSkills} />

			<div className={"text-xl text-gray-700 skills-text mb-10"}>
				Experience using Python, Java, ReactJS, NodeJS, Docker, and MySQL.
				Aiming to improve my software skills in all areas.
			</div>


			<h3 className={"subHeader"}>More Me</h3>

			<div className={"text-xl text-gray-700 text-link"}>
				<div>
					Frequently focusing on new technologies that pique my interest.
				</div>
				<div>
					This website should be accessible on your web3-enabled browser
					using IPFS and an ethereum enabled domain name: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://robmcelhinney.eth">
					robmcelhinney.eth</a> or through a public
					endpoint: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://robmcelhinney.eth.link">robmcelhinney.eth.limo</a>
				</div>
			</div>
		</div>
	</div>
  )
}

export default App
