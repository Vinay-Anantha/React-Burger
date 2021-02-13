import React, { Component } from "react";
import cssObj from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

//implemnting shouldComponentUpdate to improve performance.
//this also prevents OrderSummary from getting rendered when Modal is not visible in BurgerBuilder
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.backDropClicked} />
        <div
          className={cssObj.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
