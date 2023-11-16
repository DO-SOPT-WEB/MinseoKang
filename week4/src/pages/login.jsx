import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const handleLogin = async () => {
    try {
      const { response } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`,
        {
          username: idValue,
          password: pwValue,
        }
      );
      console.log({ response });
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <div>
      <Contentbox>
        <Title>LOGIN</Title>
        <InputForm.LoginForm
          idValue={idValue}
          pwValue={pwValue}
          setIdValue={setIdValue}
          setPwValue={setPwValue}
        />
        <Cta.Main
          type="button"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </Cta.Main>
        <Link to="/signup">
          <Cta.Secondary type="button">회원가입</Cta.Secondary>
        </Link>
      </Contentbox>
    </div>
  );
};

export default Login;
