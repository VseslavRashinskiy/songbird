/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function PageItem({ pageItem, level }) {
  const styles = {
    a: {
      color: pageItem.id === level ? '#000' : '#00000',
    },
  };
  return (
    <li className="page-item">
      <a className="page-link" href="#" style={styles.a}>
        {pageItem.title}
      </a>
    </li>
  );
}
