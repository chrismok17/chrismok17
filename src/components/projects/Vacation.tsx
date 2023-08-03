import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Vacation = () => {
    return (
        <>
            <Carousel controls={true} interval={7000} touch={true} fade className="w-100" pause="hover">
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Calendar.jpg')} alt="Add Announcements"/>
                    {/* <Carousel.Caption>
                        <h5>Viewing Calendar of Events</h5>
                    </Carousel.Caption> */}
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Planned.jpg')} alt="Add Announcements"/>
                    {/* <Carousel.Caption>
                        <h5>Viewing Bucketlist Items</h5>
                    </Carousel.Caption> */}
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Details.jpg')} alt="Add Announcements"/>
                    {/* <Carousel.Caption>
                        <h5>Viewing the Day's Details</h5>
                    </Carousel.Caption> */}
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Add.jpg')} alt="Add Announcements"/>
                    {/* <Carousel.Caption>
                        <h5>Adding New Item</h5>
                    </Carousel.Caption> */}
                </CarouselItem>

            </Carousel>
        </>
    )
};

export default Vacation;