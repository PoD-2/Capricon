import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import './SellerDashboard.css';
import Sidebar from '../../components/Sidebar';
import SellerNavBar from '../../components/sellerNavBar';
import SellerPrevOrders from '../SellerPrevOrders/SellerPrevOrders';



function SellerDashboard() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleTheme = () => {
         setIsDarkTheme(!isDarkTheme);
    }

    const bgColor = isDarkTheme ? "#121212" : "#EEEEEE"


    return (
        <div class="d-flex flex-row min-vh-100" >
            <div class="min-vh-100 d-xl-flex d-none flex-shrink-0" style={{ flex: 1, flexDirection: "column" }}>
                <Sidebar />
            </div>
            <div class="dashboard d-flex flex-shrink-1" style={{ flexDirection: "column", backgroundColor: bgColor }}>
                <SellerNavBar />
                <Container className="mt-xl-5" style={{ flex: 1 }}>
                    <SellerPrevOrders handleTheme={handleTheme} isdarkTheme={isDarkTheme} />
                </Container>
            </div>
        </div>
    )
}

export default SellerDashboard
