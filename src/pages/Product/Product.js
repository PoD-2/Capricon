import React from 'react'
import { Carousel } from "react-bootstrap";
import { Row, Col, Button, Container } from 'react-bootstrap'
import product4 from '../../images/shoeImg.jpeg'
import { HiOutlineMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';


function Product() {
    return (
        <>
            <NavBar />
            <Container className="mb-3 mt-5">
                <Row>
                    <Col md={{ span: 5 }}>
                        <div className="position-relative mb-4"  >
                            <Carousel className="shadow"   >
                                <Carousel.Item interval={60000}>
                                    <img
                                        className="adImage"
                                        src={product4}
                                        alt="First slide"
                                        style={{ width: '100%', height: 450 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={60000}>
                                    <img
                                        className="d-block w-100 adImage"
                                        src={product4}
                                        alt="Second slide"
                                        style={{ width: '100%',  height: 450 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={60000}>
                                    <img
                                        className="d-block w-100 adImage"
                                        src={product4}
                                        alt="Third slide"
                                        style={{ width: '100%',  height: 450 }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </Col>
                    <Col md={{ span: 6, offset: 1 }}>
                        <p style={{ fontSize: 40, fontFamily: "Lato-Bold" }}>Sony Xperia</p>
                        <div style={{ fontSize: 15 }}>
                            <p>3 GB RAM | 32 GB ROM | Expandable Upto 200</p>
                            <p>13.21 cm (5.2 inch) Full HD Display</p>
                            <p>23MP Rear Camera | 5MP Front Camera</p>
                            <p>3 GB RAM | 32 GB ROM | Expandable Upto 200</p>
                            <p>13.21 cm (5.2 inch) Full HD Display</p>
                            <p>23MP Rear Camera | 5MP Front Camera</p>
                        </div>
                        <p style={{ color: "limegreen", fontSize: 25 }}>At ₹20000</p>
                        <p style={{ color: "#0165fc", fontSize: 20 }}>Only 20 left</p>
                        <div className="d-flex">
                            <Button variant="secondary" className="mx-2 mt-2" size="lg" block>Buy Now</Button>
                            <Button variant="outline-dark" className="mx-2 mt-2" size="lg" block>Add to cart</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ fontSize: 30, fontFamily: "CormorantGaramond-Regular" }}>Seller Details:</p>
                        <p style={{ fontSize: 20 }} className="mb-2">Sony</p>
                        <p className="mb-2"><HiOutlineMail size={24} style={{ float: "left" }} />sonycs@sony.com</p>
                        <p className="mb-2"><FaPhoneAlt size={22} style={{ float: "left" }} />+91 99999 99999</p>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default Product