import React from "react";
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Links = () => {
    return (
        <>
            <Container className="my-5">
                <Card className="mx-auto p-5" bg="dark" id="links">
                    <Card.Title style={{ color: '#3051BD', fontSize: '2.5rem' }}>Get In Touch</Card.Title>
                    <Card.Body>
                        <ListGroup className="contact-links" variant="flush">
                            <ListGroupItem className="no-border"><a className="external" href="mailto:chrismok97@gmail.com">chrismok97@gmail.com</a></ListGroupItem>
                            <ListGroupItem className="no-border">
                                <a className="external" href="https://www.linkedin.com/in/chrismok17/" target="_blank" rel="noopener noreferrer">
                                    LinkedIn <svg width={20} height={20} fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                        {/* SVG path data */}
                                    </svg>
                                </a>
                            </ListGroupItem>
                            <ListGroupItem className="no-border">
                                <a className="external" href="https://github.com/chrismok17" target="_blank" rel="noopener noreferrer">
                                    GitHub <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* SVG path data */}
                                    </svg>
                                </a>
                            </ListGroupItem>
                            <ListGroupItem className="no-border"><a className="external" href={require("../assets/Christopher_Mok_Resume_2023.pdf")} target="_blank" rel="noreferrer">Resume</a></ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Links;