import React from "react";
import { Link } from "react-router-dom";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";

const Login = () => {
  return (
    <div>
      <Contentbox>
        <Title>LOGIN</Title>
        <InputForm.LoginForm></InputForm.LoginForm>
        <Cta.Main type="button">Login</Cta.Main>
        <Link to="/signup">
          <Cta.Secondary type="button">회원가입</Cta.Secondary>
        </Link>
      </Contentbox>
    </div>
  );
};

export default Login;
