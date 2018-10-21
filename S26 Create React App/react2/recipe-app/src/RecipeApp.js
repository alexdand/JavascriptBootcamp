import React, { Component } from 'react';
import HeaderMenu from './components/HeaderMenu';
import RecipeList from './components/RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
    // we should pass a recipes array here if we had the data
    render() {
        return (
            <div className="App">
                <HeaderMenu />
                <RecipeList />
            </div>
        );
    }
}

export default RecipeApp;
