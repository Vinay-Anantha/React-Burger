import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../Hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../Components/UI/Spinner/Spinner";
import * as orderActions from "../../store/actions/index";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        );
      });
    }
    return <div>{orders}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(orderActions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
