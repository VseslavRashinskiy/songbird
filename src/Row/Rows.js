import React from 'react';
import BirdsDitaly from '../BirdsDetail/BirdsDitaly';
import RowList from './RowList';

export default function Rows({ level, birdsData, birdId, setBirdId, birdPr, element, setCount, count, styles, name, setName, classes, setClass }) {
  return (
    <div className="row mb2">
      <div className="col-md-6" style={styles.dis}>
        <ul className="item-list list-group">
          {birdsData[level].map((item) => {
            return (
              <RowList
                classes={classes}
                setClass={setClass}
                name={name}
                setName={setName}
                count={count}
                setCount={setCount}
                element={element}
                birdId={birdId}
                birdsData={item}
                setBirdId={setBirdId}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>
      <div className="col-md-6" style={styles.dis}>
        <BirdsDitaly birdPr={birdPr} birdsData={birdsData} birdId={birdId} level={level} />
      </div>
    </div>
  );
}
