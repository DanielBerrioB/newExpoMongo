import React from "react";
import Header from "./Header";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Productos from "./Productos";
import Header2 from "./Header2";

class App extends React.Component {
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

        <Productos />
      </div>
    );
  }
}

export default App;
