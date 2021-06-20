import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { BiSearch } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Spinner } from "react-bootstrap";
import { searchBarServices } from "../../services/searchBar.service";
import { alertActions } from '../../redux/actions';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ProductSearch from '../ProductSearch';
import './SearchBar.css';



function SearchBar(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [parentRef, isClickedOutside] = useClickOutside();
    const inputRef = useRef();
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setLoading] = useState(false);
    let history = useHistory();
    const [products, setProducts] = useState([]);
    const [noProducts, setNoProducts] = useState(false);
    const dispatch = useDispatch();
    
    //check if products are empty
    const isEmpty = !products || products.length === 0;

    const changeHandler = (e) => {
        e.preventDefault();
        setExpanded(true);
        if (e.target.value.trim() === "") setNoProducts(false);
        setSearchQuery(e.target.value);
    };


    const collapseContainer = () => {
        setExpanded(false);
        setSearchQuery("");
        setLoading(false);
        setNoProducts(false);
        setProducts([]);
        if (inputRef.current) inputRef.current.value = "";
    };


    //close search bar when clicked outside search bar
    useEffect(() => {
        if (isClickedOutside) collapseContainer();
    }, [isClickedOutside]);

    useEffect(() => {
        suggestProducts()
    }, [searchQuery]);


    //suggest products api
    const suggestProducts = () => {
        if (!searchQuery || searchQuery.trim() === "") return;
        setLoading(true);
        setNoProducts(false);
        searchBarServices.suggestProducts(searchQuery)
            .then(
                products => {
                    if (products && products.length === 0) setNoProducts(true);
                    setProducts(products);
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                })
            .finally(
                setLoading(false)
            );
    }

    const searchProducts = (value) => {
        if (!value || value.trim() === "") return;

        history.push({
            pathname: '/search',
              state: {searchTerm: value} 
          })
    }





    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchProducts(e.target.value);
          }
    }

    const handleClick = (value) => {
        searchProducts(value);
    }





    //framer motion animation valus
    const containerVariants = {
        expanded: {
            height: "30em",
            position: props.position,
            top: props.top,
            left: props.left
        },
        collapsed: {
            height: "3.8em",
            position: props.position,
            top: props.top,
            left: props.left
        },
    };

    const containerTransition = { type: "spring", damping: 22, stiffness: 150 };




    return (
        <motion.div
            className="searchBarContainer shadow-sm"
            style={{width: props.barLength}}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariants}
            transition={containerTransition}
            ref={parentRef}
        >

            <div className="SearchInputContainer">
                <BiSearch size={28} color="#bebebe" className="mr-1" />
                <input
                    className="searchInput"
                    style={{ width: '100%', height: '100%', borderWidth: 0, outline: 0, color: "black", backgroundColor: "transparent"}}
                    type="text"
                    placeholder="Search for products"
                    ref={inputRef}
                    value={searchQuery}
                    onChange={changeHandler}
                    onKeyDown={handleEnterKey}
                />
                <AnimatePresence>
                    {isExpanded && (
                        <motion.span
                            className="CloseIcon"
                            whileHover={{ scale: 1.5, color: "#bebebe" }}
                            key="close-icon"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={collapseContainer}
                            transition={{ duration: 0.2 }}
                        >
                            <AiFillCloseCircle size={22} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {isExpanded && <span className="LineSeperator" />}

            {isExpanded && (
                <div className="SearchContent">
                    {isLoading && (
                        <div className="LoadingWrapper">
                            <Spinner animation="grow" color="#000" size={20} />
                        </div>
                    )}
                    {!isLoading && isEmpty && !noProducts && (
                        <div className="LoadingWrapper">
                            <span className="WarningMessage">Start typing to Search</span>
                        </div>
                    )}
                    {!isLoading && noProducts && (
                        <div className="LoadingWrapper">
                            <span className="WarningMessage">No such products!</span>
                        </div>
                    )}
                    {!isLoading && !isEmpty && (
                        <>
                            {products.map((product) => (
                                <ProductSearch
                                    productName={product.productName}
                                    category={product.category}
                                    images={product.images}
                                    onClick={handleClick}
                                />
                            ))}
                        </>
                    )}
                </div>
            )}


        </motion.div>
    )
}

export default SearchBar
