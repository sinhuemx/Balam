import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portada from './components/sections/Portada';
import Contacto from './components/sections/Contacto';
import Servicios from './components/sections/Servicios';
import Productos from './components/sections/Productos';
import Balam from './components/sections/Balam';



function App() {
  return (
    <div className="grid ">
      <Router>
       <Route path="/" exact component={Portada} /> 
       <Route path="/balam" exact component={Balam} /> 
       <Route path="/productos" exact component={Productos} /> 
       <Route path="/servicios" exact component={Servicios} /> 
       <Route path="/contacto" exact component={Contacto} /> 
      </Router>
    </div>


  );
}

export default App;
