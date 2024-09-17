import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/signup";
import Mypage from "../pages/userID";
import Homepage from "../pages/homepage";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/:userId" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
