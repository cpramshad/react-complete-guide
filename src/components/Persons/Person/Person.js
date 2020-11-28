import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('Person.js - rendering...')
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} ></input>
            </Aux>
        );
    }
};

export default withClass(Person, classes.person);