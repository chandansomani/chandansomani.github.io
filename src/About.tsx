import { IonIcon } from "@ionic/react";
import { DefaultProps } from "./DefaultProps";
import { closeOutline } from 'ionicons/icons';

export const About: React.FC<DefaultProps> = ({ visible }) => {
    const activeClassName = visible === 'About' ? 'active' : '';
    return <article className={`about ${activeClassName}`} data-page="about">

        <header>
            <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
            <p>I'm a versatile Full Stack Developer based in Pune, India, with a passion for creating elegant solutions to complex technical challenges. With expertise across the entire development stack, I transform business requirements into scalable, user-centric digital experiences.</p>

            <p>My approach combines technical precision with creative problem-solving. I don't just write code—I architect solutions that deliver tangible business value while providing intuitive user experiences. Whether implementing robust backend systems or crafting responsive frontends, I bring a holistic perspective to each project.</p>

            <p>As a Microsoft Azure certified professional, I specialize in cloud-native architectures that ensure performance, security, and scalability. My work with organizations like KAHRAMMA has involved developing mission-critical applications that simplify complex processes through thoughtful user interfaces and seamless integrations.</p>

            <p>Beyond technical skills, I bring a collaborative mindset and business acumen to every project. I believe the best digital solutions emerge when we align technical possibilities with clear business objectives and user needs. This philosophy has guided my work across multiple industries and technological frameworks.</p>

            <p>When I'm not coding, you'll find me exploring emerging technologies and contributing to developer communities that foster innovation and knowledge sharing.</p>
        </section>


        {/* <!-- - service --> */}

        <section className="service">

            <h3 className="h3 service-title">What i'm doing</h3>

            <ul className="service-list">

                <li className="service-item">

                    <div className="service-icon-box">
                        <img src="./assets/images/icon-design.svg" alt="design icon" width="40" />
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Full Stack Development</h4>

                        <p className="service-item-text">
                            Building enterprise-scale applications with C#.Net WebAPI, React, Angular, and ASP.NET Core.
                        </p>
                    </div>

                </li>

                <li className="service-item">

                    <div className="service-icon-box">
                        <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Cloud Solutions</h4>

                        <p className="service-item-text">
                            Implementing scalable architectures on Azure with Data Factory, SQL, Functions, and Blob Storage.
                        </p>
                    </div>

                </li>

                <li className="service-item">

                    <div className="service-icon-box">
                        <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">UI/UX Implementation</h4>

                        <p className="service-item-text">
                            Crafting responsive interfaces with custom multi-step forms and seamless API integrations.
                        </p>
                    </div>

                </li>

                <li className="service-item">

                    <div className="service-icon-box">
                        <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
                    </div>

                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Certified Professional</h4>

                        <p className="service-item-text">
                            Microsoft Azure Database Administration (DP-300) certified with expertise in Jira Management.
                        </p>
                    </div>

                </li>

            </ul>

        </section>


        <section className="testimonials">

            <h3 className="h3 testimonials-title">Testimonials</h3>

            <ul className="testimonials-list has-scrollbar">

                <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>

                        <figure className="testimonials-avatar-box">
                            <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Jyoti Sisodiya</h4>

                        <div className="testimonials-text" data-testimonials-text>
                            <p> Chandan was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. </p>
                        </div>

                    </div>
                </li>

                <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>

                        <figure className="testimonials-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Sandeep Patil</h4>

                        <div className="testimonials-text" data-testimonials-text>
                            <p> Chandan was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. </p>
                        </div>

                    </div>
                </li>

                <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>

                        <figure className="testimonials-avatar-box">
                            <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Ankita Khangar</h4>

                        <div className="testimonials-text" data-testimonials-text>
                            <p> Chandan was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. </p>
                        </div>

                    </div>
                </li>

                <li className="testimonials-item">
                    <div className="content-card" data-testimonials-item>

                        <figure className="testimonials-avatar-box">
                            <img src="./assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
                        </figure>

                        <h4 className="h4 testimonials-item-title" data-testimonials-title>Gaurav Bhandarkar</h4>

                        <div className="testimonials-text" data-testimonials-text>
                            <p> Chandan was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. </p>
                        </div>

                    </div>
                </li>

            </ul>

        </section>


        {/* <!-- - testimonials modal --> */}

        <div className="modal-container" data-modal-container>

            <div className="overlay" data-overlay></div>

            <section className="testimonials-modal">

                <button title="toggle Modal" type="button" className="modal-close-btn" data-modal-close-btn>
                    <IonIcon icon={closeOutline} />
                </button>

                <div className="modal-img-wrapper">
                    <figure className="modal-avatar-box">
                        <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                    </figure>

                    <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                </div>

                <div className="modal-content">

                    <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

                    <time dateTime="2021-06-14">14 June, 2021</time>

                    <div data-modal-text>
                        <p> Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia. </p>
                    </div>

                </div>

            </section>

        </div>


        <section className="clients">

            <h3 className="h3 clients-title">Associations</h3>

            <ul className="clients-list has-scrollbar">

                <li className="clients-item">

                    <img src="./assets/images/New-Vision-2023.png" alt="client logo" />
                </li>

                <li className="clients-item">
                    <img src="./assets/images/New-MTC-Logo-Proper.png" alt="client logo" />
                </li>

                <li className="clients-item">
                    <img src="./assets/images/ssvps-logo.png" alt="client logo" />
                </li>

            </ul>

        </section>

    </article>;
};
