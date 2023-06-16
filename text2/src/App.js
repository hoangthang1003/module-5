import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Routes} from "react-router";
import {BookList} from "./component/BookList";
import {AddBook} from "./component/AddBook";

function App() {
    return (
        <>
        <Routes>
            <Route path="/"  element={<BookList />}/>
            <Route path="/addBook"  element={<AddBook />}/>
        </Routes>
        </>
    );
}

export default App;
