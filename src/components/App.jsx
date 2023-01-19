import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
}

  

  submitHandler = data => {
    const normalizedName = data.name.toLowerCase();
    this.state.contacts.find(contact => contact.name.toLowerCase() === normalizedName) ? 
      alert(`${data.name} is already in contacts `) :
      this.setState(prevState => ({
    contacts: [...prevState.contacts,
      {
        id: nanoid(),
        name: data.name,
        number: data.number,
    }]
  })
  )
}
  
   onInputChange = (event) => {

  this.setState({
    [event.target.name]: event.target.value})
    }

  deleteHandler = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID)
    }))
  }

  render() {
  
    
  return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.submitHandler} />
      <h2>Contacts</h2>
      <Filter inputChangeHandler={this.onInputChange} filterValue={this.state.filter} />
      <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteHandler={this.deleteHandler} />
      </div>
    
   )
}

}

