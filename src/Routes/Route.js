import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

export default function RouteWrapper({component: Component, isPrivate, alwaysPublic, ...rest}) {
    
    
    const user = useSelector(state => state.userAuth.user);

    const signed = user ? true : false;

    //Route is private and the user is not logged in
    if(isPrivate && !signed){
        return <Redirect to="/Login" />;
    }

    if(!alwaysPublic && !isPrivate && signed){
        return <Redirect to="/" />;
    }

    return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    alwaysPublic: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps ={
    isPrivate: false,
    alwaysPublic: false
};


