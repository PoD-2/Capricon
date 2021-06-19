import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import AdCarousel from '../../components/AdCarousel';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import { Col, Row, Container } from 'react-bootstrap';
import { homeService } from '../../services';

function HomePage() {

    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        homeService.viewCategory("cosmetics")
            .then(
                products => {
                    setCategory(products)
                    setIsLoading(false);

                },
                error => {
                    console.log(error);
                    setIsLoading(false);
                }
            );
    }, [])




    return (
        <div>
            <NavBar />
            {isLoading ? (
                <p>loading</p>
            ) : (
                <div>
                    <AdCarousel />
                    <Container fluid className="px-5">
                        <h3 className="mt-5 mb-4" style={{ fontFamily: "Lato-Regular", fontSize: 45 }}>Deals of the day</h3>
                        <Row>
                            {category && category.length !== 0 && (
                                category.map((item) => {
                                    return(
                                        <Col>
                                            <div className="d-flex justify-content-left " style={{ height: 350 }}>
                                                <ProductCard
                                                productName={item.productName}
                                                category={item.category}
                                                price={item.price}
                                                images={item.images}
                                                />
                                            </div>
                                        </Col>
                                    )
                                })
                            )}
                        </Row>
                        <h3 className="mt-5 mb-3 display-4">Home Appliances</h3>
                        <Row>
                            {category && category.length !== 0 && (
                                category.map((item) => {
                                    return(
                                        <Col>
                                            <div className="d-flex justify-content-left " style={{ height: 350 }}>
                                                <ProductCard
                                                productName={item.productName}
                                                category={item.category}
                                                price={item.price}
                                                images={item.images}
                                                />
                                            </div>
                                        </Col>
                                    )
                                })
                            )}
                        </Row>
                        <h3 className="mt-5 mb-3 display-4">Home Appliances</h3>
                        <Row>
                            {category && category.length !== 0 && (
                                category.map((item) => {
                                    return(
                                        <Col>
                                            <div className="d-flex justify-content-left " style={{ height: 350 }}>
                                                <ProductCard
                                                productName={item.productName}
                                                category={item.category}
                                                price={item.price}
                                                images={item.images}
                                                />
                                            </div>
                                        </Col>
                                    )
                                })
                            )}
                        </Row>
                        <h3 className="mt-5 mb-5 display-4">Home Appliances</h3>
                        <Row>
                            {category && category.length !== 0 && (
                                category.map((item) => {
                                    return(
                                        <Col>
                                            <div className="d-flex justify-content-left " style={{ height: 350 }}>
                                                <ProductCard
                                                productName={item.productName}
                                                category={item.category}
                                                price={item.price}
                                                images={item.images}
                                                />
                                            </div>
                                        </Col>
                                    )
                                })
                            )}
                        </Row>
                    </Container>
                    <Footer />
                </div>
            )}

        </div>

    )
}

export default HomePage
