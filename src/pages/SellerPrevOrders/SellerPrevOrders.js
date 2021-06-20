import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import ToggleButton from '../../components/ToggleButton';
import { Row, Col } from 'react-bootstrap';
import { sellerOrderActions } from '../../redux/actions/seller.order.actions';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../components/LoadingScreen';

function SellerPrevOrders(props) {

    const [isOn, setIsOn] = useState(false);

    const dispatch = useDispatch();
    const sellerId = useSelector(state => state.sellerAuth.seller.sellerId);
    const loading = useSelector(state => state.sellerOrders.loading);
    const orders = useSelector(state => state.sellerOrders.orders);

    const handleToggleClick = () => {
        setIsOn(!isOn);
        props.handleTheme();
    }

    useEffect(() => {
        dispatch(sellerOrderActions.viewOrderHistory(sellerId));
    }, [dispatch, sellerId]);


    return (
        <>
        {loading ? (
           <LoadingScreen />
        ) : (
        <div>
            <Row>
                <Col>
                    <h3 className="sellerPageTitle" style={{ color: props.isdarkTheme ? "#ffffff" : "black"}}>Your Previous Orders</h3>
                </Col>
                <Col>
                    <div className="d-flex justify-content-end">
                        <ToggleButton isOn={isOn} onToggleClick={handleToggleClick} />
                    </div>
                </Col>
            </Row>
            <span className="LineSeperator mb-3 mt-3" />



            <div>
                <Table striped bordered hover variant={props.isdarkTheme ? "dark" : ""} responsive>
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Customer Name</th>
                            <th>Customer Email Id</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Book Date</th>
                            <th>Delivery Date</th>
                            <th>Biling Address</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders && orders.length !== 0 && (
                        orders.map((order) => (
                        <tr>
                            <td>{order.bookId}</td>
                            <td>{order.user.userName}</td>
                            <td>{order.user.emailId}</td>
                            <td>{order.product.productName}</td>
                            <td>{order.qty}</td>
                            <td>{order.payment.amount}</td>
                            <td>{order.bookDate}</td>
                            <td>{order.deliveryDate}</td>
                            <td>{`${order.billingAddress.line},
                            ${order.billingAddress.city}-${order.billingAddress.pincode}`}</td>
                        </tr>
                        ))
                    )}
                    </tbody>
                </Table>
            </div>
        </div>
        )}
        </>
    )
}

export default SellerPrevOrders
