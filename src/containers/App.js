// import React, { useState } from 'react';
import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js - Constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Ram', age: 36 },
      { id: '2', name: 'Max', age: 28 },
      { id: '3', name: 'Haya', age: 6 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js - getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('App.js - componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js - shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App.js - componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: this.state.changeCounter + 1
      }
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('App.js - render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }

    return (
      <div className={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit ? (<Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler} />) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;




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