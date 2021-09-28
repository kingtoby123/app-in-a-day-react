import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="featured-content-wrapper">
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/FztVMTHL/Other-Pic-Courtney.jpg" />

          <div className="name-wrapper">
            <h2>Courtney</h2>
          </div>
        </div>
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/yxBDyG00/white-shirt-blur-background-three-2.jpg" />

          <div className="name-wrapper">
            <h2>Patrick</h2>
          </div>
        </div>
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/CM8L4cTV/Full-Outfit-Seth.jpg" />

          <div className="name-wrapper">
            <h2>Seth</h2>
          </div>
        </div>
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/Y052fm8k/Full-Outfit-Tobye.jpg" />

          <div className="name-wrapper">
            <h2>Toby</h2>
          </div>
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
    </div>
  );
}
