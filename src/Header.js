import React from "react";
import ReactDOM from "react-dom";

const body = document.body;

const toogleBtn = function () {
  body.classList.toggle("black");
  if (body.classList.contains("black")) {
    body.style.setProperty("--color", "white");
    body.style.setProperty("--color1", "black");
  } else {
    body.style.setProperty("--color", "black");
    body.style.setProperty("--color1", "white");
  }
};

const Header = function (props) {
  return (
    <div className="main">
      <div className="header">
        <div className="header-title">
          <h1 className="header-left">
            Magic <span className="span">Notes</span>
          </h1>
          <button className="toggle-btn" onClick={toogleBtn}>
            Toggle Mode
          </button>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default Header;
