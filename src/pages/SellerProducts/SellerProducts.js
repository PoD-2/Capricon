import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import SellerProductCard from '../../components/SellerProductCard'
import ProductUpload from '../../components/ProductUpload';

function SellerProducts() {

    const [showModal, setShowModel] = useState(false);


    const closeModal = () => {
        setShowModel(false);
    }

    return (
        <div>
            <Row>
                <Col>
                    <h3 className="sellerPageTitle">Products</h3>
                </Col>
                <Col className="text-right">
                    <Button variant="info" onClick={() => setShowModel(true)}>Add Product</Button>
                </Col>
            </Row>

            <span className="LineSeperator mb-3 mt-2" />
            <ProductUpload
                showModal={showModal}
                closeModal={closeModal}
            />
            <div>
                <Row className="">
                    <Col>
                        <SellerProductCard />
                    </Col>
                    <Col>
                        <SellerProductCard />
                    </Col>
                    <Col>
                        <SellerProductCard />
                    </Col>
                    <Col>
                        <SellerProductCard />
                    </Col>
                    <Col>
                        <SellerProductCard />
                    </Col>
                    <Col>
                        <SellerProductCard />
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default SellerProducts
