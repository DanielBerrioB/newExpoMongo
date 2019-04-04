import React from "react";

/**
 * This class
 */
class Productos extends React.Component {
  render() {
    return (
      <div>
        <center>
          {this.props.lista.map(element => (
            <p key={element.id}>
              {element.id}. {element.nombre}
            </p>
          ))}
        </center>
      </div>
    );
  }
}

export default Productos;
