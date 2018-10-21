import React, { Component } from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
    render() {
        return (
            <div className="container">
                <h1>Moxie the Cat</h1>
                <img className="img" src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg" alt="" width="600" />
                <h4>Hobbies</h4>
                <HobbyList />
            </div>
        );
    }
}

export default Pet;
