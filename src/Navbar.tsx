import { DefaultProps } from "./DefaultProps";



export const Navbar: React.FC<DefaultProps> = ({ visible, activateTab }) => {

    const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

    const renderTab = (tab: string) => (
        <li className="navbar-item" key={tab}>
            <button
                className={`navbar-link ${tab === visible ? 'active' : ''}`}
                data-nav-link
                onClick={() => activateTab(tab)}
            >
                {tab}
            </button>
        </li>
    );

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {tabs.map(renderTab)}
            </ul>
        </nav>
    );
};

