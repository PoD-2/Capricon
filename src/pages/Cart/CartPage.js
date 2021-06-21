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
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [productId, setProductId] = useState("");
    const [amount, setAmount] = useState("");
    let history = useHistory();


    useEffect(() => {
        dispatch(cartActions.view(userId));
    }, [dispatch, userId]);


    const findTotalCartPrice = arr => arr.reduce((sum, { price }) => sum + price * quantity, 0);

    useEffect(() => {
        cartItems && cartItems.length !== 0 && (
        setTotalPrice(findTotalCartPrice(cartItems))
        )
    }, [cartItems, quantity]);

    const handleRemoveCartItem = (productId) => {
        dispatch(cartActions.remove(userId, productId));
    }

    function handleBuy() {
        history.push({
            pathname: '/checkout',
              state: {productId: productId, qty: 1, amount: amount} 
          })
    }

        if( cartItems && cartItems.length !== 0) {
            setProductId(cartItems[0].productId);
            setAmount(cartItems[0].price);
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
                               totalPrice={totalPrice}
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
