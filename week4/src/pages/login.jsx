import React from "react";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";

const Login = () => {
  return (
    <div>
      <Contentbox>
        <Title>Login</Title>
        <InputForm></InputForm>
        <Cta.Main type="button">Login</Cta.Main>
        <Cta.Secondary type="button">회원가입</Cta.Secondary>
      </Contentbox>
    </div>
  );
};

export default Login;
