import "./Thank.css";
import { FaCheckCircle } from "react-icons/fa";
const Thank = (props) => {
  return (
    <div className="Thank">
      <h1 className="thankicon">
        <FaCheckCircle></FaCheckCircle>
      </h1>

      <h3 className="thankheading">Thank you for providing the feedback</h3>
      <p>We will work towards improving your experience.</p>
      <button
        onClick={() => {
          props.ontable();
        }}
        className="closebtn"
      >
        Close
      </button>
    </div>
  );
};

export default Thank;
