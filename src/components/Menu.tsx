import React, { useState }  from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';

const Menu = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const handleToggleOffcanvas = () => {
        setShowOffcanvas(true);
    }

    const handleLinkClick = () =>{
        setShowOffcanvas(false)
    }

    return (
        <>
            <Navbar sticky="top" expand="md" variant="dark" className="navbar w-100">
                <Container fluid>
                    <Navbar.Brand href="/#">Christopher Mok</Navbar.Brand>
                    <Nav className="ms-auto d-none d-md-flex">
                        <Nav.Link onClick={() => {scrollToTop(); handleLinkClick()}} href="/#" className="nav-link">About</Nav.Link>
                        <Link to="projects" smooth='linear' offset={-95} isDynamic={true} className="nav-link">Projects</Link>
                        <Link to="experience" smooth='linear' offset={-95} isDynamic={true} className="nav-link">Experience</Link>
                        <Link to="links" smooth='linear' offset={-95} isDynamic={true} className="nav-link">Contact</Link>
                        <Nav.Link href={require("../assets/Christopher_Mok_Resume_2023.pdf")} target="_blank" rel="noreferrer" className="nav-link">Resume</Nav.Link>
                    </Nav>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleToggleOffcanvas}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Christopher Mok</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-flex flex-column align-items-center">
                        <Nav.Link  onClick={() => {scrollToTop(); handleLinkClick()}} href="/#" className="nav-link">About</Nav.Link>
                        <Link  onClick={() => {handleLinkClick()}} to="projects" smooth={true} isDynamic={true} className="nav-link">Projects</Link>
                        <Link  onClick={() => {handleLinkClick()}} to="experience" smooth={true} isDynamic={true} className="nav-link">Experience</Link>
                        <Link  onClick={() => {handleLinkClick()}} to="links" smooth={true} isDynamic={true} className="nav-link">Contact</Link>
                        <Nav.Link href={require("../assets/Christopher_Mok_Resume_2023.pdf")} target="_blank" rel="noreferrer" className="nav-link">Resume</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Menu;