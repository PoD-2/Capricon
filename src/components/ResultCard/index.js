import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import product4 from '../../images/product4.jpeg'
import { BsHeartFill } from "react-icons/bs";
import { useState } from 'react';

function ResultCard() {

    const [isHover, setIsHover] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Row className="p-3 mb-4">
            <Col md={{ span: 3, offset: 1 }}>
                <div onMouseEnter={() => setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
                onClick={()=>setIsClicked(!isClicked)} className="position-relative" style={{ backgroundColor: "limegreen", width: 200, height: 200 }}>
                    <Image src={product4} width={200} height={200} />
                    {isClicked && <BsHeartFill size={30} color="#ff007f" className="position-absolute" style={{ top: 10, right: 10, zIndex: 5 }} />}
                    {isHover && !isClicked &&
                     <BsHeartFill size={30} color="white" className="position-absolute" style={{ top: 10, right: 10, zIndex: 5 }} />}
                </div>
            </Col>
            <Col md={{ span: 6 }} >
                <p style={{ fontSize: 28, fontFamily: "Lato-Bold" }}>Sony Xperia</p>

                <p>3 GB RAM | 32 GB ROM | Expandable Upto 200</p>
                <p>13.21 cm (5.2 inch) Full HD Display</p>
                <p>23MP Rear Camera | 5MP Front Camera</p>

            </Col>
            <Col md={{ span: 2 }} className="text-right">
                <p style={{ color: "limegreen", fontSize: 25 }}>At ₹20000</p>
                <p style={{ color: "lightsteelblue", fontSize: 20 }}>Only 20 left</p>
            </Col>
            <span className="LineSeperator mt-3" />
        </Row>
    )
}


export default ResultCard