import React from "react";
import { Link } from "react-scroll";
import ImageGallery from "react-image-gallery";

import bsn_login from "../assets/images/bsn_login.jpg";
import bsn_admin_home from "../assets/images/bsn_admin_home.jpg";
import bsn_add_announcement from "../assets/images/bsn_add_announcement.jpg";
import bsn_student_home from "../assets/images/bsn_student_home.jpg";
import bsn_calendar from "../assets/images/bsn_calendar.jpg";
import bsn_detail from "../assets/images/bsn_detail.jpg";

import kdrama_favourites from "../assets/images/kdrama_favourites.jpg";
import kdrama_add from "../assets/images/kdrama_add.jpg";
import kdrama_new from "../assets/images/kdrama_new_fav.jpg";

import vac_calendar from "../assets/images/Vac_Calendar.jpg";
import vac_planned from "../assets/images/Vac_Planned.jpg";
import vac_details from "../assets/images/Vac_Details.jpg";
import vac_add from "../assets/images/Vac_Add.jpg";

const Projects = () => {
    const bsn_images = [
        {
            original: bsn_login,
            thumbnail: bsn_login,
            description: "Login page"
        },
        {
            original: bsn_admin_home,
            thumbnail: bsn_admin_home,
            description: "Admin home page"
        },
        {
            original: bsn_add_announcement,
            thumbnail: bsn_add_announcement,
            description: "Creating new announcement"
        },
        {
            original: bsn_student_home,
            thumbnail: bsn_student_home,
            description: "Student's home page"
        },
        {
            original: bsn_calendar,
            thumbnail: bsn_calendar,
            description: "Calendar"
        },
        {
            original: bsn_detail,
            thumbnail: bsn_detail,
            description: "Viewing details of the day"
        },
    ];

    const kdrama_images = [
        {
            original: kdrama_add,
            thumbnail: kdrama_add,
            description: "Searching and Adding to Favourites"
        },
        {
            original: kdrama_new,
            thumbnail: kdrama_new,
            description: "Viewing recently added Korean Drama"
        },
        {
            original: kdrama_favourites,
            thumbnail: kdrama_favourites,
            description: "Viewing all favourites"
        },
    ]

    const vacation_images = [
        {
            original: vac_calendar,
            thumbnail: vac_calendar,
            description: "Viewing all events on calendar"
        },
        {
            original: vac_planned,
            thumbnail: vac_planned,
            description: "Showing all planned events with no set date"
        },
        {
            original: vac_details,
            thumbnail: vac_details,
            description: "Show all events for the day"
        },
        {
            original: vac_add,
            thumbnail: vac_add,
            description: "Adding new event"
        },
    ]
    return (
        <>
            <div className="projects" id="projects"> 
                <h1>Projects</h1>
                <div className="openlab">
                    <h2>BCIT Nursing's OpenLab Scheduler (2023)</h2>
                    <p>A full stack web app for the faculty and students of Nursing to use. Features a faculty view to edit OpenLab schedule and create announcements. Students can view the schedule, receive notifications and view case studies. This project was built from scratch as a part of the Industry Sponsored Student Projects course.</p>
                    <ImageGallery items={bsn_images} autoPlay={true} slideDuration={1000} slideInterval={5000}/>
                    <ul className="project-tech">
                        <li>React</li>
                        <li>Node</li>
                        <li>MySQL</li>
                        <li>Docker</li>
                    </ul>
                </div>
                <div className="kdrama">
                    <h2>Korean Drama Watchlist (2022)</h2>
                    <p>A React application to search and add Korean dramas to a watchlist. Queries the Movie Database API and filters the results based on the language. The watchlist takes advantage of state management and local storage to save your list of Korean Dramas.</p>
                    <ImageGallery items={kdrama_images} autoPlay={true} slideDuration={1000} slideInterval={5000}/>
                    <ul className="project-tech">
                        <li>React</li>
                        <li><a className="external" href="https://github.com/chrismok17/kdrama-watchlist">GitHub <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a></li>
                        <li ><a className="external" href="https://fabulous-brioche-c04d2a.netlify.app/">Visit Site <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></a></li>
                    </ul>
                </div>
                <div className="vacation">
                    <h2>Vacation Calendar (2022)</h2>
                    <p>This personal project is a full stack web application created for my friends and I to use for an upcoming trip. It allows us to add any planned events to the calendar with details such as name, day, time and notes. All event data is stored within a MongoDB database and I created APIs to add, update or delete them.</p>
                    <ImageGallery items={vacation_images} autoPlay={true} slideDuration={1000} slideInterval={5000}/>
                    <ul className="project-tech">
                        <li>JavaScript</li>
                        <li>Node</li>
                        <li>EJS</li>
                        <li>MongoDB</li>
                    </ul>
                </div> 
                <div>
                    <p>You can find more projects at my <Link id="scroll-to-links" to="links" smooth={true} duration={250} isDynamic={true}>
                        GitHub
                        </Link> linked below!</p>
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
            </div>
        </>
    );
};

export default Projects;