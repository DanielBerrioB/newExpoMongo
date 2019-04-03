import React from "react";
import axios from "axios";

class Form1 extends React.Component {
  idRef = React.createRef();
  nombreRef = React.createRef();
  valorRef = React.createRef();
  stockRef = React.createRef();

  handleClick = e => {
    e.preventDefault();
    var url = "http://localhost:4000/main/";
    var data = {
      id: this.idRef.current.value,
      nombre: this.nombreRef.current.value,
      valor: this.valorRef.current.value,
      stock: this.stockRef.current.value
    };
    console.log(data);
    console.log("AGREGAR TAREA");
    axios
      .post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        //this.getAll2();
      });
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <center>
          <div className="campo">
            <label>Id</label>
            <input type="text" ref={this.idRef} />
          </div>

          <div className="campo">
            <label>Nombre</label>
            <input type="text" ref={this.nombreRef} />
          </div>
          <div className="campo">
            <label>Valor</label>
            <input type="number" ref={this.valorRef} />
          </div>

          <div className="campo">
            <label>En Stock</label>
            <input type="number" ref={this.stockRef} />
          </div>

          <button type="submit" className="boton">
            Crear producto
          </button>
        </center>

        <div id="tasksText" />
      </form>
    );
  }
}
export default Form1;
