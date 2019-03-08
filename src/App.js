import React, { Component } from 'react';
import SearchForm from './SearchForm';
import PhotoViewer from './PhotoViewer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photoData: []
    }

    this.onPhotoDataReceived = this.onPhotoDataReceived.bind(this);
  }

  onPhotoDataReceived(photos) {
    this.setState({
      photoData: photos
    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm onPhotoDataReceived={ this.onPhotoDataReceived }/>
        <PhotoViewer photoData={ this.state.photoData }/>
      </div>
    );
  }
}

export default App;
