import { DefaultProps } from "./DefaultProps";
import { IonIcon } from "@ionic/react";
import { calendarOutline, chevronDown, locationOutline, logoFacebook, logoGithub, logoLinkedin, logoYoutube, mailOutline, phonePortraitOutline } from 'ionicons/icons';
import { useState } from "react";

export const ASide: React.FC<DefaultProps> = ({ children }) => {

    const [a, setA] = useState(false);

    const toggleSidebar = () => setA((prev) => !prev);

    const activeClassName = a ? 'active' : '';

    return <aside className={`sidebar ${activeClassName}`} data-sidebar>
        <div className="sidebar-info">

            <figure className="avatar-box">
                <img src="./assets/images/f4.png" alt="Chandan Somani" width="80" />
            </figure>

            <div className="info-content">
                <h1 className="name" title="Chandan Somani">Chandan Somani</h1>

                <p className="title">Software Engineer</p>
            </div>

            <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
                <span>Show Contacts</span>

                <IonIcon icon={chevronDown}></IonIcon>
            </button>

        </div>

        <div className="sidebar-info_more">

            <div className="separator"></div>

            <ul className="contacts-list">

                <li className="contact-item">

                    <div className="icon-box">
                        <IonIcon icon={mailOutline} />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Email</p>

                        <a href="mailto:chandansomani@gmail.com" className="contact-link">chandansomani@gmail.com</a>
                    </div>

                </li>

                <li className="contact-item">

                    <div className="icon-box">
                        <IonIcon icon={phonePortraitOutline} />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Phone</p>

                        <a href="tel:+917020596720" className="contact-link">+91 70205 96720</a>
                    </div>

                </li>

                <li className="contact-item">

                    <div className="icon-box">
                        <IonIcon icon={calendarOutline} />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Birthday</p>

                        <time dateTime="1986-01-17">January 17, 1986</time>
                    </div>

                </li>

                <li className="contact-item">

                    <div className="icon-box">
                        <IonIcon icon={locationOutline} />
                    </div>

                    <div className="contact-info">
                        <p className="contact-title">Location</p>

                        <address>Pune, Maharashtra, INDIA</address>
                    </div>

                </li>

            </ul>

            <div className="separator"></div>

            <ul className="social-list">

                <li className="social-item">
                    <a href="https://chandansomani.github.io/" className="social-link" title="My Github Profile">
                        <IonIcon icon={logoGithub} />
                    </a>
                </li>

                <li className="social-item">
                    <a href="https://www.linkedin.com/in/chandansomani" className="social-link" title="My Linked Profile">
                        <IonIcon icon={logoLinkedin} />
                    </a>
                </li>

                <li className="social-item">
                    <a href="https://www.youtube.com/chandansomani" className="social-link" title="My Youtube Channel">
                        <IonIcon icon={logoYoutube} />
                    </a>
                </li>

                <li className="social-item">
                    <a href="https://www.facebook.com/chandan.somani" className="social-link" title="My Facebook Profile">
                        <IonIcon icon={logoFacebook} />
                    </a>
                </li>

            </ul>

        </div>
        {children}
    </aside>;
};
