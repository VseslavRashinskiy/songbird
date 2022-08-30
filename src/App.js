import React, { useState } from 'react';
import birdsData from './Data';
import Header from './Header/Header';
import Pagination from './Pagination/Pagination';
import RandomBird from './Random-bird/Random-bird';
import Rows from './Row/Rows';

function App() {
  const [click, setClick] = useState(0);

  const [level, setLevel] = useState(0);
  const [birdId, setBirdId] = useState();
  const [count, setCount] = useState(30);
  const [name, setName] = useState(true);
  const [classes, setClass] = useState('list-group-item')
  const [element, setEl] = useState(birdsData[level][Math.floor(Math.random() * birdsData[level].length)]);
  const birdPr = birdsData[level].find((item) => item.id === birdId);

  const pageItem = [
    { id: 0, completed: false, title: 'Train' },
    { id: 1, completed: false, title: 'Воробей' },
    { id: 2, completed: false, title: 'Лесные' },
    { id: 3, completed: false, title: 'Певчие' },
    { id: 4, completed: false, title: 'Хищные' },
    { id: 5, completed: false, title: 'Морские' },
  ];

  function handleOnClick() {
    setEl(birdsData[level + 1][Math.floor(Math.random() * birdsData[level + 1].length)]);
    setLevel(level + 1);
    setClick(click + 1);
    setBirdId();
    setName(true)
  }

  function refreshPage() {
    window.location.reload();
  }

  const styles = {
    div: {
      display: birdId === element.id ? 'flex' : 'none',
    },
    img: {
      display: birdId !== element.id ? 'flex' : 'none',
    },
    button: {
      background: birdId !== element.id ? '#000' : '#00bc8c',
      display: level !== 6 ? 'flex' : 'none',
    },
    block: {
      display: level === 6 ? 'flex' : 'none',
    },
    dis: {
      display: level !== 6 ? 'flex' : 'none',
    },
  };

  return (
    <div className="wrapper">
      <Header count={count} />
      <Pagination pageItem={pageItem} level={level} />
      <RandomBird styles={styles} element={element} birdId={birdId} birdsData={birdsData} level={level} />
      <Rows
        classes={classes}
        setClass={setClass}
        name={name}
        setName={setName}
        styles={styles}
        count={count}
        setCount={setCount}
        birdPr={birdPr}
        element={element}
        birdId={birdId}
        setBirdId={setBirdId}
        birdsData={birdsData}
        level={level}
      />
      <button className="btn" style={styles.button} disabled={birdId !== element.id} onClick={handleOnClick}>
        Next level
      </button>
      <div style={styles.block}>
        <h3>Поздравляем вы набрали {count} из 30 возможных</h3>
        <button onClick={refreshPage}>Restart</button>
      </div>
    </div>
  );
}

export default App;

