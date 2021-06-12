import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AdCarousel from '../../components/AdCarousel/AdCarousel';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import { Col, Row, Container } from 'react-bootstrap';

function HomePage() {






    return (
        <div>

            <NavBar />
            <div style={{paddingTop: 110}}>
            <AdCarousel />
            <Container fluid className="px-5">
            <h3 className="mt-5 mb-4" style={{fontFamily: "Lato-Regular", fontSize: 45}}>Deals of the day</h3>
            <Row>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
            </Row>
            <h3 className="mt-5 mb-3 display-4">Home Appliances</h3>
            <Row>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
            </Row>
            <h3 className="mt-5 mb-3 display-4">Home Appliances</h3>
            <Row>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
            </Row>
            <h3 className="mt-5 mb-5 display-4">Home Appliances</h3>
            <Row>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
                <Col>
                <ProductCard />
                </Col>
            </Row>
            </Container>
            <Footer />
            </div>
        </div>

    )
}

export default HomePage
