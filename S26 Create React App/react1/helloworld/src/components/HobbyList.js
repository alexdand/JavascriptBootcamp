import React, { Component } from 'react';
import './HobbyList.css';

class HobbyList extends Component {
    render() {
        const hobbies = ["Purr", "Eat", "Sleep", "Growl"];
        return (
            <ol>
                { hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
            </ol>
        );
    }
}

export default HobbyList;
