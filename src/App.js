// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Ram', age: 36 },
//       { name: 'Max', age: 28 }
//     ],
//     otherState: 'Some other value'
//   });

//   const swithNameHandler = () => {
//     setPersonsState({
//       persons: [
//         {name: 'Ramshad', age: 36},
//         {name: 'Max', age: 38}
//       ]
//     })
//   }


//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App.</h1>
//       <button onClick={swithNameHandler}>Switch name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >Hi</Person>
//     </div>
//     // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
//   );
// }



class App extends Component {
  state = {
    persons: [
      { name: 'Ram', age: 36 },
      { name: 'Max', age: 28 },
      { name: 'Haya', age: 6}
    ],
    showPersons: false
  }

  swithNameHandler = (newName) => {
    console.log('Clicked');
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: 'Max', age: 38 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'test', age: 36 },
        { name: event.target.value, age: 38 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })

  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.swithNameHandler.bind(this, 'Maximilian')}
            change={this.nameChangedHandler}>Hi</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
    );
  }
}

export default App;
