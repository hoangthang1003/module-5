import './App.css';
// import {CustomerList} from "./component/customer/Customer";
import React from "react";
// import {ContractList} from "./component/contract/Contract";
import {FacilityList} from "./component/facility/Facility";
import {Route, Routes} from "react-router";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import AddFacility from "./component/facility/AddFacility";
import {EditCustomer} from "./component/customer/EditCustomer";
import {CustomerList} from "./component/customer/Customer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/customer"} element={<CustomerList/>}/>
                <Route path={"/facility"} element={<FacilityList/>}/>
                <Route path={"/customer/edit/:id"}  element={<EditCustomer />}/>
                <Route path={"/addFacility"} element={<AddFacility/>}/>
                {/*<Route path={"/edit"} element={<AddFacility/>}/>*/}
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
