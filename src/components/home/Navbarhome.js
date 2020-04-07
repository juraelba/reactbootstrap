import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  Modal,
  ModalBody,
  Nav,
  NavItem
} from "reactstrap"
import Logo from 'img/rojkindLogo.svg'
import styled from "styled-components"

const NavBarhome = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
      <NavWrapper className="pxp-dark-mode">
      <div className="pxp-header fixed-top pxp-animate">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5 col-md-2">
                        <a href="index.html" className="pxp-logo text-decoration-none"><img src={Logo} alt="rojkindLogo"/></a>
                    </div>
                    <div className="col-2 col-md-8 text-center">
                        <ul className="pxp-nav list-inline">
                            <li className="list-inline-item">
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="/propiedades">Propiedades</NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="/assesores">Asesores</NavLink>
                            </li>
                            <li className="list-inline-item">
                                <NavLink to="/blog">Noticias</NavLink>
                            </li>
                            <li className="list-inline-item pxp-is-last">
                              <NavLink to="/contacto">Contacto</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-5 col-md-2 text-right">
                <a href={e => e.preventDefault()} 
                style={{color:"white"}} className="pxp-header-nav-trigger" onClick={toggle}>
                  <span class="fa fa-bars"></span></a>
                        <Modal  isOpen={isOpen} 
                        style={{ 
                          marginBottom: '0rem',
                          marginTop: '-2rem',
                          marginLeft:'-5rem',
                          
                          height:'200vh', 
                          width:'500vw',
                          padding:'0',
                          background:'black',
                          color:'white',
                          textAlign:'left'
                         }} >
                          <ModalBody navbar
                          style={{                           
                            padding:'5rem',
                            marginLeft:'1em',
                            marginTop:'-2rem',
                            background:'black',
                           }}
                           >
             <a href={e => e.preventDefault()} style={{ 
               marginTop:'-1rem', 
               fontSize:'3rem',
               color:'white',
               paddingLeft:'26rem'             
             }} onClick={toggle}><span class="fas fa-times-circle"></span></a>
                        
             
            
            <Nav className="mr-auto nav-item" navbar
            >
           <NavItem style={{
              marginTop:'-2rem',
              fontSize:'1.4rem', 
              letterSpacing: '.001em',}}>
            <NavLink style={{                           
              color:'white',
              fontWeight:'900'
             }} to="/">
              rojkind inmobiliaria.
            </NavLink>
            </NavItem>
                    
              <NavItem style={{marginTop:'4rem', fontSize:'1.2rem'}} to="/">
                <NavLink style={{                           
              color:'white',
              fontWeight:'700'
             }} to="/">
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem style={{marginTop:'.6rem', fontSize:'1.2rem'}}>
                <NavLink style={{                           
              color:'white',
              fontWeight:'700',
             }} to="/Propiedades">                
                  Propiedades
                </NavLink>
              </NavItem>
              <NavItem style={{marginTop:'.6rem', fontSize:'1.2rem'}}>
                <NavLink style={{                           
              color:'white',
              fontWeight:'700'
             }} to="/Asesores">                
                  Asesores
                </NavLink>
              </NavItem>
              <NavItem style={{marginTop:'.6rem', fontSize:'1.3rem'}}>
                <NavLink style={{                           
              color:'white',
              fontWeight:'700',
             }}  to="/Noticias">                 
                  Noticias
                </NavLink>
              </NavItem>
              <NavItem style={{marginTop:'.6rem', fontSize:'1.2rem'}}>
                <NavLink style={{                           
              color:'white',
              fontWeight:'700',
             }} to="/Contacto">                 
                  Contacto
                </NavLink>
              </NavItem>
            </Nav>
            </ModalBody>
          </Modal>
                    </div>
                </div>
            </div>
        </div>
        </NavWrapper>
    
    );
  };
  
  export default NavBarhome;
  const NavWrapper = styled.nav`
  .YourCustomClass{background:black}
  `;