import React from "react";
import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import Kdrama from "./projects/kdrama";
import Vacation from "./projects/Vacation";
import Bsn from "./projects/Bsn";


const ProjectCard = () => {
    const textColour = {
        color: "var(--tertiary)"
    };

    const paddingStyle = {
        margin: "25px 0px 25px 0px"
    }
    return (
        <>
            <Accordion defaultActiveKey="0" className='mt-4 w-100'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>BSN OpenLab Scheduler | React / Express / MySQL / Docker</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            <ListGroup style={paddingStyle} variant="flush">
                                <ListGroupItem>Led team in designing, developing, and documenting a full stack web app for BCIT's Nursing program, serving faculty and up to 900 students</ListGroupItem>
                                <ListGroupItem>Facilitated scrum meetings ensuring understanding of project requirements and maintaining a shared vision among team members and stakeholders</ListGroupItem>
                                <ListGroupItem>Key role in designing MySQL database, creating API endpoints, and writing Docker Files</ListGroupItem>
                                <ListGroupItem>Assisted with hashing and salting user’s passwords using Bcrypt before storing in database</ListGroupItem>
                            </ListGroup>
                            <Bsn/>
                        </Accordion.Body>
                </Accordion.Item>
            
                <Accordion.Item eventKey="1">
                    <Accordion.Header>KDrama Watchlist | React / TypeScript / Netlify</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            <ListGroup style={paddingStyle} variant="flush">
                                <ListGroupItem>Developed a React app to search and add Korean Dramas to user's watchlist</ListGroupItem>
                                <ListGroupItem>Integrated movie database API, filtering results by language and rendering details</ListGroupItem>
                                <ListGroupItem>Utilized state management to save watchlist in browser's local storage</ListGroupItem>
                                <ListGroupItem>Allows users to drag and drop to rearrange their ranking</ListGroupItem>
                            </ListGroup>
                            <Kdrama/>
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Vacation Calendar | JavaScript / Express / MongoDB / Heroku</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            <ListGroup style={paddingStyle} variant="flush">
                                <ListGroupItem>A full stack web application intended for my friends to keep track of plans for an upcoming vacation</ListGroupItem>
                                <ListGroupItem>Used to plan when to visit places of interest</ListGroupItem>
                                <ListGroupItem>Utilized the Mapbox free tier API to map out locations of places of interest</ListGroupItem>
                                <ListGroupItem>Created several APIs to add, update or delete events in the database with information such as address, date and who’s going</ListGroupItem>
                            </ListGroup>
                            <Vacation/>
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default ProjectCard;