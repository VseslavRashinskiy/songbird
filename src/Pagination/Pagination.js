import React from 'react';
import PageItem from './Page-item';

export default function Pagination(props) {
  return (
    <ul className="pagination">
        { props.pageItem.map(pageItem => {
            return <PageItem pageItem={pageItem} key={pageItem.id}/>
        }) }
    </ul>
  );
}
