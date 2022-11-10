import React from 'react';
import Feedback from './Home Components/feedback';
import practice from './practice'
import Review_Section from "./Home Components/Review Section"
import Carousel from './Home Components/carausel';
function Home(){
    return(
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <Carousel/>
      </div>
      <hr></hr>
      <Feedback/>
      </div>
    )
}

export default Home