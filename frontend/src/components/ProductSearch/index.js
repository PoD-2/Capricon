import React from 'react'
import { Image } from 'react-bootstrap'
import './ProductSearch.css';

function ProductSearch(props) {
    return (
        <div className="productContainer d-flex align-items-center w-100" onClick={() => props.onClick(props.productName)}>
        <Image src={props.images.length!==0 && props.images[0].fileUrl} thumbnail width={80} height={80} />
        <p className="productSearchName m-0 ml-2 text-break">{props.productName}</p>
        <span>in {props.category}</span>
        </div>
    )
}

export default ProductSearch
