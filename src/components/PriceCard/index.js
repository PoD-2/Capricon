import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

function PriceCard(props) {
    return (
        <>
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
                                ₹{props.totalPrice}
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
                                ₹{props.totalPrice + 80}
                            </Card.Text>
                        </Col>
                    </Row>

                </Card.Body>
                {props.checkoutButton && (
                    <Card.Footer>
                    <Button onClick={() => props.handleBuy()} size="lg" block variant="primary">Check out</Button>
                </Card.Footer>
                )}
              
            </Card>
        </>
    )
}

export default PriceCard
