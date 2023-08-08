import React from 'react';
import {Accordion, ListGroup} from 'react-bootstrap';

const SkillsSection = () => {
  return (
    <>
        <Accordion defaultActiveKey="0" className='mt-4' >
            <Accordion.Item eventKey="0">
                <Accordion.Header>Languages</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>JavaScript</ListGroup.Item>
                            <ListGroup.Item>Node</ListGroup.Item>
                            <ListGroup.Item>Express</ListGroup.Item>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>SQL</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Tools</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>VSCode</ListGroup.Item>
                            <ListGroup.Item>Git</ListGroup.Item>
                            <ListGroup.Item>Docker</ListGroup.Item>
                            <ListGroup.Item>Kubernete</ListGroup.Item>
                            <ListGroup.Item>Ansible</ListGroup.Item>
                            <ListGroup.Item>Terraform</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Software/Platforms</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Linux</ListGroup.Item>
                            <ListGroup.Item>Amazon Web Services</ListGroup.Item>
                            <ListGroup.Item>Microsoft Azure</ListGroup.Item>
                            <ListGroup.Item>Google Cloud</ListGroup.Item>
                            <ListGroup.Item>Nginx</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </>
  );
};

export default SkillsSection;
