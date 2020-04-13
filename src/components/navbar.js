import React, { Component } from 'react'
import logo from "../images/cp_logo.png";
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import "../App.css"


export default class navbar extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen});
    };
    render() {
        return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="California Psychics"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/psychics">Psychics</Link>
                    </li>
                    <li>
                        <Link to="/banner">Banner</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}
