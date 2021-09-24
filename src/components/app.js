import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import About from "./pages/about";
import NoMatch from "./pages/no-match";
import ProductDetail from "./pages/product-detail";

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className='app'>
        <h1>July 5th Avenue</h1>
        <h2>July 5th Avenue</h2>
=======
      <div className="app">
        <Router>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/contact" component={Contact} />

            <Route path="/shop" component={Shop} />

            <Route path="/about" component={About} />

            <Route exact path="/product/:slug" component={ProductDetail} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
>>>>>>> 8867ae7e50ac9ac36dd6b4262b7733441213c931
      </div>
    );
  }
}
