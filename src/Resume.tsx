import { IonIcon } from "@ionic/react";
import { DefaultProps } from "./DefaultProps";
import { bookOutline, gitPullRequest, globe, trophy } from 'ionicons/icons';

export const Resume: React.FC<DefaultProps> = ({ visible }) => {
    const activeClassName = visible === 'Resume' ? 'active' : '';

    return <article className={`resume ${activeClassName}`} data-page="resume">

        <header>
            <h2 className="h2 article-title">Resume</h2>
        </header>

        {/* <section className="timeline">

            <div className="title-wrapper">
                <div className="icon-box">
                    <IonIcon icon={bookOutline} />
                </div>

                <h3 className="h3">Experience</h3>
            </div>

            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Software Engineering - Trainee</h4>

                    <span>2023 — Present</span>

                    <p className="timeline-text">
                        Here, I have upskilled my knowledge in
                        <b>Backend Technologies</b> - C#.Net WebAPI, ASP.NET, MS SQL,
                        <b>Frontend Technologies</b> - Angular and React
                    </p>
                    <p className="timeline-text">
                        <b>Certification</b> -
                        <a
                            href="https://learn.microsoft.com/api/credentials/share/en-us/ChandanSomani-5876/E9F9343ED01E0C18?sharingId=2B0BE070152ACECE">
                            <span>Microsoft Azure Database Administration : DP-300.</span>
                        </a>
                        <a href="./assets/images/JiraCertification.png">
                            <img src="./assets/images/Jira Certification.png" alt="Jira Certification - Chandan Somani"
                                style={{ width: "250px", height: "130px", objectFit: "scale-down" }}
                            />
                            <span>Jira Certification - Managing Jira Projects, Admin JQL</span>
                        </a>
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Lecturer - S.S.V.P.S. Polytechnic, Dhule</h4>

                    <span>2021 — 2022</span>

                    <p className="timeline-text">
                        Teaching Programming Languages to Students of Computer Science Department, .Net Framework VB.Net
                        Programming, Client Side Scripting - Javascript, Server-Side PHP Prog.
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Manager, Maheshwari Trading Company</h4>

                    <span>2011 — 2021</span>

                    <p className="timeline-text">Here, I have expertize all my knowledge soley in
                        <span> Agriculture Input Industry - Crop Protection, Fertilizers & Seeds. </span>
                        <span> Accounting - Tally ERP & Accounts Preparations. </span>
                        <span> Finance Management - Banking, Taxation. </span>
                        <span> Goverment Licensings & Norms. </span>
                        <span> Distribution - Wholesale & Retail & </span>
                        <span> Team Management </span>
                        <span> Managing all Tech Related Concern for Maheshwari Trading Company - IT, Hardware &
                            Networking</span>
                    </p>

                </li>

            </ol>

        </section>

        <section className="timeline">

            <div className="title-wrapper">
                <div className="icon-box">
                    <IonIcon icon={bookOutline} />
                </div>

                <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Bachelor of Computer Engineering, PES Modern College of Engineering,
                        University
                        of Pune</h4>

                    <span>2007 — 2011</span>

                    <p className="timeline-text">
                        Skills : Data Stucture · Object-Oriented Programming (OOP) · .NET Framework · Web
                        Programming Langs HTML, CSS, JS · Microprocessors 8086 Assembly Lang.
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Diploma in Computer Engineering, Maharashtra State Board of Technical
                        Education (MSBTE) </h4>

                    <span>2004 — 2007</span>

                    <p className="timeline-text">
                        Skills : Data Stucture · Microprocessors 8085 Assembly Lang · Object-Oriented Programming (OOP) C++ ·
                        .NET Framework · Visual Basic for
                        Applications (VBA) .
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Higher Secondary College - Commerce </h4>

                    <span>2001 — 2004</span>

                    <p className="timeline-text">
                    </p>

                </li>

            </ol>

        </section>

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
                        <data value="80">60%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "60%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Database - SQL</h5>
                        <data value="90">75%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "75%" }}></div>
                    </div>

                </li>

                <li className="skills-item">

                    <div className="title-wrapper">
                        <h5 className="h5">Advanced MS Excel</h5>
                        <data value="50">80%</data>
                    </div>

                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                    </div>

                </li>

            </ul>

        </section> */}


        <section className="timeline">
            <div className="title-wrapper">
                <div className="icon-box">
                    <IonIcon icon={globe} />
                </div>
                <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Software Engineer - NewVision Software</h4>
                    <span>June 2023 — Present</span>
                    <p className="timeline-text">
                        Results-driven Full Stack Developer with expertise in enterprise-scale applications that seamlessly bridge front and back-end technologies. Architect and implement robust solutions leveraging:
                        <b> Backend Technologies:</b> C#.Net WebAPI, ASP.NET Core, MS SQL Server, RESTful API design, microservices
                        <b> Frontend Technologies:</b> React.js, Redux, Angular, TypeScript, responsive UI/UX frameworks
                        <b> Cloud Technologies:</b> Azure DevOps CI/CD, Azure Data Factory for ETL pipelines, Azure SQL database optimization, Azure Functions for serverless operations, Azure Blob Storage for scalable content delivery
                        Consistently deliver business-critical applications that enhance performance, scalability, and user experience while maintaining industry best practices and security standards.
                    </p>
                    <br />

                    <section className="timeline">
                        <div className="title-wrapper">
                            <div className="icon-box">
                                <IonIcon icon={gitPullRequest} />

                            </div>

                            <h4 className="h4">Projects</h4>
                        </div>

                        <ol className="timeline-list">
                            <li className="timeline-item">
                                <span>Levvia - Deloitte (September 2024 - Present)</span>
                                <p className="timeline-text">
                                    Lead developer on enterprise-scale data optimization initiatives, designing and implementing comprehensive performance improvement strategies for business-critical database systems. Engineered automated ETL pipelines using Azure Data Factory that reduced processing time by 40% while enhancing data quality. Developed serverless solutions with Azure Functions for real-time data processing and system integration, significantly reducing operational costs and infrastructure management overhead. Created cloud-based storage solutions using Azure Blob Storage for efficient handling of large datasets and unstructured data.
                                    <br />
                                    <b>Skills:</b> Azure Data Factory, Azure SQL optimization, Azure Functions, Microsoft Azure, React.js, Database performance tuning, ETL pipeline design, Cloud architecture, SQL query optimization, CI/CD automation
                                </p>
                            </li>

                            <li className="timeline-item">
                                <span>Austills (July 2024 - August 2024)</span>
                                <p className="timeline-text">
                                    Live Prod Migration and Development. Server Configuration & Solely handled DB Migration<br />
                                    <b>Skills:</b> PHP, MySQL<br />
                                    ACE - Student Information Maintenance System
                                </p>
                            </li>

                            <li className="timeline-item">
                                <span>KAHRAMMA - Qatar General Electric and Water Service (February 2024 - June 2024)</span>
                                <p className="timeline-text">
                                    <a href="https://www.km.qa/Pages/Login.aspx">Developed the KMSP Service package UI/UX E2E - https://www.km.qa </a>
                                    <p className="timeline-text">Implemented a fully customized multi-step service application registration system for
                                        both users and contractors (Organic), KM Employees (Sharepoint User). Integrated REST API binding with Oracle
                                        Utilities backend services for seamless data flow between frontend and enterprise systems. Engineered interfaces
                                        with advanced form validation and state management to enhance user experience while ensuring data integrity
                                        across the application lifecycle.
                                        <br />
                                        <b>Skills:</b> User Experience (UX), User Interface Design, Sharepoint Framework (SPFx), React.js, HTML5, Front-End Development, API Integration, Oracle Utilities, State Management
                                    </p>
                                </p>
                            </li>

                            <li className="timeline-item">
                                <span>RMS NewVision (December 2023 - February 2024)</span>
                                <p className="timeline-text">
                                    Backend Development - SSO AND ORGANIC USER Login in ASP.NET 6 WebAPI<br />
                                    <b>Skills:</b> Azure Database Administrator Associate, ASP.NET, Git, Database Design, HTML5, C#.Net, Back-End Web Development
                                </p>
                            </li>
                        </ol>
                    </section>

                    <section className="timeline">
                        <div className="title-wrapper">
                            <div className="icon-box">
                                <IonIcon icon={trophy} />
                            </div>

                            <h4 className="h4">Certification</h4>
                        </div>
                        <ol className="timeline-list">
                            <li className="timeline-item"><span>Agile Certified</span> </li>
                            <li className="timeline-item">
                                <p className="timeline-text">
                                    <a href="https://learn.microsoft.com/api/credentials/share/en-us/ChandanSomani-5876/E9F9343ED01E0C18">
                                        <span>Microsoft Azure Database Administration : DP-300. (Verify Online Click here)</span>
                                    </a>
                                    <a href="./assets/images/Azure_DBA_Certificate.png" className="project-img">
                                        <img src="./assets/images/Azure_DBA_Certificate.png" alt="DP-300 Certification - Chandan Somani" />
                                    </a>
                                </p>
                            </li>
                            <li className="timeline-item">
                                <span>Jira Certification - Managing Jira Projects, Admin JQL</span>
                                <a href="./assets/images/Jira Certification.png" className="project-img">
                                    <img src="./assets/images/Jira Certification.png" alt="Jira Certification - Chandan Somani" />
                                </a>
                            </li>
                        </ol>
                    </section>
                </li>

                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Lecturer - S.S.V.P.S. Polytechnic, Dhule</h4>
                    <span>2021 — 2022</span>
                    <p className="timeline-text">
                        Teaching Programming Languages to Students of Computer Science Department, .Net Framework VB.Net
                        Programming, Client Side Scripting - Javascript, Server-Side PHP Prog.
                    </p>
                </li>

                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Manager, Maheshwari Trading Company</h4>
                    <span>2011 — 2021</span>
                    <p className="timeline-text">
                        <span>Dedicated expertise to the Agriculture Input Industry, focusing on Crop Protection, Fertilizers, and Seeds.</span>
                        <span>Oversaw Accounting tasks, including Tally ERP usage and Accounts preparation.</span>
                        <span>Managed Finance operations, encompassing Banking and Taxation.</span>
                        <span>Ensured compliance with Government Licensings and Norms.</span>
                        <span>Directed Distribution processes across Wholesale and Retail channels.</span>
                        <span>Led Team Management initiatives to drive performance and efficiency.</span>
                        <span>Handled all tech-related concerns for IT, Hardware, and Networking operations.</span>
                    </p>
                </li>

            </ol>

        </section>


        <section className="timeline">

            <div className="title-wrapper">
                <div className="icon-box">
                    <IonIcon icon={bookOutline} />
                </div>

                <h3 className="h3">Education</h3>
            </div>

            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Bachelor of Computer Engineering, PES Modern College of Engineering,
                        University
                        of Pune</h4>

                    <span>2007 — 2011</span>

                    <p className="timeline-text">
                        Skills : Data Stucture · Object-Oriented Programming (OOP) · .NET Framework · Web
                        Programming Langs HTML, CSS, JS · Microprocessors 8086 Assembly Lang.
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Diploma in Computer Engineering, Maharashtra State Board of Technical
                        Education (MSBTE) </h4>

                    <span>2004 — 2007</span>

                    <p className="timeline-text">
                        Skills : Data Stucture · Microprocessors 8085 Assembly Lang · Object-Oriented Programming (OOP) C++ ·
                        .NET Framework · Visual Basic for
                        Applications (VBA) .
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Higher Secondary College - Commerce </h4>

                    <span>2001 — 2004</span>

                    <p className="timeline-text">
                    </p>

                </li>

            </ol>

        </section>

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
