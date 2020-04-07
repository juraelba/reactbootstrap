
import React, { Component } from 'react'
import { 
    Button,
    Container, 
    Form, 
    FormGroup, 
    Input, 
    Label, 
    Modal, 
    ModalBody, 
    ModalHeader, 
    Row, } from 'reactstrap'
import styled from "styled-components"
import img from "img/background.jpg"

import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api'


const mapContainerStyle = {
    height: "340px"
  };

  const center = { lat: 37.779023, lng: -122.48862200000002 };
  const locations = [
    {lat: 37.779023, lng: -122.48862200000002},
    {lat: 37.75347110977809, lng: -122.46686778459474},
    {lat: 37.7487769,lng: -122.424534},
    {lat: 37.748134,lng: -122.437206},
    {lat: 37.7883186, lng: -122.4897848},
    {lat: 37.7985699, lng: -122.4446982} 
  ];
  
  const options = { 
    imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m" 
  };
export default class contactform extends Component {
  render() {
     return (
            <Wrapper>
            <div className="pxp-content">
            <div className="pxp-contact pxp-content-wrapper mt-100">
                <Container>
                    <Row>
                        <div className="col-sm-12 col-md-7">
                            <h1 className="pxp-page-header">Contact Us</h1>
                            <p className="pxp-text-light">Say hello. Tell us how we can guide you.</p>
                        </div>
                    </Row>
                </Container>

                <div className="pxp-contact-hero mt-4 mt-md-5">
                    <div className="pxp-contact-hero-fig pxp-cover img"></div>

                    <div className="pxp-contact-hero-offices-container styling-text">
                        <Container>
                            <div className="pxp-contact-hero-offices styling-container">
                                <h2 className="pxp-section-h2">Our Offices</h2>
                                <Row>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="pxp-contact-hero-offices-title mt-3 mt-md-4">Los Angeles</div>
                                        <div className="pxp-contact-hero-offices-info mt-2 mt-md-3">
                                            <p className="pxp-is-address styling-text">
                                                90 Fifth Avenue, 3rd Floor<br/>Los Angeles, CA 1980</p>
                                            <p>
                                                <a href="/">(123) 789-7390</a><br/>
                                                <a href="/">office-la@resideo.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="pxp-contact-hero-offices-title mt-3 mt-md-4">New York</div>
                                        <div className="pxp-contact-hero-offices-info mt-2 mt-md-3">
                                            <p className="pxp-is-address">90 Fifth Avenue, 3rd Floor<br/>New York, NY 1980</p>
                                            <p>
                                                <a href="/">(123) 789-7390</a><br/>
                                                <a href="/">office-ny@resideo.com</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4">
                                        <div class="pxp-contact-hero-offices-title mt-3 mt-md-4">San Francisco</div>
                                        <div class="pxp-contact-hero-offices-info mt-2 mt-md-3">
                                            <p class="pxp-is-address">90 Fifth Avenue, 3rd Floor<br/>San Francisco, CA 1980</p>
                                            <p>
                                                <a href="/">(123) 789-7390</a><br/>
                                                <a href="/">office-sf@resideo.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>



                <Container className="mt-200">
                    <Row>
                        <div className="col-sm-12 col-lg-6">
                            <h2 className="pxp-section-h2">Send Us A Message</h2>
                            <div className="pxp-contact-form mt-3 mt-md-4">
                                <Row>
                                    <div className="col-sm-12 col-md-6">
                                        <FormGroup>
                                            <Input type="text" id="pxp-contact-form-name" placeholder="Name"></Input>
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <FormGroup>
                                            <Input type="text" id="pxp-contact-form-email" placeholder="Email"></Input>
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <FormGroup>
                                            <select className="custom-select" id="pxp-contact-form-reg">
                                                <option value>What is this regarding?</option>
                                                <option value>Customer support / feedback</option>
                                                <option value>Applying</option>
                                                <option value>Press</option>
                                                <option value>Listings</option>
                                                <option value>Partnerships</option>
                                                <option value>General questions</option>
                                            </select>
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <FormGroup>
                                            <Input type="text" placeholder="Phone (optional)" id="pxp-contact-form-phone"></Input>
                                        </FormGroup>
                                    </div>
                                </Row>
                                <FormGroup>
                                    <Input id="pxp-contact-form-message" rows="6" placeholder="Message" type="textarea"></Input>
                                </FormGroup>
                                <Button href="/" className="pxp-contact-form-btn">Send Message</Button>
                            </div>
                        </div>  
                        <div className="col-sm-12 col-lg-6">
                            <Row className="mt-4 mt-md-5 mt-lg-0">
                                <div className="col-6">
                                    <h2 className="pxp-section-h2">Our Locations</h2>
                                </div>
                                <div className="col-6 text-right">
                                    <select className="custom-select pxp-contact-locations-select">
                                        <option value="la">Los Angeles</option>
                                        <option value="ny">New York</option>
                                        <option value="sf">San Francisco</option>
                                    </select>
                                </div>
                            </Row>
                            <div id="pxp-contact-map" className="mt-3">
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyBTt1wamscdW7rhIw9IqgmI9-m65hVbwBk"
        >
          <GoogleMap
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
        >
        <MarkerClusterer
        options={options}
        >
        {
            (clusterer) => locations.map((location, i) => (
            <Marker
                key={i}
                position={location}
                clusterer={clusterer}
            />
            ))
        }
    </MarkerClusterer>
  </GoogleMap>
      </LoadScript>
      </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>

        <Modal className="modal-dialog-centered">
                <ModalHeader>
                        <Button data-dismiss="modal" aria-label="Close" className="close">
                            <span aria-hidden="true">&#xD7;</span>
                        </Button>
                    </ModalHeader><ModalBody>
                        <h5 className="modal-title" id="pxpSigninModal">Welcome back!</h5>
                        <Form className="mt-4">
                            <FormGroup>
                                <Label for="pxp-signin-email">Email</Label>
                                <Input type="text" id="pxp-signin-email" placeholder="Enter your email address"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="pxp-signin-pass">Password</Label>
                                <Input type="password" id="pxp-signin-pass" placeholder="Enter your password"></Input>
                            </FormGroup>
                            <FormGroup>
                                <a href="/" className="pxp-agent-contact-modal-btn">Sign In</a>
                            </FormGroup>
                            <FormGroup className="mt-4 text-center pxp-modal-small">
                                <a href="/" className="pxp-modal-link">Forgot password</a>
                            </FormGroup>
                            <div className="text-center pxp-modal-small">
                                New to Resideo? <a href="/" className="pxp-modal-link pxp-signup-trigger">Create an account</a>
                            </div>
                        </Form>
                    </ModalBody>
            </Modal>

        <Modal className="modal-dialog-centered">
                <ModalHeader>
                        <Button data-dismiss="modal" aria-label="Close" className="close">
                            <span aria-hidden="true">&#xD7;</span>
                        </Button>
                    </ModalHeader><ModalBody>
                        <h5 className="modal-title" id="pxpSignupModal">Create an account</h5>
                        <Form className="mt-4">
                            <Row>
                                <div className="col-6">
                                    <FormGroup>
                                        <Label for="pxp-signup-firstname">First Name</Label>
                                        <Input type="text" id="pxp-signup-firstname" placeholder="Enter first name"></Input>
                                    </FormGroup>
                                </div>
                                <div className="col-6">
                                    <FormGroup>
                                        <Label for="pxp-signup-lastname">Last Name</Label>
                                        <Input type="text" id="pxp-signup-lastname" placeholder="Enter last name"></Input>
                                    </FormGroup>
                                </div>
                            </Row>
                            <FormGroup>
                                <Label for="pxp-signup-email">Email</Label>
                                <Input type="text" id="pxp-signup-email" placeholder="Enter your email address"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="pxp-signup-pass">Password</Label>
                                <Input type="password" id="pxp-signup-pass" placeholder="Create a password"></Input>
                            </FormGroup>
                            <FormGroup>
                                <a href="/" className="pxp-agent-contact-modal-btn">Sign Up</a>
                            </FormGroup>
                            <div className="text-center mt-4 pxp-modal-small">
                                Already have an account? <a href="/" className="pxp-modal-link pxp-signin-trigger">Sign in</a>
                            </div>
                        </Form>
                    </ModalBody>
            </Modal>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
padding-bottom:7rem;

.img{
background-image: url(${img}) !important;
background-position: '50% 50%';
}

.styling-container{
    background:black;

}

.styling-text{
    color:white!important;
}


`;