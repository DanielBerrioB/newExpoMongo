import React from "react";
import axios from "axios";



class Productos extends React.Component {
  

  


  render() {
    return (
      <div>
        <center>
        {

          (this.props.lista).map(element => (
        <p key={element.id}>{element.id}. {element.nombre}</p>))
        
        }
        </center>
      </div>
      


    );
  }
}

export default Productos;
