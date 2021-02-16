import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls.js";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../Hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    orderNowBtnClicked: false
  };
  componentDidMount() {
    this.props.onInitIngredients();
  }
  shouldOrderNowBtnBeEnabled = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((prev, curr) => {
        return (prev += curr);
      }, 0);
    return sum > 0;
  };

  orderNowBtnClickedHandler = () => {
    this.setState({ orderNowBtnClicked: true });
  };

  cancelAfterOrderNowHandler = () => {
    this.setState({ orderNowBtnClicked: false });
  };

  continueAfterOrderNowHandler = () => {
    this.props.onInitPurchase(); //
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.props.error ? (
      <p>Ingredients cannot be loaded.</p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            orderNowBtnEnabled={this.shouldOrderNowBtnBeEnabled(
              this.props.ings
            )}
            ordered={this.orderNowBtnClickedHandler}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          cancelAfterOrderNow={this.cancelAfterOrderNowHandler}
          continueAfterOrderNow={this.continueAfterOrderNowHandler}
          price={this.props.price}
        />
      );
    }
    return (
      <React.Fragment>
        <Modal
          displayModal={this.state.orderNowBtnClicked}
          backDropClicked={this.cancelAfterOrderNowHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilderReducer.ingredients,
    price: state.burgerBuilderReducer.totalPrice,
    error: state.burgerBuilderReducer.error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
