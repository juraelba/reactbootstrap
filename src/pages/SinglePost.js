import React, { Component } from 'react'
import { Link } from "react-router-dom";
import NavBar from 'components/Header'
import {Row, Col, Container, Jumbotron} from 'reactstrap'
import Iframe from 'react-iframe'
import img from 'img/background.jpg'
import styled from 'styled-components'
import Footer from 'components/Footer'

export default class SinglePost extends Component {
    render() {
        return (
        <Wrapper>
            <NavBar/>
             <div className="pxp-blog-posts mt-100">
                <Container className="container" >                       
                            <div className="pxp-blog-post-category">
                                <span>April 9, 2019</span><span>Interior Design</span>
                            </div >
                            <h1 className="pxp-page-header">What to Expect When Working with an Interior Designer</h1>
                                <Jumbotron className="pxp-blog-post-hero image">
                                    <div className="pxp-blog-post-hero-fig pxp-cover ">
                                    </div>
                                </Jumbotron>
                </Container>
                <Container className="container mt-100">
                    <Row className="row">
                    <div className="pxp-blog-post-share">
                                <div className="pxp-blog-post-share-label">Share</div>
                                <ul className="list-unstyled mt-3">
                                    <li><Link to="/"><i class="fab fa-facebook"></i></Link></li>
                                    <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i class="fab fa-pinterest"></i></Link></li>
                                    <li><Link to="/"><i class="fab fa-linkedin"></i></Link></li>
                                </ul>
                                <div className="clearfix"></div>
                    </div>
                     <div className="col-sm-12 col-lg-10">
                        <div className="pxp-blog-post-block mt-4 mt-md-5 mt-lg-0">
                                <h2>Have realistic expectations</h2>
                            <div className="mt-3 mt-md-4">
                                <p className="pxp-first-letter">Most designers will tell you that, as much as we all love to watch home design shows, their prevalence has done them a bit of a disservice. Thanks to TV magic, the designers on those shows pull off projects with tight deadlines and shoestring budgets that would never fly in the real world.</p>
                                <p>Of course, every project is different. The best way to get a handle on an anticipated budget and duration is by asking potential designers for this information upfront. Don’t be afraid to reach out to more than one to get a realistic picture of what to expect.</p>
                            </div>
                        </div>
                        
                        <div className="pxp-blog-post-block pxp-full mt-4 mt-md-5">
                         <Link to="/">

                         <Iframe url="https://www.youtube.com/embed/4Wee4LASqvE?start=23"
                            width="100%"
                            height="450px"
                            className="pxp-blog-post-video pxp-cover image"
                            display="initial"
                            position="relative"/>

                        </Link>
                        </div>

                        <div className="pxp-blog-post-block mt-4 mt-md-5">
                                <h2>Take the time to find the right fit</h2>
                                <div className="mt-3 mt-md-4">
                                    <p>Not all designers are created equal. Like all of us, each designer has his or her own unique personal tastes, quirks and business practices. To make sure your project is a success, it’s important that you and your designer are on the same page with a lot of these details. You may need to interview a few before you find someone who’s the right fit.</p>
                                    <div className="pxp-blog-post-blockquote pxp-left">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</div>
                                    <p>In the design world, this interview is called a consultation. It can be an in-person meeting or held over the phone, and it can be paid or unpaid. You can use this time to ask to see samples of the designer’s work, learn more about their process, and ask about business practices, such as their preferred methods for communication and billing.</p>
                                    <p>You can also use this time to let the designer get to know you. Feel free to bring in a few photos or items you intend to use for design inspiration. Let the designer know about your specific quirks and personal preferences. By the end of the meeting, you should have a good sense of whether the two of you will work well together.</p>
                                </div>
                        </div>
                        <div className="pxp-blog-post-block pxp-full mt-4 mt-md-5">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <img src={img} alt="" className="pxp-image-full mb-3"/>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <img src={img} alt="" className="pxp-image-full mb-3"/>
                                    </div>
                                </div>
                            </div>
                        <div className="pxp-blog-post-block mt-4 mt-md-5">
                                <h2>Final thoughts</h2>
                            <div className="mt-3 mt-md-4">
                                    <p>For those who have never hired an interior designer before, 
                                        the idea of doing so can feel out of reach, but it doesn’t need to be. 
                                        We’ve created a first-timer’s guide to working with an interior designer 
                                        to help you take the plunge. Use the advice in this post to make an informed 
                                        decision as to whether hiring professional help is the right choice for you.</p>
                            </div>
                        </div>
                        <div className="container mt-100">
                            <h2 className="pxp-section-h2">Related Articles</h2>
                             <div class="row mt-4 mt-md-5">
                                <Col className="col-sm-12 col-md-6 col-lg-4">
                                    <Link to="/" className="pxp-posts-1-item">
                                    <div className="pxp-posts-1-item-fig-container">
                                    <div className="pxp-posts-1-item-fig pxp-cover image"></div>
                                    </div>
                                    <div className="pxp-posts-1-item-details">
                                        <div className="pxp-posts-1-item-details-category">Interior Design</div>
                                        <div className="pxp-posts-1-item-details-title">What to Expect When Working with an Interior Designer</div>
                                        <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                        <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                    </div>
                                    </Link>
                                </Col>
                                <Col className="col-sm-12 col-md-6 col-lg-4">
                                    <Link to="/" className="pxp-posts-1-item">
                                    <div className="pxp-posts-1-item-fig-container">
                                    <div className="pxp-posts-1-item-fig pxp-cover image">                           
                                    </div>
                                    </div>
                                    <div className="pxp-posts-1-item-details">
                                        <div className="pxp-posts-1-item-details-category">Architecture</div>
                                        <div className="pxp-posts-1-item-details-title">Private Contemporary Home Balancing Openness</div>
                                        <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                        <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                    </div>
                                    </Link>
                                </Col> 
                                <Col class="col-sm-12 col-md-6 col-lg-4">
                                    <Link to="/" className="pxp-posts-1-item">
                                    <div className="pxp-posts-1-item-fig-container">
                                    <div className="pxp-posts-1-item-fig pxp-cover image">                                      
                                    </div>
                                    </div>
                                    <div className="pxp-posts-1-item-details">
                                        <div className="pxp-posts-1-item-details-category">Interior Design</div>
                                        <div className="pxp-posts-1-item-details-title">Stylish Modern Ranch Exuding a Welcoming Feel</div>
                                        <div className="pxp-posts-1-item-details-date mt-2">April 9, 2019</div>
                                        <div className="pxp-posts-1-item-cta text-uppercase">Read Article</div>
                                    </div>
                                    </Link>
                                </Col>   
                             </div>                     
                        </div>
                    </div>                      
                    </Row>
                </Container>
            </div> 
            <Footer/>
        </Wrapper>
        )
    }
}

const Wrapper = styled.div`


.image {
    background-image: url(${img})!important; 
    height:75vh;
    margin-right:0;
    background-position:50% 50%;  
}

`;