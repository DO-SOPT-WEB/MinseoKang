import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";
import apiClient from "../api/axios";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const navigate = useNavigate();

  //id 비밀번호
  const handleLogin = async () => {
    try {
      const response = await apiClient.post("/api/v1/members/sign-in", {
        username: idValue,
        password: pwValue,
      });
      await profile(); // 사용자 정보 조회
      const userId = response.data.id;
      navigate(`/mypage/${userId}`, {
        state: {
          username: response.data.username,
          nickname: response.data.nickname,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const profile = async () => {
    try {
      const { response } = await apiClient.get("api/v1/members/{memberId}", {
        params: {
          id: response.data.id,
          username: response.data.username,
          nickname: response.data.nickname,
        },
      });
    } catch (err) {
      console.log(err);
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
