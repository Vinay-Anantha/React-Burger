import React, { Component } from "react";
class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div>Burger</div>
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
