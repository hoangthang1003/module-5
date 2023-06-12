import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (

            <div className="row  navbar-color" >
                <div className="col-lg-3" />
                <div className="col-lg-6 d-flex justify-content-center">
                    <nav className="navbar navbar-expand  sticky-top ">
                        <div className="container">
                            <div className="collapse navbar-collapse item-navbar">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item navbar-brand ">
                                        <NavLink to="/" className={"text"}>Home</NavLink>
                                    </li>
                                    <li className="nav-item navbar-brand">
                                        <NavLink to="/customer" className={"text"}>Customer</NavLink>

                                    </li>


                                    <li className="nav-item navbar-brand">
                                        <NavLink to="/facility" className={"text"}>Facility</NavLink>
                                    </li>
                                    <li className="nav-item navbar-brand">

                                        <NavLink to="/contract" className={"text"}>Contract</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-3" />
            </div>
        );
    }
}

export default Header;
