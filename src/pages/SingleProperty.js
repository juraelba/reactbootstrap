import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { 
    Jumbotron,
    Card, 
    Container, 
    Col, 
    Collapse, 
    FormGroup,
    Label, 
    Nav, 
    Row, 
    Button, 
    Form, 
    TabPane,
     Table, Modal, 
     ModalBody,
      ModalHeader } from 'reactstrap';
import NavBar from 'components/Header'
import { GoogleMap, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api'
import Footer from 'components/Footer'
import Gallery from 'components/gallery/gallery'
import styled from 'styled-components'
import 'components/style.css'
import img from 'img/background.jpg'


const SingleProperty = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);  

    const [modalagent, setModalagent] = useState(false);
    const toggle1 = () => setModalagent(!modalagent); 

    const [modalrequest, setModalrequest] = useState(false);  
    const toggle2 = () => setModalrequest(!modalrequest);  

    const [modalgallery, setModalgallery] = useState(false);
    const toggle3 = () => setModalgallery(!modalgallery); 

    let style = {
        backgroundColor: "transparent",
        marginTop:"15vh",
        height: "80vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      };

     


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
   
    return (

        <div>
            <Modal isOpen={modalagent} toggle={toggle1}>
        <ModalHeader toggle={toggle1}>Contact Agent</ModalHeader>
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

    <Modal isOpen={modalrequest} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>Request Tour</ModalHeader>
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

    <Modal 
     style={style}
     isOpen={modalgallery} 
     toggle={toggle3}>
         
                <Gallery/>
            
    </Modal>

            <NavBar/>
  <Wrapper className="pxp-content">
    <div className="pxp-single-property-top pxp-content-wrapper mt-100">
        <Container>
            <Row>
                <div className="col-sm-12 col-md-5">
                    <h2 className="pxp-sp-top-title">Beautiful House in Marina</h2>
                    <p className="pxp-sp-top-address pxp-text-light">542 29th Avenue, Marina District, San Francisco, CA 94121</p>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="pxp-sp-top-btns mt-2 mt-md-0">
                        <a href="#" className="pxp-sp-top-btn"><span className="fa fa-star"></span> Save</a>
                        <div className="dropdown">
                            <a className="pxp-sp-top-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="fa fa-share-alt"></span> Share
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#"><span className="fa fa-star"></span> Facebook</a>
                                <a className="dropdown-item" href="#"><span className="fa fa-star"></span> Twitter</a>
                                <a className="dropdown-item" href="#"><span className="fa fa-star"></span> Pinterest</a>
                                <a className="dropdown-item" href="#"><span className="fa fa-star"></span> LinkedIn</a>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix d-block d-xl-none"></div>
                    <div className="pxp-sp-top-feat mt-3 mt-md-0">
                        <div>5 <span>RE</span></div>
                        <div>4 <span>BA</span></div>
                        <div>3,945 <span>m&sup2;</span></div>
                    </div>
                    <div className="pxp-sp-top-price mt-3 mt-md-0">$5,198,000</div>
                </div>
            </Row>              
        </Container>
    </div>

    <Jumbotron className="gallery-container">
            <Row>
                <Card className="pxp-cover-main image" onClick={toggle3}></Card> 
                <Col xs="3" fluid>
                    <Card className="pxp-cover-sub image" onClick={toggle3}></Card>
                    <Card className="pxp-cover-sub image" onClick={toggle3}></Card>
                </Col>
                <Col xs="3" fluid>    
                    <Card className="pxp-cover-sub image" onClick={toggle3}></Card>
                    <Card className="pxp-cover-sub image" onClick={toggle3}></Card>
                </Col>
                
            </Row>     
            <Button className="pxp-sp-gallery-btn" onClick={toggle3}>Ver Photos</Button>
            
    </Jumbotron> 

    <div className="clearfix"></div>
        
    <Container className="container-bottom mt-100" >
        <Row>
        <Col className="col-lg-8">

            <div className="pxp-single-property-section">
                <h3>Key Details</h3>
                <Row className="row mt-3 mt-md-4">
                    <Col className="col-sm-6 amenities">
                        <div className="pxp-sp-key-details-item">
                            <Label className="pxp-sp-kd-item-label text-uppercase">Status</Label>
                            <div className="pxp-sp-kd-item-value">Coming Soon</div>
                        </div>
                    </Col>
                    <Col className="col-sm-6 amenities">
                        <div className="pxp-sp-key-details-item">
                            <Label claclassNamess="pxp-sp-kd-item-label text-uppercase">Property Type</Label>
                            <div className="pxp-sp-kd-item-value">Apartment</div>
                        </div>
                    </Col>
                    <Col className="col-sm-6 amenities">
                        <div className="pxp-sp-key-details-item">
                            <Label className="pxp-sp-kd-item-label text-uppercase">Year Built</Label>
                            <div className="pxp-sp-kd-item-value">1980</div>
                        </div>
                    </Col>
                    <Col className="col-sm-6 amenities">
                        <div className="pxp-sp-key-details-item">
                            <Label className="pxp-sp-kd-item-label text-uppercase">Stories</Label>
                            <div className="pxp-sp-kd-item-value">23</div>
                        </div>
                    </Col>
                    <Col className="col-sm-6 amenities">
                        <div className="pxp-sp-key-details-item">
                            <Label className="pxp-sp-kd-item-label text-uppercase">Room Count</Label>
                            <div className="pxp-sp-kd-item-value">6</div>
                        </div>
                    </Col>
                    <Col className="col-sm-6 amenities">
                        <div className="pxp-sp-key-details-item">
                            <Label className="pxp-sp-kd-item-label text-uppercase">Parking Spaces</Label>
                            <div className="pxp-sp-kd-item-value">2</div>
                        </div>
                    </Col>
                </Row>    
            </div>

            <div className="pxp-single-property-section mt-4 mt-md-5">
                <h3>Overview</h3>
                <div className="mt-3 mt-md-4">
                    <p>Fully furnished. Elegantly appointed condominium unit situated on premier location.
                            PS6. The wide entry hall leads to a large living room with dining area. 
                            This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. 
                            Despite the interior views, the apartments Southern and Eastern exposures allow for 
                            lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork 
                        and features incredible walk-in closet and storage space.The second bedroom is 
                        <span className="pxp-dots">...</span><span className="pxp-dots-more"> a corner room with double windows. 
                        The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone 
                        floors, crown moldings and coffered ceilings throughout the apartment. 1049 5th Avenue is a classic pre-war 
                        building located across from Central Park, the reservoir and The Metropolitan Museum. 
                        Elegant lobby and 24 hours doorman. This is a pet-friendly building.
                        
                        Conveniently located close to several trendy fitness centers like Equinox, New York Sports Clubs & Crunch. 
                        Fine restaurants around the area, as well as top-ranked schools. 2% Flip tax paid by buyer to the condominium. 
                        Building just put an assessment for 18 months of approximately $500 per month.
                    </span></p>
                    <a href="#" className="pxp-sp-more text-uppercase"><span className="pxp-sp-more-1">Continue Reading <span className="fa fa-angle-down"></span></span><span className="pxp-sp-more-2">Show Less <span className="fa fa-angle-up"></span></span></a>
                    {/* <Button className="pxp-sp-more text-uppercase button" onClick={toggle}>
                    <span className="pxp-sp-more-1">Continue Reading
                        <span class="fa fa-angle-down"></span></span>
                        </Button>
                        <Collapse isOpen={isOpen}>
                            <p>a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors, crown moldings and coffered ceilings throughout the apartment. 1049 5th Avenue is a classic pre-war building located across from Central Park, the reservoir and The Metropolitan Museum. Elegant lobby and 24 hours doorman. This is a pet-friendly building.

                            Conveniently located close to several trendy fitness centers like Equinox, New York Sports Clubs & Crunch. Fine restaurants around the area, as well as top-ranked schools. 2% Flip tax paid by buyer to the condominium. Building just put an assessment for 18 months of approximately $500 per month.</p>
                        </Collapse> */}
                </div>
            </div>

            <div className="pxp-single-property-section mt-4 mt-md-5">
                <h3>Amenities</h3>
                <Row className="mt-3 mt-md-4">
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-wifi"></span> Internet</div>
                    </Col>
                
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-car"></span> Garage</div>
                    </Col>
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-sun-o"></span> Air Conditioning</div>
                    </Col>
                    
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-bullseye"></span> Dishwasher</div>
                    </Col>
                        
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-recycle"></span> Disposal</div>
                    </Col>
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-clone"></span> Balcony</div>
                    </Col>
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-futbol-o"></span> Gym</div>
                    </Col>
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-smile-o"></span> Playroom</div>
                    </Col>
                    <Col className="col-sm-6 col-lg-4 amenities">
                        <div className="pxp-sp-amenities-item"><span class="fa fa-glass"></span> Bar</div>
                    </Col>
                </Row>
            </div>

            <div class="pxp-single-property-section mt-4 mt-md-5">
                <h3>Explore the Area</h3>
                <Nav className="pxp-sp-pois-nav mt-3 mt-md-4">
                    <div className="pxp-sp-pois-nav-transportation text-uppercase">Transportation</div>
                    <div className="pxp-sp-pois-nav-restaurants text-uppercase">Restaurants</div>
                    <div className="pxp-sp-pois-nav-shopping text-uppercase">Shopping</div>
                    <div className="pxp-sp-pois-nav-cafes text-uppercase">Cafes & Bars</div>
                    <div className="pxp-sp-pois-nav-arts text-uppercase">Arts & Entertainment</div>
                    <div className="pxp-sp-pois-nav-fitness text-uppercase">Fitness</div>
                </Nav>
                <div className="mt-3 pxp-sp-map"> 
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

                        
            <div className="pxp-single-property-section mt-4 mt-md-5">
                <h3>Payment Calculator</h3>
                <div className="pxp-calculator-view mt-3 mt-md-4">
                    <Row className="row">
                        <Col className="col-sm-12 col-lg-4 align-self-center">
                            <div className="pxp-calculator-chart-container">
                                <canvas id="pxp-calculator-chart"></canvas>
                                <div className="pxp-calculator-chart-result">
                                    <div className="pxp-calculator-chart-result-sum">$11,277</div>
                                    <div className="pxp-calculator-chart-result-label">per month</div>
                                </div>
                            </div>
                        </Col> 
                        <Col className="col-sm-12 col-lg-8 align-self-center mt-3 mt-lg-0">
                            <div className="pxp-calculator-data">
                                <Row className="row justify-content-between">
                                    <Col className="col-8">
                                        <div className="pxp-calculator-data-label"><span class="fa fa-minus"></span>Principal and Interest</div>
                                    </Col>
                                    <Col className="col-4 text-right">
                                        <div className="pxp-calculator-data-sum" id="pxp-calculator-data-pi"></div>
                                    </Col>
                                </Row>
                            </div> 
                            <div className="pxp-calculator-data">
                                <Row className="row justify-content-between">
                                    <Col className="col-8">
                                        <div className="pxp-calculator-data-label"><span class="fa fa-minus"></span>Property Taxes</div>
                                    </Col>
                                    <Col className="col-4 text-right">
                                        <div className="pxp-calculator-data-sum" id="pxp-calculator-data-pt"></div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="pxp-calculator-data">
                                <Row className="row justify-content-between">
                                    <Col className="col-8">
                                        <div className="pxp-calculator-data-label"><span class="fa fa-minus"></span>HOA Dues</div>
                                    </Col>
                                    <Col className="col-4 text-right">
                                        <div className="pxp-calculator-data-sum" id="pxp-calculator-data-hd"></div>
                                    </Col>
                                </Row>
                            </div>   
                        </Col>                                
                    </Row>
                </div>
                <div className="pxp-calculator-form mt-3 mt-md-4">
                    <input type="hidden" id="pxp-calculator-form-property-taxes" value="$1,068"/>
                    <input type="hidden" id="pxp-calculator-form-hoa-dues" value="$2,036"/>
                    <Row className="row">
                        <Col className="col-sm-12 col-md-5">
                            <FormGroup className="form-group">
                                <Label className="pxp-calculator-form-term">
                                    Term
                                </Label>
                                <select className="custom-select" id="pxp-calculator-form-term">
                                    <option value="30">30 Years Fixed</option>
                                    <option value="20">20 Years Fixed</option>
                                    <option value="15">15 Years Fixed</option>
                                    <option value="10">10 Years Fixed</option>
                                </select>
                            </FormGroup>
                        </Col>
                    
                    <Col className="col-sm-12 col-md-5">
                            <FormGroup className="form-group">
                                <Label for="pxp-calculator-form-interest">Interest</Label>
                                <input type="text" className="form-control pxp-form-control-transform" id="pxp-calculator-form-interest" data-type="percent" value="4.45%"/>
                            </FormGroup>
                    </Col>
                    
                        <Col className="col-sm-12 col-md-5">
                            <FormGroup className="form-group">
                                <Label for="pxp-calculator-form-price">Home Price</Label>
                                <input type="text" className="form-control pxp-form-control-transform" id="pxp-calculator-form-price" data-type="currency" value="$5,198,000"/>
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-12 col-md-4">
                            <FormGroup className="form-group">
                                <Label for="pxp-calculator-form-down-price">Down Payment</Label>
                                <input type="text" className="form-control pxp-form-control-transform" id="pxp-calculator-form-down-price" data-type="currency" value="$519,800"/>
                            </FormGroup>
                        </Col>
                        <Col className="col-sm-12 col-md-2">
                            <FormGroup className="form-group">
                                <Label for="pxp-calculator-form-down-percentage">&nbsp;</Label>
                                <input type="text" className="form-control pxp-form-control-transform" id="pxp-calculator-form-down-percentage" data-type="percent" value="10%"/>
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="pxp-single-property-section mt-4 mt-md-5">
                    <h3>Schools in Marina District</h3>
                    <ul className="nav nav-tabs pxp-nav-tabs mt-3 mt-md-4">
                        <li className="nav-item"><Link className="nav-link active" to="#elementary" data-toggle="tab">Elementary</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#middle"  data-toggle="tab">Middle</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="#high" data-toggle="tab">High</Link></li>
                    </ul>
                    <TabPane className="tab-content mt-3">
                        <div className="tab-pane active" id="elementary" role="tabpanel">
                            <Table className="table table-responsive pxp-table">
                                <thead>
                                    <tr>
                                        <th scope="col">School</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Grades</th>
                                        <th scope="col">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Harvest Collegiate High School</td>
                                        <td>Public</td>
                                        <td>9-11</td>
                                        <td>5/5<span className="pxp-school-rating"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></td>
                                    </tr>
                                    <tr>
                                        <td>Harvest Collegiate High School</td>
                                        <td>Public</td>
                                        <td>9-11</td>
                                        <td>5/5<span className="pxp-school-rating"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>        
                    </TabPane>
            </div>
        </Col>


        <Col className="col-lg-4">
            <div className="pxp-single-property-section pxp-sp-agent-section mt-4 mt-md-5 mt-lg-0"  >
                <h3>Listed By</h3>
                <div className="pxp-sp-agent mt-3 mt-md-4">
                    <div className="pxp-sp-agent-info">
                    <Link to="/SingleAgent"><Button className="pxp-sp-agent-fig pxp-cover rounded-lg image"></Button></Link>
                        <div className="pxp-sp-agent-info-name"><Link to="/SingleAgent">Erika Tillman</Link></div>
                        <div className="pxp-sp-agent-info-rating"><span class="fa fa-star"></span><span class="fa fa-star"></span><span className="fa fa-star"></span><span classMame="fa fa-star"></span><span className="fa fa-star"></span></div>
                        <div className="pxp-sp-agent-info-email"><Link to="mailto:erika.tillman@resideo.com">erika.tillman@resideo.com</Link></div>
                        <div className="pxp-sp-agent-info-phone"><span class="fa fa-phone"></span> (123) 456-7890</div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="pxp-sp-agent-btns mt-3 mt-md-4">
                        <Button to="#pxp-contact-agent" className="pxp-sp-agent-btn-main" onClick={toggle1} data-target="#pxp-contact-agent"><span className="fa fa-envelope-o"></span> Contact Agent</Button>
                        <Button to="#pxp-contact-agent" className="pxp-sp-agent-btn" onClick={toggle2} data-target="#pxp-contact-agent"><span className="fa fa-calendar-check-o"></span> Request Tour</Button>
                    </div>
                </div>
            </div>
        </Col>
        </Row>
    </Container>
    <Footer/>         
    </Wrapper>
    </div>
  );
};
export default SingleProperty;

const Wrapper = styled.div`
overflow-x:hidden;

.image {
    background-image: url(${img})!important;   
}

.pxp-cover-main{
    position:relative;
    height:90vh;
    width:49%;
    border: 5px solid white;
    left:0;
    display: flex;
}

.pxp-cover-sub{
position:relative;
height:45vh;
width:24vw;
border: 5px solid white;
padding:0 !important;
margin:0 !important;
white-space:nowrap;
display: flex;
}

.gallery-container {
    background: white;
    height:100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.gallery-modal {
    background: Black;
    height:60vh;
}


.container-bottom{
padding-bottom:3rem;
}

.button{
    background:transparent;
    border:none;
}

@media only screen and (max-width: 600px) {
    .amenities {
      padding-right:100vw;
    }
  }

`;