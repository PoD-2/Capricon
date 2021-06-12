import React from 'react';

import { Switch } from "react-router-dom";
import Route from "./Route";

import HomePage from '../pages/Home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import LoginPage from '../pages/Login/LoginPage';
import RegisterPage from '../pages/Register/RegisterPage';
import ErrorPage from '../pages/SystemPages/ErrorPage';
import WishList from '../pages/WishList/WishList';

function Routes() {
    return (
        <Switch>
        <Route path="/" exact component={HomePage} alwaysPublic />
        <Route path="/Cart" component={CartPage} isPrivate />
        <Route path="/Login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/wishlist" component={WishList} />
        <Route component={ErrorPage} />
        </Switch>
    )
}

export default Routes
