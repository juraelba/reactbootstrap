import React, { Component } from "react"
import { Link } from "react-router-dom"
import img from "img/background.jpg"
import icon1 from "img/service-icon-1.svg"
import icon2 from "img/service-icon-2.svg"
import icon3 from "img/service-icon-3.svg"
import icon4 from "img/service-icon-4.svg"
import styled from "styled-components"
import {Container} from "reactstrap"
import 'components/style.css'

export default class Services extends Component {
  render() {
    return (
      <Wrapper >
        <div className="pxp-services pxp-cover mt-100 pt-100 mb-200 img">
        <h2 className="text-center pxp-section-h2 text-white">Why Choose Us</h2>
            <p className="pxp-text-light text-center text-white">We offer perfect real estate services</p>
            <Container>
                      <div className="pxp-services-container rounded-lg mt-4 mt-md-5">
                          <Link to="/propiedades" className="pxp-services-item">
                              <div className="pxp-services-item-fig">
                                  <img src={icon1} alt="..."/>
                              </div>
                              <div className="pxp-services-item-text text-center">
                                  <div className="pxp-services-item-text-title">Find your future home</div>
                                  <div className="pxp-services-item-text-sub">We help you find a new home by offering<br/>a smart real estate experience</div>
                              </div>
                          </Link>
                          <Link to="/assesores" className="pxp-services-item">
                              <div className="pxp-services-item-fig">
                                  <img src={icon2} alt="..."/>
                              </div>
                              <div className="pxp-services-item-text text-center">
                                  <div className="pxp-services-item-text-title">Experienced agents</div>
                                  <div className="pxp-services-item-text-sub">Find an agent who knows<br/>your market best</div>
                              </div>
                          </Link>
                          <Link to="/propiedades" className="pxp-services-item">
                              <div className="pxp-services-item-fig">
                                  <img src={icon3} alt="..."/>
                              </div>
                              <div className="pxp-services-item-text text-center">
                                  <div className="pxp-services-item-text-title">Buy or rent homes</div>
                                  <div className="pxp-services-item-text-sub">Millions of houses and apartments<br/>in your favourite cities</div>
                              </div>
                          </Link>
                          <Link to="submit-property" className="pxp-services-item">
                              <div className="pxp-services-item-fig">
                                  <img src={icon4} alt="..."/>
                              </div>
                              <div className="pxp-services-item-text text-center">
                                  <div className="pxp-services-item-text-title">List your own property</div>
                                  <div className="pxp-services-item-text-sub">Sign up now and sell or rent<br/>your own properties</div>
                              </div>
                          </Link>
                          <div className="clearfix"></div>
                      </div>
                  </Container>
                  </div>

      </Wrapper>
    );
  }
}

const Wrapper = styled.div`

  .img {
    background-image: url(${img}) !important;
    }

`;
