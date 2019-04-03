import React from "react";
import Header from "./Header";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Productos from "./Productos";
import axios from 'axios'
import Header2 from "./Header2";

class App extends React.Component {

  state ={
      lista: []
  }

  componentDidMount(){
    this.getAll();
  }

  getAll =()=>{
    var url = 'http://localhost:4000/main/'
    axios.get(url).then(response => {
        this.setState({
            lista: response.data
        })
        
    }).catch(error => {
        console.log(error);
    })
    
  }

  render() {
    

    return (
      <div className="contenedor">
        <Header />
        <Header2 titulo="Agregar producto" />
        <div className="contenedor-formulario">
          <Form1 />
        </div>

        <br />
        <div className="contenedor">
          <Header2 titulo="Editar producto" />
          <div className="contenedor-formulario">
            <Form2 />
          </div>
        </div>

        <br />
        <div className="contenedor">
          <Header2 titulo="Eliminar producto" />
          <div className="contenedor-formulario">
            <Form3 />
          </div>
        </div>

        <Productos
            lista = {this.state.lista}
        />
      </div>
    );
  }
}

export default App;
