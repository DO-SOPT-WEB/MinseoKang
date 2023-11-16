import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  // const [isExist, setIsExist] = useState("");
  // const [signupButton, setSignupButton] = useState(false);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(`/login`);
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { test } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members`,
        {
          username: username,
          nickname: nickname,
          password: password,
        }
      );
      console.log({ test });
    } catch (err) {
      console.log("에러:", err);
    }
  };

  return (
    <div>
      <Contentbox>
        <Title>회원가입</Title>
        <InputForm.SignForm
          username={username}
          password={password}
          nickname={nickname}
          setUsername={setUsername}
          setPassword={setPassword}
          setNickname={setNickname}
        />
        <Cta.Main
          type="button"
          onClick={() => {
            postData();
            goToLogin();
            alert("회원가입 완료");
          }}
        >
          회원가입
        </Cta.Main>
      </Contentbox>
    </div>
  );
};

export default Signup;
