import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="posts" element={<div>POSTS PAGE</div>}></Route>
            <Route path="about" element={<div>ABOUT PAGE</div>}></Route>
            <Route path="*" element={<div>404</div>}></Route>
          </Route>
        </Routes>
    </Fragment>
  );
}

export default App;
