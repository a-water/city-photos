import React, { Component } from 'react';
import placeHolderImage from './assets/placeholder-image.jpg';

class PhotoViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhotoIndex: 0
    }

    this.prevPhotoTapped = this.prevPhotoTapped.bind(this);
    this.nextPhotoTapped = this.nextPhotoTapped.bind(this);
  }

  renderPhotos(photos, index) {
    let photo = photos[index];
    return(
      <img className="img" src={ `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` } alt="city" />
    )
  }

  rednerPlaceholder() {
    return(
      <img className="img" src={ placeHolderImage } alt="placeholder" />
    )
  }

  prevPhotoTapped() {
    if(this.state.currentPhotoIndex - 1 > 0) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex -1
      });
    }
  }

  nextPhotoTapped() {
    if(this.state.currentPhotoIndex + 1 < this.props.photoData.length) {
      this.setState({
        currentPhotoIndex: this.state.currentPhotoIndex + 1
      });
    }
  }

  render(){
    console.log('index:', this.state.currentPhotoIndex);
    
    return(
      <div className="photo-viewer-parent">
          <div className={`btn prev ${this.state.currentPhotoIndex === 0 ? 'btn-disabled' : ''}`}
          onClick={ this.prevPhotoTapped }>
          Prev
        </div>
        <div className="photo-view">
          {this.props.photoData.length > 0 ?
            this.renderPhotos(this.props.photoData, this.state.currentPhotoIndex)
            :
            this.rednerPlaceholder()
          }
        </div>
        <div 
          className={`btn next ${this.state.currentPhotoIndex === this.props.photoData.length -1 ? 'btn-disabled' : ''}`}
          onClick={ this.nextPhotoTapped }>
          Next
        </div>
      </div>
    )
  }
}

export default PhotoViewer;