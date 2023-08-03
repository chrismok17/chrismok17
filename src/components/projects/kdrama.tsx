import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ImageModal from "../ImageModal";

const Kdrama = () => {
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
                    <img className="d-block w-100" src={require('../../assets/images/kdrama_add.jpg')} alt="Search" onClick={() => {openImage("Search", require('../../assets/images/kdrama_add.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/kdrama_new_fav.jpg')} alt="Adding Favourite" onClick={() => {openImage("Add to Favourites", require('../../assets/images/kdrama_new_fav.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/kdrama_favourites.jpg')} alt="Viewing all Favourites" onClick={() => {openImage("Viewing Favourites", require('../../assets/images/kdrama_favourites.jpg'))}}/>
                </CarouselItem>

            </Carousel>
            <ImageModal show={showModal} title={modalTitle} image={modalImage} onHide={closeImageModal}/>
        </>
    )
};

export default Kdrama;