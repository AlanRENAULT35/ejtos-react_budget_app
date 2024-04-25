import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);
    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        })
    }
    // Les options du dropdown
    const options = [
        { value: '£', label: 'Uk(£)' },
        { value: '₹', label: 'India(₹)' },
        { value: '€', label: 'Europe(€)' },
        { value: '$', label: 'US($)' }

    ];
    const customStyle = {
        backgroundColor: 'lightgreen', // Vert foncé
        color: 'white',
    };
    return (
        <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)} className='form-select' style={customStyle}>
            {options.map((option) => (
                <option key={option.value} value={option.value} style={customStyle}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Location;
