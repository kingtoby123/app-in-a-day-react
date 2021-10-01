import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Overlay } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="featured-content-wrapper">
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/FztVMTHL/Other-Pic-Courtney.jpg" />
          <NavLink
            to="/shop"
            style={{ textDecoration: "none" }}
            className="image-overlay"
          >
            <h2>Browse Courtney's Favorites</h2>
          </NavLink>
        </div>

        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/yxBDyG00/white-shirt-blur-background-three-2.jpg" />
          <NavLink
            to="/shop"
            style={{ textDecoration: "none" }}
            className="image-overlay"
          >
            <h2>Browse Patrick's Favorites</h2>
          </NavLink>
        </div>

        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/CM8L4cTV/Full-Outfit-Seth.jpg" />
          <NavLink
            to="/shop"
            style={{ textDecoration: "none" }}
            className="image-overlay"
          >
            <h2>Browse Seth's Favorites</h2>
          </NavLink>
        </div>

        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/Y052fm8k/Full-Outfit-Tobye.jpg" />
          <NavLink
            to="/shop"
            style={{ textDecoration: "none" }}
            className="image-overlay"
          >
            <h2>Browse Toby's Favorites</h2>
          </NavLink>
        </div>
      </div>

      <div className="home-links-wrapper">
        <div className="home-link">
          <NavLink to="/shop">
            <h1>Shop</h1>
          </NavLink>
          <NavLink to="/about">
            <h1>About</h1>
          </NavLink>
          <NavLink to="/contact">
            <h1>Contact</h1>
          </NavLink>
        </div>
      </div>

      <div className="spacer300" />
    </div>
  );
}
