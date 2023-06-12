import './App.css';
import {PostList} from "./component/Post";
import {Route, Routes} from "react-router";
import React from "react";
import {CreatePost} from "./component/CreatePost";

function App() {
  return (
   <>
     <Routes>
       <Route path={"/"} element={<PostList />} />
       <Route path={"/create"} element={<CreatePost />} />
     </Routes>
   </>
  );
}

export default App;
