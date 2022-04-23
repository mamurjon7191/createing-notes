import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Header.js";
import Input from "./Input.js";
import Card from "./Card.js";

let uchyuz = 300;
let sanash = 0;
let qaytaSanash = 0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      obj: { title: "" },
      uchyuztalikSon: 300,
    };
  }
  componentDidMount() {
    // func = setState();
    document.querySelector("#root").addEventListener("click", (e) => {
      const textarea = e.target.closest(".text-area");
      // document.querySelector("textarea").style.pointerEvents = "none";
      if (!textarea) return;
      if (textarea) {
        textarea.addEventListener("input", (e) => {
          qaytaSanash = sanash;
          sanash = e.target.value.length;
          uchyuz = uchyuz - sanash + qaytaSanash;
          this.setState({ uchyuztalikSon: uchyuz });

          // console.log(this.state.uchyuztalikSon);
        });
      }
    });
  }
  render() {
    return (
      <div>
        <Header>
          <Input />
          <div className="CardSide">
            <Card
              kerak={this.state.uchyuztalikSon}
              obyekt={this.state.obj}
              setState={this.setState}
            />
          </div>
        </Header>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

//this.setState ishlatomadim sorash kerak
