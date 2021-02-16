import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
import Orders from "./Container/Orders/Orders";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Layout>
          Disabling  till nav is handled via redux
        </Layout> */}
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </div>
    );
  }
}

export default App;
