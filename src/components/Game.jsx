import React from 'react';
import Pokemon from './Pokemon.jsx';
import Options from './Options.jsx';
import GameStart from './GameStart.jsx';
import Message from './Message.jsx';
import Counter from './Counter.jsx';
import PokemonList from '../helpers/pokemonList.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      gameWon: false,
      isCorrect: true,
      numberCorrect: 0,
      currentPokemon: 1,
      seenPokemon: {},
      totalPokemon: Object.keys(PokemonList).length
    }

    this.handleStart = this.handleStart.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }

  handleOption(pokeIdx) {
    const totalPokes = this.state.totalPokemon;

    //first check win, aka all pokemon correctly answered
    if (pokeIdx === this.state.currentPokemon && this.state.numberCorrect === totalPokes - 1) {
      this.setState(prev => { 
        return { 
          gameStarted: false,
          gameWon: true 
        } 
      });
    } else {
      if (pokeIdx === this.state.currentPokemon) { //if correct
        //@TODO: improve next Pokemon generation, e.g. choose an evolution every few cycles
        let nextPoke = Math.ceil(Math.random() * totalPokes);
        while (this.state.seenPokemon[nextPoke]) { nextPoke = Math.ceil(Math.random() * totalPokes); }
        let seenCopy = Object.assign({}, this.state.seenPokemon);
        seenCopy[nextPoke] = true;
        console.log(PokemonList[nextPoke]); //@TODO: REMOVE LOG
        this.setState(prev => {
          return {
            numberCorrect: prev.numberCorrect + 1,
            currentPokemon: nextPoke,
            seenPokemon: seenCopy
          }
        });
      } else { //if incorrect
        this.setState(prev => { return { isCorrect: false } });
      }
    }
  }

  handleStart() {
    let nextPoke = Math.ceil(Math.random() * this.state.totalPokemon);
    let seen = {};
    seen[nextPoke] = true;
    console.log('NEW GAME STARTED:', PokemonList[nextPoke]); //@TODO: REMOVE LOG
    this.setState(prev => {
      return {
        gameStarted: true,
        gameWon: false,
        isCorrect: true,
        currentPokemon: nextPoke,
        numberCorrect: 0,
        seenPokemon: seen,
        totalPokemon: prev.totalPokemon
      }
    });
  }

  render() {
    return (
      <div className='game'>
        { this.state.gameStarted ? 
          ( <div className='active'>
              <Counter numberCorrect={this.state.numberCorrect} totalPokes={this.state.totalPokemon}/>
              <Pokemon current={this.state.currentPokemon} isCorrect={this.state.isCorrect} />
              { this.state.isCorrect ? 
                <Options current={this.state.currentPokemon} handleOption={this.handleOption} 
                  totalPokes = {this.state.totalPokemon} />
                  : 
                <GameStart handleStart={this.handleStart} />
              }
            </div>
          ) : (
            <div className='message'>
              <Message gameWon={this.state.gameWon} />
              <GameStart handleStart={this.handleStart} />
            </div>
          )
        }
      </div>
    )
  }
}

export default Game;