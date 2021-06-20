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
    // const products = useSelector(state => state.sellerProducts.products);
   

    const products = [
        {
            "productId": 11,
            "productName": "Superfly",
            "category": "shoe",
            "color": "blue",
            "price": 3000,
            "qty": 4,
            "descr": "Shoe",
            "images": [
                {
                    "imgId": 1,
                    "filename": "1.jpeg",
                    "fileUrl": "http://localhost:8080/files1.jpeg",
                    "fileType": "image/jpeg",
                    "size": 77621
                },
                {
                    "imgId": 2,
                    "filename": "2.jpeg",
                    "fileUrl": "http://localhost:8080/files2.jpeg",
                    "fileType": "image/jpeg",
                    "size": 74103
                },
                {
                    "imgId": 3,
                    "filename": "3.jpeg",
                    "fileUrl": "http://localhost:8080/files3.jpeg",
                    "fileType": "image/jpeg",
                    "size": 124848
                }
            ]
        }
    ];

    useEffect(() => {
        dispatch(sellerProductActions.view(sellerId));
    }, [dispatch, sellerId]);


    const closeModal = () => {
        setShowModel(false);
    }

  

    const handleQtyChange = (productId, qtyChangle) => {
       dispatch(sellerProductActions.changeQuantity(productId, qtyChangle, sellerId))
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
                    products.reverse().map((item) => (
                        <Col>
                            <SellerProductCard 
                            productId={item.productId}
                            productName={item.productName}
                            descr={item.descr}
                            price={item.price}
                            quantity={item.qty}
                            images={item.images}
                            handleQtyChange={handleQtyChange}
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
