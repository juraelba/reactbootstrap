import React, { Component} from 'react'
import HookedCarousel from './Carousel/HookedCarousel'
import 'components/style.css'

class FeaturedProperties extends Component {
 render() {
    return (
   
 <div className="container-fluid pxp-props-carousel-right mt-100">
   <h2 className="pxp-section-h2">Propiedades</h2>
     <p className="pxp-text-light">Descubre nuestras nuevas propiedades</p>
        <div>
        <HookedCarousel/>
        </div>  
        <a href="/propiedades" class="pxp-primary-cta text-uppercase mt-4 mt-md-5 pxp-animate">Ver mas</a> 
  </div>
    );
  }
}

export default FeaturedProperties;



