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
        {/* <div className='card-group mt-5'>
            <div className="card border-dark mx-2 h-100">
                <div className="card-body">
                    <h3 className="card-title">Languages:</h3>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>JavaScript</li>
                            <li className='list-group-item'>Node</li>
                            <li className='list-group-item'>Express</li>
                            <li className='list-group-item'>React</li>
                            <li className='list-group-item'>Python</li>
                            <li className='list-group-item'>SQL</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="card border-dark mx-2 h-100">
                <div className="card-body">
                    <h3 className="card-title">Tools:</h3>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className="list-group-item">Git</li>
                            <li className="list-group-item">Docker</li>
                            <li className="list-group-item">Kubernetes</li>
                            <li className="list-group-item">Ansible</li>
                            <li className="list-group-item">Terraform</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card border-dark mx-2 h-100">
                <div className="card-body">
                    <h3 className="card-title">Software/Platforms:</h3>
                    <div className='card-text'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>VSCode</li>
                            <li className='list-group-item'>Git</li>
                            <li className='list-group-item'>Linux</li>
                            <li className='list-group-item'>Amazon Web Services</li>
                            <li className='list-group-item'>Microsoft Azure</li>
                            <li className='list-group-item'>Nginx</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  );
};

export default SkillsSection;
