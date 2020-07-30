import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => {
    return state.numOfCakes;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Cakes : {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
