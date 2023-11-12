import React, { useState } from "react";
import Prefer from "../Prefer/Prefer";
import BtnSection from "./BtnSection";
import ChooseButton from "./ChooseButton";
import Question from "./Question";
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
            <Question>원하는 추천방식</Question>
            <BtnSection>
              <ChooseButton
                onClick={() => {
                  setCurrentStep("prefer");
                }}
              >
                취향대로
              </ChooseButton>
              <ChooseButton
                onClick={() => {
                  setCurrentStep("random");
                }}
              >
                랜덤으로
              </ChooseButton>
            </BtnSection>
          </Section>
        );
    }
  };
  return (
    <>
      <Header></Header>
      {Main()}
    </>
  );
};

export default MainSectionWrapper;
