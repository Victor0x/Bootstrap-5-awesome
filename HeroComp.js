import React from "react";
import {Container,Col, Row} from "react-bootstrap";

function HeroComp(){
    return(

        <div className="hero min-vh-100 w-100">
            <Container>
                <Row>
                    <Col className="text-white text-center">
                        <h1>SMKN 1 BANGKINANG</h1>
                        <p className="text-white-50">Mengukir Prestasi Berfaedah lah Diri</p>
                    </Col>
                </Row>
            </Container>
            </div>
    )
    }

export default HeroComp;