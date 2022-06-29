import './Projects.scss';

export default function Projects() {
  return (
    <div id="projects">
      <h2>Projects Summary</h2>
      <div id="project-summary-container" className="flex-section-column">
        <div>
          <h3>
            🌐 Websites
          </h3>

          <ul>
            <li>
              <ProjectSummary
                title="Discord Trivia Website"
                description="A wrapper module for Digital Fortune Cookies API"
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/>
            </li>
            <li>
              <ProjectSummary
                title="Digital Fortune Cookies Demo"
                description="A demo page for showcasing my Digital Fortune Cookies API."
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            📦 NodeJS Modules
          </h3> 
          
          <ul>
            <li>
              <ProjectSummary
                title="❓ Open Trivia Database API Wrapper"
                description="open-trivia-db is a JavaScript NPM module which provides a wrapper for the Open Trivia Database API."
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/> 
            </li>
            <li>
              <ProjectSummary
                title="📰 DEV API Wrapper"
                description="devdotto is an API wrapper for the DEV API written in TypeScript. This module is still under development with full coverage of the DEV API."
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/> 
            </li>
            <li>
              <ProjectSummary
                title="🎮 Discord Trivia Library"
                description="A Discord.JS based library which brings trivia game functionality to Discord bots."
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/> 
            </li>
            <li>
              <ProjectSummary
                title="🥠 Fortune Cookie Generator"
                description="A wrapper module for Digital Fortune Cookies API"
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            🤖 APIs
          </h3>

          <ul>
            <li>
              <ProjectSummary
                title="🥠 Digital Fortune Cookies API"
                description="DFC is an Express API that serves fortunes along with randomly generated lucky numbers"
                pageUrl="#"
                githubUrl="#"
                infoUrl="#"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function ProjectSummary({
  title,
  description,
  pageUrl,
  githubUrl,
  infoUrl
}) {
  return (
    <div className="summary">
      <h4>{title}</h4>
      <p>{description}</p>
      <a 
        href={pageUrl} 
        target="_blank"
        className="visit">
        <button>Visit Page</button>
      </a>
      <a 
        href={githubUrl} 
        target="_blank"
        className="github">
        <button>Github Repo</button>
      </a>
      <a 
        href={infoUrl}
        className="details">
        <button>More Details</button>
      </a>
    </div>
  )
}