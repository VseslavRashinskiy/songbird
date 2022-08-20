import React from 'react';
import RowList from './RowList';

export default function Rows(props) {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ul className="item-list list-group">
          {props.birdsData[0].map((birdsData) => {
              return <RowList birdsData={birdsData} key={birdsData.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}
