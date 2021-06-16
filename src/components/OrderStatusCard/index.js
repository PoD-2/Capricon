import React from 'react'
import { Image, Form, Row } from 'react-bootstrap';
import ProductPic from '../../images/shoeImg.jpeg'

function OrderStatusCard() {
    return (
        <div className="d-flex p-4 my-4" style={{ borderRadius: 5, flexDirection: "row", backgroundColor: "rgba(112, 112, 112, 0.1)" }}>
            <div className="d-flex" style={{ flex: 1, flexDirection: "row" }}>
                <Image src={ProductPic} className="p-1" style={{ width: 200, borderRadius: 10 }} fluid />
                <div className="p-3">
                    <h5 style={{ fontSize: 24 }}>Jordan Delta 2</h5>
                    <p className="text-muted text-monospace" style={{ fontSize: 18 }}>Nike</p>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <h5 className="" style={{ fontSize: 24 }}>Buyer Details:</h5>
                <p className="text-muted text-monospace my-0" style={{ fontSize: 18 }}>Zaman</p>
                <p className="text-muted text-monospace my-0" style={{ fontSize: 18 }}>9501217625</p>
                <p className="text-muted text-monospace" style={{ fontSize: 18 }}>door no 4, good street, velachery, chennai</p>
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
            </div>
        </div>
    )
}

export default OrderStatusCard
