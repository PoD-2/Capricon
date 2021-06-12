import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/actions';
import { RiLoginCircleFill } from "react-icons/ri";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

function NavBar() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.authentication.user);
  const loggedIn = useSelector(state => state.authentication.loggedIn);

  const handleLogout = () => {

    dispatch(userActions.logout()); 

  }



    return (
        <Navbar collapseOnSelect bg="light" expand="lg" fixed="top" className="px-md-5 shadow-sm mb-5 rounded">
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
           {loggedIn ? (
            <NavDropdown title={user.userName} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLogout()}>Log out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sell on Capricon</NavDropdown.Item>
            </NavDropdown>
           ) : (
            <Button href="/login" className="px-5" variant="primary"><RiLoginCircleFill size={22} className="pr-2" style={{paddingBottom: 2}} />Login</Button>
           )}
           
            <Nav.Link href="/wishlist" className="px-5"><FaHeart className="pr-2 pb-1" size={28} /> Wishlist</Nav.Link>
            <Nav.Link href="/Cart"><FaShoppingCart size={28} className="pr-2 pb-1" />Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
}

export default NavBar