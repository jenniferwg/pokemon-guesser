import React from 'react';
import Welcome from './Welcome.jsx';
import Game from './Game.jsx';
import GameStart from './GameStart.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false
    }

    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {

  }

  render() {
    return (
      <div id='body'>
        { this.state.gameStarted ? 
            <Game />
           : 
            <div>
              <Welcome handleStart={this.handleStart} />
              <GameStart />
            </div>
        }
      </div>
    )
  }
}

export default Body;