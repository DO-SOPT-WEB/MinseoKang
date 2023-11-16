import React from "react";
import { Link } from "react-router-dom";
import Cta from "../components/cta";

const Homepage = () => {
  return (
    <>
      <Link to="/login">
        <Cta.Secondary Secondary="button">들어가기</Cta.Secondary>
      </Link>
    </>
  );
};

export default Homepage;
