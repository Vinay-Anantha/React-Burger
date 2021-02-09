import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";
import Checkout from "./Container/Checkout/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
