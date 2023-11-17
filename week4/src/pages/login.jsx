import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";
import ToastMessage from "../components/toastMessage";
import apiClient from "../api/axios";

const Login = () => {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleToastClose = () => {
    setShowToast(false);
  };
  const navigate = useNavigate();

  //id 비밀번호
  const handleLogin = async () => {
    try {
      const response = await apiClient.post(`/api/v1/members/sign-in`, {
        username: idValue,
        password: pwValue,
      });
      console.log(response.data.id);
      navigate(`/mypage/${response.data.id}`);
    } catch (err) {
      setShowToast(true);
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

      {showToast && (
        <ToastMessage
          message="로그인에 실패했습니다"
          onClose={handleToastClose}
        />
      )}
    </div>
  );
};

export default Login;
