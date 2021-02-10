import React, { Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import cssObj from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../Components/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };
  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Vinay",
        address: { street: "TestStreet", pinCode: 546789, country: "India" },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.replace("/orders");
      })
      .catch((error) => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <input
          className={cssObj.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={cssObj.Input}
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className={cssObj.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className={cssObj.Input}
          type="text"
          name="postal"
          placeholder="Your Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={cssObj.ContactData}>
        <h4>Enter your contact data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;