import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ImageModal from "../ImageModal";

const MovieTracker = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalImage, setModalImage] = useState("");

    const openImage = (title: string, image: string) => {
        setModalTitle(title);
        setModalImage(image);
        setShowModal(true);
    };

    const closeImageModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Carousel controls={true} interval={7000} touch={true} fade className="w-100" pause="hover">
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/mt_home.jpg')} alt="Home Page" onClick={() => {openImage("Home Page", require('../../assets/images/mt_home.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/mt_watchlist.jpg')} alt="Watchlist" onClick={() => {openImage("Watchlist", require('../../assets/images/mt_watchlist.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/mt_add.jpg')} alt="Add New Movie" onClick={() => {openImage("Add New Movie", require('../../assets/images/mt_add.jpg'))}}/>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/mt_details.jpg')} alt="Viewing Movie's Details" onClick={() => {openImage("Viewing Movie's Details", require('../../assets/images/mt_details.jpg'))}}/>
                </CarouselItem>

            </Carousel>
            <ImageModal show={showModal} title={modalTitle} image={modalImage} onHide={closeImageModal}/>
        </>
    )
};

export default MovieTracker;