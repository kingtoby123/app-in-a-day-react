import React, { useState, useEffect } from "react";

import Product from "./product";

export default function ProductContainer(props) {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1/5000/product/get")
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, [props]);

  useEffect(() => {
    setProducts(productData);
  }, [productData]);

  function filterByCategory(filter) {
    setProducts(
      productData.filter((item) => {
        return item.category === filter;
      })
    );
  }

  return (
    <div className="">
      <div className="buttons-wrapper">
        <button onClick={() => filterByCategory("Courtney's Favorites")}>
          Courtney's Favorites
        </button>
        <button onClick={() => filterByCategory("Patrick's Favorites")}>
          Patrick's Favorites
        </button>
        <button onClick={() => filterByCategory("Seth's Favorites")}>
          Seth's Favorites
        </button>
        <button onClick={() => filterByCategory("Toby's Favorites")}>
          Toby's Favorites
        </button>
      </div>

      <div className="products-wrapper">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
