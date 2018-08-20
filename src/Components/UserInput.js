import React from 'react';
import './UserInput.css';
const userInput = (props) => {
    return (
        <input type="text" onChange={props.changeUsername} value={props.username}/>
    );
};

export default userInput;
