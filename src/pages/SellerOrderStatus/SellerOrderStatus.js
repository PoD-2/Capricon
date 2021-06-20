import React, {useEffect} from 'react'
import OrderStatusCard from '../../components/OrderStatusCard';
import { sellerOrderActions } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../components/LoadingScreen';

function SellerOrderStatus() {

   
    const sellerId = useSelector(state => state.sellerAuth.seller.sellerId);
    const loading = useSelector(state => state.sellerOrders.loading);
    const orderStatus = useSelector(state => state.sellerOrders.orderStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sellerOrderActions.viewOrderStatus(sellerId));
    }, [dispatch, sellerId]);

    const handleChangeStatus = (bookId, changeStatus) => {
        dispatch(sellerOrderActions.changeOrderStatus(bookId, sellerId, changeStatus));
    }


    return (
        <>
        {loading ? (
            <LoadingScreen />
        ) : (
        <div>
            <h3 className="sellerPageTitle">Order Status</h3>
            <span className="LineSeperator mb-5" />
            <div>
            {orderStatus && orderStatus.length !== 0 ? (
                orderStatus.map((orderStatus) => (
                    <OrderStatusCard 
                        productName={orderStatus.product.productName}
                        price={orderStatus.product.price}
                        customerName={orderStatus.user.userName}
                        phoneNumber={orderStatus.user.phoneNumber}
                        address={orderStatus.billingAddress}
                        image={orderStatus.product}
                        handleChangeStatus={handleChangeStatus}
                        bookId={orderStatus.bookId}
                        status={orderStatus.status}
                    />
                )) 
            ) : (
                <p>Order status is empty</p>
            )}
            </div>
        </div>
        )}
        </>
    )
}

export default SellerOrderStatus