import React from "react";
import Contentbox from "../components/contentBox";
import Title from "../components/Title";
import InputForm from "../components/inputForm";
import Cta from "../components/cta";

const Signup = () => {
  return (
    <div>
      <Contentbox>
        <Title>회원가입</Title>
        <InputForm.SignForm></InputForm.SignForm>
        <Cta.Main type="button">회원가입</Cta.Main>
      </Contentbox>
    </div>
  );
};

export default Signup;
