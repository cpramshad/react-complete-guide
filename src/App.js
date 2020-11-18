import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Ram', age: 36},
      {name: 'Max', age: 28}
    ]
  }

  swithNameHandler = () => {
    console.log('Clicked');
    this.setState({
      persons: [
        {name: 'Ramshad', age: 36},
        {name: 'Max', age: 38}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button onClick={this.swithNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >Hi</Person>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
    );
  }  
}

export default App;
