import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {};

	}

	render() {
		return (
			<div className="nav-bar-wrapper">
				<div className="buttons-wrapper">
                    <div className="nav-button">
                        <NavLink 
                            to="/" 
                            className="home"
                        >
                            Home
                        </NavLink>
                    </div>
					<div className="nav-button">
						<NavLink
							to="/contact"
							className="contact"
						>
							Contact
						</NavLink>
					</div>
                    <div className="nav-button" > 
                        <NavLink 
                            to="/shop" 
                            className="shop" 
                        >
                            Shop
                        </NavLink>
                    </div>
                    <div className="nav-button">
						<NavLink 
                            to="/about" 
                            className="about"
                        >
							About
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}
