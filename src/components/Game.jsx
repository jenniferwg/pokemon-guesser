import React from 'react';
import Pokemon from './Pokemon.jsx';
import Options from './Options.jsx';
import Lost from './Lost.jsx';
import GameStart from './GameStart.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: true,
      currentPokemon: 1
    }
  }

  handleOption() {

  }

  render() {
    return (
      <div className='game'>
        { this.state.isCorrect ? 
          <div className='active'>
            <Pokemon current='this.state.currentPokemon' />
            <Options />
          </div>
           : 
          <div className='lost'>
            <Lost />
            <GameStart />
          </div>
        }
      </div>
    )
  }
}

export default Game;