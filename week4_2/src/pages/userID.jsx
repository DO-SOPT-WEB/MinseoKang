import React, { useState } from "react";
import apiClient from "../api/axios";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import Info from "../components/info";

const Mypage = () => {
  let { userId } = useParams();
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const getLoginData = async () => {
    try {
      const response = await apiClient.get(`/api/v1/members/${userId}`, {});
      setUsername(response.data.username);
      setNickname(response.data.nickname);
    } catch (err) {
      console.log(err);
    }
  };

  getLoginData();

  return (
    <>
      <Contentbox>
        <Title>My Page</Title>
        <UserWrapper>
          <img src="/src/assets/profile.png" alt="프로필이미지"></img>
          <Info>
            <p>아이디: {username}</p>
            <p>닉네임: {nickname}</p>
          </Info>
        </UserWrapper>
        <Link to="/login">
          <Logout type="button">로그아웃</Logout>
        </Link>
      </Contentbox>
    </>
  );
};

const UserWrapper = styled.section`
  display: flex;
  height: 8rem;
  padding: 1rem;
`;

const Logout = styled.button`
  border-style: none;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.yellow};
  cursor: pointer;
`;

export default Mypage;
