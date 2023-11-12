import React, { useState } from "react";
import styled from "styled-components";
import Prefer from "../Prefer/Prefer";
import BtnSection from "./BtnSection";
import ChooseButton from "./ChooseButton";
import Title from "./Title";
import Random from "../Prefer/Random/random";
import Section from "./section";
import Header from "./header";

const MainSectionWrapper = () => {
  const [currentStep, setCurrentStep] = useState("");
  const Main = () => {
    switch (currentStep) {
      case "random":
        return <Random></Random>;
      case "prefer":
        return <Prefer></Prefer>;
      default:
        return (
          <Section>
            <Title>원하는 추천방식</Title>
            <BtnSection>
              <ChooseButton
                onClick={() => {
                  setCurrentStep("prefer");
                }}
              >
                <p>취향대로</p>
              </ChooseButton>
              <ChooseButton
                onClick={() => {
                  setCurrentStep("random");
                }}
              >
                <p>랜덤으로</p>
              </ChooseButton>
            </BtnSection>
          </Section>
        );
    }
  };
  return (
    <>
      <Header></Header>
      <MainStyle>{Main()}</MainStyle>
    </>
  );
};

const MainStyle = styled.div`
  margin-left: calc((100vw - 44rem) / 2);
`;
export default MainSectionWrapper;
