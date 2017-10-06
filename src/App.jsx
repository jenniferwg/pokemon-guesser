import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game.jsx';

const App = () => (
  <div id='app'>
    <div className="title">Who's That Pokemon?</div>
    <Game />
    <div>copyright disclaimer here</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));