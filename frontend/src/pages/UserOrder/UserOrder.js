import React, { useEffect} from 'react';
import NavBar from '../../components/NavBar'
import { Container } from 'react-bootstrap';
import OrderCard from '../../components/OrderCard';
import { useSelector } from 'react-redux';
import { userOrderActions } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function UserOrder() {

    const userId = useSelector(state => state.userAuth.user.userId);
    const orders = useSelector(state => state.userOrders.orders);
    const orderPrevious = useSelector(state => state.userOrders.orderPrevious);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userOrderActions.viewOrderStatus(userId));
        dispatch(userOrderActions.viewOrderHistory(userId));
    
    },  [dispatch, userId]);


    return (
        <>
        <NavBar />
         <Container>
         <p className="mb-5 display-4">Ongoing Orders</p>
         {orders && orders.length === 0 ? (
                    <p className="mt-5 text-muted text-monospace" style={{fontSize: 32}}>No Ongoing Orders</p>
                ) : (
                        <>
                        {orders && orders.length !== 0 && (
                            orders.map((order) => (
                                <OrderCard
                                companyName={order.seller.companyName}
                                productName={order.product.productName}
                                qty={order.qty}
                                amount={order.payment.amount}
                                bookDate={order.bookDate}
                                images={order.product.images}
                                deliveryDate={order.deliveryDate}
                                status={order.status}
                                email={order.seller.csEmailId}
                                phoneNumber={order.seller.csPhoneNumber}
                                payment={order.payment.status}
                                address={`${order.billingAddress.line},
                                ${order.billingAddress.city}-${order.billingAddress.pincode}`}
                                />
                            ))
                        )} 
                        </>
        )}
 
        <p className="mb-5 display-4">Previous Orders</p>
        {orderPrevious && orderPrevious.length === 0 ? (
                    <p className="mt-5 text-muted text-monospace" style={{fontSize: 32}}>No Previous Orders</p>
                ) : (
                        <>
                        {orderPrevious && orderPrevious.length !== 0 && (
                            orderPrevious.map((order) => (
                                <OrderCard
                                companyName={order.seller.companyName}
                                productName={order.product.productName}
                                qty={order.qty}
                                amount={order.payment.amount}
                                bookDate={order.bookDate}
                                images={order.product.images}
                                deliveryDate={order.deliveryDate}
                                status={order.status}
                                email={order.seller.csEmailId}
                                phoneNumber={order.seller.csPhoneNumber}
                                payment={order.payment.status}
                                address={`${order.billingAddress.line},
                                ${order.billingAddress.city}-${order.billingAddress.pincode}`}
                                />
                            ))
                        )}
                        </>
        )}
        </Container>
        </>
        
    )
}

export default UserOrder