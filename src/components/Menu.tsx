import React, { useState, useEffect }  from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Nav } from 'react-bootstrap';

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

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Navbar sticky="top" expand="sm" variant="dark" className="border-bottom border-bottom-dark w-100">
                <Container fluid className="justify-content-end">
                <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link onClick={scrollToTop} href="/#" className="nav-link">About Me</Nav.Link>
                            <Link to="projects" smooth={true} isDynamic={true} className="nav-link">Projects</Link>
                            <Link to="experience" smooth={true} isDynamic={true} className="nav-link">Experience</Link>
                            <Link to="links" smooth={true} isDynamic={true} className="nav-link">Contact</Link>
                            <Nav.Link href={require("../assets/Christopher_Mok_Resume_2023.pdf")} target="_blank" rel="noreferrer" className="nav-link">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;