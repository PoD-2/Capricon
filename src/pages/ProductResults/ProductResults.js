import React, {useEffect, useState} from 'react'
import ResultCard from '../../components/ResultCard'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar';
import { Container, Spinner } from 'react-bootstrap';
import { searchBarServices } from "../../services/searchBar.service";
import { alertActions, wishlistActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

function ProductResults(props) {

    const { searchTerm } = (props.location && props.location.state) || {};
    const [products, setProducts] = useState([]);
    const [noProducts, setNoProducts] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const user = useSelector(state => state.userAuth.user);
    const dispatch = useDispatch();
    let history = useHistory();
    

    // search term
    useEffect(() => {
        if(searchTerm === undefined) return;
        setIsLoading(true);
        setNoProducts(false);
        setProducts([]);
        searchBarServices.searchProducts(searchTerm)
        .then(
            products => {
                if (products && products.length === 0) setNoProducts(true);
                setProducts(products);
                setIsLoading(false);
            },
            error => {
                dispatch(alertActions.error(error.toString()));
                setIsLoading(false);
            })
    }, [dispatch, searchTerm]);


    const handleClick = (value) => {
        history.push({
            pathname: '/Product',
              state: {productId: value} 
          })
    }

    const handleWishlistAdd = (productId) => {
        dispatch(wishlistActions.add(user.userId, productId));
    }

    function handleWishlistRemove(productId) {
        dispatch(wishlistActions.remove(user.userId, productId));
    }



    return (
        <>
        <NavBar/>
        <Container>
        <p style={{fontSize:20}} className="mb-5">Search Results for: {searchTerm}</p>
        {isLoading && (
                        <div className="LoadingWrapper vh-100">
                            <Spinner animation="grow" color="#000" size={20} />
                        </div>
                    )}
        {!isLoading && noProducts && (
                        <div className="LoadingWrapper vh-100">
                            <span className="WarningMessage">No such products!</span>
                        </div>
                    )}
                    {!isLoading && products && (
                        <>
                            {products.map((product) => (
                                <ResultCard
                                    productId={product.productId}
                                    productName={product.productName}
                                    category={product.category}
                                    images={product.images}
                                    price={product.price}
                                    quantity={product.qty}
                                    color={product.color}
                                    onClick={handleClick}
                                    handleWishlistAdd={handleWishlistAdd}
                                    handleWishlistRemove={handleWishlistRemove}
                                />
                            ))}
                        </>
        )}
       </Container>
       <Footer/>
       </>
    )
}

export default ProductResults