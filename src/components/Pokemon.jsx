import React from 'react';
import PokemonList from '../helpers/pokemonList.js';

const Pokemon = ({ current, isCorrect }) => (
  <div className='pokemon'>
    { isCorrect ? (
        //@TODO: replace real image with silhouette
        <img src={'/assets/' + current + '.png'} />
      ) : (
        <div>
          <img className='lost' src={'/assets/' + current + '.png'} />
          <div>The answer was {PokemonList[current]}! Play again?</div>
        </div>
      )
    }
  </div>
);

export default Pokemon;