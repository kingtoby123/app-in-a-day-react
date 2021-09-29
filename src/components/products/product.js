import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Grid, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product({ product }) {
  return (
    <Card xs={6} md={4} className="product-card">
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Card.Body>
          <Card.Title className="product-name-wrapper">
            <h4>{product.name}</h4>
          </Card.Title>

          <div className="product-photo-wrapper">
            <Card.Img src={product.featured_image} />
          </div>

          <Card.Subtitle className="product-price-wrapper">
            <h4>{`$${product.price}`}</h4>
          </Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>
  );
}
