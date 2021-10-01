import React, { useState } from "react";
import ProductContainer from "../products/product-container";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Shop() {
  return (
    <div className="shop-wrapper">
      <Container>
        <ProductContainer />
      </Container>
    </div>
  );
}
