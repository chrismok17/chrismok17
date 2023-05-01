import React from "react";

const About = () => {
    return (
        <>
            <section className="about-me" id="about-me">
                <h1>About Me</h1>
                <p>Hi! I'm Chris and I am a recent computing graduate from British Columbia Institute of Technology (BCIT) with a passion for web development. My interest in web development started from my very first web development course in the Computer Information Technology program at BCIT. I love building projects from the ground up, solving problems and visually seeing the changes I am implementing.<br/><br/>

                During my time at BCIT, I have had the chance to work on many group projects in collaboration with Immunize.io and BCIT's School of Nursing. In my free time I also like to incorporate my own interests and hobbies into my personal projects.<br/><br/>
                
                I am excited to step into the industry and continue my learning with front-end, back-end and fullstack positions!</p>
                <div className="profile-photo">
                    <img src={require("../assets/me.jpg")} alt="Christopher Mok"/>
                </div>
                <div className="skills">
                    <div className="languages">
                        <h2>Languages/Frameworks:</h2>
                            <ul className="skills-list">
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                    
                    </div>
                    <div className="tools">
                        <h2>Tools:</h2>
                                <ul className="skills-list">
                                    <li>Git</li>
                                    <li>Docker</li>
                                    <li>Kubernetes</li>
                                    <li>Ansible</li>
                                    <li>Terraform</li>
                                </ul>
                    </div>
                    <div className="software">
                        <h2>Software/Platforms:</h2>
                            <ul className="skills-list">
                                <li>Linux</li>
                                <li>Amazon Web Services</li>
                                <li>Google Cloud</li>
                                <li>Microsoft Azure</li>
                                <li>Nginx</li>
                            </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;