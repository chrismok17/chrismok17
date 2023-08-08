import React from "react";
// import { Link } from "react-scroll";
import { Card, Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const textColour = {
        color: "var(--tertiary)"
    };
    return (
        <>
            <Container className="my-5" id="projects">
                <Card className="mx-auto p-5" bg="dark">
                    <Row>
                        <Col className="d-flex align-items-container">
                            <Card.Body>
                            <Card.Title style={{ color: '#3051BD', fontSize: '2.5rem' }}>Projects</Card.Title>
                            <Card.Text style={textColour}>
                                <ProjectCard />
                            </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
};

export default Projects;