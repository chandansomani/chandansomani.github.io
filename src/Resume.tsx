import { IonIcon } from "@ionic/react";
import { DefaultProps } from "./DefaultProps";
import { bookOutline } from 'ionicons/icons';
import Timeline from "./Timeline";


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


        <Timeline />

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
