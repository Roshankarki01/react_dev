import React, { useState } from "react";
import PropTypes from 'prop-types';

const Increment = (props) => {
    const [value, setValue] = useState(0);

    useState(()=>{
        console.log("element is mount");
    })
    useState(()=>{
        console.log("componenet updates");

        return()=>{
            console.log("component or l=element remove");
        }
    },[value])

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };

    const zero = () => {
        setValue(0);
    };

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={zero}>Zero</button>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    );
};

Increment.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

Increment.defaultProps = {
    name: "Herald College",
    age: 20
};

export default Increment;
