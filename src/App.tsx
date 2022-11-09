import React from "react";
import Login from "./page/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./page/register/Register";
import Main from "./page/main/Main";
import Resume from "./page/resume/Resume";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/resume/:userId" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
