import React, { Component } from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('Person.js - rendering...')
        return (
            <div className={classes.person}>
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} ></input>
            </div>
        );
    }
};

export default Person;