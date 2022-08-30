import React from 'react';
import ListGroup from './ListGroup';

export default function RandomBird({ birdsData, level, element, styles }) {

  return (
    <div className="random-bird" style={styles.dis}>
      <img className="bird-image" style={styles.img} src="https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg" alt="bird"></img>
      <img className="bird-image" style={styles.div} src={element.image} alt={element.name}></img>
      <ListGroup level={level} birdsData={birdsData} element={element} styles={styles}/>
    </div>
  );
}
