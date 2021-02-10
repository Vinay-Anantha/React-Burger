import React, { Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import cssObj from "./ContactData.module.css";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <div className={cssObj.ContactData}>
        <h4>Enter your contact data:</h4>
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
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
