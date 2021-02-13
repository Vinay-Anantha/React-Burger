import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls.js";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../Hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

const INGREDIENT_PRICE = {
  salad: 10,
  meatB: 40,
  cheese: 20,
  meatA: 30
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 100,
    orderNowBtnEnabled: false,
    orderNowBtnClicked: false,
    loading: false,
    error: false
  };
  componentDidMount() {
    axios
      .get(
        "https://react-burger-641ae-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        return response.data;
      })
      .then((responseData) => {
        this.setState({ ingredients: responseData });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  shouldOrderNowBtnBeEnabled = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((prev, curr) => {
        return (prev += curr);
      }, 0);
    this.setState({ orderNowBtnEnabled: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const amountToAdd = INGREDIENT_PRICE[type];
    const oldTotalPrice = this.state.totalPrice;
    const newTotalPrice = oldTotalPrice + amountToAdd;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice
    });
    this.shouldOrderNowBtnBeEnabled(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;

    const amountToSub = INGREDIENT_PRICE[type];
    const oldTotalPrice = this.state.totalPrice;
    const newTotalPrice = oldTotalPrice - amountToSub;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newTotalPrice
    });
    this.shouldOrderNowBtnBeEnabled(updatedIngredients);
  };
  orderNowBtnClickedHandler = () => {
    this.setState({ orderNowBtnClicked: true });
  };
  cancelAfterOrderNowHandler = () => {
    this.setState({ orderNowBtnClicked: false });
  };
  continueAfterOrderNowHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingredients cannot be loaded.</p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientsAdded={this.addIngredientHandler}
            ingredientsRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            orderNowBtnEnabled={this.state.orderNowBtnEnabled}
            ordered={this.orderNowBtnClickedHandler}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          cancelAfterOrderNow={this.cancelAfterOrderNowHandler}
          continueAfterOrderNow={this.continueAfterOrderNowHandler}
          price={this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, axios);
