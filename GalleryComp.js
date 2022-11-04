import React from "react";
import {Container,Col, Row} from "react-bootstrap";
import Gallery1 from "../css/asset/img/Gallery/1.jpg"
import Gallery2 from "../css/asset/img/Gallery/2.jpg"
import Gallery4 from "../css/asset/img/Gallery/4.jpg"



const GalleryComp = () =>{

        return(
            <div className="galley min-vh-100 d=flex align-item-centerss">
                <Container>
                    <p class="text-center display-3">Gallery</p>
                    <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-center">
                        <Col>
                            <img src={Gallery1} alt="unplash.com" className="w-100"/>
                        </Col>
                        <Col>
                            <img src={Gallery2} alt="unplash.com" className="w-100"/>
                        </Col>
                        <Col>
                            <img src={Gallery1} alt="unplash.com" className="w-100"/>
                        </Col>
                        <Col>
                            <img src={Gallery4} alt="unplash.com" className="w-100"/>
                        </Col>
                        <Col>
                            <img src={Gallery2} alt="unplash.com" className="w-100"/>
                        </Col>
                        {/* <Col>
                            <img src={Gallery4} alt="unplash.com" className="w-100"/>
                        </Col> */}
                    </Row>
                </Container>


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        )




}

export default GalleryComp;