import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function OrderCard(props) {
    return (
        <div>
            <Row className="p-3 mb-4">
            <Col md={3}>
                <div className="position-relative" style={{ width: 200, height: 200 }}>
                    <Image src={props.images.length!==0 && props.images[0].fileUrl} width={200} height={200} />
                </div>
            </Col>
            <Col md={{ span: 4, offset: 1 }} >
                <p style={{ fontSize: 28, fontFamily: "Lato-Bold", marginBottom: 0 }}>{props.productName}</p>
                <p className="text-muted text-monospace mr-2 mb-2">Qty: {props.qty}</p>
                <p className="text-muted text-monospace mr-2 mb-2">Billing Address: {props.address}</p>
                <p className="text-muted text-monospace mr-2 mb-2">Booking Date: {props.bookDate}</p>
                <h4 className="mr-2 font-weight-bold">Price: {props.amount}</h4>
            </Col>
            <Col md={{ span: 4 }} className="text-right">
                <p style={{ color: "black", fontSize: 25 }}><span style={{fontWeight:"bold"}}>Order Status:</span> {props.status}</p>
                <p className="text-muted text-monospace mb-1">{props.email}</p>
                <p className="text-muted text-monospace mb-1">{props.phoneNumber}</p>
                <p style={{ color: "black", fontSize: 25, fontFamily: "Lato-Bold" }}>{props.payment}</p>
            </Col>
            <span className="LineSeperator mt-3" />
        </Row>
        </div>
    )
}

export default OrderCard