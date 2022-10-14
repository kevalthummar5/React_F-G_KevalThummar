import { useRef } from "react";
import "./Optionselect.css";

const Optionselect = (props) => {
  let optioninputref = useRef("");
  const optionchangehandler = (e) => {
    let reviewobj = {};
    reviewobj.type = props.desci;
    reviewobj.value = e.target.value;
    props.reviewhandler(reviewobj);
  };

  return (
    <div className="Optionselect">
      <p>{props.title}</p>
      <div className="selectoption" onChange={optionchangehandler}>
        <input
          className="radiomark"
          type="radio"
          id="Excellent"
          name={props.desci}
          value="Excellent"
        />
        <label htmlFor="Excellent">Excellent</label>
        <input type="radio" id="Good" name={props.desci} value="Good" />
        <label htmlFor="Good">Good</label>
        <input type="radio" id="Fair" name={props.desci} value="Fair" />
        <label htmlFor="Fair">Fair</label>
        <input type="radio" id="Bad" name={props.desci} value="Bad" />
        <label htmlFor="Bad">Bad</label>
      </div>
    </div>
  );
};

export default Optionselect;
