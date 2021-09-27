import React, { Component } from "react";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch(
      `https://app-in-a-day-fashion-api.herokuapp.com/product/get/id/${this.props.match.params.slug}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          product: data,
        });
      })
      .catch((error) => {
        console.log("Error getting this product", error);
      });
  }

  render() {
    const { name, category, collection, description, price, featured_image } =
      this.state.product;
    return (
      <div className="product-details-wrapper">
        <div className="details-grid">
          <div className="details-image-wrapper">
            <img src={featured_image} />
          </div>

          <div className="details">
            <div className="name-wrapper">
              <h3>{name}</h3>
            </div>

            <div className="price-wrapper">
              <h5>{price}</h5>
            </div>

            <div className="description-wrapper">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
