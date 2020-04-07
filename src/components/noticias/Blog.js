import React, { Component } from 'react'
import {Container, Card, Button, Form, Row, Col, FormGroup, Input, Carousel,CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption} from 'reactstrap'
import img from "img/gallery.jpg"
import styled from "styled-components"
import backgroundImage from "img/background.jpg";
import 'components/style.css'

export default class Blog extends Component {
    render() {
        return (

        <Wrapper className="pxp-dark-mode"> 
            <div className="pxp-content">
                <div className="pxp-blog-posts pxp-content-wrapper mt-100">
                    <Container>
                        <h1 className="pxp-page-header">Latest Articles</h1>
                        <p className="pxp-text-light">Read our latest articles on real estate, architecture, interior design, and more</p>
                        {/* <div className="pxp-blog-posts-carousel-1 mt-4 mt-md-5">
                            <div className="pxp-blog-posts-carousel-1-badge">Featured</div>
                            <div className="carousel slide pxp-blog-posts-carousel-1-img" data-ride="carousel" data-pause="false" data-interval="false">
                                <Card className="carousel-item active img">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundPosition: '50% 50%'}}></div>                               
                                </Card>
                                <Card className="carousel-item active img">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundPosition: '50% 50%'}}></div>                               
                                </Card>
                                <Card className="carousel-item active img">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundPosition: '50% 50%'}}></div>                               
                                </Card>
                                <Card className="carousel-item active img">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundPosition: '50% 50%'}}></div>                               
                                </Card>
                            </div>
                            <div className="pxp-carousel-controls">
                                <Button 
                                className="pxp-carousel-control-prev" 
                                role="button" 
                                data-slide="prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                        <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                            <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="2"/>
                                            <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="2"/>
                                            <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </Button>
                                <Button className="pxp-carousel-control-next" role="button" data-slide="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                        <g id="Symbol_1_1" data-name="Symbol 1 &#x2013; 1" transform="translate(-1847.5 -1589.086)">
                                            <line id="Line_5" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="2"/>
                                            <line id="Line_6" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="2"/>
                                            <line id="Line_7" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" strokeLinecap="round" strokeWidth="2"/>
                                        </g>
                                    </svg>
                                </Button>
                            </div>
                            <Card className="pxp-blog-posts-carousel-1-caption-container">
                                <div id="pxp-blog-posts-carousel-1-caption" className="carousel slide pxp-blog-posts-carousel-1-caption" data-ride="carousel" data-pause="false" data-interval="false">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-slide="0">
                                            <div className="pxp-blog-posts-carousel-1-caption-category">Architecture</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-title">What to Expect When Working with an Interior Designer</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-summary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</div>
                                            <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                        </div>
                                        <div className="carousel-item" data-slide="1">
                                            <div className="pxp-blog-posts-carousel-1-caption-category">Interior Design</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-title">Private Contemporary Home Balancing Openness</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-summary">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using...</div>
                                            <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                        </div>
                                        <div className="carousel-item" data-slide="2">
                                            <div className="pxp-blog-posts-carousel-1-caption-category">Architecture</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-title">How Does A Designer Apartment Look Like</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-summary">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search...</div>
                                            <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                        </div>
                                        <div className="carousel-item" data-slide="3">
                                            <div className="pxp-blog-posts-carousel-1-caption-category">Interior Design</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-title">Luminous Apartment Flaunting Modern Style</div>
                                            <div className="pxp-blog-posts-carousel-1-caption-summary">There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some form...</div>
                                            <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                        </div>
                                    </div>                                  
                                </div>   
                            </Card>
                        </div> */}
                        <div className="pxp-blog-posts-carousel-1 mt-4 mt-md-5">
                        <div id="pxp-blog-posts-carousel-1-img" className="carousel slide pxp-blog-posts-carousel-1-img" data-ride="carousel" data-pause="false" data-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-slide="0">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: '50% 50%'}}></div>
                                </div>
                                <div className="carousel-item" data-slide="1">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: '50% 50%'}}></div>
                                </div>
                                <div className="carousel-item" data-slide="2">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: '50% 50%'}}></div>
                                </div>
                                <div className="carousel-item" data-slide="3">
                                    <div className="pxp-hero-bg pxp-cover" style={{backgroundImage: `url(${backgroundImage})`, backgroundPosition: '50% 50%'}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="pxp-carousel-controls">
                            <a className="pxp-carousel-control-prev" role="button" data-slide="prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                    <g id="Group_30" data-name="Group 30" transform="translate(-1845.086 -1586.086)">
                                        <line id="Line_2" data-name="Line 2" x1="30" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" strokeWidth="2"></line>
                                        <line id="Line_3" data-name="Line 3" x1="9" y2="9" transform="translate(1846.5 1587.5)" fill="none" stroke="#333" stroke-linecap="round" strokeWidth="2"></line>
                                        <line id="Line_4" data-name="Line 4" x1="9" y1="9" transform="translate(1846.5 1596.5)" fill="none" stroke="#333" stroke-linecap="round" strokeWidth="2"></line>
                                    </g>
                                </svg>
                            </a>
                            <a className="pxp-carousel-control-next" role="button" data-slide="next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32.414" height="20.828" viewBox="0 0 32.414 20.828">
                                    <g id="Symbol_1_1" data-name="Symbol 1 – 1" transform="translate(-1847.5 -1589.086)">
                                        <line id="Line_5" data-name="Line 2" x2="30" transform="translate(1848.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" strokeWidth="2"></line>
                                        <line id="Line_6" data-name="Line 3" x2="9" y2="9" transform="translate(1869.5 1590.5)" fill="none" stroke="#333" stroke-linecap="round" strokeWidth="2"></line>
                                        <line id="Line_7" data-name="Line 4" y1="9" x2="9" transform="translate(1869.5 1599.5)" fill="none" stroke="#333" stroke-linecap="round" strokeWidth="2"></line>
                                    </g>
                                </svg>
                            </a>
                        </div>

                        <div className="pxp-blog-posts-carousel-1-caption-container">
                            <div id="pxp-blog-posts-carousel-1-caption" className="carousel slide pxp-blog-posts-carousel-1-caption" data-ride="carousel" data-pause="false" data-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-slide="0">
                                        <div className="pxp-blog-posts-carousel-1-caption-category">Architecture</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-title">What to Expect When Working with an Interior Designer</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-summary">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</div>
                                        <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                    </div>
                                    <div className="carousel-item" data-slide="1">
                                        <div className="pxp-blog-posts-carousel-1-caption-category">Interior Design</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-title">Private Contemporary Home Balancing Openness</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-summary">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using...</div>
                                        <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                    </div>
                                    <div className="carousel-item" data-slide="2">
                                        <div className="pxp-blog-posts-carousel-1-caption-category">Architecture</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-title">How Does A Designer Apartment Look Like</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-summary">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search...</div>
                                        <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                    </div>
                                    <div className="carousel-item" data-slide="3">
                                        <div className="pxp-blog-posts-carousel-1-caption-category">Interior Design</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-title">Luminous Apartment Flaunting Modern Style</div>
                                        <div className="pxp-blog-posts-carousel-1-caption-summary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...</div>
                                        <a href="single-post.html" className="pxp-primary-cta text-uppercase mt-3 mt-md-4 pxp-animate">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pxp-blog-posts-carousel-1-badge">Featured</div>
                    </div>
                        <div className="row mt-200">
                            <Row>
                            <Col className="col-sm-12 col-lg-9">
                                <Row>
                                    <Col className="col-sm-12 col-md-6">
                                        <a href="single-post.html" className="pxp-posts-1-item">
                                            <div className="pxp-posts-1-item-fig-container">
                                                <div className="pxp-posts-1-item-fig pxp-cover img"></div>
                                            </div>
                                            <div className="pxp-posts-1-item-details">
                                                <div className="pxp-posts-1-item-details-category">Interior Design</div>
                                                <div className="pxp-posts-1-item-details-title">What to Expect When Working with an Interior Designer</div>
                                                <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                                <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col className="col-sm-12 col-md-6">
                                        <a href="single-post.html" className="pxp-posts-1-item">
                                            <div className="pxp-posts-1-item-fig-container">
                                                <div className="pxp-posts-1-item-fig pxp-cover img"></div>
                                            </div>
                                            <div className="pxp-posts-1-item-details">
                                                <div className="pxp-posts-1-item-details-category">Architecture</div>
                                                <div className="pxp-posts-1-item-details-title">Private Contemporary Home Balancing Openness</div>
                                                <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                                <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col className="col-sm-12 col-md-6">
                                        <a href="single-post.html" className="pxp-posts-1-item">
                                            <div className="pxp-posts-1-item-fig-container">
                                                <div className="pxp-posts-1-item-fig pxp-cover img"></div>
                                            </div>
                                            <div className="pxp-posts-1-item-details">
                                                <div className="pxp-posts-1-item-details-category">Interior Design</div>
                                                <div className="pxp-posts-1-item-details-title">Stylish Modern Ranch Exuding a Welcoming Feel</div>
                                                <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                                <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                            </div>
                                        </a>
                                                    </Col>
                                    <Col className="col-sm-12 col-md-6">
                                        <a href="single-post.html" className="pxp-posts-1-item">
                                            <div className="pxp-posts-1-item-fig-container">
                                                <div className="pxp-posts-1-item-fig pxp-cover img"></div>
                                            </div>
                                            <div className="pxp-posts-1-item-details">
                                                <div className="pxp-posts-1-item-details-category">Interior Design</div>
                                                <div className="pxp-posts-1-item-details-title">What to Expect When Working with an Interior Designer</div>
                                                <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                                <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col className="col-sm-12 col-md-6">
                                        <a href="single-post.html" className="pxp-posts-1-item">
                                            <div className="pxp-posts-1-item-fig-container">
                                                <div className="pxp-posts-1-item-fig pxp-cover img"></div>
                                            </div>
                                            <div className="pxp-posts-1-item-details">
                                                <div className="pxp-posts-1-item-details-category">Interior Design</div>
                                                <div className="pxp-posts-1-item-details-title">What to Expect When Working with an Interior Designer</div>
                                                <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                                <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col className="col-sm-12 col-md-6">
                                        <a href="single-post.html" className="pxp-posts-1-item">
                                            <div className="pxp-posts-1-item-fig-container">
                                                <div className="pxp-posts-1-item-fig pxp-cover img"></div>
                                            </div>
                                            <div className="pxp-posts-1-item-details">
                                                <div className="pxp-posts-1-item-details-category">Architecture</div>
                                                <div className="pxp-posts-1-item-details-title">Private Contemporary Home Balancing Openness</div>
                                                <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                                <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                            </div>
                                        </a>
                                    </Col>
                                </Row>   
                                <ul className="pagination pxp-paginantion mt-3 mt-md-4">
                                    <li className="page-item active"><a className="page-link" href="/">1</a></li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                    <li className="page-item"><a className="page-link" href="/">Next<span class="fa fa-angle-right"></span></a></li>
                                </ul> 
                            </Col>
                            <Col className="col-sm-12 col-lg-3 mt-5 mt-lg-0">
                                <div className="pxp-blog-posts-side-section">
                                    <h3>Search Articles</h3>
                                    <div class="mt-3 mt-md-4">
                                        <FormGroup>
                                            <Input type="text" placeholder="Search" className="pxp-is-address"></Input>
                                            <span class="fa fa-search"></span>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="pxp-blog-posts-side-section mt-4 mt-md-5">
                                    <h3>Categories</h3>
                                    <ul className="pxp-blog-posts-side-v-list list-unstyled mt-3 mt-md-4">
                                        <li><a href="/">Fashion (3)</a></li>
                                        <li><a href="/">Lifestyle (2)</a></li>
                                        <li><a href="/">Personal (2)</a></li>
                                        <li><a href="/">Stories (2)</a></li>
                                        <li><a href="/">Travel (4)</a></li>
                                    </ul>
                                </div>
                                <div className="pxp-blog-posts-side-section mt-4 mt-md-5">
                                    <h3>Tags</h3>
                                    <div className="pxp-blog-posts-side-tags mt-3 mt-md-4">
                                        <a href="/">Premium (10)</a>
                                        <a href="/">Interior (12)</a>
                                        <a href="/">Stories (6)</a>
                                        <a href="/">Fashion (2)</a>
                                        <a href="/">Architecture (8)</a>
                                        <a href="/">Lifestyle (5)</a>
                                        <a href="/">Travel (10)</a>
                                        <a href="/">Personal (11)</a>
                                    </div>
                                </div>
                            </Col>
                            </Row>
                        </div>
                    </Container>

                    <div className="pxp-full pxp-cover pt-100 pb-100 mt-100 img">
                        <Container>
                            <h2 className="pxp-section-h2 text-white">Stay Up to Date</h2>
                            <p className="pxp-text-light text-white">Subscribe to our newsletter to receive our weekly feed</p>
                            <Row className="mt-4 mt-md-5">
                                <div className="col-xs-12 col-sm-6">
                                    <Form action="blog.html" className="pxp-newsletter-1-form">
                                        <Input type="text" placeholder="Enter your email..."></Input>
                                        <a href="/" className="pxp-primary-cta text-white text-uppercase pxp-animate mt-3 mt-md-4">Subscribe</a>
                                    </Form>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </Wrapper>

                
        )
    }
}

const Wrapper = styled.div`
height:100%; 

  .img {
    background-image: url(${img}) !important;
    }

    .pxp-carousel-controls{
        background:transparent;
    }
   
  .pxp-carousel-control-prev{
      background:transparent;
      border:none;
      z-index:3;
  }
  .pxp-carousel-control-next{
    background:transparent;
      border:none;
      z-index:3;
  }

  @media only screen and (max-width: 600px) {
    
    .pxp-carousel-controls{
        background:transparent;
        z-index:3;
        padding-right:85vw;
        
    }
  }

`;
