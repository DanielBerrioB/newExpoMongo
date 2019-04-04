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
    if (data.id && data.nombre && data.valor && data.stock) {
      console.log(data);
      console.log("AGREGAR TAREA");
      axios
        .post(url, data)
        .then(response => {
          this.props.change(); //Actualiza el metodo para actualizar
        })
        .catch(error => {
          alert("Quizas el elemento ya se encuentra agregado");
        })
        .then(() => {
          this.idRef.current.value = "";
          this.nombreRef.current.value = "";
          this.valorRef.current.value = "";
          this.stockRef.current.value = "";
        });
    } else {
      alert("Te faltan campos por llenar");
    }
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
