import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ImageModal from "../ImageModal";

const Vacation = () => {
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
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Calendar.jpg')} alt="Calendar View" onClick={() => {openImage("Calendar View", require('../../assets/images/Vac_Calendar.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Planned.jpg')} alt="Viewing Bucketlist Items" onClick={() => {openImage("Viewing Bucketlist Items", require('../../assets/images/Vac_Planned.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Details.jpg')} alt="Viewing Specific Day's Details" onClick={() => {openImage("Viewing Specific Day's Details", require('../../assets/images/Vac_Details.jpg'))}}/>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/Vac_Add.jpg')} alt="Add New Events" onClick={() => {openImage("Add New Events", require('../../assets/images/Vac_Add.jpg'))}}/>
                </CarouselItem>

            </Carousel>
            <ImageModal show={showModal} title={modalTitle} image={modalImage} onHide={closeImageModal}/>
        </>
    )
};

export default Vacation;