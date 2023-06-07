import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CharacterContext from './CharacterContext'

function CharacterProvider({ children }) {
    const [name, setName] = useState('Mage');
    const [race, setRace] = useState('Dwarf');
    const [archtype, setArchtype] = useState('');

    const values = useMemo(() => ({
        name,
        setName,
        race,
        setRace,
        archtype,
        setArchtype
    }), [name, race, archtype]);
    return (
        <CharacterContext.Provider value={values}>
            {children}
        </CharacterContext.Provider>
    );
}

CharacterProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CharacterProvider;