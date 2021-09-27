import React, { useState, useEffect } from "react";

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
    <div className="product-container-wrapper">
      <div className="buttons-wrapper">
        <button onClick={() => filterByCollection("Courtney")}>
          Courtney's Favorites
        </button>
        <button onClick={() => filterByCollection("Patrick")}>
          Patrick's Favorites
        </button>
        <button onClick={() => filterByCollection("Seth")}>
          Seth's Favorites
        </button>
        <button onClick={() => filterByCollection("Toby")}>
          Toby's Favorites
        </button>
        <button onClick={() => setProducts(productData)}>See All</button>
      </div>

      <div className="products-wrapper">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
