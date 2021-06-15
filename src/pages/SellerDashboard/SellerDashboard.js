import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './SellerDashboard.css';
import Logo from '../../images/capriconWhite.png';

function SellerDashboard() {
    return (
        <div class="d-flex flex-row min-vh-100">
            <div class="p-2 dashboardMenu">
            <Image src={Logo} className="my-4 px-xl-4 px-lg-3" fluid />
            </div>
            <div class="p-2 dashboard">Flex item 2</div>
        </div>
    )
}

export default SellerDashboard
