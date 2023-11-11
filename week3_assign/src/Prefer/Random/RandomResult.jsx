import React from "react";
import FOOD_LIST from "../../assets/data";

const RandomResult = ({ setRandomType }) => {
  let pop = FOOD_LIST[Math.floor(Math.random() * FOOD_LIST.length)];
  return (
    <>
      <img src={pop.img} alt={pop.name} />
      <div>{pop.name}</div>
      <button
        onClick={() => {
          setRandomType(false);
        }}
      >
        reset
      </button>
    </>
  );
};

export default RandomResult;
