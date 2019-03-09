import React from 'react'


const Character = props => {
    return (
      <div className="characterCard">
        <h2 className="characterName">
            {props.character.name}
        </h2>
        <p className="characterBirthYear">
          Birth Year: {props.character.birth_year}
        </p>
       <p>
            Species:  
       </p>
      </div>
    );
  };

export default Character