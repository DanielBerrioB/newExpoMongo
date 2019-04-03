import React from "react";
import axios from "axios";

class Form2 extends React.Component {
  idRef = React.createRef();
  nombreRef = React.createRef();
  valorRef = React.createRef();
  stockRef = React.createRef();

  async getElements() {
    var url = `http://localhost:4000/main/`;
    return await axios.get(url);
  }

  /**
   * Edit when press the button, the api change values and then this api edit in the Date base
   */
  handleClick = e => {
    e.preventDefault();
    if (!this.state.isOpen) {
      var data = {
        id: this.idRef.current.value,
        nombre: this.nombreRef.current.value,
        valor: this.valorRef.current.value,
        stock: this.stockRef.current.value
      };
      var url = `http://localhost:4000/main/${data.id}`;
      console.log("Modificar tarea TAREA");
      axios
        .put(url, data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
        .then(() => {
          // getAll2()
        });
    } else {
      this.getElements().then(response => {
        if (response) {
          var array = response.data;
          var element = array.find(i => i.id === this.idRef.current.value);
          if (element) {
            this.setState({ isOpen: false });
            document.getElementById("txtNombre").value = element.nombre;
            document.getElementById("txtValor").value = element.valor;
            document.getElementById("txtStock").value = element.stock;
          } else {
            alert("No se encontró");
          }
        } else {
          console.log("Error");
        }
      });
    }
  };

  state = {
    isOpen: true
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <center>
            <div className="campo">
              <label>Ingrese el id para editar</label>
              <input type="text" ref={this.idRef} />
            </div>

            <div hidden={this.state.isOpen}>
              <div className="campo">
                <label>Nombre</label>
                <input id="txtNombre" type="text" ref={this.nombreRef} />
              </div>
            </div>

            <div hidden={this.state.isOpen}>
              <div className="campo">
                <label>Valor</label>
                <input id="txtValor" type="number" ref={this.valorRef} />
              </div>
            </div>

            <div hidden={this.state.isOpen}>
              <div className="campo">
                <label>En Stock</label>
                <input id="txtStock" type="number" ref={this.stockRef} />
              </div>
            </div>

            <button type="submit" className="boton">
              {this.state.isOpen ? "Buscar" : "Editar Producto"}
            </button>
          </center>

          <div id="tasksText" />
        </form>
      </div>
    );
  }
}
export default Form2;
