import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';
import Character from '../../Backend/Character';
import CharacterList from '../components/CharacterList';

export default function nCharacter() {
    const { setRace, setArchtype, setName, race, archtype, name, arrCharacters, setArrChar } = useContext(CharacterContext);

    const setNameFunc = ({ target }) => {
        const { value } = target;
        setName(value);
    }

    const setRaceFunc = ({ target }) => {
        const { value } = target;
        setRace(value);
    };

    const setArchFUnc = ({ target }) => {
        const { value } = target;
        setArchtype(value);
    }

    const createNewCharacter = () => {
        const player = new Character(name, race, archtype);
        const oldArr = [...arrCharacters]
        oldArr.push(player);
        setArrChar(oldArr);
    }

    return (
        <div>
            <form>
                <label htmlFor="chose-Name">
                    digite o nome:
                    <input type='text' id='chose-Name' placeholder='ex: Hagar...' onChange={setNameFunc} />
                </label>
                escolha a raça:
                <label htmlFor='chose-Race'>
                    <select name="Race" id="Race" onChange={setRaceFunc}>
                        <option value="Dwarf" >Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Orc">Orc</option>
                    </select>
                </label>
                <label htmlFor='chose-Arch'>
                    escolha o Archtétipo:
                    <select name="Arch" id="Arch" onChange={setArchFUnc}>
                        <option value="Mage" >Mage</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Necromancer">Necromancer</option>
                    </select>
                </label>
                <button type='Button' onClick={createNewCharacter}>Gerar Ficha</button>
            </form>
            <CharacterList />
        </div>
    );
}
