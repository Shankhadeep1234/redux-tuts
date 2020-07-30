import React from "react";
import { connect } from "react-redux";

import { buyIceCream } from "../redux";

const IceCreamContainer = ({ buyIceCream, numOfIceCream }) => {
  return (
    <div>
      <h1>Number of IceCream : {numOfIceCream}</h1>
      <button onClick={buyIceCream}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
