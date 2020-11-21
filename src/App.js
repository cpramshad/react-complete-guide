// import React, { useState } from 'react';
import React, { Component } from 'react';
import classes from './App.module.css';
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
      { id: '1', name: 'Ram', age: 36 },
      { id: '2', name: 'Max', age: 28 },
      { id: '3', name: 'Haya', age: 6 }
    ],
    showPersons: false
  }

  // swithNameHandler = (newName) => {
  //   console.log('Clicked');
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 36 },
  //       { name: 'Max', age: 38 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
     return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
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
          {this.state.persons.map((person, index) => {
            return <Person 
            click={ () => this.deletePersonHandler(index)} 
            name={person.name} 
            age={person.age}
            key={person.id}
            change = { (event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <div className={classes.person}>test</div>
        <h1>Hi, I'm a React App.</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div>
      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi'))
    );
  }
}

export default App;
