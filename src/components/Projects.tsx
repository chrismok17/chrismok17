import React from "react";

const Projects = () => {
    return (
        <>
            <section className="projects" id="projects"> 
                <h1>Projects</h1>
                <div className="openlab">
                    <h2>BCIT Nursing's OpenLab Scheduler</h2>
                    <p>A full stack web app for the faculty and students of Nursing to use. Features a faculty view to edit OpenLab schedule and create announcements. Students can view the schedule, receive notifications and view case studies. This project was built from scratch as a part of the Industry Sponsored Student Projects course.</p>
                    <ul className="project-tech">
                        <li>React</li>
                        <li>Node</li>
                        <li>MySQL</li>
                        <li>Docker</li>
                    </ul>
                </div>
                <div className="kdrama">
                    <h2>Korean Drama Watchlist</h2>
                    <p>A React application to search and add Korean dramas to a watchlist. Queries the Movie Database API and filters the results based on the language. The watchlist takes advantage of state management and local storage to save your list of Korean Dramas.</p>
                    <ul className="project-tech">
                        <li>React</li>
                        <li><a href="https://github.com/chrismok17/kdrama-watchlist">GitHub</a></li>
                        <li><a href="https://fabulous-brioche-c04d2a.netlify.app/">Visit Site</a></li>
                    </ul>
                </div>
                <div className="vacation">
                    <h2>Vacation Calendar</h2>
                    <p>This personal project is a full stack web application created for my friends and I to use for an upcoming trip. It allows us to add any planned events to the calendar with details such as name, day, time and notes. All event data is stored within a MongoDB database and I created APIs to add, update or delete them.</p>
                    <ul className="project-tech">
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>EJS</li>
                        <li>MongoDB</li>
                    </ul>
                </div> 
                {/* <div className="microservices">
                    <h2>Microservice Architecture</h2>
                    <p>This in class project was built incrementally, eventually creating five different services that resembled a store like application. The Receiver service sent POST requests to the Storage service about any Buy or Sell events where it then stores them in a MySQL database. The Processing service populates the SQLite database with logging information and the Health service checks the health of all the other services. Finally, the Dashboard service is a small React app that shows statistics such as the highest buy price or most recent event. All the services are then deployed via Docker and Docker Compose.</p>
                    <ul className="project-tech">
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Kafka</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                        <li>Docker</li>
                    </ul>
                </div> */}
            </section>
        </>
    );
};

export default Projects;