import React, {useEffect, useState} from 'react'
import { Carousel } from "react-bootstrap";
import { Row, Col, Button, Container, Spinner } from 'react-bootstrap'
import product4 from '../../images/shoeImg.jpeg'
import { HiOutlineMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { alertActions, cartActions } from '../../redux/actions';
import { searchBarServices } from "../../services/searchBar.service";
import { useHistory } from "react-router-dom";


function Product(props) {

    const { productId } = (props.location && props.location.state) || {};
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const userId = useSelector(state => state.userAuth.user.userId);
    const dispatch = useDispatch();
    let history = useHistory();


     // search product
     useEffect(() => {
        if(productId === undefined) return;
        setIsLoading(true);
        setProduct({});
        searchBarServices.productDetails(productId)
        .then(
            productDetails => {
                setProduct(productDetails);
            },
            error => {
                dispatch(alertActions.error(error.toString()));
            })
            .finally(
                setIsLoading(false)
            );
    }, [dispatch, productId]);

    const handleCartButton = () => {
        dispatch(cartActions.add(userId, productId, history));
    }

    return (
        <>
            <NavBar />
            <Container className="mb-3 mt-5">
            {isLoading && (
                        <div className="LoadingWrapper vh-100">
                            <Spinner animation="grow" color="#000" size={20} />
                        </div>
                    )}
                <Row>
                    <Col md={{ span: 5 }}>
                        <div className="position-relative mb-4"  >
                            <Carousel className="shadow"   >
                                <Carousel.Item interval={60000}>
                                    <img
                                        className="adImage"
                                        src={product4}
                                        alt="First slide"
                                        style={{ width: '100%', height: 450 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={60000}>
                                    <img
                                        className="d-block w-100 adImage"
                                        src={product4}
                                        alt="Second slide"
                                        style={{ width: '100%',  height: 450 }}
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={60000}>
                                    <img
                                        className="d-block w-100 adImage"
                                        src={product4}
                                        alt="Third slide"
                                        style={{ width: '100%',  height: 450 }}
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </Col>
                    <Col md={{ span: 6, offset: 1 }}>
                        <p style={{ fontSize: 40, fontFamily: "Lato-Bold" }}>{product.productName}</p>
                        <div style={{ fontSize: 15 }}>
                            <p>Category: {product.category}</p>
                            <p>Color: {product.color}</p>
                            <p>Features: {product.descr}</p>
                            <p>3 GB RAM | 32 GB ROM | Expandable Upto 200</p>
                            <p>13.21 cm (5.2 inch) Full HD Display</p>
                            <p>23MP Rear Camera | 5MP Front Camera</p>
                        </div>
                        <p style={{ color: "limegreen", fontSize: 25 }}>At ₹{product.price}</p>
                        <p style={{ color: "#0165fc", fontSize: 20 }}>Only {product.qty} left</p>
                        <div className="d-flex">
                            <Button variant="secondary" className="mx-2 mt-2" size="lg" block>Buy Now</Button>
                            <Button onClick={() => handleCartButton} variant="outline-dark" className="mx-2 mt-2" size="lg" block>Add to cart</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ fontSize: 30, fontFamily: "CormorantGaramond-Regular" }}>Seller Details:</p>
                        <p style={{ fontSize: 20 }} className="mb-2">{product.companyName}</p>
                        <p className="mb-2"><HiOutlineMail size={24} style={{ float: "left" }} /> {product.csEmailId}</p>
                        <p className="mb-2"><FaPhoneAlt size={22} style={{ float: "left" }} /> {product.csPhoneNumber}</p>
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
    )
}

export default Product