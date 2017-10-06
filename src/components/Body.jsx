import React from 'react';
import Welcome from './Welcome.jsx';
import Game from './Game.jsx';
import StartGame from './StartGame.jsx';

class Body extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted = false;
    }

    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {

  }

  render() {
    return (
      <div id='body'>
        { this.state.gameStarted ? {
            <Game />
          } : {
            <Welcome handleStart={this.handleStart} />
            <GameStart />
        }}
      </div>
    )
  }
}

export default Body;