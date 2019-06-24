import React from 'react';

export default function Card(props) {
  console.log(props.title);
  return (
    <div className="Card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}