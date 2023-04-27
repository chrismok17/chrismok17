import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="about-me" smooth={true} duration={500} isDynamic={true}>
                        About Me
                        </Link></li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} isDynamic={true}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500} isDynamic={true}>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="links" smooth={true} duration={500} isDynamic={true}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Menu;