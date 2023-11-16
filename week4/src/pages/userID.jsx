import React from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import styled from "styled-components";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import Info from "../components/info";

const UserID = () => {
  //유저 프로필 불러오기
  const profile = async (userId) => {
    try {
      const bringProfile = await apiClient.get(`api/v1/members/${userId}`);
      console.log("프로필데이터", bringProfile);
    } catch (err) {
      console.log("프로필오류", userId);
    }
  };

  return (
    <>
      <Contentbox>
        <Title>My Page</Title>
        <UserWrapper>
          <img src="/src/assets/profile.png" alt="프로필이미지"></img>
          <Info>
            {/* <p>아이디: {state.id}</p>
            <p>닉네임: {state.nickname}</p> */}
          </Info>
        </UserWrapper>
      </Contentbox>
    </>
  );
};

const UserWrapper = styled.section`
  display: flex;
  height: 8rem;
  padding: 1rem;
`;

export default UserID;
