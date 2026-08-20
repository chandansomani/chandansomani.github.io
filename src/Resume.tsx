import React from "react";
import { DefaultProps } from "./DefaultProps";
import Timeline from "./components/Timeline";
import { experienceData, certificationData, projectsData, educationData } from "./components/experienceData";

// ==========================================
// TYPES & SKILLS DATA STRUCTURE
// ==========================================
interface SkillCategory {
    category: string;
    skills: string[];
}

const SKILLS_DATA: SkillCategory[] = [
    {
        category: "Backend Development",
        skills: ["C#", ".NET Core", "ASP.NET Web API", "Entity Framework Core", "RESTful Services"]
    },
    {
        category: "Frontend & Web Engineering",
        skills: ["React.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind / Custom UI"]
    },
    {
        category: "Database & Cloud Architecture",
        skills: ["MS SQL Server", "Azure SQL DB", "MySQL", "Managed Instance", "Azure Cloud Services", "Azure Data Factory"]
    },
    {
        category: "Automation & Enterprise Tools",
        skills: ["Advanced Excel", "VBA Programming", "VB.NET", "Jira Administration"]
    }
];

// ==========================================
// REFACTORED RESUME COMPONENT
// ==========================================
export const Resume: React.FC<DefaultProps> = ({ visible }) => {
    const activeClassName = visible === "Resume" ? "active" : "";

    return (
        <article className={`resume ${activeClassName}`} data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <Timeline timelineHeading="Experience" timelineEvents={experienceData} headIcon="globe" />
            <Timeline timelineHeading="Certification" timelineEvents={certificationData} headIcon="trophy" />
            <Timeline timelineHeading="Projects" timelineEvents={projectsData} headIcon="gitPullRequest" />
            <Timeline timelineHeading="Education" timelineEvents={educationData} headIcon="book" />

            {/* Refactored Skills Section */}
            <section className="skill">
                <h3 className="h3 skills-title">Technical Expertise</h3>

                <div className="skills-container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {SKILLS_DATA.map((group, index) => (
                        <div key={index} className="skills-group content-card" style={{ padding: "20px", borderRadius: "14px" }}>
                            <h4 className="h4" style={{ marginBottom: "12px", color: "var(--white-2, #fff)" }}>
                                {group.category}
                            </h4>
                            <div className="skills-tags" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                {group.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="skill-badge"
                                        style={{
                                            padding: "6px 14px",
                                            borderRadius: "8px",
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            background: "var(--onyx, #2b2b2c)",
                                            color: "var(--orange-yellow-crayola, #ffdb70)",
                                            border: "1px solid var(--jet, #383838)"
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
};