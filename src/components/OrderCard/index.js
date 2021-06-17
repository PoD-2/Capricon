import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import product4 from '../../images/product4.jpeg';

function OrderCard() {
    return (
        <div>
             <Row className="p-3 mb-4">
            <Col md={3}>
                <div className="position-relative" style={{ backgroundColor: "limegreen", width: 200, height: 200 }}>
                    <Image src={product4} width={200} height={200} />
                </div>
            </Col>
            <Col md={{ span: 6, offset: 1 }} >
                <p style={{ fontSize: 28, fontFamily: "Lato-Bold", marginBottom: 0 }}>Sony Xperia</p>
                <p className="text-muted text-monospace mb-1">Sony</p>
                <p className="text-muted text-monospace mr-2 mb-4">Quantity: 1</p>
                <h4 className="mr-2 font-weight-bold">₹20000</h4>
            </Col>
            <Col md={{ span: 2 }} className="text-right">
                <p style={{ color: "black", fontSize: 25 }}>Order Status: Packed</p>
            </Col>
            <span className="LineSeperator mt-3" />
        </Row>
        </div>
    )
}

export default OrderCard
