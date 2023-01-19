import React from "react"
import PropTypes from 'prop-types';

export function ContactList({contacts, filter, deleteHandler }) {
    
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
        <ul>
      {filteredContacts.map((item) => {
        return(<li key={item.id}>{item.name}, {item.number} <button onClick={() => deleteHandler(item.id)}>Del</button></li>)
      })}
    </ul>
    )
}

ContactList.propTypes = {
    deleteHandler: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.string.isRequired,
}