import React,{ Component } from "react"

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state={}
    }

    render() {
        return (
            <div className="footer">
                <div className="logo">
                    <img src="https://i.postimg.cc/QC2CNjNd/saks-fifth-avenue-logo.jpg" alt="Logo"/>
                </div>

                <div className="footer-phone-hours">
                    <span className="phone">
                        555 705 2021
                    </span>

                    <span className="hours">
                        9 am - 5 pm
                    </span>
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

                <div className="social-media-icons-wrapper">
                    <a href="https://www.instagram.com/July5thAvenue" target="blank">
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a href="https://twitter.com/July5thAvenue" target="blank">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href="https://www.facebook.com/July5thAvenue" target="blank">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="https://www.youtube.com/July5thAvenue" target="blank">
                        <i className="fab fa-youtube"></i>
                    </a>

                </div>

                <div className="copyright-wrapper">
                    &copy; 2021 July5thAvenue &#124; All rights reserved
                </div>              
            </div>
        )
    }
}