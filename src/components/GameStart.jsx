import React from 'react';

//@TODO: randomize start messages?
const GameStart = ({ handleStart }) => (
  <button className='game-start' onClick={handleStart}>I wanna be the very best!</button>
);

export default GameStart;