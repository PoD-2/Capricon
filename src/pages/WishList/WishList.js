import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer/Footer';
import WishlistCard from '../../components/WishlistCard';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistActions, cartActions } from '../../redux/actions';
import { useHistory } from "react-router-dom";
import MessageCard from '../../components/MessageCard';
import './WishList.css'

function WishList() {


    const dispatch = useDispatch();
    const wishlists = useSelector(state => state.userWishlist.wishlist);
    const user = useSelector(state => state.userAuth.user);
    let history = useHistory();


    useEffect(() => {
        dispatch(wishlistActions.view(user.userId));
    }, [dispatch, user.userId]);


    function handleImageDelete(productId) {
        dispatch(wishlistActions.remove(user.userId, productId));
    }

    const handleCartButton = (productId) => {
        dispatch(cartActions.add(user.userId, productId, history));
    }


    function handleBuy(productId, price) {
        history.push({
            pathname: '/checkout',
              state: {productId: productId, qty: 1, amount: price} 
          })
    }

    function isOdd(num) {
        return (num % 2 === 1) ? true : false;
    }

    return (
        <>
            <NavBar />
            <Container style={{ marginTop: 200 }}>
                <p className="display-1 mb-0">Wishlist</p>
                <p className="text-muted text-monospace ml-5" style={{ letterSpacing: 8 }} >Your favourite collection</p>
                {wishlists && wishlists.length === 0 ? (
                    <MessageCard message="Your Wishlist is Empty" />
                ) : (
                    wishlists && wishlists.length !== 0 && (
                    wishlists.map((item, index) => (

                        isOdd(index + 2) ? (
                            <WishlistCard
                                align="left"
                                productId={item.productId}
                                productPic={item.images[0].fileUrl}
                                productName={item.productName}
                                productCompany={item.category}
                                price={item.price}
                                handleImageDelete={handleImageDelete}
                                handleCartButton={handleCartButton}
                                handleBuy={handleBuy}
                            />

                        ) : (
                            <WishlistCard
                                align="right"
                                productId={item.productId}
                                productPic={item.images[0].fileUrl}
                                productName={item.productName}
                                productCompany={item.category}
                                price={item.price}
                                handleImageDelete={handleImageDelete}
                                handleCartButton={handleCartButton}
                                handleBuy={handleBuy}
                            />
                        )



                    )))
                )}


            </Container>
            <Footer />
        </>
    )
}

export default WishList
