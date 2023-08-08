import React from "react";
import SkillsSection from './SkillsSection';
import { Container, Card, Row, Col } from 'react-bootstrap';


const About = () => {
    const textColour = {
        color: "var(--tertiary)",
        paddingTop: "25px"
    }
    return (
        <Container className="my-5">
            <Card className="mx-auto p-5" bg="dark" id="about-me">
                <Row>
                    <Col md={8} className="d-flex align-items-container">
                        <Card.Body>
                            <Card.Title style={{ color: '#3051BD', fontSize: '2.5rem'}}>About Me</Card.Title>
                            <Card.Text style={textColour}>
                                Hi! I'm Chris and I am a recent computing graduate from British Columbia Institute of Technology (BCIT)'s accelerated Computer Information Technology (CIT) Program with a passion for web development. When I was younger, I would Google how to create my own website. I didn't have the knowledge to pursue it until many years later in my very first web development course. From there I fell in love with coding, solving problems and visually seeing the changes I am implementing.<br/><br/>

                                During my time at BCIT, I have had the chance to work on many group projects including collaborating with Immunize.io and BCIT's School of Nursing. In my free time, I also like to incorporate my own interests and hobbies into my personal projects. Aside from web development, the CIT program taught me database management, web security and building CI/CD pipelines.<br/><br/>

                                I am excited to step into the industry and continue my learning with front-end, back-end, and full-stack positions!
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md={4} className="profile-photo d-flex justify-content-center align-items-center">
                        <Card.Img className="img-fluid mt-5" src={require("../assets/images/me.jpg")} alt="Christopher Mok" style={{ width: '275px', maxWidth: '100%' }} />
                    </Col>
                    {/* <SkillsSection /> */}
                </Row>
                <SkillsSection />
            </Card>
            
        </Container>
    );
};


export default About;