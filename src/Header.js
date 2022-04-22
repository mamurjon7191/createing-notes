import React from "react";
import ReactDOM from "react-dom";

const Header = function (props) {
  return (
    <div className="main">
      <div className="header">
        <div className="header-title">
          <h1 className="header-left">
            Magic <span>Notes</span>
          </h1>
          <button className="toggle-btn">Toggle Mode</button>
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default Header;
