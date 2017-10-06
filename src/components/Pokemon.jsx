import React from 'react';
import PokemonList from '../helpers/pokemonList.js';

const Pokemon = ({ current, isCorrect }) => (
  <div className='pokemon'>
    { isCorrect ? (
        <img src={'/assets/pokemon/' + current + '.png'} />
      ) : (
        <div>
          <img className='lost' src={'/assets/pokemon/' + current + '.png'} />
          <div>The answer was {PokemonList[current]}! Play again?</div>
        </div>
      )
    }
  </div>
);

export default Pokemon;