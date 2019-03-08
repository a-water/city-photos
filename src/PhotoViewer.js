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
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (e.keyCode === 37) {
      e.preventDefault();
      this.prevPhotoTapped();
    } else if (e.keyCode === 39) {
      e.preventDefault();
      this.nextPhotoTapped();
    }
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
    if(this.state.currentPhotoIndex - 1 >= 0) {
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
    return(
      <div className="photo-viewer-parent">
        <div className="photo-view">
          {this.props.photoData.length > 0 ?
            this.renderPhotos(this.props.photoData, this.state.currentPhotoIndex)
            :
            this.rednerPlaceholder()
          }
        </div>
        <div className="button-group">
          <div className={`btn prev ${this.state.currentPhotoIndex === 0 ? 'btn-disabled' : 'btn-active'}`}
            onClick={ this.prevPhotoTapped }>
            Prev
          </div>
          <div 
            className={`btn next ${this.state.currentPhotoIndex === this.props.photoData.length - 1 || this.props.photoData.length === 0 ? 'btn-disabled' : 'btn-active'}`}
            onClick={ this.nextPhotoTapped }>
            Next
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoViewer;