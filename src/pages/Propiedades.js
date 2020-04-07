import React, { Component } from 'react'
import NavBar from 'components/Header'
import Properties from 'components/propiedades/Properties'
import Footer from 'components/Footer'
import styled from 'styled-components'




export default class Propiedades extends Component {
    render() {
        return (
            <div>
            <NavBar/>
              <Wrapper>             
                <Properties/>
                <Footer/>
              </Wrapper>
            </div>
            
        )
    }
}

const Wrapper = styled.div`


`;
