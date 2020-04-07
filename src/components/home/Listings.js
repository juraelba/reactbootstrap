import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {Container, Row, Col} from 'reactstrap'
import img from "img/gallery.jpg"
import styled from "styled-components"
import 'components/style.css'

export default class Listings extends Component {
  render() {
    return (
      <Wrapper>
      <Container className="mt-100">
      <h2 className="pxp-section-h2">Explore Our Neighborhoods</h2>
      <p className="pxp-text-light">Browse our comprehensive neighborhood listings</p>
      <Row className="mt-4 mt-md-5">
                      <Col className="col-sm-12 col-md-6 col-lg-4">
                          <Link href="/propiedades" className="pxp-areas-1-item rounded-lg">
                              <div className="pxp-areas-1-item-fig pxp-cover img"></div>
                              <div className="pxp-areas-1-item-details">
                                  <div className="pxp-areas-1-item-details-area">Bluemont</div>
                                  <div className="pxp-areas-1-item-details-city">Arlington, VA</div>
                              </div>
                              <div className="pxp-areas-1-item-counter"><span>324 Properties</span></div>
                              <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                          </Link>
                      </Col>
                      <div class="col-sm-12 col-md-6 col-lg-4">
                          <a href="/propiedades" className="pxp-areas-1-item rounded-lg">
                              <div className="pxp-areas-1-item-fig pxp-cover img"></div>
                              <div className="pxp-areas-1-item-details">
                                  <div className="pxp-areas-1-item-details-area">Overlake</div>
                                  <div className="pxp-areas-1-item-details-city">Redmond, WA</div>
                              </div>
                              <div className="pxp-areas-1-item-counter"><span>158 Properties</span></div>
                              <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                          </a>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                          <a href="/propiedades" className="pxp-areas-1-item rounded-lg">
                              <div className="pxp-areas-1-item-fig pxp-cover img"></div>
                              <div className="pxp-areas-1-item-details">
                                  <div className="pxp-areas-1-item-details-area">College Terrace</div>
                                  <div className="pxp-areas-1-item-details-city">Palo Alto, CA</div>
                              </div>
                              <div className="pxp-areas-1-item-counter"><span>129 Properties</span></div>
                              <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                          </a>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                          <a href="/propiedades" className="pxp-areas-1-item rounded-lg">
                              <div className="pxp-areas-1-item-fig pxp-cover img"></div>
                              <div className="pxp-areas-1-item-details">
                                  <div className="pxp-areas-1-item-details-area">Inner Sunset</div>
                                  <div className="pxp-areas-1-item-details-city">San Francisco, CA</div>
                              </div>
                              <div className="pxp-areas-1-item-counter"><span>129 Properties</span></div>
                              <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                          </a>
                      </div>
                      <div class="col-sm-12 col-md-6 col-lg-4">
                          <a href="/propiedades" className="pxp-areas-1-item rounded-lg">
                              <div className="pxp-areas-1-item-fig pxp-cover img"></div>
                              <div className="pxp-areas-1-item-details">
                                  <div className="pxp-areas-1-item-details-area">Upper West Side</div>
                                  <div className="pxp-areas-1-item-details-city">New York City, NY</div>
                              </div>
                              <div className="pxp-areas-1-item-counter"><span>324 Properties</span></div>
                              <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                          </a>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                          <a href="/propiedades" className="pxp-areas-1-item rounded-lg">
                              <div className="pxp-areas-1-item-fig pxp-cover img"></div>
                              <div className="pxp-areas-1-item-details">
                                  <div className="pxp-areas-1-item-details-area">Marina District</div>
                                  <div className="pxp-areas-1-item-details-city">San Francisco, CA</div>
                              </div>
                              <div className="pxp-areas-1-item-counter"><span>158 Properties</span></div>
                              <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                          </a>
                      </div>
      </Row>
      <a href="/propiedades" class="pxp-primary-cta text-uppercase mt-2 mt-md-4 pxp-animate">Explore Neighborhoods</a>
             
      </Container>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  .img {
    background-image: url(${img}) !important;
    }


`;
