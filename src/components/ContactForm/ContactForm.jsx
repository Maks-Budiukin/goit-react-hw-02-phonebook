import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    nameInpudId = nanoid();
    phoneInpudId = nanoid();

    onInputChange = (event) => {

  this.setState({
    [event.target.name]: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            name: '',
            number: ''
        })
  }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
    <label htmlFor={this.nameInpudId}>Name </label>
    <input
      type="text"
      name="name"
      id={this.nameInpudId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={this.state.name}
      onChange={this.onInputChange}
      required
        />
    <label htmlFor={this.numberInpudId}>Number </label>    
    <input
      type="tel"
          name="number"
          id={this.phoneInpudId}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
      onChange={this.onInputChange}
      required
    />

        <button type="submit">Add contact</button>
        
    </form>)
    }
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}