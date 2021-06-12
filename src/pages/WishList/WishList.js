import React from 'react'
import { Row, Col, Container, Image, Button } from 'react-bootstrap'
import NavBar from '../../components/NavBar/NavBar';
import productPic from '../../images/shoeImg.jpeg';
import Footer from '../../components/Footer/Footer';
import './WishList.css'

function WishList() {


    function handleImageDelete() {

    }

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: 250 }}>
                <p className="display-1">Wishlist</p>
                <Row style={{marginTop: 200 }}>
                    <Col md={{ span: 5, offset: 1 }} className="p-0 image" style={{ backgroundColor: "red" }}>
                        <Image src={productPic} fluid />
                        <div
                            className="delete"
                            type="button"
                            onClick={() => handleImageDelete()}
                        >
                        <p style={{textAlign: "center"}}>X</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <p className="display-3 productName ml-3">Jordan Delta 2</p>
                        <p className="text-muted ml-4" style={{ fontSize: 34 }}>Nike shoes</p>
                        <div className="d-flex">
                        <Button variant="secondary" className="mx-2 mt-2" size="lg" block>Buy Now</Button>
                        <Button variant="outline-dark" className="mx-2 mt-2" size="lg" block>Add to cart</Button>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginTop: 200, textAlign: "right" }}>
                    <Col md={5} className="p-0 image order-md-2" style={{ backgroundColor: "red" }}>
                        <Image src={productPic} fluid />
                        <div
                            className="delete"
                            type="button"
                            onClick={() => handleImageDelete()}
                        >
                        <p style={{textAlign: "center"}}>X</p>
                        </div>
                    </Col>
                    <Col  md={{ span: 6, offset: 1 }} className="order-md-1">
                        <p className="display-3 productName mr-4">Jordan Delta 2</p>
                        <p className="text-muted mr-4" style={{ fontSize: 34 }}>Nike shoes</p>
                        <div className="d-flex">
                        <Button variant="outline-dark" className="mx-2 mt-2" size="lg" block>Add to cart</Button>
                        <Button variant="secondary" className="mx-2 mt-2" size="lg" block>Buy Now</Button>
                        </div>
                    </Col>
                </Row>

                <Row style={{marginTop: 200}}>
                    <Col md={{ span: 5, offset: 1 }} className="p-0 image order-1" style={{ backgroundColor: "red" }}>
                        <Image src={productPic} fluid />
                        <div
                            className="delete"
                            type="button"
                            onClick={() => handleImageDelete()}
                        >
                        <p style={{textAlign: "center"}}>X</p>
                        </div>
                    </Col>
                    <Col md={6} className="order-2">
                        <p className="display-3 productName ml-3">Jordan Delta 2</p>
                        <p className="text-muted ml-4" style={{ fontSize: 34 }}>Nike shoes</p>
                        <div className="d-flex">
                        <Button variant="secondary" className="mx-2 mt-2" size="lg" block>Buy Now</Button>
                        <Button variant="outline-dark" className="mx-2 mt-2" size="lg" block>Add to cart</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default WishList
