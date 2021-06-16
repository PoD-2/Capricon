import React from 'react'
import OrderStatusCard from '../../components/OrderStatusCard';
import './SellerOrderStatus.css';

function SellerOrderStatus() {
    return (
        <div className="" style={{}}>
            <h3 className="sellerPageTitle">Order Status</h3>
            <span className="LineSeperator mb-5" />
            <div className="noScroll" style={{height: 650}}>
            <OrderStatusCard />
            <OrderStatusCard />
            <OrderStatusCard />
            <OrderStatusCard />
            <OrderStatusCard />
            </div>
        </div>
    )
}

export default SellerOrderStatus
