import React from "react";
import axios from "axios";
class Productos extends React.Component {
  
  

  constructor(props) {
    super(props);
    //this.state = { counter: 0 };
  }
  

  render() {
    return (
      <div>
        {(this.props.lista).map(element => (
        console.log(element.id)))}
      </div>


    );
  }
}

export default Productos;
