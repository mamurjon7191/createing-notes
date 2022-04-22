import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header.js";
import Input from "./Input.js";
import Card from "./Card.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header>
          <Input />
        </Header>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
