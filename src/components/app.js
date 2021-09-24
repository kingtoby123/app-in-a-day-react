import React, { Component } from "react";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import About from "./pages/about";
import NoMatch from "./pages/no-match";
import ProductDetail from "./pages/product-detail";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/contact" component={Contact} />

            <Route path="/shop" component={Shop} />

            <Route path="/about" component={About} />

            <Route exact path="/product/:slug" component={ProductDetail} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}
