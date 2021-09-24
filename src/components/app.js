import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import About from "./pages/about";
import NoMatch from "./pages/no-match";
import ProductDetail from "./pages/product-detail";
import NavBar from "./Navigation/navBar";

<<<<<<< HEAD
import Footer from './Navigation/footer';
import Header from './Navigation/header';

=======
// import Footer from '../Navigation/footer';
// import Header from '../Navigation/header';
>>>>>>> 29663c27266a1420712c55a848a846d534ea7b7a

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/contact" component={Contact} />

            <Route path="/shop" component={Shop} />

            <Route path="/about" component={About} />

            <Route exact path="/product/:slug" component={ProductDetail} />

            <Route component={NoMatch} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    );
  }
}
