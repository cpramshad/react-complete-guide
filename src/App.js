import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App. Im {Math.round(Math.random() * 30)} years old</h1>
        <Person name="Ram" age="36" />
        <Person name="Max" age="28" >Hi</Person>
      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
    );
  }  
}

export default App;
