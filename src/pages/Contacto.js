
import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from 'components/Header'
import Form from 'components/contacto/contactform'
import Footer from 'components/Footer'

export default class Contacto extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar/>
        <Form />
        <Footer />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`

overflow:hidden;



`;

