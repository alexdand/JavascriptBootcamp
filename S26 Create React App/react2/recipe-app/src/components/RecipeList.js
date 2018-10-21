import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import '../css/RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Pasta Primavera",
                ingredients: ["First Ingredient", "Second Ingredient", "Third Ingredient"],
                img: "../img/pasta.jpeg",
                instructions: "Put the ingredients together and this and that you know"
            },
            {
                title: "Ceviche",
                ingredients: ["Fish", "Lemon", "Whatever"],
                img: "../img/pasta.jpeg",
                instructions: "Put the ingredients in water and boil"
            }
        ]
    };
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render() {
        return (
            /** we could also write this way -> <Recipe key={index} {...r} /> **/
            <div className="recipe-container">
                { this.props.recipes.map((r, index) => (
                    <Recipe key={index} title={r.title} ingredients={r.ingredients} img={r.img} instructions={r.instructions} />
                )) }
                <Recipe title="Not Pasta" ingredients={["Meat", "Potatoe", "Something else"]} img="../img/asado.jpg" instructions="Cook meet" />
            </div>
        );
    }
}

export default RecipeList;
