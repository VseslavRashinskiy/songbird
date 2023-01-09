import React from 'react';

export default function ListGroup({ birdId, birdPr }) {
  return (
    <li className="list-group-item">
      <h4>{birdId !== undefined ? birdPr.name : undefined}</h4>
      <p>{birdId !== undefined ? birdPr.species : undefined}</p>
    </li>
  );
}
