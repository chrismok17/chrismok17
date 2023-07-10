import React from "react";
import SkillsSection from './SkillsSection';

const About = () => {
    return (
        <>
        <div className="container my-5">
            <div className="card mx-auto p-5" data-bs-theme='dark' id="about-me">
                <div className="row g-0">
                    <div className="col-md-8 d-flex align-items-container">
                        <div className="card-body">
                            <h1 className="card-title">About Me</h1>
                                <div className="card-text">
                                    Hi! I'm Chris and I am a recent computing graduate from British Columbia Institute of Technology (BCIT) with a passion for web development. My interest in web development started from my very first web development course in the Computer Information Technology program at BCIT. I love building projects from the ground up, solving problems and visually seeing the changes I am implementing.<br/><br/>

                                    During my time at BCIT, I have had the chance to work on many group projects in collaboration with Immunize.io and BCIT's School of Nursing. In my free time I also like to incorporate my own interests and hobbies into my personal projects.<br/><br/>

                                    I am excited to step into the industry and continue my learning with front-end, back-end and fullstack positions!
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end align-items-center">
                        <img className="img-fluid" src={require("../assets/images/me.jpg")} alt="Christopher Mok"/>
                    </div>
                    <SkillsSection />
                </div>
            </div>
        </div>
            
        </>
    );
};

export default About;