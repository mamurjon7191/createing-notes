import React from "react";
import ReactDOM from "react-dom";

const data = new Date();
let options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
let uzb = new Intl.DateTimeFormat(navigator.language, options).format(data);

const soat = data.getHours();
const minut = data.getMinutes();

const saveFunc = function (evt) {
  const textarea = evt.target.closest(".bottom").previousElementSibling;
  textarea.classList.add("disable");
  evt.target.style.display = "none";
  const iconTrash = evt.target.previousElementSibling;
  iconTrash.style.display = "block";
  const data1 = evt.target.closest(".bottom").firstElementChild;
  data1.style.display = "block";
  const data = iconTrash.previousElementSibling;
  data.style.display = "none";
};

const deleteFunc = function (evt) {
  const textarea = evt.target.closest(".bottom").previousElementSibling;
  evt.target.style.display = "none";
  const son = evt.target.nextElementSibling;
  const sanash = evt.target.previousElementSibling;
  son.style.display = "block";
  sanash.style.display = "block";
  const bolasi = evt.target.closest(".bottom").children;
  bolasi[0].style.display = "none";
  textarea.value = null;
  textarea.classList.remove("disable");
};

const Card = function (props) {
  const writeElement = function (evt) {
    props.setState(
      (props.obyekt = {
        title: evt.target.value,
      })
    );
    console.log(props.obyekt);
  };
  let obj = props.obyekt;
  return (
    <div className="card">
      <textarea
        className="text-area"
        placeholder="Create your notes!"
      ></textarea>
      <div className="bottom">
        <p className="data1" style={{ display: "none" }}>
          {uzb}
        </p>
        <p className="data">{props.kerak}</p>
        <i
          className="trash alternate icon"
          id="trash"
          style={{ display: "none" }}
          onClick={deleteFunc}
        ></i>
        <button className="save-btn" onClick={saveFunc}>
          Save
        </button>
      </div>
    </div>
  );
};
export default Card;
