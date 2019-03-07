import React, { Component } from 'react';
import SearchForm from './SearchForm';
import PhotoViewer from './PhotoViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        <PhotoViewer />
      </div>
    );
  }
}

export default App;
