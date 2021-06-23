import React, { useEffect } from 'react';
import { Navbar, Nav, Button, Alert } from 'react-bootstrap';
import Logo from '../../images/logo.svg';
import { RiDashboardLine, RiLogoutCircleLine } from "react-icons/ri";
import { FiCodesandbox } from "react-icons/fi";
import { HiOutlineClipboardList, HiOutlineClipboardCheck } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { sellerAuthActions, alertActions } from '../../redux/actions';


function SellerNavBar() {

    const dispatch = useDispatch();
    const message = useSelector(state => state.alert.message);
    const alertType = useSelector(state => state.alert.type);

    const handleLogout = () => {
        dispatch(sellerAuthActions.logout());
    }

    //clear the alert
    useEffect(() => {
        setTimeout(
            function () {
                // clear alert after 3 secomds
                dispatch(alertActions.clear());
            }, 3000);

    }, [alertType, dispatch]);




    return (
        <>
            {message && (
                <Alert variant={(alertType === "alert-success") ? "success" : "danger"} className="mb-0">
                    {message}
                </Alert>
            )}
            <Navbar collapseOnSelect bg="light" expand="xl" fixed="top" className="position-sticky px-md-5 shadow-sm mb-5 rounded d-lg-flex d-xl-none">
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top"
                        alt="capricon logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="ml-auto">
                        <Nav.Link href="/seller/dashboard" className="px-xl-5 py-xl-2 py-sm-4 text-left"><RiDashboardLine className="pr-2 pb-1" size={34} /> DASHBOARD</Nav.Link>
                        <Nav.Link href="/seller/products" className="px-xl-5 py-xl-2 py-sm-4 text-left"><FiCodesandbox className="pr-2 pb-1" size={34} /> PRODUCTS</Nav.Link>
                        <Nav.Link href="/seller/orderstatus" className="px-xl-5 py-xl-2 py-sm-4 text-left"><HiOutlineClipboardList className="pr-2 pb-1" size={34} /> ORDER STATUS</Nav.Link>
                        <Nav.Link href="/seller/previousorders" className="px-xl-5 py-xl-2 py-sm-4 text-left"><HiOutlineClipboardCheck className="pr-2 pb-1" size={34} /> PREVIOUS ORDERS</Nav.Link>
                    </Nav>
                    <div className="mx-2 d-flex" style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                        <Button onClick={() => handleLogout()} className="w-100 py-3 mb-2" style={{ backgroundColor: "rgba(112,112,112,0.9)", borderColor: "rgba(112,112,112,0.9)", marginTop: 10 }}><RiLogoutCircleLine size={26} className="pr-2" style={{ paddingBottom: 2 }} />LOG OUT</Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default SellerNavBar
