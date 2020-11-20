import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} ></input>
        </div>        
    );
};

export default person;