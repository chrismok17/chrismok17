import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="about-me" smooth={true} duration={250} isDynamic={true}>
                        About Me
                        </Link></li>
                    <li>
                        <Link to="projects" smooth={true} duration={250} isDynamic={true}>
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={250} isDynamic={true}>
                        Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="links" smooth={true} duration={250} isDynamic={true}>
                        Contact
                        </Link>
                    </li>
                    <li><a href={require("../assets/Christopher_Mok_Resume_2023.pdf")} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>
        </>
    );
};

export default Menu;