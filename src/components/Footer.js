import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Logo from 'img/rojkindLogo.svg'
import './style.css'

var dt = new Date();

export default class Footer extends Component {
  render() {
    return (
      <div className="pxp-footer pt-100 pb-100 mt-100">
                <Container>
                <Row>
                    <div className="col-sm-12 col-lg-4">
                        <div className="pxp-footer-logo"><img src={Logo} alt="rojkindLogo" height="50px" style={{marginBottom: '20px'}}/></div>
                        <div className="pxp-footer-address mt-2">
                             Montes Urales 320,<br/>
                             Lomas de Chapultepec, CDMX, 11000 <br /> <br />
                             <i className="fa fa-phone" />
                             <span>  55204000</span><br/>
                             <i className="fa fa-envelope" />
                             <span>  contacto@rojkind.com.mx</span>
                        </div>
                        <br />
                        <div class="pxp-footer-social mt-2">
                             <Link to="/" target="_blank">
                             <i class="fab fa-instagram"></i>
                             </Link>
                             <Link to="/" target="_blank">
                             <i class="fab fa-facebook-square"></i>
                             </Link>
                             <Link to="/" target="_blank">
                             <i class="fab fa-twitter"></i>
                             </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <Row>
                            <div className="col-sm-12 col-md-4">
                                <h4 className="pxp-footer-header mt-4 mt-lg-0">Empresa</h4>
                                <ul className="list-unstyled pxp-footer-links mt-2">
                                    <li>
                                    <Link to="/">Inicio</Link>
                                    </li>
                                    <li>
                                    <Link to="/Propiedades">Propiedades</Link>
                                    </li>
                                    <li>
                                    <Link to="/Asesores">Asesores</Link>
                                    </li>
                                    <li>
                                    <Link to="/Noticias">Noticias</Link>
                                    </li>
                                    <li>
                                    <Link to="/Contacto">Contacto</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h4 className="pxp-footer-header mt-4 mt-lg-0">Acciones</h4>
                                <ul className="list-unstyled pxp-footer-links mt-2">
                                    <li>
                                    <Link to="/">Vende tu propiedad</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Renta tu propiedad</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <h4 className="pxp-footer-header mt-4 mt-lg-0">Explora</h4>
                                <ul className="list-unstyled pxp-footer-links mt-2">
                                   <li>
                                    <Link to="/">Casas en venta</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Casas en renta</Link>
                                    </li>
                                    <li>
                                    <Link to="/">Departamentos en venta</Link>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </div>
                </Row>

                <div className="pxp-footer-bottom mt-2">
                    <div className="pxp-footer-copyright"> Rojkind Inmobiliaria 1976 - {dt.getFullYear()}. </div>
                </div>
            </Container>
      </div>
    );
  }
}
