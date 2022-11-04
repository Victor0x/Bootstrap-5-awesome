import React from "react";
import {Container,Col,Row} from "react-bootstrap";

const Services = () => {
    return(
        <div className="min-vh-100 d-flex align-item-center">
            <Container>
                <Row>
                    <Col>
                   
                        <h1 className="text-center fw-bold">Servics</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
                <br></br>
                <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 border justify-content-center" >
                    <Col className="text-center py-5 ">
                    <i class="fa-sharp fa-solid fa-coins fs-2 mb-4"></i>
                    <h5>Jurusan Terbaik</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nvkerlkgv lkdnvonwrongvosdnvong.</p>
                    </Col>

                    <Col className="text-center py-5 ">
                    <i class="fa-sharp fa-solid fa-coins fs-2 mb-4"></i>
                    <h5>Fasilitas</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nvkerlkgv lkdnvonwrongvosdnvong.</p>
                    </Col>

                    <Col className="text-center py-5">
                    <i class="fa-sharp fa-solid fa-coins fs-2 mb-4"></i>
                    <h5>Terakreditasi</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit nvkerlkgv lkdnvonwrongvosdnvong.</p>
                    
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );

};





export default Services;