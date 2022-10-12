import React from "react";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./page/Register";
import Main from "./page/Main";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
