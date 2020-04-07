import React, { Component } from "react"
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css" 
import Home from "./pages/Home"
import Propiedades from "./pages/Propiedades"
import Asesores from "./pages/Asesores"
import Noticias from "./pages/Noticias"
import Contacto from "./pages/Contacto"
import SingleProperty from "./pages/SingleProperty"
import SinglePost from "./pages/SinglePost"
import SingleAgent from "./pages/SingleAgent"
import Default from "./pages/Default"


class App extends Component {
  render() {
    return (

<React.Fragment> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Propiedades" component={Propiedades} />
        <Route path="/Asesores" component={Asesores} />
        <Route path="/Noticias" component={Noticias} />
        <Route path="/SingleProperty" component={SingleProperty} />
        <Route path="/SinglePost" component={SinglePost} />
        <Route path="/SingleAgent" component={SingleAgent} />
        <Route path="/Contacto" component={Contacto} />
        <Route component={Default} />
      </Switch>

</React.Fragment>
    );
  }
}

export default App;
      