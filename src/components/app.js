import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form } from "react-bootstrap";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import About from "./pages/about";
import NoMatch from "./pages/no-match";
import ProductDetail from "./pages/product-detail";
import NavBar from "./Navigation/navBar";
import Footer from "./Navigation/footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
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
            <Footer />
          </Router>
        </Container>
      </div>
    );
  }
}
