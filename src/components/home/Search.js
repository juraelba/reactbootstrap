import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Container, Row } from "reactstrap"
import styled from "styled-components"
import 'components/style.css'
import img from "img/ecoBici.jpg"


export default class Search extends Component {
    render() {
        return (
            <Wrapper>
                <div className="pxp-cta-1 pxp-cover mt-100 pb-300 img">
                  <Container className="pxp-animate-in">
                      <Row className="justify-content-end">
                          <div className="col-sm-12 col-md-6 col-lg-4">
                              <div className="pxp-cta-1-caption  rounded-lg">
                              <h2 className="pxp-section-h2 text-white">Search Smarter, From Anywhere</h2>
                              <p className="pxp-text-light text-white">Power your search with our Resideo real estate platform, for timely listings and a seamless experience.</p>
                                  <Link to="/propiedades" className="pxp-primary-cta text-white text-uppercase mt-3 mt-md-5 pxp-animate">Search Now</Link>
                            
                              </div>
                             
                          </div>
                      </Row>
                  </Container>
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
 padding-top:3rem; 
.img {
    background-image: url(${img}) !important;
    background-position: 50% 50%;    

  }
`