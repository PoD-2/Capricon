import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import SellerProductCard from '../../components/SellerProductCard'
import ProductUpload from '../../components/ProductUpload';
import { sellerProductActions } from '../../redux/actions/seller.product.actions';
import { useDispatch, useSelector } from 'react-redux';

function SellerProducts() {

    const [showModal, setShowModel] = useState(false);
    const dispatch = useDispatch();
    const sellerId = useSelector(state => state.sellerAuth.seller.sellerId);
    const products = useSelector(state => state.sellerProducts.products);

    useEffect(() => {
        dispatch(sellerProductActions.view(sellerId));
    }, [dispatch, sellerId]);


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
                <Row>
                {products && products.length !== 0 && (
                    products.map((item) => (
                        <Col>
                            <SellerProductCard 
                            productId={item.productId}
                            productName={item.productName}
                            descr={item.descr}
                            price={item.price}
                            quantity={item.qty}
                            images={item.images}
                            />
                            </Col>
                        ))
                    )}
                </Row>
            </div>

        </div>
    )
}

export default SellerProducts
