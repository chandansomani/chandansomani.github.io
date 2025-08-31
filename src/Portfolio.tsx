import { DefaultProps } from "./DefaultProps";
import { eyeOutline } from 'ionicons/icons';
import { IonIcon } from "@ionic/react";
import { useState } from "react";

export const Portfolio: React.FC<DefaultProps> = ({ visible }) => {
    // State to track which filter is selected
    const [filter, setFilter] = useState('All');

    const projects = [
        { id: 1, title: "Finance", category: "web development", imgSrc: "./assets/images/project-1.jpg", alt: "finance", },
        { id: 2, title: "Orizon", category: ".Net Core", imgSrc: "./assets/images/project-2.png", alt: "orizon", },
        { id: 3, title: "Fundo", category: "web design", imgSrc: "./assets/images/project-3.jpg", alt: "fundo", },
        { id: 4, title: "Brawlhalla", category: "applications", imgSrc: "./assets/images/project-4.png", alt: "brawlhalla", },
        { id: 5, title: "DSM.", category: "web design", imgSrc: "./assets/images/project-5.png", alt: "dsm", },
        { id: 6, title: "MetaSpark", category: "web design", imgSrc: "./assets/images/project-6.png", alt: "metaspark", },
        { id: 7, title: "Summary", category: "web development", imgSrc: "./assets/images/project-7.png", alt: "summary", },
        { id: 8, title: "Task Manager", category: "applications", imgSrc: "./assets/images/project-8.jpg", alt: "task manager", },
        { id: 9, title: "Arrival", category: "web development", imgSrc: "./assets/images/project-9.png", alt: "arrival", },
    ];

    // Get unique categories from projects
    const categories = Array.from(new Set(projects.map(project => project.category)));
    categories.unshift("All");  // Add "All" as the first option

    // Function to handle filter change
    const handleFilterChange = (category: string) => setFilter(category);


    // Filter projects based on the selected filter
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

    let activeClassName = visible === 'Portfolio' ? 'active' : '';

    return (
        <article className={`portfolio ${activeClassName}`} data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">
                    {categories.map((category, index) => (
                        <li key={index} className="filter-item">
                            <button
                                className={filter === category ? 'active' : ''}
                                data-filter-btn
                                onClick={() => handleFilterChange(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize first letter */}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className="project-list">
                    {filteredProjects.map(project => (
                        <li
                            key={project.id}
                            className={`project-item ${filter === 'All' || project.category.toLowerCase() === filter.toLowerCase() ? 'active' : ''}`}
                            data-filter-item
                            data-category={project.category}
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <IonIcon icon={eyeOutline} />
                                    </div>
                                    <img src={project.imgSrc} alt={project.alt} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </section>
        </article>
    );
};
