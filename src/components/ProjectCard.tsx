import React from "react";
import { Accordion, ListGroup, ListGroupItem } from "react-bootstrap";
import Kdrama from "./projects/kdrama";
import Vacation from "./projects/Vacation";
import Bsn from "./projects/Bsn";
import MovieTracker from "./projects/MovieTracker";

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
                    <Accordion.Header>BSN OpenLab Scheduler (2023) | React / Express / MySQL / Docker</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            <ListGroup style={paddingStyle} variant="flush">
                                <ListGroupItem>Led team in designing, developing, and documenting a full stack web app for BCIT's Nursing program, serving faculty and up to 900 students</ListGroupItem>
                                <ListGroupItem>Facilitated Scrum meetings ensuring understanding of project requirements and maintaining a shared vision among team members and stakeholders</ListGroupItem>
                                <ListGroupItem>Played a key role in designing MySQL database, creating API endpoints, and writing Docker Files</ListGroupItem>
                                <ListGroupItem>Assisted with hashing and salting user’s passwords using Bcrypt before storing in database</ListGroupItem>
                            </ListGroup>
                            <Bsn/>
                        </Accordion.Body>
                </Accordion.Item>
            
                <Accordion.Item eventKey="1">
                    <Accordion.Header>KDrama Watchlist (2022) | React / TypeScript / Netlify</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            <ListGroup style={paddingStyle} variant="flush">
                                <ListGroupItem>Developed a React app to search and add Korean Dramas to user's watchlist</ListGroupItem>
                                <ListGroupItem>Integrated movie database API, filtering results by language and rendering details</ListGroupItem>
                                <ListGroupItem>Utilized state management to save watchlist in browser's local storage</ListGroupItem>
                                <ListGroupItem>Allows users to drag and drop to rearrange their ranking</ListGroupItem>
                                <ListGroupItem><a className="external" href="https://mykdramawatchlist.netlify.app/" target="_blank">Visit Site <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></a></ListGroupItem>
                            </ListGroup>
                            <Kdrama/>
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>MovieTracker (2022) | JavaScript / Express / MongoDB / Heroku</Accordion.Header>
                        <Accordion.Body style={textColour}>
                            <ListGroup style={paddingStyle} variant="flush">
                                <ListGroupItem>Built a full stack web app as part of the first group project in the CIT program that allows users to add, delete and view the movies in their watchlist</ListGroupItem>
                                <ListGroupItem>Employed Scrum methodologies to ensure effective collaboration and timely milestones</ListGroupItem>
                                <ListGroupItem>Responsible for handling code reviews and pull requests of new code contributions</ListGroupItem>
                                <ListGroupItem>Led the development of the custom APIs and page routing using Express as well as implementing a third party API for movie data</ListGroupItem>
                                <ListGroupItem>Received recognition for our team's exceptional performance by securing the top position among 12 groups, as voted on by peers and instructors</ListGroupItem>
                            </ListGroup>
                            <MovieTracker/>
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Vacation Calendar (2022) | JavaScript / Express / MongoDB / Heroku</Accordion.Header>
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