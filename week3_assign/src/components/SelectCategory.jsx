import React from "react";
import styled from "styled-components";
import ChooseButton from "./ChooseButton";

const SelectCategory = () =>
  //     {
  //   selectOption,
  //   selectOptionHandler,
  //   startPickHandler,
  //     }
  {
    return (
      <div>
        <Header>원하는 추천 방식을 골라줘</Header>
        <BtnSection>
          <ChooseButton></ChooseButton>
        </BtnSection>
      </div>
    );
  };

const Header = styled.header`
  width: 44rem;
  height: 4rem;
  background-color: red;
`;

const BtnSection = styled.section`
  width: 10rem;
  height: 20rem;
  background-color: pink;
`;

export default SelectCategory;
