import React from "react";
import { Accordion } from "react-bootstrap";
import Kdrama from "./projects/kdrama";
import Vacation from "./projects/Vacation";
import Bsn from "./projects/Bsn";

const ProjectCard = () => {
    const textColour = {
        color: "var(--tertiary)"
    };
    return (
        <>
            <Accordion defaultActiveKey="0" className='mt-4 w-100' >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>BSN OpenLab Scheduler | React / Express / MySQL / Docker</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            A full stack web app for the faculty and students of Nursing to use. Features a faculty view to edit OpenLab schedule and create announcements. Students can view the schedule, receive notifications and view case studies. This project was built from scratch as a part of the Industry Sponsored Student Projects course.
                            <Bsn/>
                        </Accordion.Body>
                </Accordion.Item>
            
                <Accordion.Item eventKey="1">
                    <Accordion.Header>KDrama Watchlist | React / TypeScript / Netlify</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            A React application to search and add Korean dramas to a watchlist. Queries the Movie Database API and filters the results based on the language. The watchlist takes advantage of state management and local storage to save your list of Korean Dramas.
                            <Kdrama/>
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Vacation Calendar | JavaScript / Express / MongoDB / Heroku</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            This personal project is a full stack web application created for my friends and I to use for an upcoming trip. It allows us to add any planned events to the calendar with details such as name, day, time and notes. All event data is stored within a MongoDB database and I created APIs to add, update or delete them.
                            <Vacation/>
                        </Accordion.Body>
                </Accordion.Item>
            
        </Accordion>
            {/* <Card style={{ width: '100% '}} bg="dark">
                <Card.Body>
                    <Card.Title style={subColour}>BSN OpenLab Scheduler</Card.Title>
                    <Card.Text style={textColour}>scheduler for nursing</Card.Text>
                    <Bsn/>
                </Card.Body>
            </Card> */}
        </>
    );
};

export default ProjectCard;