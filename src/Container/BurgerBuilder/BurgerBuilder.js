import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat2: 1,
      cheese: 2,
      meat1: 2
    }
  };
  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
