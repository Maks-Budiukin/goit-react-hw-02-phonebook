import React from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

export function Filter({ inputChangeHandler, filterValue }) {
    const filterInpudId = nanoid();
    return (
        <>
        <label htmlFor={filterInpudId}>Find contacts by name </label>  
    <input
        type="text"
        name="filter"
        id={filterInpudId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filterValue}
        onChange={inputChangeHandler}
            />  
        </>
    )
}

Filter.propTypes = {
    inputChangeHandler: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
}