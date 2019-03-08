import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayErrors: false,
      city: '',
      photoData: []
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    if(!event.target.checkValidity()) {
      this.setState({
        displayErrors: true
      });
      return;
    }
    
    event.target.blur();

    const API_KEY = process.env.REACT_APP_FLICKR_KEY;    
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ API_KEY }&text=${ this.state.city.split(' ').join('+') }&format=json&nojsoncallback=1`;
    
    axios.get(url)
    .then(response => {
      console.log("Response: ", response, "photos:", response.data.photos.photo);
      this.props.onPhotoDataReceived(response.data.photos.photo);
    })
    .catch(error => {
      console.log('Error searching cities:', error);
    });

    this.setState({
      city: '', 
      displayErrors: false
    });
  }

  render(){
    return(
      <div className="form-group">
        <form onSubmit={ this.onFormSubmit }>
          <input type="text" name='city' value={ this.state.city } onChange={ this.onInputChange } className="form-input"></input>
          <input type="submit" className="form-button"></input>
        </form>
      </div>
    )
  }
}

export default SearchForm;