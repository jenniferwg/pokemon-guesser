import React from 'react';
import Pokemon from './Pokemon.jsx';
import Options from './Options.jsx';
import Lost from './Lost.jsx';
import GameStart from './StartGame.jsx';

class Game extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      isCorrect = true;
      currentPokemon = 1;
    }
  }

  handleOption() {

  }

  render() {
    return (
      <div id='game'>
        { this.state.isCorrect ? {
            <Pokemon current='this.state.currentPokemon' />
            <Options />
          } : {
            <Lost />
            <GameStart />
          }
        }
      </div>
    )
  }
}

export default Body;