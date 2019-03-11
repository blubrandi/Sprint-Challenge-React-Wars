import React from 'react'

import './StarWars.css'

const Character = props => {
    return (
      <div className="characterCard">
        <h2 className="characterName">
            {props.character.name}
        </h2>
        <p className="characterBirthYear">
          <span className="boldText">Birth Year:</span> {props.character.birth_year}
        </p>
        <p>
            <span className="boldText">Mass:</span> {props.character.mass}
        </p>
      </div>
    );
  };

export default Character

