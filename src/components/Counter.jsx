import React from 'react';

const Counter = ({ numberCorrect, totalPokes }) => (
  <div className='counter'>Score: {numberCorrect}/{totalPokes}</div>
);

export default Counter;