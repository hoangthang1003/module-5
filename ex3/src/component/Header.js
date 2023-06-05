import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="row bg-success sticky-top img ">
                <div className="col-lg-3" />
                <div className="col-lg-6 d-flex justify-content-center">
                    <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
                        <div className="container">
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item navbar-brand ">
                                        <NavLink to="/" className={"text"}>Home</NavLink>
                                    </li>
                                    <li className="nav-item navbar-brand">
                                        <NavLink to="/customers" className={"text"}>Customer</NavLink>

                                    </li>


                                    <li className="nav-item navbar-brand">
                                        <NavLink to="/facilities" className={"text"}>Facility</NavLink>
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
