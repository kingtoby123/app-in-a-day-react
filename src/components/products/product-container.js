import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Product from "./product";

export default function ProductContainer(props) {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://app-in-a-day-fashion-api.herokuapp.com/product/get")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, [props]);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  function filterByCollection(filter) {
    setProducts(
      productData.filter((item) => {
        return item.collection === filter;
      })
    );
  }

  return (
    <Container className="product-container-wrapper">
      <Container className="buttons-wrapper">
        <div>
          <Button onClick={() => filterByCollection("Courtney")}>
            Courtney's Favorites
          </Button>
          <Button onClick={() => filterByCollection("Patrick")}>
            Patrick's Favorites
          </Button>
          <Button onClick={() => filterByCollection("Seth")}>
            Seth's Favorites
          </Button>
          <Button onClick={() => filterByCollection("Toby")}>
            Toby's Favorites
          </Button>
          <Button onClick={() => setProducts(productData)}>See All</Button>
        </div>
      </Container>

      <Container>
        <Row className="products-wrapper">
          <Row>
            {products.map((product) => (
              <Col key={product.id}>
                <Row key={product.id}>
                  <Product key={product.id} product={product} />
                </Row>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
