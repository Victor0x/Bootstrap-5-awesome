import React,{useState,useEffect} from "react";
import {Navbar,Nav,Container, NavbarBrand,NavLink} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";


        const NavbarComp = () => {

            const [changeColor,setChangeColor] = useState (false);

            const changeBakgroundColor = () => {

                if(window.scrollY>680){
                    setChangeColor(true);
                }else{ 
                setChangeColor(false);
                }
        };
        useEffect(() => {
            changeBakgroundColor();

            window.addEventListener("scroll",changeBakgroundColor);
        });
 
         return(
        
        <div className="sticky-top">
           

            <Navbar variant="dark" expand="lg" className={ changeColor ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href id="#Home">SMKN 1 BANGKINANG</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="mx-2" >Home</Nav.Link>
                            <Nav.Link href="#Gallery" className="mx-2">Gallery</Nav.Link>
                            <Nav.Link href="#Services" className="mx-2">Services</Nav.Link>
                            <Nav.Link href="#FAQ" className="mx-2">FAQ</Nav.Link>
                            
                        </Nav>
                        
                    </Navbar.Collapse>

                </Container>
            </Navbar>
            </div>
      






         
    )

         }
         

export default NavbarComp;