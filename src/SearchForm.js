import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();

    if(!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    
    event.target.blur();

    const url = ``;
    axios.get(url)
    .then(response => {
      console.log("Response: ", response);
    })
    .catch(error => {
      console.log('Error searching players:', error);
    });

    this.setState({
      player: '', 
      displayErrors: false
    });
  }

  render(){
    return(
      <div className="form-group">
        <form onSubmit={ this.formSubmit }>
          <input type="text" name='city' value={ this.state.city } onChange={ this.onInputChange } className="form-input"></input>
          <input type="submit" className="form-button"></input>
        </form>
      </div>
    )
  }
}

export default SearchForm;