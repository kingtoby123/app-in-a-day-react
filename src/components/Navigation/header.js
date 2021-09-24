import React,{ Component } from "react"

import NavBar from "./navBar";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state={}
    }

    render() {
        return (
            <div className="header">
                <NavBar />
            </div>
        )
    }
}