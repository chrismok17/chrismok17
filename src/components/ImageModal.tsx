import React from "react";
import { Modal, Image } from "react-bootstrap";

const ImageModal = (props: any) =>{
    const imageWidth = props["set-width"] || "100%";
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} size="xl" fullscreen="lg-down" centered={true} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                        <Image className="modal-image" fluid src={props.image} style={{ width: imageWidth, height: "100%", objectFit: "contain" }} />
                    </div>
                    </Modal.Body>
            </Modal>
        </>
    )
}

export default ImageModal;