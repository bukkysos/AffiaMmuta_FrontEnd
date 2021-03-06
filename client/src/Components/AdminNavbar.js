import React, { Component } from 'react';
import { Navbar, Col, Nav, Image, Button, DropdownButton, MenuItem } from "react-bootstrap";
import './AdminNavbar.css';
import affia from './Assets/AdminLogo.png';
import cartAdmin from './Assets/Cart.png';
import popImage from './Assets/PopImage.png';

export default class AdminNavbar extends Component {
  render() {
    return (
        <div className="nav-admin">
            <Col className="logo-container" >
                <Image src={affia} alt='Logo' className="admin-logo" />
            </Col>
            <Col className="navbar-items">
                <Navbar default className="navbar-main">
                    <Nav pullRight className="general-navbar-nav">
                       <Button type="submit" className= "cart  cart-position">
                            <Image src={cartAdmin} alt='Logo' className="cart-img" />
                        </Button>
                        <DropdownButton 
                            bsStyle
                            title={<Image src={popImage} alt='Logo' className="dropdown-admin" />}
                            id="btn-admin-btn"
                            className = "dropdown-position"
                            noCaret
                            >
                            <MenuItem eventKey="1">Profile</MenuItem>
                            <MenuItem eventKey="2">Sign Out</MenuItem>
                        </DropdownButton>
                    </Nav>
                </Navbar>
            </Col>
        </div>
   );
  }
}