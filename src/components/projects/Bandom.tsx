import React, { useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import ImageModal from "../ImageModal";

const Bandom = () => {
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

    const carouselStyle = {
        maxHeight: "550px", // Set the maximum height for the Carousel
    };

    return (
        <>
            <Carousel controls={true} interval={7000} touch={true} fade className="w-100" pause="hover">
                <CarouselItem className="d-flex justify-content-evenly">
                    <img style={carouselStyle} className="d-block w-auto" src={require('../../assets/images/bandom_home.jpg')} alt="Home Page" onClick={() => {openImage("Home Page", require('../../assets/images/bandom_home.jpg'))}}/>
                    <img style={carouselStyle} className="d-block w-auto" src={require('../../assets/images/bandom_catalogue.jpg')} alt="Product Catalogue" onClick={() => {openImage("Product Catalogue", require('../../assets/images/bandom_catalogue.jpg'))}}/>
                    <img style={carouselStyle} className="d-block w-auto" src={require('../../assets/images/bandom_added_to_cart.jpg')} alt="Added to Cart" onClick={() => {openImage("Added to Cart", require('../../assets/images/bandom_added_to_cart.jpg'))}}/>
                </CarouselItem>

                <CarouselItem className="d-flex justify-content-evenly">
                    <img style={carouselStyle} className="d-block w-auto" src={require('../../assets/images/bandom_cart.jpg')} alt="Cart" onClick={() => {openImage("Cart", require('../../assets/images/bandom_cart.jpg'))}}/>
                    <img style={carouselStyle} className="d-block w-auto" src={require('../../assets/images/bandom_checkout.jpg')} alt="Checkout" onClick={() => {openImage("Checkout", require('../../assets/images/bandom_checkout.jpg'))}}/>
                    <img style={carouselStyle} className="d-block w-auto" src={require('../../assets/images/bandom_confirmation.jpg')} alt="Order Confirmation" onClick={() => {openImage("Order Confirmation", require('../../assets/images/bandom_confirmation.jpg'))}}/>
                </CarouselItem>

            </Carousel>
            <ImageModal show={showModal} title={modalTitle} image={modalImage} onHide={closeImageModal} set-width="35%"/>
        </>
    )
};

export default Bandom;