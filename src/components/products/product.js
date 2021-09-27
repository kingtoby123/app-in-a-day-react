import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-name-wrapper">
          <h4>{product.name}</h4>
        </div>

        <div className="product-photo-wrapper">
          <img src={product.featured_image} />
        </div>

        <div className="product-price-wrapper">
          <h4>{`$${product.price}`}</h4>
        </div>
      </Link>
    </div>
  );
}
