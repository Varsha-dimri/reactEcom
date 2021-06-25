import React from 'react';
// import Link from 'next/link';
// import * as Icon from 'react-feather';


const slidervirtual = () => {
    return (
        <div id="demo" class="carousel slide" data-ride="carousel">
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div class="carousel-inner">
    <div class="carousel-item active">
            <h3>Los Angeles</h3>
        <p>We had such a great time in LA!</p>
      </div>   
   
    <div class="carousel-item">
      
      <div className="container">
        <h3>Chicago</h3>
        <p>Thank you</p>
        </div>
       
    </div>
    <div class="carousel-item">
      
      
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>   
  
  </div>
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>	



    )  
}

export default slidervirtual;  