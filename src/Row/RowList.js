import React from 'react';

export default function RowList({ birdsData }) {
  //  console.log('RowList:', birdsData)
  return (
    <li className="list-group-item">{birdsData.name}
    </li>
  );
}
