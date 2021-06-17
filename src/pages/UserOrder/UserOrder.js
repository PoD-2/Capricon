import React from 'react';
import NavBar from '../../components/NavBar'
import { Container } from 'react-bootstrap';
import OrderCard from '../../components/OrderCard';

function UserOrder() {
    return (
        <>
         <NavBar />
         <Container>
         <p className="mb-5 display-4">Ongoing orders</p>
         <OrderCard />
         <OrderCard />
         <p className="mb-5 mt-5 display-4">Completed orders</p>
         <OrderCard />
         <OrderCard />
         <OrderCard />
         </Container>
        </>
    )
}

export default UserOrder
