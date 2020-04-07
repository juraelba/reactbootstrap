import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Button, Container, Col, Form, FormGroup, Row, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import img from 'img/background.jpg'
import styled from 'styled-components'
import NavBar from 'components/Header'
import Footer from 'components/Footer'

const SingleAgent = props => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);    

    return (
          <Wrapper>
              <NavBar/>
            <div className="pxp-agents mt-100">
                <Container className="container">
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Work with Erika Tillman</ModalHeader>
                    <ModalBody>
                    <Form class="mt-4">
                            <Row class="row">
                                <Col class="col-6">
                                    <FormGroup className="form-group">
                                        <Label for="pxp-work-with-firstname">First Name</Label>
                                        <input type="text" className="form-control" id="pxp-work-with-firstname"/>
                                    </FormGroup>
                                </Col>
                                <Col class="col-6">
                                    <FormGroup className="form-group">
                                        <Label for="pxp-work-with-lastname">Last Name</Label>
                                        <input type="text" className="form-control" id="pxp-work-with-lastname"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className="form-group">
                                <Label for="pxp-work-with-email">Email</Label>
                                <input type="text" className="form-control" id="pxp-work-with-email" />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label for="pxp-work-with-phone">Phone (optional)</Label>
                                <input type="text" className="form-control" id="pxp-work-with-phone" />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label for="pxp-work-with-interest">I am interested in</Label>
                                <select className="custom-select" id="pxp-work-with-interest">
                                    <option value="" selected="selected">Sell</option>
                                    <option value="">Buy</option>
                                    <option value="">Rent</option>
                                </select>
                            </FormGroup>
                            <FormGroup class="form-group mt-4">
                                <Button href="#" className="pxp-agent-contact-modal-btn"onClick={''}>submit</Button>{' '}
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
                    <Row className="row">
                        <Col className="col-sm-12 col-lg-8">
                            <h1 className="pxp-page-header float-left">Erika Tillman</h1>
                            <span className="pxp-agent-rating"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span>
                            <div className="clearfix"></div>
                            <p>Licensed Associate Real Estate Broker</p>
                            <div className="mt-4 mt-md-5">
                                <div className="pxp-agent-email"><a href="mailto:erika.tillman@resideo.com"><span class="fa fa-envelope-o"></span> erika.tillman@resideo.com</a></div>
                                <div className="pxp-agent-phone"><span class="fa fa-phone"></span> (123) 456-7890</div>
                            </div>
                            <div className="mt-4 mt-md-5">
                                <Button href="#pxp-work-with" className="pxp-agent-contact-btn" onClick={toggle} data-target="#pxp-work-with">Work with Erika Tillman</Button>
                            </div>
                        </Col>
                        <Col className="col-sm-12 offset-lg-1 col-lg-3">
                            <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0 image"><Link to="/SingleAgent"/></div>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="col-sm-12 col-lg-8">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                                <h3>About Erika Tillman</h3>
                                <div className="mt-3 mt-md-4">
                                    <p>Award winner and nominee, Erika Tillman, is one of NYC’s top producing agents. In 2016 she was a Top Producer Individual by sales volume and GCI. This high achiever received, among other recognitions, a Quadruple Platinum Award and was cover of Outfront Magazine in December 2016.</p>
                                    <p>She is known as one of the smartest and most dedicated agents in the City. She has earned an excellent reputation with high-end developers. Her clientele includes some of the wealthiest Family Offices in the world, including royalty, and she works attending each generation’s needs and risk profile. She is the perfect agent for the most demanding clients and runs her business 24/7. </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-sm-12 col-lg-3 offset-lg-1">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                                <h3>Specialities</h3>
                                <ul className="list-unstyled pxp-agent-specialities mt-3 mt-md-4">
                                    <li>International Buyers and Sellers</li>
                                    <li>Investors</li>
                                    <li>Family Offices</li>
                                </ul>
                            </div>
                            <div className="pxp-agent-section mt-4 mt-md-5">
                                <h3>Social Media</h3>
                                <ul className="list-unstyled pxp-agent-social mt-3 mt-md-4">
                                    <li><Link to="/"><span className="fab fa-facebook"></span></Link></li>
                                    <li><Link to="/"><span className="fab fa-twitter"></span></Link></li>
                                    <li><Link to="/"><span className="fab fa-pinterest"></span></Link></li>
                                    <li><Link to="/"><span className="fab fa-linkedin"></span></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <h2 className="pxp-section-h2 mt-100">Listings by Erika Tillman</h2>
                    <Row className="row mt-4 mt-md-5">
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <Link to="/SingleProperty" className="pxp-prop-card-1 rounded-lg mb-4">
                                <div className="pxp-prop-card-1-fig pxp-cover image"></div>
                                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                                <div className="pxp-prop-card-1-details">
                                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                                    <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                                </div>
                                <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                            </Link>
                        </Col>
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <Link to="/SingleProperty" className="pxp-prop-card-1 rounded-lg mb-4">
                                <div className="pxp-prop-card-1-fig pxp-cover image"></div>
                                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                                <div className="pxp-prop-card-1-details">
                                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                                    <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                                </div>
                                <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                            </Link>
                        </Col>
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <Link to="/SingleProperty" className="pxp-prop-card-1 rounded-lg mb-4">
                                <div className="pxp-prop-card-1-fig pxp-cover image"></div>
                                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                                <div className="pxp-prop-card-1-details">
                                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                                    <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                                </div>
                                <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                            </Link>
                        </Col>
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <Link to="/SingleProperty" className="pxp-prop-card-1 rounded-lg mb-4">
                                <div className="pxp-prop-card-1-fig pxp-cover image"></div>
                                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                                <div className="pxp-prop-card-1-details">
                                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                                    <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                                </div>
                                <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                            </Link>
                        </Col>
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <Link to="/SingleProperty" className="pxp-prop-card-1 rounded-lg mb-4">
                                <div className="pxp-prop-card-1-fig pxp-cover image"></div>
                                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                                <div className="pxp-prop-card-1-details">
                                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                                    <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                                </div>
                                <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                            </Link>
                        </Col>
                        <Col className="col-sm-12 col-md-6 col-lg-4">
                            <Link to="/SingleProperty" className="pxp-prop-card-1 rounded-lg mb-4">
                                <div className="pxp-prop-card-1-fig pxp-cover image"></div>
                                <div className="pxp-prop-card-1-gradient pxp-animate"></div>
                                <div className="pxp-prop-card-1-details">
                                    <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                                    <div className="pxp-prop-card-1-details-price">$890,000</div>
                                    <div className="pxp-prop-card-1-details-features text-uppercase">2 RE <span>|</span> 2 BA <span>|</span> 920 m&sup2;</div>
                                </div>
                                <div className="pxp-prop-card-1-details-cta text-uppercase">Ver Detalles</div>
                            </ Link>
                        </Col>
                    </Row> 
                    
                    <ul className="pagination pxp-paginantion mt-3 mt-md-4">
                        <li className="page-item active"><Link class="page-link" href="/">1</Link></li>
                        <li className="page-item"><Link className="page-link" href="/">2</Link></li>
                        <li className="page-item"><Link className="page-link" href="/">3</Link></li>
                        <li className="page-item"><Link className="page-link" href="/">Next <span class="fa fa-angle-right"></span></Link></li>
                    </ul> 
                </Container>
                </div>
                <Footer/>
            </Wrapper>       
);
};
export default SingleAgent;

const Wrapper = styled.div`

.image {
    background-image: url(${img})!important;   
}

`;