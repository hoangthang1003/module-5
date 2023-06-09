import './App.css';
import {PostList} from "./component/PostList";
import React from "react";
import {Route, Routes} from "react-router";
import {AddPost} from "./component/AddPost";
import {Detail} from "./component/Detail";
import {EditPost} from "./component/EditPost";

function App() {
  return (
<>
<Routes>
  <Route path={"/"} element={<PostList />}/>
  <Route path={"/add"} element={<AddPost />}/>
  <Route path={"/:id"} element={<Detail />}/>
  <Route path="/edit/:id" element={<EditPost />}/>
</Routes>
</>
  );
}

export default App;
