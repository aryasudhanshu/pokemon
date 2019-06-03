import React, { Component } from 'react';
import './Pokedex.css'


class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      {id: 4, name: 'Charmander', type: 'Fire', base_experience: 62},
      {id: 7, name: 'Suqirtle', type: 'Water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'Bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'Poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'Normal', base_experience: 65}
    ]
  }
  render() {

  }
}

export default Pokedex;