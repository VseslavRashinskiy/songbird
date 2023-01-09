import React from 'react';
import PageItem from './Page-item';

export default function Pagination({ pageItem, level }) {
  return (
    <ul className="pagination">
      {pageItem.map((pageItem) => {
        return <PageItem pageItem={pageItem} key={pageItem.id} level={level} />;
      })}
    </ul>
  );
}
