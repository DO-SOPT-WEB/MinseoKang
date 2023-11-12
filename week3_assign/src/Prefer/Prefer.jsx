import React, { useState } from "react";
import First from "./steps/First";
import Second from "./steps/Second";
import Third from "./steps/Third";
import Result from "./steps/result";
import data from "../assets/data";

// ChoosePrefer 컴포넌트는 현재 선택된 단계를 상태로 관리
const Preference = () => {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const [preferStage, setPreferStage] = useState("");

  // const [startPick, setStartPick] = useState(false);

  const filterList = () => {
    const firstFilterList = data.filter(
      (item) => item.category[0] === firstChoice
    );
    const secondFilterList = firstFilterList.filter(
      (item) => item.category[1] === secondChoice
    );
    const thirdFilterList = secondFilterLista.filter(
      (item) => item.category[2] === thirdChoice
    );

    const finalFilterList = thirdFilterList[0];
    return finalFilterList;
  };

  const putResult = () => {
    switch (preferStage) {
      case 0:
        return (
          <>
            <p>취향대로 추천해줄께</p>
            <button
              onClick={() => {
                setPreferStage(1);
              }}
            >
              start
            </button>
          </>
        );

      case 1:
        return (
          <First
            setPreferStage={setPreferStage}
            firstChoice={firstChoice}
            setFirstChoice={setFirstChoice}
            setSecondChoice={setSecondChoice}
            setThirdChoice={setThirdChoice}
          />
        );
      case 2:
        return (
          <Second
            setPreferStage={setPreferStage}
            secondChoice={setSecondChoice}
            setSecondChoice={setSecondChoice}
          />
        );
      case 3:
        return (
          <Third
            setPreferStage={setPreferStage}
            thirdChoice={thirdChoice}
            setThirdChoice={setThirdChoice}
            filterList={filterList}
          />
        );
      case 4:
        return (
          <Result
            filterList={filterList}
            setPreferStage={setPreferStage}
            setFirstChoice={setFirstChoice}
            setSecondChoice={setSecondChoice}
            setThirdChoice={setThirdChoice}
          />
        );

      default:
        return (
          <>
            <p>취향대로 추천해줄께</p>
            <button
              onClick={() => {
                setPreferStage(1);
              }}
            >
              start
            </button>
          </>
        );
    }
  };
  return <>{putResult()}</>;
};

export default Preference;
