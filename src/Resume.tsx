import { DefaultProps } from "./DefaultProps";
import Timeline from "./components/Timeline";

import { experienceData, certificationData, projectsData, educationData } from "./components/experienceData";


export const Resume: React.FC<DefaultProps> = ({ visible }) => {
    const activeClassName = visible === 'Resume' ? 'active' : '';

    return <article className={`resume ${activeClassName}`} data-page="resume">

        <header>
            <h2 className="h2 article-title">Resume</h2>
        </header>

        <Timeline  timelineHeading="Experience" timelineEvents={experienceData} headIcon={"globe"}/>
        <Timeline  timelineHeading="Certification" timelineEvents={certificationData} headIcon={"trophy"}/> 
        <Timeline  timelineHeading="Projects" timelineEvents={projectsData} headIcon={"gitPullRequest"}/>
        <Timeline  timelineHeading="Education" timelineEvents={educationData} headIcon={"book"}/>


        <section className="skill">

            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Backend Development - .Net, C#.Net WebAPI</h5>
                        <data value="70">70%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Frontend, Web design - HTML & CSS, Javascript, React & Angular</h5>
                        <data value="80">80%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Database - SQL, Azure SQL DB, MySQL, SQL Server, Manage Instance</h5>
                        <data value="85">85%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "85%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Advanced MS Excel, VBA Programing, VB.Net</h5>
                        <data value="70">70%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "70%" }}></div>
                    </div>

                </li>

            </ul>

        </section>

    </article>;
};
