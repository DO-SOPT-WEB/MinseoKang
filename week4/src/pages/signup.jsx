import React, { useState, useEffect } from "react";
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
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isExist, setIsExist] = useState("");
  const [signupButton, setSignupButton] = useState(false);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(`/login`);
  };

  // 미입력시 회원가입 비활성화
  const activateBtn = async () => {
    if (
      username &&
      nickname &&
      password &&
      passwordCheck &&
      password === passwordCheck &&
      !isExist
    ) {
      await doubleCheck();
      setSignupButton(true);
      return !isExist;
    } else {
      setSignupButton(false);
      return false;
    }
  };

  // 클릭시 이동 및 데이터 전송
  const goToLoginHandler = async () => {
    const ActivateSuccess = await activateBtn();
    if (ActivateSuccess) {
      try {
        await postData();
        goToLogin();
        alert("회원가입 완료");
      } catch (err) {
        console.log("회원가입 실패", err);
      }
    } else {
      console.log(ActivateSuccess);
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

      setIsExist(response.data.isExist);
    } catch (err) {
      console.log("중복 체크 에러", err);
    }
  };

  // 값 변경시 리렌더
  useEffect(() => {
    activateBtn();
  }, [username, nickname, password, passwordCheck]);

  //
  useEffect(() => {
    doubleCheck();
  }, [username]);

  return (
    <div>
      <Contentbox>
        <Title>회원가입</Title>
        <InputForm.SignForm
          username={username}
          password={password}
          passwordCheck={passwordCheck}
          nickname={nickname}
          isExist={isExist}
          setUsername={setUsername}
          setPassword={setPassword}
          setPasswordCheck={setPasswordCheck}
          setNickname={setNickname}
          doubleCheck={doubleCheck}
        />
        <Cta.Main
          type="button"
          style={{ opacity: signupButton ? 1 : 0.4 }}
          onClick={() => {
            goToLoginHandler();
          }}
        >
          회원가입
        </Cta.Main>
      </Contentbox>
    </div>
  );
};

export default Signup;
