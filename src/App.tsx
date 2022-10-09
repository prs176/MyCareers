import React from "react";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./page/Register";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
