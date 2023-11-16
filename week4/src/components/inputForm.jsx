import styled from "styled-components";
import React from "react";

const LoginForm = ({ idValue, setIdValue, pwValue, setPwValue }) => {
  return (
    <>
      <Input>
        <Wrapper>
          <Name>ID</Name>
          <Textholder
            type="text"
            placeholder="아이디를 입력하세요"
            value={idValue}
            onChange={(e) => setIdValue(e.target.value)}
          ></Textholder>
        </Wrapper>
        <Wrapper>
          <Name>비밀번호</Name>
          <Textholder
            type="text"
            placeholder="비밀번호를 입력하세요"
            value={pwValue}
            onChange={(e) => setPwValue(e.target.value)}
          ></Textholder>
        </Wrapper>
      </Input>
    </>
  );
};

const SignForm = ({
  username,
  password,
  nickname,
  setUsername,
  setPassword,
  setNickname,
}) => {
  return (
    <>
      <Input>
        <Wrapper>
          <Name>ID</Name>
          <ShortTextholder
            type="text"
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></ShortTextholder>{" "}
          <Btn>중복확인</Btn>
        </Wrapper>
        <Wrapper>
          <Name>비밀번호</Name>
          <Textholder
            type="text"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Textholder>
        </Wrapper>
        {/* <Wrapper>
          <Name>비밀번호 확인</Name>
          <Textholder
            type="text"
            placeholder="비밀번호를 다시 한번 입력해주세요"
          ></Textholder>
        </Wrapper> */}
        <Wrapper>
          <Name>닉네임</Name>
          <Textholder
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          ></Textholder>
        </Wrapper>
      </Input>
    </>
  );
};

const Input = styled.section`
  margin: 1rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;
const Name = styled.p`
  color: ${({ theme }) => theme.black};
  font-weight: 500;
  width: 6.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
`;
const Textholder = styled.input`
  background-color: ${({ theme }) => theme.gray1};
  color: grey;
  height: 2.5rem;
  width: 17rem;
  border-style: none;
  border-radius: 0.4rem;
  padding-left: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.gray2};
  }
`;
const ShortTextholder = styled.input`
  background-color: ${({ theme }) => theme.gray1};
  height: 2.5rem;
  width: 12.5rem;
  border-style: none;
  border-radius: 0.4rem;
  padding-left: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.gray2};
  }
`;

const Btn = styled.button`
  background-color: ${({ theme }) => theme.gray2};
  color: ${({ theme }) => theme.gray3};
  font-weight: 500;
  border-style: none;
  height: 2.5rem;
  width: 4rem;
  margin-left: 0.5rem;
  border-style: none;
  border-radius: 0.4rem;
`;

const inputForm = {
  LoginForm,
  SignForm,
};

export default inputForm;
