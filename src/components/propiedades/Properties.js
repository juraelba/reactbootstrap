import React, { useState } from "react"
import { Link } from "react-router-dom"
import { 
     Button, 
     Container, 
     Col, 
     Collapse, 
     Card,
     Form, 
     FormGroup, 
     Input, 
     Label,  
     Row
} from 'reactstrap'

import Map from './map'
import styled from "styled-components"
import img from "img/background.jpg"

const Properties = props => {
    const {
        buttonLabel,
        modalContainer
      }= props;
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setIsOpen(!isOpen);  
    const toggle1 = () => setModal(!modal);

    return (

        // <Wrapper className="pxp-content pxp-full-height">
        <Wrapper className="pxp-content-side pxp-content-left pxp-half">
                <Container className="pxp-content">
                    <div className="pxp-content-side pxp-content">
                        <div className="pxp-content-side-wrapper">
                         <div className="d-flex">
                          <div className="pxp-content-side-search-form" style={{paddingRight: 20}}>
                            <Row>
                                <Col className="col-5 col-sm-5 col-md-4 col-lg-3">
                                    <select className="custom-select" id="pxp-p-search-status">
                                        <option value="buy" selected="selected">Buy</option>
                                        <option value="rent">Rent</option>
                                    </select>
                                </Col>
                                <Col className="col-7 col-sm-7 col-md-8 col-lg-9">
                                    <Input type="text" placeholder="Search by City, Neighborhood, or Address" id="pxp-p-search-address" className="pxp-is-address"></Input>
                                    <span className="fa fa-search"></span>
                                </Col>
                            </Row>
                         </div>
                            <Button className="pxp-filter-btn d-flex" onClick={toggle}>
                                <i className="fa fa-sliders"></i>
                            </Button>
                        </div>
                       </div>
                     </div>
                    <Collapse isOpen={isOpen}>
                        <div className="pxp-content-side-search-form-col">
                            <Row>
                                <Col className="col-sm-6 col-md-3">
                                  <FormGroup>
                                      <Label className="pxp-p-filter-price-min">Price</Label>
                                      <Input type="text" placeholder="Min" id="pxp-p-filter-price-min"></Input>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-6 col-md-3">                           
                                  <FormGroup>
                                      <Label for="pxp-p-filter-price-max" className="d-none d-sm-inline-block">&#xA0;</Label>
                                      <Input type="text" placeholder="Max" id="pxp-p-filter-price-max"></Input>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-6 col-md-3">
                                  <FormGroup>
                                      <Label for="pxp-p-filter-beds">Beds</Label>
                                      <select className="custom-select" id="pxp-p-filter-beds">
                                          <option value selected="selected">Any</option>
                                          <option value>Studio</option>
                                          <option value>1</option>
                                          <option value>2</option>
                                          <option value>3</option>
                                          <option value>4</option>
                                          <option value>5+</option>
                                      </select>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-6 col-md-3">
                                  <FormGroup>
                                      <Label for="pxp-p-filter-baths">Baths</Label>
                                      <select className="custom-select" id="pxp-p-filter-baths">
                                          <option value selected="selected">Any</option>
                                          <option value>1+</option>
                                          <option value>1.5+</option>
                                          <option value>2+</option>
                                          <option value>3+</option>
                                          <option value>4+</option>
                                      </select>
                                  </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-sm-6 col-md-4">
                                  <FormGroup>
                                      <Label for="pxp-p-filter-type">Type</Label>
                                      <select className="custom-select" id="pxp-p-filter-type">
                                          <option value>Select type</option>
                                          <option value>Apartment</option>
                                          <option value>House</option>
                                          <option value>Townhome</option>
                                          <option value>Multi-Family</option>
                                          <option value>Land</option>
                                      </select>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-6 col-md-4">
                                  <FormGroup>
                                      <Label for="pxp-p-filter-size-min">Size (sq ft)</Label>
                                      <Input type="text" id="pxp-p-filter-size-min" placeholder="Min"></Input>
                                  </FormGroup>
                                </Col>
                                <Col className="col-sm-6 col-md-4">
                                  <FormGroup>
                                      <Label for="pxp-p-filter-size-max" className="d-none d-sm-inline-block">&#xA0;</Label>
                                      <Input type="text" id="pxp-p-filter-size-max" placeholder="Max"></Input>
                                  </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                              <Label className="mb-2">Amenities</Label>
                              <Row className="pxp-content-side-search-form-row">
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Internet</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div class="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Garage</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div class="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Air Conditioning</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Dishwasher</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Disposal</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                     <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Balcony</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Gym</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                     <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Playroom</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                    <Col className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                                      <FormGroup>
                                          <div className="checkbox custom-checkbox">
                                              <Label><Input type="checkbox" value="1"/><span class="fa fa-check"></span> Bar</Label>
                                          </div>
                                      </FormGroup>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Button href="/" className="pxp-filter-btn">Apply Filters</Button>
                        </div>                         
                    </Collapse>

                    <Row className="pb-4">
                        <Col className="col-sm-6">
                            <h2 className="pxp-content-side-h2">1,684 Results</h2>
                        </Col>
                        <Col className="col-sm-6">
                            <Form className="pxp-sort-form form-inline float-right">
                                <FormGroup className="d-flex" style={{paddingRight: 20}}>
                                    <select className="custom-select" id="pxp-sort-results">
                                        <option value selected="selected">Default Sort</option>
                                        <option value>Price (Lo-Hi)</option>
                                        <option value>Price (Hi-Lo)</option>
                                        <option value>Beds</option>
                                        <option value>Baths</option>
                                        <option value>Size</option>
                                    </select>
                                </FormGroup>
                                <FormGroup className="d-flex">
                                    <Button role="button" className="pxp-filter-btn" onClick={toggle1}>
                                        <span class="fa fa-map-o"></span>
                                        {buttonLabel}
                                    </Button> 
                            </FormGroup>
                            </Form>
                        </Col>
                    </Row>

                    <Collapse 
                        isOpen={modal} 
                        toggle={toggle1} 
                        className={modalContainer} 
                        style={{ 
                        height: '100vh',  
                                }} >
                        <Map/>
                    </Collapse>

                     <Row>
                        <Col>
                            <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active img"></div>
                                        <div className="carousel-item img"></div>
                                        <div className="carousel-item img"></div>
                                    </div>
                                    <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                                    </span>
                                    <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                                    </span>
                                </Card>
                                <div class="pxp-results-card-1-gradient"></div>
                                <div class="pxp-results-card-1-details">
                                    <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-results-card-1-details-price">$890,000</div>
                                </div>
                                <div className="pxp-results-card-1-features">
                                    <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                </div>
                                <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active img"></div>
                                        <div className="carousel-item img"></div>
                                        <div className="carousel-item img"></div>
                                    </div>
                                    <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                                    </span>
                                    <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                                    </span>
                                </Card>
                                <div class="pxp-results-card-1-gradient"></div>
                                <div class="pxp-results-card-1-details">
                                    <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-results-card-1-details-price">$890,000</div>
                                </div>
                                <div className="pxp-results-card-1-features">
                                    <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                </div>
                                <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active img"></div>
                                        <div className="carousel-item img"></div>
                                        <div className="carousel-item img"></div>
                                    </div>
                                    <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                                    </span>
                                    <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                                    </span>
                                </Card>
                                <div class="pxp-results-card-1-gradient"></div>
                                <div class="pxp-results-card-1-details">
                                    <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-results-card-1-details-price">$890,000</div>
                                </div>
                                <div className="pxp-results-card-1-features">
                                    <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                </div>
                                <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                            </Link>
                        </Col>
                        </Row> 

                        <Row>                                      
                          <Col >
                              <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                  <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                      <div className="carousel-inner">
                                          <div className="carousel-item active img"></div>
                                          <div className="carousel-item img"></div>
                                          <div className="carousel-item img"></div>
                                      </div>
                                      <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                          <span className="fa fa-angle-left" aria-hidden="true"></span>
                                      </span>
                                      <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                          <span className="fa fa-angle-right" aria-hidden="true"></span>
                                      </span>
                                  </Card>
                                  <div class="pxp-results-card-1-gradient"></div>
                                  <div class="pxp-results-card-1-details">
                                      <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                      <div className="pxp-results-card-1-details-price">$890,000</div>
                                  </div>
                                  <div className="pxp-results-card-1-features">
                                      <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                  </div>
                                  <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                              </Link>
                          </Col>
                          <Col>
                              <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                  <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                      <div className="carousel-inner">
                                          <div className="carousel-item active img"></div>
                                          <div className="carousel-item img"></div>
                                          <div className="carousel-item img"></div>
                                      </div>
                                      <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                          <span className="fa fa-angle-left" aria-hidden="true"></span>
                                      </span>
                                      <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                          <span className="fa fa-angle-right" aria-hidden="true"></span>
                                      </span>
                                  </Card>
                                  <div class="pxp-results-card-1-gradient"></div>
                                  <div class="pxp-results-card-1-details">
                                      <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                      <div className="pxp-results-card-1-details-price">$890,000</div>
                                  </div>
                                  <div className="pxp-results-card-1-features">
                                      <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                  </div>
                                  <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                              </Link>
                          </Col>
                          <Col>
                              <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                  <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                      <div className="carousel-inner">
                                          <div className="carousel-item active img"></div>
                                          <div className="carousel-item img"></div>
                                          <div className="carousel-item img"></div>
                                      </div>
                                      <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                          <span className="fa fa-angle-left" aria-hidden="true"></span>
                                      </span>
                                      <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                          <span className="fa fa-angle-right" aria-hidden="true"></span>
                                      </span>
                                  </Card>
                                  <div class="pxp-results-card-1-gradient"></div>
                                  <div class="pxp-results-card-1-details">
                                      <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                      <div className="pxp-results-card-1-details-price">$890,000</div>
                                  </div>
                                  <div className="pxp-results-card-1-features">
                                      <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                  </div>
                                  <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                              </Link>
                          </Col>
                        </Row> 

                        <Row>                                      
                          <Col >
                              <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                  <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                      <div className="carousel-inner">
                                          <div className="carousel-item active img"></div>
                                          <div className="carousel-item img"></div>
                                          <div className="carousel-item img"></div>
                                      </div>
                                      <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                          <span className="fa fa-angle-left" aria-hidden="true"></span>
                                      </span>
                                      <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                          <span className="fa fa-angle-right" aria-hidden="true"></span>
                                      </span>
                                  </Card>
                                  <div class="pxp-results-card-1-gradient"></div>
                                  <div class="pxp-results-card-1-details">
                                      <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                      <div className="pxp-results-card-1-details-price">$890,000</div>
                                  </div>
                                  <div className="pxp-results-card-1-features">
                                      <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                  </div>
                                  <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                              </Link>
                          </Col>
                          <Col>
                              <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                  <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                      <div className="carousel-inner">
                                          <div className="carousel-item active img"></div>
                                          <div className="carousel-item img"></div>
                                          <div className="carousel-item img"></div>
                                      </div>
                                      <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                          <span className="fa fa-angle-left" aria-hidden="true"></span>
                                      </span>
                                      <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                          <span className="fa fa-angle-right" aria-hidden="true"></span>
                                      </span>
                                  </Card>
                                  <div class="pxp-results-card-1-gradient"></div>
                                  <div class="pxp-results-card-1-details">
                                      <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                      <div className="pxp-results-card-1-details-price">$890,000</div>
                                  </div>
                                  <div className="pxp-results-card-1-features">
                                      <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                  </div>
                                  <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                              </Link>
                          </Col>
                          <Col>
                              <Link to="/SingleProperty" className="pxp-results-card-1 rounded-lg" data-prop="1">
                                  <Card id="card-carousel-1" className="carousel slide item" data-ride="carousel" data-interval="false">
                                      <div className="carousel-inner">
                                          <div className="carousel-item active img"></div>
                                          <div className="carousel-item img"></div>
                                          <div className="carousel-item img"></div>
                                      </div>
                                      <span className="carousel-control-prev" data-href="#card-carousel-1" data-slide="prev">
                                          <span className="fa fa-angle-left" aria-hidden="true"></span>
                                      </span>
                                      <span className="carousel-control-next" data-href="#card-carousel-1" data-slide="next">
                                          <span className="fa fa-angle-right" aria-hidden="true"></span>
                                      </span>
                                  </Card>
                                  <div class="pxp-results-card-1-gradient"></div>
                                  <div class="pxp-results-card-1-details">
                                      <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                                      <div className="pxp-results-card-1-details-price">$890,000</div>
                                  </div>
                                  <div className="pxp-results-card-1-features">
                                      <span>2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</span>
                                  </div>
                                  <div className="pxp-results-card-1-save"><span class="fa fa-star-o"></span></div>
                              </Link>
                          </Col>
                        </Row> 
                           
                        <ul className="pagination pxp-paginantion mt-2 mt-md-4">
                          <li className="page-item active"><Link className="page-link" to="/propiedades">1</Link></li>
                          <li className="page-item"><Link className="page-link" to="/propiedades">2</Link></li>
                          <li className="page-item"><Link className="page-link" to="/propiedades">3</Link></li>
                          <li className="page-item"><Link className="page-link" to="/propiedades">Next <span class="fa fa-angle-right"></span></Link></li>
                        </ul>

                </Container>
            </Wrapper>
  );
};

export default Properties;

const Wrapper = styled.div`
padding-top: 10vh;

.img{
    background-image: url(${img}) !important;
}


.item {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 2em;
    font-family: sans-serif;
    font-weight: bold;
    
}

@media only screen and (max-width: 600px) {
    .pxp-hero-form {

      background-color: lightblue;
    }
  }


`;