import React, { Component } from "react"
import NavBar from "components/Header"
import Blog from "components/noticias/Blog"
import Footer from 'components/Footer'
import styled from 'styled-components'

export default class Noticias extends Component {
  render() {
    return (

      <Wrapper>
        <NavBar/>
        <Blog/>
        <Footer/>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`

}
`