import React, { useState, useEffect } from 'react';
import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap'
import product4 from '../../images/product4.jpeg'
import './CartCard.css';
import { FaTrash } from "react-icons/fa";

function CartCard(props) {

    const [quantity, setQuantity] = useState(props.qty);



    const quantityLimiter = (value) => {
        if (value < 1) {
            setQuantity(1);
        } else {
            setQuantity(value);
        }
    }


    useEffect(() => {
        setQuantity(props.qty);
    }, [props])


    return (
        <Row className="p-3 mb-4">
            <Col md={3}>
                <div className="position-relative" style={{ backgroundColor: "limegreen", width: 200, height: 200 }}>
                    <Image src={product4} width={200} height={200} />
                    <div
                        className="delete"
                        type="button"
                        onClick={() => props.removeCartItem(props.productId)}
                    >
                       <FaTrash size={22} color="white" />
                    </div>
                </div>
            </Col>
            <Col md={{ span: 6, offset: 1 }} >
                <p style={{ fontSize: 28, fontFamily: "Lato-Bold", marginBottom: 0 }}>{props.productName}</p>
                <p className="text-muted text-monospace">{props.descr}</p>
                <Row className="d-flex align-items-center text-center m-auto">
                    <p className="text-muted text-monospace mr-2 pt-3">Quantity:</p>
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button variant="dark" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1 ? true : false}>-</Button>
                        <input maxLength={3} className="text-center" type="number" value={quantity} onChange={(e) => quantityLimiter(e.target.value)} style={{ width: 40 }} />
                        <Button variant="dark" onClick={() => setQuantity(quantity + 1)}>+</Button>
                    </ButtonGroup>
                </Row>
            </Col>
            <Col md={{ span: 2 }} className="text-right">
                <p style={{ color: "black", fontSize: 25 }}>Price: ₹{props.price}</p>
            </Col>
            <span className="LineSeperator mt-3" />
        </Row>
    )
}


export default CartCard