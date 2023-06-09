import logo from './logo.svg';
import './App.css';
import {PostList} from "./component/Post";
import {Route, Routes} from "react-router";
import React from "react";

function App() {
  return (
   <>
     <Routes>
       <Route path={"/"} element={<PostList />} />
       <Route path={"/create"} element={<PostList />} />
     </Routes>
   </>
  );
}

export default App;
