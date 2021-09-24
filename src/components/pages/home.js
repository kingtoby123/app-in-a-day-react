import React, { useState } from "react";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="featured-content-wrapper">
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/FztVMTHL/Other-Pic-Courtney.jpg" />
          <div className="name-wrapper">Courtney</div>
        </div>
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/XvNpHdKk/Full-Outfit-Patrick.jpg" />
          <div className="name-wrapper">Patrick</div>
        </div>
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/CM8L4cTV/Full-Outfit-Seth.jpg" />
          <div className="name-wrapper">Seth</div>
        </div>
        <div className="featured-photo-wrapper">
          <img src="https://i.postimg.cc/Y052fm8k/Full-Outfit-Tobye.jpg" />
          <div className="name-wrapper">Toby</div>
        </div>
      </div>
    </div>
  );
}
