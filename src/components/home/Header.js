import React, { Component } from 'react'
import {Container,Form, FormGroup, Row, Button} from'reactstrap'
import 'components/style.css'
import styled from 'styled-components'
import img from 'img/bellasArtes.jpg'

export default class Header extends Component {
  render() {
    return (
      <Wrapper className="pxp-content">
              <div className="pxp-hero vh-100">
              <div className="pxp-hero-bg pxp-cover pxp-cover-bottom image"></div>
                  <div className="pxp-hero-opacity"></div>
              
              <Container className="pxp-hero-caption pxp-hero-caption-bottom-left">
                      <h1 className="text-white">Encuentra tu espacio</h1>

                      <Form action="/propiedades" className="pxp-hero-search mt-4">
                          <Row >
                              <div className="col-sm-12 col-md-4">
                                  <FormGroup>
                                      <select className="custom-select">
                                          <option selected>Comprar</option>
                                          <option value="1">Rentar</option>
                                      </select>
                                  </FormGroup>
                              </div>
                              <div className="col-sm-12 col-md-4">
                                  <FormGroup>
                                      <select className="custom-select">
                                          <option selected>Casa</option>
                                          <option value="1">Departamento</option>
                                          <option value="1">Bodega</option>
                                      </select>
                                  </FormGroup>
                              </div>
                              <div className="col-sm-12 col-md-4">
                                  <FormGroup>
                                      <Button href="/" className="pxp-contact-form-btn">Buscar</Button>
                                  </FormGroup>
                              </div>
                          </Row>
                      </Form>
                  </Container>
                  </div>
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
.image {
    background-image: url(${img})!important;   
  }

`