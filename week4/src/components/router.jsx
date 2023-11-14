import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import SignUp from "../pages/signup";
import UserID from "../pages/userID";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/:userId" element={<UserID />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
