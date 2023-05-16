import React from "react";

const Experience = () => {
    return (
        <>
            <div className="experience" id="experience">
                <h1>Experience</h1>
                <div className="ggc">
                    <h2>Website Administrator - Guildford Golf & Country Club</h2>
                    <h3>January 2023 - Present</h3>
                    <ul className="experience-list">
                        <li>Manage content updates and features based on user feedback and owner requirements using WordPress.</li>
                        <li>Conducted regular audits of the website to ensure all information was up-to-date and accurate, and made necessary updates and revisions to improve user experience.</li>
                        <li>Created new posts to notify customers about upcoming events.</li>
                        <li>Optimized the way links are embedded to be in one block rather than several separate blocks.</li>
                        <li>Introduced Trello to the company to help organize tasks related to the website.</li>
                        <li><a className="external" href="https://www.guildfordgolf.com/">Visit Site <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg></a></li>
                    </ul>
                </div>
                <div className="cse">
                    <h2>Line Cook - Canucks Sports & Entertainment</h2>
                    <h3>September 2018 - September 2021</h3>
                    <ul className="experience-list">
                        <li>Lead the grill team of four cooks through preparation and service for up to 750 people per night.</li>
                        <li>Trained on four stations: Grill, Fryers, Salads and Appetizers.</li>
                        <li>Collaborated with the Catering team to ensure seamless execution of events including set up, service and breakdown.</li>
                        <li>Adapted quickly to changing situations during service, including sudden menu changes and unexpected rush periods, to ensure smooth operations.</li>
                        <li>Prepared and helped run the Owner's Canada Day party for 200 guests.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Experience;