import React from 'react'
import im1 from '../Images/im1.jpg';
import im2 from '../Images/im2.jpg';
import im3 from '../Images/im3.jpg';
import Products from './Products'

function Slider() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={im1} id="myCarousel" class="d-block w-100" height="600px"/>
      </div>
      <div class="carousel-item">
        <img src={im2} class="d-block w-100"  height="600px"/>
      </div>
      <div class="carousel-item">
        <img src={im3} class="d-block w-100"  height="600px"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden" >Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <Products/>
  </div>
  )
}

export default Slider