import styled from "styled-components";
import React from "react";

const inputForm = () => {
  return (
    <>
      <Input>
        <Wrapper>
          <Name>ID</Name>
          <Textholder
            type="text"
            placeholder="아이디를 입력하세요"
          ></Textholder>{" "}
        </Wrapper>
        <Wrapper>
          <Name>비밀번호</Name>
          <Textholder
            type="text"
            placeholder="비밀번호를 입력하세요"
          ></Textholder>{" "}
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
  width: 8rem;
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

  &::placeholder {
    color: ${({ theme }) => theme.gray2};
  }
`;

export default inputForm;
