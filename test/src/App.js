import './App.css';
import {BookList} from "./component/BookList";
import {Route, Routes} from "react-router";
import {AddBook} from "./component/AddBook";
import {EditBook} from "./component/EditBook";
import React from "react";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<BookList />} />
                <Route path={'/add'} element={<AddBook />} />
                <Route path={'/edit/:id'} element={<EditBook />} />
            </Routes>
        </>
    );
}

export default App;
