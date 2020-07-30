import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux";

const CakeContainer = ({ buyCake, numOfCakes }) => {
  return (
    <div>
      <h1>Number of Cakes : {numOfCakes}</h1>
      <button onClick={buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

//or we can directly put the insert the action to our connect HOC
// export default connect(mapStateToProps, {
//     buyCake: buyCake,
//   })(CakeContainer);
