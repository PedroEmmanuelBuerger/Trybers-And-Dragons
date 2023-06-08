import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';
import '../styles/CharacterCard.css'

export default function CharacterList() {
    const { arrCharacters } = useContext(CharacterContext);
    return (
        <div className='charBody'>
            {arrCharacters.map((character, index) => (
                <div key={index} className='Character'>
                    <h1>{`nome: ${character.name} `}</h1>
                    <h2>{`Raça: ${Object.getPrototypeOf(character.race).constructor.name}`}</h2>
                    <h2>{`Archetétipo: ${Object.getPrototypeOf(character.archetype).constructor.name}`}</h2>
                    <h4>{`Vida: ${character.lifePoints}`}</h4>
                    <h4>{`Força: ${character.strength}`}</h4>
                    <h4>{`Defesa: ${character.defense}`}</h4>
                    <h4>{`Destreza: ${character.dexterity}`}</h4>
                    <h4>{`Tipo de Energia: ${character.energy.type_}`}</h4>
                    <h4>{`Quantidade de Energia: ${character.energy.amount}`}</h4>
                </div>
            ))}
        </div>
    )
}
