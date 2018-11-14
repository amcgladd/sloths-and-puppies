import React from 'react';
import Starred from './Starred';

function Animal(props){

  return(
    <div className="bigDaddy">
      <style>{`
        .bigDaddy {
        border: 1px solid black;
        width: 220px;
        }
        img {
          width: 200px;
        }
      `}
      </style>
      <p>Name: {props.name}</p>
      <p>City: {props.city}</p>
      <p>Age: {props.age}</p>
      <p>Key: {props.uuid}</p>
      <img src={props.url}/>
      <Starred/>
    </div>
  );
}

export default Animal;
