import React, { useState, useEffect }  from "react";
import { Link } from "react-scroll";

const Menu = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
        setVisible(visible);
        setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const className = visible ? "menu" : "menu hidden";
    return (
        <>
            <div className={className}>
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