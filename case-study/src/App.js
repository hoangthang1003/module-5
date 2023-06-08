import './App.css';
import {CustomerList} from "./component/customer/Customer";
import React from "react";
import {ContractList} from "./component/contract/Contract";
import {FacilityList} from "./component/facility/Facility";
import {Route, Routes} from "react-router";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/facility"} element={<FacilityList/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
