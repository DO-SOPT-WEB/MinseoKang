import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Link to="/login">
        <button type="button">들어가기</button>
      </Link>
    </>
  );
};

export default Homepage;
