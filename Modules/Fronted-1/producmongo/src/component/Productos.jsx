import React from "react";
import axios from "axios";
class Productos extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
    //this.getAll2();
  }

  render() {
    return <div id="tasksText" />;
  }
}

export default Productos;
