import React from 'react'

import './StarWars.css'

const Character = props => {
    return (
      <div className="characterCard">
        <h2 className="characterName">
            {props.character.name}
        </h2>
        <p className="characterBirthYear">
          Birth Year: {props.character.birth_year}
        </p>
      </div>
    );
  };

export default Character

