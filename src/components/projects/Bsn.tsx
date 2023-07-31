import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Bsn = () => {
    return (
        <>
            <Carousel variant="dark" controls={true} interval={7000} touch={true} fade className="w-100">
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_login.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <p>Login Page</p>
                    </Carousel.Caption>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_admin_home.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Admin Home</h5>
                    </Carousel.Caption>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_add_announcement.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Add Announcements</h5>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_student_home.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Student Home</h5>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_calendar.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Calendar</h5>
                    </Carousel.Caption>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100 img-fluid" src={require('../../assets/images/bsn_detail.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Day Details</h5>
                    </Carousel.Caption>
                </CarouselItem>

            </Carousel>
        </>
    )
};

export default Bsn;