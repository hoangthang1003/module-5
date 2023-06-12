import './App.css';
import {BlogList} from "./component/BlogList";
import React from "react";
import {Route, Routes} from "react-router";
import {AddBlog} from "./component/AddBlog";


function App() {
  return (
    <Routes>
      <Route path={"/"} element={<BlogList />} />
      <Route path={"/addBlog"} element={<AddBlog />} />
    </Routes>
  );
}

export default App;
