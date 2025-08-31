import { useState } from "react";
import { About } from "./About";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { DefaultProps } from "./DefaultProps";
import { Navbar } from "./Navbar";
import { Portfolio } from "./Portfolio";
import { Resume } from "./Resume";

export const MainContent: React.FC<DefaultProps> = ({ children }) => {

    const [activeTab, setActiveTab] = useState('About');

    const renderActiveTab = () => {
        switch (activeTab) {
            case 'About':
                return <About visible={activeTab} />;
            case 'Resume':
                return <Resume visible={activeTab} />;
            case 'Portfolio':
                return <Portfolio visible={activeTab} />;
            case 'Blog':
                return <Blog visible={activeTab} />;
            case 'Contact':
                return <Contact visible={activeTab} />;
            default:
                return null;
        }
    };

    return <div className="main-content">
        <Navbar visible={activeTab} activateTab={setActiveTab} />
        {renderActiveTab()}
        {children}
    </div>;
};
