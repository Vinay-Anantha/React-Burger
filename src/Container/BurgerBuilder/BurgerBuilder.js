import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls.js";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../Hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    orderNowBtnClicked: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get(
    //     "https://react-burger-641ae-default-rtdb.firebaseio.com/ingredients.json"
    //   )
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .then((responseData) => {
    //     this.setState({ ingredients: responseData });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
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
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = { ...this.props.ings };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.state.error ? (
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
    if (this.state.loading) {
      orderSummary = <Spinner />;
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
    ings: state.ingredients,
    price: state.totalPrice
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
