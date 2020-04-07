import React, { Component } from 'react'
import {Container, Col, FormGroup, Label, Row} from 'reactstrap'
import img from 'img/background.jpg'
import NavBar from 'components/Header'
import Footer from 'components/Footer'
import styled from 'styled-components'

export default class Asesores extends Component {
  render() {
    return (
      <div>
        <Wrapper className="pxp-dark-mode">
          <NavBar/>
             <div className="pxp-agents pxp-content-wrapper mt-100">
                <Container className="container">
                    <Row className="row">
                        <div className="col-sm-12 col-md-7">
                            <h1 className="pxp-page-header">
                              Our Agents
                            </h1>
                            <p className="pxp-text-light">
                            Pairing the industry's top technology with unsurpassed local expertise.
                            </p>
                        </div>
                    </Row>
                </Container>
                <div className="pxp-agents-hero mt-4 mt-md-5">
                    <div className="pxp-agents-hero-fig pxp-cover image">
                    </div>
                    <Container className="pxp-agents-hero-search-container">
                        <div className="container ">
                          <div className="pxp-agents-hero-search">
                                <h2 className="pxp-section-h2 text-white">Find an Agent</h2>
                                <div className="pxp-agents-hero-search-form mt-3 mt-md-4">
                                        <Row className="row">
                                          <Col className="col-sm-12 col-md-4">
                                            <FormGroup className="form-group">
                                                <Label className="pxp-agents-search-location">
                                                  Location
                                                </Label>
                                                  <input type="text" 
                                                    className="form-control" 
                                                    id="pxp-agents-search-location"
                                                    placeholder="Neighborhood/City/Zip"/>
                                            </FormGroup>
                                          </Col>
                                          <Col className="col-sm-12 col-md-4">
                                            <FormGroup className="form-group">
                                                <Label className="pxp-agents-search-name">
                                                  Name
                                                </Label>
                                                <input type="text"
                                                  className="form-control"
                                                  id="pxp-agents-search-name"
                                                  placeholder="Agent name" />
                                            </FormGroup>
                                          </Col>
                                          <Col class="col-sm-12 col-md-4">
                                            <FormGroup className="form-group">
                                                <Label className="pxp-agents-search-service">
                                                  Service Needed
                                                </Label>
                                                <select className="custom-select" id="pxp-agents-search-service">
                                                    <option value="1" selected="selected">Buying or selling</option>
                                                    <option value="2">Buying a home</option>
                                                    <option value="3">Selling a home</option>
                                                </select>
                                            </FormGroup>
                                          </Col>
                                        </Row>
                                </div>
                          </div>
                        </div>
                    </Container>    
                </div>      
                <Container className="container">
                    <div className="row mt-200">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                           <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Scott Goodwin</div>
                                    <div className="pxp-agents-1-item-details-email">
                                      <span class="fab fa-phone"></span> (123) 456-7890</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating">
                                  <span><span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span>
                                  <span class="fa fa-star"></span></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Alayna Becker</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (456) 123-7890</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span></span></div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Erika Tillman</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (890) 456-1237</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span></span></div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Melvin Blackwell</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (789) 123-4560</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Erika Tillman</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (890) 456-1237</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span></span></div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Scott Goodwin</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (123) 456-7890</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Melvin Blackwell</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (789) 123-4560</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <a href="/SingleAgent" className="pxp-agents-1-item">
                                <div className="pxp-agents-1-item-fig-container rounded-lg">
                                    <div className="pxp-agents-1-item-fig pxp-cover imagesm"></div>
                                </div>
                                <div className="pxp-agents-1-item-details rounded-lg">
                                    <div className="pxp-agents-1-item-details-name">Alayna Becker</div>
                                    <div className="pxp-agents-1-item-details-email"><span class="fa fa-phone"></span> (456) 123-7890</div>
                                    <div className="pxp-agents-1-item-details-spacer"></div>
                                    <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                                </div>
                                <div className="pxp-agents-1-item-rating"><span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span></span></div>
                            </a>
                        </div>                        
                    </div> 
                    <ul className="pagination pxp-paginantion mt-2 mt-md-3">
                        <li className="page-item active"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item"><a className="page-link" href="/">Next <span class="fa fa-angle-right"></span></a></li>
                    </ul>
                </Container>
            </div>
          <Footer/>
        </Wrapper>
      </div>
    );
  }
}


const Wrapper = styled.div`


.image {
  background-image: url(${img})!important; 
  width: 100%;
  height: 20vh !important;
}

.imagesm {
  background-image: url(${img})!important; 
}

`;
