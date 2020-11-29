import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import Persons from '../Persons';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // console.log(`Input - ${this.inputElement}`,this.inputElement);
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js - rendering...')
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    //ref={inputEl => this.inputElement = inputEl}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name} ></input>
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person, classes.person);