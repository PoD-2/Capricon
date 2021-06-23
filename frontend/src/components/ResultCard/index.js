import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import { BsHeartFill } from "react-icons/bs";
import { useState } from 'react';

function ResultCard(props) {

    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        
        setIsClicked(true);
        props.handleWishlistAdd(props.productId);

    }

  
    return (
        <Row className="p-3 mb-4">
            <Col md={{ span: 3, offset: 1 }}>
                <div onMouseEnter={() => setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
                onClick={()=>handleClick()} className="position-relative" style={{ backgroundColor: "limegreen", width: 200, height: 200 }}>
                    <Image src={props.images.length!==0 && props.images[0].fileUrl} width={200} height={200} />
                    {isClicked && <BsHeartFill size={30} color="#ff007f" className="position-absolute" style={{ top: 10, right: 10, zIndex: 5 }} />}
                    {isHover && !isClicked &&
                     <BsHeartFill size={30} color="white" className="position-absolute" style={{ top: 10, right: 10, zIndex: 5 }} />}
                </div>
            </Col>
            <Col md={{ span: 6 }} onClick={() => props.onClick(props.productId)}>
                <p style={{ fontSize: 28, fontFamily: "Lato-Bold" }}>{props.productName}</p>

                <p>Category: {props.category}</p>
                <p>color: {props.color}</p>
                <p>23MP Rear Camera | 5MP Front Camera</p>

            </Col>
            <Col md={{ span: 2 }} className="text-right">
                <p style={{ color: "limegreen", fontSize: 25 }}>At ₹{props.price}</p>
                <p style={{ color: "lightsteelblue", fontSize: 20 }}>Only {props.quantity} left</p>
            </Col>
            <span className="LineSeperator mt-3" />
        </Row>
    )
}


export default ResultCard