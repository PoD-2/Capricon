import React from 'react';

import { Switch } from "react-router-dom";
import Route from "./Route";

//pages import
import HomePage from '../pages/Home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import ErrorPage from '../pages/SystemPages/ErrorPage';
import WishList from '../pages/WishList/WishList';
import SellerLogin from '../pages/SellerLogin/SellerLogin';
import SellerRegister from '../pages/SellerRegister/SellerRegister';
import SellerDashboard from '../pages/SellerDashboard/SellerDashboard';

function Routes() {
    return (
        <Switch>
        <Route path="/" exact component={HomePage} alwaysPublic />
        <Route path="/cart" component={CartPage} isPrivate />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/seller/login" component={SellerLogin} />
        <Route path="/seller/register" component={SellerRegister} />
        <Route path="/seller/dashboard" component={SellerDashboard} />
        <Route component={ErrorPage} />
        </Switch>
    )
}

export default Routes
