import React from 'react'
import { Row, Container, Col, Card, Button } from 'react-bootstrap'
import CartCard from '../../components/CartCard'
import NavBar from '../../components/NavBar'

function CartPage() {
    return (
        <>
            <NavBar />
            <Container>
                <p className="mb-5 display-4">Your Cart</p>
                <Row>
                    <Col lg={8}>
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </Col>
                    <Col lg={4}>
                            <Card className="shadow-sm">
                                <Card.Header as="h5">Price details</Card.Header>
                                <Card.Body>
                                <Row>
                                   <Col className="text-left">
                                   <Card.Text>
                                        Price
                                    </Card.Text>
                                   </Col>
                                   <Col className="text-right">
                                   <Card.Text>
                                    ₹20000
                                    </Card.Text>
                                   </Col>
                                   </Row>
                                   <Row>
                                   <Col className="text-left">
                                   <Card.Text>
                                        Delivery Charges
                                    </Card.Text>
                                   </Col>
                                   <Col className="text-right">
                                   <Card.Text>
                                    ₹80
                                    </Card.Text>
                                   </Col>
                                   </Row>
                                   <span className="LineSeperator my-2" />
                                   <Row>
                                   <Col className="text-left font-weight-bold">
                                   <Card.Text>
                                        Total Amount
                                    </Card.Text>
                                   </Col>
                                   <Col className="text-right font-weight-bold">
                                   <Card.Text>
                                    ₹20080
                                    </Card.Text>
                                   </Col>
                                   </Row>
                                    
                                </Card.Body>
                                <Card.Footer>
                                <Button href="/checkout" size="lg" block variant="primary">Check out</Button>
                                </Card.Footer>
                            </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CartPage
