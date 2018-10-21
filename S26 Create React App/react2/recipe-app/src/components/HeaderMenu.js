import React, { Component } from 'react';
import '../css/HeaderMenu.css';

class HeaderMenu extends Component {
    render() {
        let menues = ["Home", "Recipes", "Contact", "About"];
        return (
            <header className="header">
                <h2><a href="#inicio">Recipe App</a></h2>
                <nav className="menu-nav">
                    <ul> { menues.map((menu, i) => (<li key={i} className="menu-option"> <a href="recipe{i}">{menu}</a> </li>)) } </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderMenu;
