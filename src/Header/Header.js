import React from 'react';

export default function Header({ count }) {
  return (
    <div className="header">
      <h1>SongBird</h1>
      <h5>Score:{count}</h5>
    </div>
  );
}
