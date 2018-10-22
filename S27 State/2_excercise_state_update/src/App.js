import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instructors: [ {name: 'Tom', hobbies: ['Trekking','React'] }, { name: 'Jerry',hobbies: ['Sailing', 'D3'] }, { name: 'Itchy',hobbies: ['Play Pianola','Node'] } ]
        };

        setTimeout(() => {
            const randomInstructor = Math.floor(Math.random() * this.state.instructors.length);
            const hobbyIndex = Math.floor(Math.random() * this.state.instructors[randomInstructor].hobbies.length);
            // const instructors = this.state.instructors.slice();
            // create a new object
            // instructors[randomInstructor] = Object.assign({}, instructors[randomInstructor]);
            // instructors[randomInstructor].hobbies = instructors[randomInstructor].hobbies.slice();
            // instructors[randomInstructor].hobbies.splice(hobbyIndex, 1);
            const instructors = this.state.instructors.map((inst,i) => {
                if (i === randomInstructor) {
                    const hobbies = inst.hobbies.slice();
                    hobbies.splice(hobbyIndex, 1);
                    return { ...inst, hobbies }
                }
                return inst;
            });
            this.setState({instructors});
        }, 5000);
    }
    render() {
        const instructors = this.state.instructors.map((instructor, index) => (
            <li key={index}>
                <h2> { instructor.name } </h2>
                <h4> Hobbies: { instructor.hobbies.join(", ") } </h4>
            </li>
        ));
        return (
            <div className="App">
                <ul>
                    { instructors }
                </ul>
            </div>
        );
    }
}

export default App;
