import React, { useState } from 'react';
import birdsData from './Data';
import Header from './Header/Header';
import Pagination from './Pagination/Pagination';
import RandomBird from './Random-bird/Random-bird';
import Rows from './Row/Rows';

function App() {
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(true);

  const pageItem = [
    {id: 1, completed: false, title: 'Train'},
    {id: 2, completed: false, title: 'Воробей'},
    {id: 3, completed: false, title: 'Лесные'},
    {id: 4, completed: false, title: 'Певчие'},
    {id: 5, completed: false, title: 'Хищные'},
    {id: 6, completed: false, title: 'Морские'},
  ];
  return (
    <div className="wrapper">
      <Header />
      <Pagination pageItem={pageItem}/>
      <RandomBird />
      <Rows birdsData={birdsData}/>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setBoolean(!boolean)}>{boolean.toString()}</button>
    </div>
  );
}

export default App;

