import React from "react";
import Login from "./page/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
