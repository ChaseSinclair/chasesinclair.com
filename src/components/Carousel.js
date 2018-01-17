import React, { Component } from 'react';
import group1 from '../images/group1.jpg';
import group2 from '../images/group2.jpg';
import horses from '../images/horses.jpeg';

class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img className="img-carousel" src={group1} alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img className="img-carousel" src={group2} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img className="img-carousel" src={horses} alt="Third slide"></img>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;