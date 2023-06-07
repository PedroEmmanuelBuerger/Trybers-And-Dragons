import React, { useContext } from 'react';
import CharacterContext from '../context/CharacterContext';

export default function Character() {
    const { setRace, setArchtype, setName } = useContext(CharacterContext);

    const setNameFunc = ({target}) => {
        const { value } = target;
        setName(value);
    }

    const setRaceFunc = ({ target }) => {
        const { value } = target;
        setRace(value);
    };

    const setArchFUnc = ({target}) => {
        const {value } = target;
        setArchtype(value);
    }

    return (
        <div>
            <form>
                <label htmlFor="chose-Name">
                    digite o nome:
                    <input type='text' id='chose-Name' placeholder='ex: Hagar...' onChange={setNameFunc}/>
                    <br />
                    <br />
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
                <br />
                <br />
                <label htmlFor='chose-Arch'>
                escolha o Archtétipo:
                    <select name="Arch" id="Arch" onChange={setArchFUnc}>
                        <option value="Mage" >Mage</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Warrior">Warrior</option>
                        <option value="Necromancer">Necromancer</option>
                    </select>
                </label>
            </form>
        </div>
    );
}