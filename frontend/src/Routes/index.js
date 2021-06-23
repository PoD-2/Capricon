import React from 'react';

import { Switch } from "react-router-dom";
import Route from "./Route";
import { BrowserRouter } from 'react-router-dom';



//pages import
import HomePage from '../pages/Home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import ErrorPage from '../pages/SystemPages/ErrorPage';
import WishList from '../pages/WishList/WishList';
import Product from '../pages/Product/Product';
import ProductResults from '../pages/ProductResults/ProductResults';
import UserOrder from '../pages/UserOrder/UserOrder';
import SellerLogin from '../pages/SellerLogin/SellerLogin';
import SellerRegister from '../pages/SellerRegister/SellerRegister';
import SellerPage from '../pages/SellerPage/SellerPage';
import Checkout from '../pages/Checkout/Checkout';



function Routes() {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={HomePage} alwaysPublic />
        <Route path="/cart" component={CartPage} isPrivate />
        <Route path="/login" component={LoginPage}  />
        <Route path="/register" component={RegisterPage} />
        <Route path="/wishlist" component={WishList} isPrivate />
        <Route path="/checkout" component={Checkout} isPrivate />
        <Route path="/Product" component={Product} alwaysPublic />
        <Route path="/search" component={ProductResults} alwaysPublic />
        <Route path="/orders" component={UserOrder} isPrivate />
        <Route path="/seller/login" component={SellerLogin} isSeller/>
        <Route path="/seller/register" component={SellerRegister} isSeller/>
        <Route path="/seller" component={SellerPage} isSellerPrivate/>
        <Route component={ErrorPage} alwaysPublic />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes
