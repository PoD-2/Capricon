import React, {useEffect, useState} from 'react'
import { Row, Container, Col, Card, Button } from 'react-bootstrap'
import CartCard from '../../components/CartCard';
import NavBar from '../../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/actions';

function CartPage() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.userCart.cartItems);
    const userId = useSelector(state => state.userAuth.user.userId);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);


    useEffect(() => {
        dispatch(cartActions.view(userId));
    }, [dispatch, userId]);


    const findTotalCartPrice = arr => arr.reduce((sum, { price }) => sum + price * quantity, 0);

    useEffect(() => {
        cartItems && cartItems.length !== 0 && (
        setTotalPrice(findTotalCartPrice(cartItems))
        )
    }, [cartItems]);

    const handleRemoveCartItem = (productId) => {
        dispatch(cartActions.remove(userId, productId));
    }


    return (
        <>
            <NavBar />
            <Container>
                <p className="mb-5 display-4">Your Cart</p>
                {cartItems && cartItems.length === 0 ? (
                    <p className="mt-5 text-muted text-monospace" style={{fontSize: 32}}>Your cart is Empty</p>
                ) : (
                <Row>
                    <Col lg={8}>
                    {cartItems && cartItems.length !== 0 && (
                        cartItems.map((item) => (
                            <CartCard 
                            productId={item.productId}
                            productName={item.productName}
                            descr={item.descr}
                            price={item.price}
                            availableQty={item.qty}
                            removeCartItem={handleRemoveCartItem}
                            quantity={quantity}
                            setQuantity={setQuantity}
                            />
                        ))
                    )}
                    </Col>
                    <Col lg={4}>
                    {cartItems && (
                            <Card className="shadow-sm">
                                <Card.Header as="h5">Price details</Card.Header>
                                <Card.Body>
                                <Row>
                                   <Col className="text-left">
                                   <Card.Text>
                                        Price
                                    </Card.Text>
                                   </Col>
                                   <Col className="text-right">
                                   <Card.Text>
                                    ₹{totalPrice}
                                    </Card.Text>
                                   </Col>
                                   </Row>
                                   <Row>
                                   <Col className="text-left">
                                   <Card.Text>
                                        Delivery Charges
                                    </Card.Text>
                                   </Col>
                                   <Col className="text-right">
                                   <Card.Text>
                                    ₹80
                                    </Card.Text>
                                   </Col>
                                   </Row>
                                   <span className="LineSeperator my-2" />
                                   <Row>
                                   <Col className="text-left font-weight-bold">
                                   <Card.Text>
                                        Total Amount
                                    </Card.Text>
                                   </Col>
                                   <Col className="text-right font-weight-bold">
                                   <Card.Text>
                                    ₹{totalPrice + 80}
                                    </Card.Text>
                                   </Col>
                                   </Row>
                                    
                                </Card.Body>
                                <Card.Footer>
                                <Button href="/checkout" size="lg" block variant="primary">Check out</Button>
                                </Card.Footer>
                            </Card>
                            )}
                    </Col>
                </Row>
                )}
            </Container>

        </>
    )
}

export default CartPage
