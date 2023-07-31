import "./index.css"


function Welcome() {
    return (
        <div className = "header">
            Welcome.
        </div>
    )
}

function IntroSection() {
    return (
        <div className = "intro-section">
            <Welcome/>
            <ul className = "desc-list">
                <li className = "desc-list-item">
                I am Alex, an aspiring software engineer from Ithaca, New York.
                </li>
                <li className = "desc-list-item">
                I am currently a student at Cornell University, majoring in Computer Science and Mathematics.
                </li>
                <li className = "desc-list-item">
                    I am interested in full-stack web development and programming language design.
                </li>
            </ul>
        </div>
    )
}

function ProjectsHeader() {
    return (
        <div className = "header">
            Projects
        </div>
    )
}

function ProjectsSection() {
    return (
        <div className = "projects-section">
            <ProjectsHeader />
            <ul>
                <ProjectItem name = "LambdaScript" />
                <ProjectItem name = "HabitStack" />
                <ProjectItem name = "CritterWorld" />
                <ProjectItem name = "JSON Formatter" />
            </ul>
        </div>
    )
}

function ProjectItem(props: {name: string}) {
    return (
        <>
            <li className = "project-item">
      
                    {props.name}
  
            </li>
        </>
    )
}
    


export default function Index() {
    return (
        <div className = "index-content">
            <IntroSection />
            <ProjectsSection />
        </div>
    )
}