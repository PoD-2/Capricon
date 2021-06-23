import React, {useEffect, useState} from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import CartCard from '../../components/CartCard';
import NavBar from '../../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/actions';
import MessageCard from '../../components/MessageCard';
import Footer from '../../components/Footer/Footer';
import PriceCard from '../../components/PriceCard';
import { useHistory } from "react-router-dom";

function CartPage() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.userCart.cartItems);
    const userId = useSelector(state => state.userAuth.user.userId);
    const [quantity, setQuantity] = useState(1);
    let history = useHistory();


    useEffect(() => {
        dispatch(cartActions.view(userId));
    }, [dispatch, userId]);




    const handleRemoveCartItem = (productId) => {
        dispatch(cartActions.remove(userId, productId));
    }


    const handleBuy = () => {
        history.push({
            pathname: '/checkout',
              state: {productId: 1, qty: quantity, amount: cartItems[0].price * quantity} 
          })
    }



    return (
        <>
        <NavBar />
        <Container>
            <p className="mb-5 display-4">Your Cart</p>
            {cartItems && cartItems.length === 0 ? (
               <MessageCard message="Your cart is Empty" />
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
                        images={item.images}
                        />
                    ))
                )}
                </Col>
                <Col lg={4}>
                {cartItems && (
                       <PriceCard 
                           totalPrice={cartItems[0].price * quantity}
                           checkoutButton={true}
                           handleBuy={handleBuy}
                       />
                        )}
                </Col>
            </Row>
            )}
        </Container>
        <Footer />
    </>
    )
}

export default CartPage
