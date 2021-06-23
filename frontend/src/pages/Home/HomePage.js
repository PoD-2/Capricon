import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import AdCarousel from '../../components/AdCarousel';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import { Col, Row, Container } from 'react-bootstrap';
import { homeService } from '../../services';
import { alertActions, cartActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import LoadingScreen from '../../components/LoadingScreen';

function HomePage() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(state => state.userAuth.user);
    const dispatch = useDispatch();
    let history = useHistory();


    useEffect(() => {
        setIsLoading(true);
        homeService.viewCategory(["cosmetics", "fashion", "home appliances", "electronics"])
            .then(
                categories => {
                    setCategories(categories)
                    setIsLoading(false);

                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                    setIsLoading(false);
                }
            );
    }, [dispatch]);

    const handleCartButton = (productId) => {
        if(user && user.userId){
            dispatch(cartActions.add(user.userId, productId, history));
        } else {
            history.push('/login');
        }
        
    }

    const handleProductClick = (productId) => {
        history.push({
            pathname: '/Product',
              state: {productId: productId} 
          })
    }


    




    return (
        <div>
            <NavBar />
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div>
                    <AdCarousel />
                    <Container fluid className="px-5">
                        {categories && categories.length !== 0 && (
                            categories.map((category) => {
                               return( 
                                   <>
                                    <h3 className="mt-5 mb-4"  key={category[0].productId} style={{ fontFamily: "Lato-Regular", fontSize: 45 }}>{category[0].category}</h3>
                                    <Row>
                                        {category && category.length !== 0 && (
                                            category.map((item) => {
                                                return (
                                                    <Col key={item.productId}>
                                                        <div className="d-flex justify-content-left " style={{ height: 350 }}>
        
                                                            <ProductCard
                                                                key={item.productId}
                                                                productId={item.productId}
                                                                productName={item.productName}
                                                                category={item.category}
                                                                price={item.price}
                                                                images={item.images}
                                                                handleCartButton={handleCartButton}
                                                                handleProductClick={handleProductClick}
                                                            />
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        )}
                                    </Row>
                                </>
                               )
                            })
                        )}

                    </Container>
                    <Footer />
                </div>
            )}

        </div>

    )
}

export default HomePage
