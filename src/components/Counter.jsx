import React from 'react';

const Counter = ({ numberCorrect, totalPokes }) => (
  <div className='counter'>{numberCorrect}/{totalPokes}</div>
);

export default Counter;