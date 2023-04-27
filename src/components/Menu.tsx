import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="about-me" smooth={true} duration={500}>
                        About Me
                        </Link></li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500}>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="links" smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Menu;