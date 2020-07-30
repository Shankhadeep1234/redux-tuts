import React, { useState } from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux";

const NewCakeContainer = ({ buyCake, numOfCakes }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>Number of Cakes : {numOfCakes}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy {number} cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
