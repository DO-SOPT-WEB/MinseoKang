import React from "react";
import styled from "styled-components";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import Info from "../components/info";

const UserID = () => {
  return (
    <div>
      <Contentbox>
        <Title>My Page</Title>
        <UserWrapper>
          <img src="/src/assets/profile.png"></img>
          <Info>
            <p>ID:</p>
            <p>닉네임:</p>
          </Info>
        </UserWrapper>
      </Contentbox>
    </div>
  );
};
const UserWrapper = styled.section`
  display: flex;
  height: 8rem;
  padding: 1rem;
`;

export default UserID;
