import React, { Component } from 'react'
import NavBarHome from "components/home/Navbarhome"
import Header from 'components/home/Header'
import Properties from 'components/home/FeaturedProperties'
import Services from 'components/home/Services'
import Listings from 'components/home/Listings'
import Search from 'components/home/Search'
import Footer from 'components/Footer'
import styled from 'styled-components'



export default class Home extends Component {
    render() {
        return (
            <div>
            <NavBarHome />
              <Wrapper>             
                <Header/>
                <Properties/>
                <Services/>
                <Listings/>
                <Search/>
                <Footer/>
            </Wrapper>
            </div>
            
        )
    }
}

const Wrapper = styled.div`
overflow:hidden;


`;
