import React from 'react'
import { Image, Form, Row, Col } from 'react-bootstrap';

function OrderStatusCard(props) {
    return (
        <Row className="p-4 my-4" style={{ borderRadius: 5, backgroundColor: "rgba(112, 112, 112, 0.1)" }}>
            <Col>
               <Row>
                <Image src={props.image} className="p-1" style={{ width: 200, borderRadius: 10 }} fluid />
                <div className="p-3">
                    <h5 style={{ fontSize: 24 }}>{props.productName}</h5>
                    <p className="text-muted text-monospace" style={{ fontSize: 18 }}>Price: ₹{props.price}</p>
                </div>
                </Row>
            </Col>
            <Col>
                <h5 className="" style={{ fontSize: 24 }}>Buyer Details:</h5>
                <p className="text-muted text-monospace my-0" style={{ fontSize: 18 }}>{props.customerName}</p>
                <p className="text-muted text-monospace my-0" style={{ fontSize: 18 }}>{props.phoneNumber}</p>
                <p className="text-muted text-monospace" style={{ fontSize: 18 }}>{`${props.address.line}, 
                ${props.address.city}-${props.address.pincode}`}</p>
                <Row className="ml-1">
                    <span className="mr-3" style={{ fontSize: 24 }}>Order Status:</span>
                    <Form.Group controlId="formGridState">
                        <Form.Control as="select" defaultValue="Packed">
                            <option>Packed</option>
                            <option>Shipped</option>
                            <option>Delivering</option>
                            <option>Delivered</option>
                        </Form.Control>
                    </Form.Group>
                </Row>
            </Col>
        </Row>
    )
}

export default OrderStatusCard
