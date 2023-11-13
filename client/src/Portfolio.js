import './Portfolio.css'
import budget from './budgetapplogo.png'
import mocktails from './portfolio/mocktailslogo.png' 
import circlechat from './portfolio/circlechatlogo.png'
import lampapplogo from './portfolio/lampapp.png'

function Portfolio () {

    const projects = [
        {title: "Budget App", logo: budget, tech: "Go lang, React, Mongo DB", githubLink: "https://github.com/l-Rich/my-budget-app/tree/master" }, 
        {title: "Mocktails", logo: mocktails, tech: "Angular"}, 
        {title: "The Circle Chat", logo: circlechat, tech: "React"}, 
        {title: "90's To Do", logo: lampapplogo, tech: "React"}]
 

    return (
        <div class="Portfolio">
            {projects.map((project, index) => (
                <div class="card" key={index}>
                    <h5 class="card-title">{project.title}</h5>
                    <img src={project.logo} class="projectlogo" alt="..." />
                    <div class="card-body">
                        
                        <p class="card-text">Tech: {project.tech}</p>
                        <a href={project.githubLink} target="__blank">Check out the Source Code</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Portfolio