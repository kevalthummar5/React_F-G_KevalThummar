import { useState } from "react";
import Feedbackform from "./Feedbackform/Feedbackform";
import Feedbacktable from "./Feedbacktable/Feedbacktable";
import "./main.css";
import Thank from "./Thank/Thank";

const Main = () => {
  const [isthank, setisthank] = useState(false);
  const [istable, setistable] = useState(false);

  const tablehandler = () => {
    setistable(true);
  };
  const thankhandler = () => {
    setisthank(true);
  };
  return (
    <div className="Main">
      {!isthank && <Feedbackform onthank={thankhandler}></Feedbackform>}
      {!istable && isthank && <Thank ontable={tablehandler}></Thank>}

      {istable && <Feedbacktable></Feedbacktable>}
      {/* <Feedbacktable></Feedbacktable> */}
    </div>
  );
};

export default Main;
