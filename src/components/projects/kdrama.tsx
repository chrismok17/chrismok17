import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

const Kdrama = () => {
    return (
        <>
            <Carousel variant="dark" controls={true} interval={7000} touch={true} fade className="w-100">
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/kdrama_add.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Search and Add Korean Dramas</h5>
                    </Carousel.Caption>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/kdrama_new_fav.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Adding to Favourites</h5>
                    </Carousel.Caption>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/kdrama_favourites.jpg')} alt="Add Announcements"/>
                    <Carousel.Caption>
                        <h5>Favourites List</h5>
                    </Carousel.Caption>
                </CarouselItem>

            </Carousel>
        </>
    )
};

export default Kdrama;