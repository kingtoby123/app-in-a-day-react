import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render() {
		return (
			<div className="navigation-wrapper">

                <div className="left-column">
                    <a href="/contact" className="icon">
                        <i className="fas fa-phone-volume"></i>
                    </a>

                    <div className="contact-hours-wrapper">
                        <a href="/contact" className="phone">
                            555 705-2021
                        </a>

                        <a href="/contact" className="hours">
                            9 AM - 10 PM
                        </a>
                    </div>
                </div>

                <div className="center-column">
                    <div className="banner-image">
                        <img src="https://i.postimg.cc/1R2frr01/logo.jpg" alt="logo" />
                    </div>
                    <div className="links-wrapper">
                    
                        <div className="nav-link">
                            <a href="/">Home</a>
                        </div>

                        <div className="nav-link">
                            <a href="/about">About</a>
                        </div>

                        <div className="nav-link"> 
                            <a href="/shop">Shop</a>
                        </div>

                        <div className="nav-link">
                            <a href="/contact">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="address-wrapper">
                        <a href="/contact">
                                50 W Broadway <br />
                                Salt Lake City, UT. 84101
                        </a>
                    </div>

                    <div className="contact-icon">
                        <a href="/contact">
                            <i className="fas fa-map-marker-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
		);
	}
}
