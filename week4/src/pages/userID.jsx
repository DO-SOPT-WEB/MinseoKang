import React from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import styled from "styled-components";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import Info from "../components/info";

const UserID = () => {
  // const { userId } = useParams();
  // const targetId = DATA.find(({ username }) => username == userId);

  return (
    <>
      <Contentbox>
        <Title>My Page</Title>
        <UserWrapper>
          <img src="/src/assets/profile.png"></img>
          <Info>
            <ul>
              {/* {DATA.map((user) => (
                <li key={user.username}>ID: {user.id}</li>
              ))}
              {DATA.map((user) => (
                <li key={user.nickname}>닉네임: {user.id}</li>
              ))} */}
            </ul>
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
