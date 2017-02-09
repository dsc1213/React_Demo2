"use strict";
import React from "react";
import {Nav, NavItem, Navbar, Button} from "react-bootstrap";
import {Link} from 'react-router';
import {LinkContainer} from "react-router-bootstrap";

const Menu = React.createClass({

    render() {
        return (
        /*We create a Navbar instance with a linked brandname. If you want an image instead
of a text brand, you can insert a JSX node instead of a text string, like this:
brand={<span class="logo"><img src="http://placehold.it/100/30/"
height="30" width="100" alt="My webshop" /></span>}.
The fixedTop option creates a fixed Navbar instance that sticks to the top of your
screen. Replace it with staticTop if you want a floating Navbar instance instead.
You can also add inverse if you want a black Navbar instance instead of a grey one:*/ < Navbar inverse fixedTop > <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">My Web Shop</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar.Header> < Navbar.Collapse > <Nav>
            <LinkContainer eventKey={1} to="/company">
                <Button bsStyle="link">
                    About
                </Button>
            </LinkContainer>
            <LinkContainer eventKey={2} to="/products">
                <Button bsStyle="link">
                    Products
                </Button>
            </LinkContainer>
        </Nav> < Nav pullRight > <LinkContainer to="/checkout">
            <Button bsStyle="link">
                Your cart: {this.props.cart.length}
                items
            </Button>
        </LinkContainer> </Nav>
</Navbar.Collapse> </Navbar>)
    }
});
module.exports = Menu;