import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axios";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [isExist, setIsExist] = useState("");
  const [signupButton, setSignupButton] = useState(false);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(`/login`);
  };

  // 미입력시 회원가입 비활성화
  const activateBtn = () => {
    if (username && nickname && password) {
      setSignupButton(true);
      goToLogin();
      alert("회원가입 완료");
      postData();
    } else {
      alert("빈칸을 모두 채워주세요!");
    }
  };

  // 회원정보 등록 API
  const postData = async () => {
    try {
      const response = await apiClient.post("/api/v1/members", {
        username: username,
        nickname: nickname,
        password: password,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // 중복 체크 API
  const doubleCheck = async () => {
    try {
      const response = await apiClient.get(`/api/v1/members/check`, {
        params: {
          username: username,
        },
      });

      if (response.data.isExist) {
        setIsExist(true);
        alert("이미 존재하는 아아디입니다!");
      } else {
        setIsExist(false);
      }
    } catch (err) {
      console.log(err);
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
          isExist={isExist}
          setUsername={setUsername}
          setPassword={setPassword}
          setNickname={setNickname}
          doubleCheck={doubleCheck}
        />
        <Cta.Main
          type="button"
          onClick={() => {
            activateBtn();
          }}
        >
          회원가입
        </Cta.Main>
      </Contentbox>
    </div>
  );
};

export default Signup;
