import React from "react";
import axios from "axios";

class Form3 extends React.Component {
  idRef = React.createRef();

  handleClick = e => {
    e.preventDefault();

    var data = {
      id: this.idRef.current.value
    };
    var url = `http://localhost:4000/main/${data.id}`;
    console.log("ELIMINAR  TAREA");
    axios
      .delete(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        // getAll2()
      });
  };

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <center>
          <div className="campo">
            <label>Ingrese el id que desea eliminar</label>
            <input type="text" ref={this.idRef} />
          </div>

          <button type="submit" className="boton">
            Eliminar producto
          </button>
        </center>
      </form>
    );
  }
}
export default Form3;
