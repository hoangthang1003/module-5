import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {ProductList} from "./component/ProductList";
import {AddProduct} from "./component/AddProduct";
import {EditProduct} from "./component/EditProduct";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<ProductList/>}/>
                <Route path={"/addProduct"} element={<AddProduct/>}/>
                <Route path={"/editProduct/:id"} element={<EditProduct/>}/>
            </Routes>
        </>
    )
}

export default App;
