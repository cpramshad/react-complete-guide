import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    

    useEffect(() => {
        console.log('Cockpit.js - useEffect');
        // setTimeout(() => {
        //     alert('Saved to cloud');
        // }, 1000);
        toggleBtnRef.current.click();

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

    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>Hi, I'm a React App.</h1>
            <p className={assignedClasses.join(' ')}>This is real</p>            
            <button
                ref={toggleBtnRef} 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);