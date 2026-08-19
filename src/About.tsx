import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { DefaultProps } from "./DefaultProps";

// ==========================================
// DATA MODELS & TYPES
// ==========================================
export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    iconSrc: string;
    iconAlt: string;
    details?: string[]; // Optional array for extra modal details
}

export interface TestimonialItem {
    id: string;
    name: string;
    avatarSrc: string;
    avatarAlt: string;
    text: string;
    date?: string;
}

export interface ClientItem {
    id: string;
    logoSrc: string;
    altText: string;
}

// ==========================================
// MOCK DATA
// ==========================================
const SERVICES_DATA: ServiceItem[] = [
    {
        id: "1",
        title: "MultiCloud Architecture - AWS, Azure & GCP",
        description: "Architecting hybrid and multi-cloud infrastructure, ensuring high availability, disaster recovery, and seamless cloud provider interoperability.",
        iconSrc: "./assets/images/icon-photo.svg",
        iconAlt: "camera icon",
        details: [
            "Cloud Strategy: Multi-cloud deployments combining Azure, AWS, and GCP",
            "Reliability Engineering: Disaster recovery planning, failover mechanisms, and cross-cloud networking",
            "Cost Optimization: Enterprise resource monitoring and cloud spend rationalization"
        ]
    },
    {
        id: "2",
        title: "Full Stack Development",
        description: "Building enterprise-scale applications with C#.Net WebAPI, React, Angular, and ASP.NET Core.",
        iconSrc: "./assets/images/icon-design.svg",
        iconAlt: "design icon",
        details: [
            "Backend Architecture: C#.NET Web API, ASP.NET Core, RESTful Microservices",
            "Frontend Solutions: Modern React, Angular, State Management, Custom Form Engines",
            "Database Design: MS SQL Server, PostgreSQL, Entity Framework Core",
            "Integration: End-to-end API orchestration and legacy system integrations"
        ]
    },
    {
        id: "3",
        title: "Cloud Solutions",
        description: "Implementing scalable architectures on Azure with Azure App Service, Data Analytics using Synapse + Data Factory, SQL, Stateless & Stateful Functions App, and Blob Storage.",
        iconSrc: "./assets/images/icon-dev.svg",
        iconAlt: "Web development icon",
        details: [
            "Azure Infrastructure: App Services, Stateless & Stateful Function Apps, Blob Storage",
            "Data Analytics & Pipelines: Azure Synapse Analytics, Azure Data Factory",
            "Cloud Security & Ops: Managed Identities, Key Vaults, and automated deployments"
        ]
    },
    {
        id: "4",
        title: "Agentic Workflows & Multi-Agent Systems",
        description: "Designed and deployed multi-agent networks including ToolCallingAgent for automated support analysis and system execution.",
        iconSrc: "./assets/images/icon-agentic-ai.png",
        iconAlt: "mobile app icon",
        details: [
            "Agent Frameworks: ToolCallingAgent & CodeAgent execution pipelines",
            "Automation: Support ticket analysis, automated logging, and system actions",
            "AI Orchestration: Custom prompt chaining and tool integration for developer workflows"
        ]
    },
    {
        id: "5",
        title: "React & Modern UI Engineering",
        description: "Crafting responsive interfaces with custom multi-step forms and seamless API integrations.",
        iconSrc: "./assets/images/icon-app.svg",
        iconAlt: "mobile app icon",
        details: [
            "Modern React: TypeScript, Custom Hooks, Performance Optimization",
            "UI/UX Implementation: Responsive CSS layouts, custom dynamic multi-step form engines",
            "State & API Management: Efficient client-side state, caching, and async API integration"
        ]
    },
    {
        id: "6",
        title: "Certified Professional",
        description: "Microsoft Azure Database Administration (DP-300) certified with expertise in Jira Management.",
        iconSrc: "./assets/images/icon-photo.svg",
        iconAlt: "camera icon",
        details: [
            "Certifications: Microsoft Azure Database Administrator Associate (DP-300)",
            "Database Optimization: Performance tuning, index management, and query optimization",
            "Agile Project Management: Workflow setup and issue tracking in Jira"
        ]
    },
];

const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        id: "1",
        name: "Dipesh Malani",
        avatarSrc: "./assets/images/DipeshM F Apple Memoji Avatar.png",
        avatarAlt: "Dipesh Malani",
        text: "",
    },
    {
        id: "2",
        name: "Jyoti Sisodiya",
        avatarSrc: "./assets/images/avatar-2.png",
        avatarAlt: "Jyoti Sisodiya",
        text: "",
    },
    {
        id: "3",
        name: "Sandeep Patil",
        avatarSrc: "./assets/images/avatar-1.png",
        avatarAlt: "Sandeep Patil",
        text: "",
    },
];

const CLIENTS_DATA: ClientItem[] = [
    { id: "1", logoSrc: "./assets/images/New-Vision-2023.png", altText: "client logo" },
    { id: "2", logoSrc: "./assets/images/New-MTC-Logo-Proper.png", altText: "client logo" },
    { id: "3", logoSrc: "./assets/images/ssvps-logo.png", altText: "client logo" },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

export const AboutText: React.FC = () => (
    <section className="about-text">
        <p>
            I'm a versatile Full Stack Developer based in Pune, India, with a passion for creating elegant solutions to complex technical challenges. With expertise across the entire development stack, I transform business requirements into scalable, user-centric digital experiences.
        </p>
        <p>
            My approach combines technical precision with creative problem-solving. I don't just write code—I architect solutions that deliver tangible business value while providing intuitive user experiences. Whether implementing robust backend systems or crafting responsive frontends, I bring a holistic perspective to each project.
        </p>
        <p>
            As a Microsoft Azure certified professional, I specialize in cloud-native architectures that ensure performance, security, and scalability. My work with organizations like KAHRAMMA has involved developing mission-critical applications that simplify complex processes through thoughtful user interfaces and seamless integrations.
        </p>
        <p>
            Beyond technical skills, I bring a collaborative mindset and business acumen to every project. I believe the best digital solutions emerge when we align technical possibilities with clear business objectives and user needs. This philosophy has guided my work across multiple industries and technological frameworks.
        </p>
        <p>
            When I'm not coding, you'll find me exploring emerging technologies and contributing to developer communities that foster innovation and knowledge sharing.
        </p>
    </section>
);

// Card with larger icon (width 60) and no description paragraph
export const ServiceCard: React.FC<{
    service: ServiceItem;
    onClick: () => void;
}> = ({ service, onClick }) => (
    <li className="service-item" onClick={onClick} style={{ cursor: "pointer" }}>
        <div className="service-icon-box">
            <img src={service.iconSrc} alt={service.iconAlt} width="60" />
        </div>
        <div className="service-content-box">
            <h4 className="h4 service-item-title">{service.title}</h4>
        </div>
    </li>
);

// Expanded Service Modal with Full Description & Bullets
export const ServiceModal: React.FC<{
    service: ServiceItem | null;
    onClose: () => void;
}> = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <div className="modal-container active" data-modal-container>
            <div className="overlay active" data-overlay onClick={onClose}></div>
            <section className="testimonials-modal service-modal">
                <button title="toggle Modal" type="button" className="modal-close-btn" data-modal-close-btn onClick={onClose}>
                    <IonIcon icon={closeOutline} />
                </button>

                <div className="modal-content">
                    <div className="modal-img-wrapper" style={{ marginBottom: "18px" }}>
                        <figure className="modal-avatar-box">
                            <img src={service.iconSrc} alt={service.iconAlt} width="60" />
                        </figure>
                    </div>
                    <h4 className="h3 modal-title" data-modal-title>
                        {service.title}
                    </h4>
                    <div data-modal-text style={{ marginTop: "15px" }}>
                        <p style={{ fontWeight: 500, marginBottom: "15px" }}>{service.description}</p>
                        {service.details && service.details.length > 0 && (
                            <ul style={{ listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px" }}>
                                {service.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export const TestimonialCard: React.FC<{
    testimonial: TestimonialItem;
    onClick: () => void;
}> = ({ testimonial, onClick }) => (
    <li className="testimonials-item" onClick={onClick} style={{ cursor: "pointer" }}>
        <div className="content-card" data-testimonials-item>
            <figure className="testimonials-avatar-box">
                <img src={testimonial.avatarSrc} alt={testimonial.avatarAlt} width="60" data-testimonials-avatar />
            </figure>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>
                {testimonial.name}
            </h4>
            <div className="testimonials-text" data-testimonials-text>
                <p>{testimonial.text}</p>
            </div>
        </div>
    </li>
);

export const TestimonialModal: React.FC<{
    testimonial: TestimonialItem | null;
    onClose: () => void;
}> = ({ testimonial, onClose }) => {
    if (!testimonial) return null;

    return (
        <div className="modal-container active" data-modal-container>
            <div className="overlay active" data-overlay onClick={onClose}></div>
            <section className="testimonials-modal">
                <button title="toggle Modal" type="button" className="modal-close-btn" data-modal-close-btn onClick={onClose}>
                    <IonIcon icon={closeOutline} />
                </button>

                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                        <img src={testimonial.avatarSrc} alt={testimonial.avatarAlt} width="80" data-modal-img />
                    </figure>
                    <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                </div>

                <div className="modal-content">
                    <h4 className="h3 modal-title" data-modal-title>
                        {testimonial.name}
                    </h4>
                    {testimonial.date && <time dateTime={testimonial.date}>{testimonial.date}</time>}
                    <div data-modal-text>
                        <p>{testimonial.text}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export const ClientLogo: React.FC<{ client: ClientItem }> = ({ client }) => (
    <li className="clients-item">
        <img src={client.logoSrc} alt={client.altText} />
    </li>
);

// ==========================================
// MAIN ABOUT COMPONENT
// ==========================================
export const About: React.FC<DefaultProps> = ({ visible }) => {
    const activeClassName = visible === "About" ? "active" : "";

    // Active state handlers for popups
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
    const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialItem | null>(null);

    return (
        <article className={`about ${activeClassName}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <AboutText />

            {/* Services Section */}
            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>
                <ul className="service-list">
                    {SERVICES_DATA.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </ul>
            </section>

            {/* Service Detail Modal */}
            <ServiceModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />

            {/* Testimonials Section
            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    {TESTIMONIALS_DATA.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            onClick={() => setSelectedTestimonial(testimonial)}
                        />
                    ))}
                </ul>
            </section> */}

            {/* Testimonials Modal */}
            <TestimonialModal
                testimonial={selectedTestimonial}
                onClose={() => setSelectedTestimonial(null)}
            />

            {/* Clients Section */}
            <section className="clients">
                <h3 className="h3 clients-title">Associations</h3>
                <ul className="clients-list has-scrollbar">
                    {CLIENTS_DATA.map((client) => (
                        <ClientLogo key={client.id} client={client} />
                    ))}
                </ul>
            </section>
        </article>
    );
};