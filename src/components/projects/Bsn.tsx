import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ImageModal from "../ImageModal";

const Bsn = () => {
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
                    <img className="d-block w-100" src={require('../../assets/images/bsn_login.jpg')} alt="Login Page" onClick={() => {openImage("Login Page", require('../../assets/images/bsn_login.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_admin_home.jpg')} alt="Admin Home" onClick={() => {openImage("Admin Home", require('../../assets/images/bsn_admin_home.jpg'))}}/>
                </CarouselItem>
                
                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_add_announcement.jpg')} alt="Add Announcements" onClick={() => {openImage("Add Announcements", require('../../assets/images/bsn_add_announcement.jpg'))}}/>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_student_home.jpg')} alt="Student Home" onClick={() => {openImage("Student Home", require('../../assets/images/bsn_student_home.jpg'))}}/>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_calendar.jpg')} alt="Calendar" onClick={() => {openImage("Login Page", require('../../assets/images/bsn_calendar.jpg'))}}/>
                </CarouselItem>

                <CarouselItem>
                    <img className="d-block w-100" src={require('../../assets/images/bsn_detail.jpg')} alt="Day Details" onClick={() => {openImage("Login Page", require('../../assets/images/bsn_detail.jpg'))}}/>
                </CarouselItem>

            </Carousel>
            <ImageModal show={showModal} title={modalTitle} image={modalImage} onHide={closeImageModal}/>
        </>
    )
};

export default Bsn;