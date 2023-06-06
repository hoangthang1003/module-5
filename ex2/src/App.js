import './App.css';
import React from "react";
import {Exercise} from "./component/Ex1";
import {Route, Routes} from "react-router";
import {AddPost} from "./component/AddPost";
import {EditPost} from "./component/EditPost";

function App() {
  return (
   <>
       <Routes>
           <Route path={"/"} element={<Exercise />}/>
           <Route path={"/add"} element={<AddPost />}/>
           <Route path={"/edit/:id"} element={<EditPost />}/>
       </Routes>

   </>
  );
}

export default App;
