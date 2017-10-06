import React from 'react';
import PokemonList from '../helpers/pokemonList.js';

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { current, handleOption, totalPokes } = this.props;

    const correctPos = Math.floor(Math.random() * 4);
    const usedPokes = {};
    let options = Array(4).fill(0);

    //generate list of four possible pokemon for user to select
    options = options.map((option, i) => {
      if (i === correctPos) {
        return <li className='option' key={i} onClick={() => handleOption(current)}>{PokemonList[current]}</li>
      } else {
        let pokeIdx = Math.ceil(Math.random() * totalPokes);
        while (pokeIdx === current || usedPokes[pokeIdx]) { 
          pokeIdx = Math.ceil(Math.random() * totalPokes); 
        }
        usedPokes[pokeIdx] = true;
        return <li className='option' key={i} onClick={() => handleOption(pokeIdx)}>{PokemonList[pokeIdx]}</li>
      }
    });

    return (
      <ul className='options'>
        {options}
      </ul>
    )
  }
}

export default Options;