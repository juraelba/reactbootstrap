import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import img from "img/gallery.jpg"
import styled from "styled-components"
import 'components/style.css'
 
export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <Wrapper>
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={30}
        mobileFirst={true}
        leftChevron={<button className="pxp-props-carousel-left-arrow pxp-animate arrow"><i class="fas fa-arrow-left"></i></button>}
        rightChevron={<button className="pxp-props-carousel-right-arrow pxp-animate arrow"><i class="fas fa-arrow-right"></i></button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div >  
            <a href="/SingleProperty" className=" pxp-prop-card-1 rounded-lg">
              <div className="pxp-prop-card-1-fig pxp-cover img"></div>
                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                  <div className="pxp-prop-card-1-details">
                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                  <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                </div>
              <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
            </a>
        </div>
        <div >
            <a href="/SingleProperty" className="pxp-prop-card-1 rounded-lg">
             <div className="pxp-prop-card-1-fig pxp-cover img"></div>
              <div className="pxp-prop-card-1-gradient pxp-animate"></div>
               <div className="pxp-prop-card-1-details">
                <div className="pxp-prop-card-1-details-title">Colorful Little Apartment</div>
                  <div className="pxp-prop-card-1-details-price">$2,675</div>
                  <div className="pxp-prop-card-1-details-features text-uppercase">1 RE <span>|</span> 1 BA <span>|</span> 500 m&sup2;</div>
                </div>
              <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
             </a>
        </div>
        
        <div>
                <a href="/SingleProperty" class="pxp-prop-card-1 rounded-lg">
                    <div className="pxp-prop-card-1-fig pxp-cover img"></div>
                    <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                    <div className="pxp-prop-card-1-details">
                        <div className="pxp-prop-card-1-details-title">Cozy Two Bedroom Apartment</div>
                        <div className="pxp-prop-card-1-details-price">$960,000</div>
                        <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 870 m&sup2;</div>
                    </div>
                    <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                </a>
            </div>

            <div>
                <a href="/SingleProperty" className="pxp-prop-card-1 rounded-lg">
                    <div className="pxp-prop-card-1-fig pxp-cover img"></div>
                    <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                    <div className="pxp-prop-card-1-details">
                        <div className="pxp-prop-card-1-details-title">Beautiful House in Marina</div>
                        <div className="pxp-prop-card-1-details-price">$5,198,000</div>
                        <div className="pxp-prop-card-1-details-features text-uppercase">5 RE <span>|</span> 4.5 BA <span>|</span> 3,945 m&sup2;</div>
                    </div>
                    <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                </a>
            </div>

            <div>
                <a href="/SingleProperty" className="pxp-prop-card-1 rounded-lg">
                    <div className="pxp-prop-card-1-fig pxp-cover img"></div>
                    <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                    <div className="pxp-prop-card-1-details">
                        <div className="pxp-prop-card-1-details-title">Modern Residence</div>
                        <div className="pxp-prop-card-1-details-price">$7,995</div>
                        <div className="pxp-prop-card-1-details-features text-uppercase">4 RE <span>|</span> 1.5 BA <span>|</span> 2,240 m&sup2;</div>
                    </div>
                    <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                </a>
            </div>

            <div>
                <a href="/SingleProperty" className="pxp-prop-card-1 rounded-lg">
                    <div className="pxp-prop-card-1-fig pxp-cover img"></div>
                    <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                    <div className="pxp-prop-card-1-details">
                        <div className="pxp-prop-card-1-details-title">Luxury Mansion</div>
                        <div className="pxp-prop-card-1-details-price">$5,430,000</div>
                        <div className="pxp-prop-card-1-details-features text-uppercase">4 RE <span>|</span> 5 BA <span>|</span> 5,200 m&sup2;</div>
                    </div>
                    <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                </a>
            </div>
      </ItemsCarousel>
    </div>
    </Wrapper>
  );
};


const Wrapper = styled.div`
.img {
  heigh:400px;
  background-image: url(${img}) !important;
  }
  .arrow{
    background:var(--mainDark);
    color:var(--lightWhite);
    border:none;
  }
  
@media only screen and (max-width: 600px) {
    .pxp-hero-form {

      background-color: lightblue;
    }
  }
`;