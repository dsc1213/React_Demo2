"use strict";
import React from "react";
import Menu from "./components/menu.jsx";
import Footer from "./components/footer";

const Layout = React.createClass({ //in ES6 we dont use createClass. Insted we use "exports default class Layout extends component{}"
    render() {
        return (
            <div>
                <Menu/> {React.cloneElement(this.props.children, this.state)}

                <Footer/>
            </div>
        );
    }
});

module.exports=Layout;