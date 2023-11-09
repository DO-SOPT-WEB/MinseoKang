import React from "react";
import styled from "styled-components";
import ChooseButton from "./ChooseButton";

const SelectCategory = ({
  selectOption,
  selectOptionHandler,
  startPickHandler,
}) => {
  return (
    <>
      <Header>원하는 추천 방식을 골라줘</Header>
      <BtnSection>
        {(selectOption === "" || selectOption === "personal") && (
          <ChooseButton
            onClick={() => {
              selectOptionHandler("personal");
            }}
          >
            <p>취향대로 추천</p>
          </ChooseButton>
        )}
        {(selectOption === "" || selectOption === "random") && (
          <ChooseButton
            onClick={() => {
              selectOptionHandler("random");
            }}
          >
            <p>랜덤 추천</p>
          </ChooseButton>
        )}
      </BtnSection>
      {selectOption !== "" && (
        <Start
          onClick={() => {
            startPickHandler(true);
          }}
        >
          시작!
        </Start>
      )}
    </>
  );
};

const Header = styled.header`
  width: 44rem;
  height: 4rem;
  background-color: red;
`;

const BtnSection = styled.section`
  display: flex;
  width: 44rem;
  height: 20rem;
  background-color: pink;
`;

const Start = styled.button`
    color= blue;
`;

export default SelectCategory;
