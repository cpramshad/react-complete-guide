import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js - useEffect');
        setTimeout(() => {
            alert('Saved to cloud');
        }, 1000);

        return () => {
            console.log('Cockpit.js - cleanup work in useEffect');
        };

    }, []);

    useEffect(() => {
        console.log('Cockpit.js - useEffect2');    
        return () => {
            console.log('Cockpit.js - cleanup work in 2nd useEffect');
        };
        
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, I'm a React App.</h1>
            <p className={assignedClasses.join(' ')}>This is real</p>            
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default Cockpit;