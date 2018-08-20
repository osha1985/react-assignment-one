import React from 'react';

const userOutput = (props)=> {
    const style = {
        color: 'red',
        fontSize:'20px'
    };


  return (
    <div>
        <p style={style}>Hello I am {props.name}</p>
        <p style={style}>How are you</p>
    </div>
  );
};

export default userOutput;