import React from 'react';
import ListGroup from './ListGroup';

export default function BirdsDitaly({ birdId, birdsData, birdPr }) {
  const styles = {
    div: {
      display: birdId ? 'flex' : 'none',
    },
    p: {
      display: birdId ? 'none' : 'flex',
    },
  };
  return (
    <div className="birds-details cards">
      <p className="instruction" style={styles.p}>
        <span>Послушайте плеер.</span>
        <span>Выберите птицу из списка</span>
      </p>
      <div style={styles.div} className="card-body">
        <img
          className="bird-image"
          src={birdId !== undefined ? birdPr.image : undefined}
          alt={birdId !== undefined ? birdPr.name : undefined}
        ></img>
        <ul className="list-group list-group-flush">
          <ListGroup birdsData={birdsData} birdPr={birdPr} birdId={birdId} />
        </ul>
      </div>
      <span>{birdId !== undefined ? birdPr.description : undefined}</span>
    </div>
  );
}
