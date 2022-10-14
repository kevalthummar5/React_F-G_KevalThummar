import "./Feedbackform.css";
import Optionselect from "./Optionselect/Optionselect";
import ReactFlagsSelect from "react-flags-select";
import { useReducer, useRef, useState } from "react";
const Feedbackform = (props) => {
  const [nameinput, setnameinput] = useState("");
  const [emailinput, setemailinput] = useState("");
  const [phoneinput, setphoneinput] = useState("");

  const [nameerror, setnameerror] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [phoneerror, setphoneerror] = useState("");
  const [selected, setSelected] = useState("IN");

  let formisvalid = false;
  const reviewreducer = (reviewstate, action) => {
    switch (action.type) {
      case "service":
        return {
          service: action.value,
          beverage: reviewstate.beverage,
          cleanliness: reviewstate.cleanliness,
          overall: reviewstate.overall,
        };
      case "beverage":
        return {
          service: reviewstate.service,
          beverage: action.value,
          cleanliness: reviewstate.cleanliness,
          overall: reviewstate.overall,
        };
      case "cleanliness":
        return {
          service: reviewstate.service,
          beverage: reviewstate.beverage,
          cleanliness: action.value,
          overall: reviewstate.overall,
        };
      case "overall":
        return {
          service: reviewstate.service,
          beverage: reviewstate.beverage,
          cleanliness: reviewstate.cleanliness,
          overall: action.value,
        };
      case "overall":
        return {
          service: "",
          beverage: "",
          cleanliness: "",
          overall: "",
        };
      default:
        return reviewstate;
    }
  };

  const formreducer = (formstate, action) => {
    switch (action.type) {
      case "namevalid":
        return {
          isnamevalid: true,
          isemailvalid: formstate.isemailvalid,
          isphonevalid: formstate.isphonevalid,
        };
      case "nameinvalid":
        return {
          isnamevalid: false,
          isemailvalid: formstate.isemailvalid,
          isphonevalid: formstate.isphonevalid,
        };
      case "emailvalid":
        return {
          isnamevalid: formstate.isnamevalid,
          isemailvalid: true,
          isphonevalid: formstate.isphonevalid,
        };
      case "emailinvalid":
        return {
          isnamevalid: formstate.isnamevalid,
          isemailvalid: false,
          isphonevalid: formstate.isphonevalid,
        };
      case "phonevalid":
        return {
          isnamevalid: formstate.isnamevalid,
          isemailvalid: formstate.isemailvalid,
          isphonevalid: true,
        };
      case "phoneinvalid":
        return {
          isnamevalid: formstate.isnamevalid,
          isemailvalid: formstate.isemailvalid,
          isphonevalid: false,
        };
      case "submit":
        if (!formstate.isnamevalid) {
          setnameerror("enter your name");
        }
        if (!formstate.isemailvalid) {
          setemailerror("enter your valid email");
        }
        if (!formstate.isphonevalid) {
          setphoneerror("enter your mobile no");
        }
        if (
          formstate.isnamevalid &&
          formstate.isemailvalid &&
          formstate.isphonevalid
        ) {
          return {};
        }

      default:
        return formstate;
    }
  };
  const [reviewstate, reviewdispatch] = useReducer(reviewreducer, {
    service: "",
    beverage: "",
    cleanliness: "",
    overall: "",
  });
  const [formstate, formdispatch] = useReducer(formreducer, {
    isnamevalid: false,
    isemailvalid: false,
    isphonevalid: false,
  });

  //   console.log(formstate);
  const namechangehandler = (e) => {
    setnameinput(e.target.value);
    if (e.target.value.length > 0) {
      setnameerror("");

      formdispatch({ type: "namevalid" });
    } else {
      setnameerror(" name box should not be empty");
      formdispatch({ type: "nameinvalid" });
    }
  };
  const emailchangehandler = (e) => {
    setemailinput(e.target.value);
    if (!e.target.value.length > 0) {
      setemailerror("email no should not be empty");
      formdispatch({ type: "emailinvalid" });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
    ) {
      setemailerror(" please enter valid email");
      formdispatch({ type: "emailinvalid" });
    } else {
      setemailerror(" ");

      formdispatch({ type: "emailvalid" });
    }
  };
  const phonechangehandler = (e) => {
    setphoneinput(e.target.value);
    if (!e.target.value.length > 0) {
      setphoneerror("phone no should not be empty");
      formdispatch({ type: "phoneinvalid" });
    } else if (e.target.value.length < 10) {
      setphoneerror(" phone no should atlease 10 digits");
      formdispatch({ type: "phoneinvalid" });
    } else if (e.target.value.length > 10) {
      setphoneerror(" phone no should not more 10 digits");
      formdispatch({ type: "phoneinvalid" });
    } else {
      setphoneerror(" ");

      formdispatch({ type: "phonevalid" });
    }
  };
  if (
    formstate.isnamevalid &&
    formstate.isemailvalid &&
    formstate.isphonevalid
  ) {
    formisvalid = true;
  }
  // console.log(formisvalid);

  const submithandler = (e) => {
    let customerdetailobj = {};
    e.preventDefault();
    formdispatch({ type: "submit" });

    if (formisvalid) {
      let id = Math.floor(Math.random() * 90 + 10);
      customerdetailobj.name = nameinput;
      customerdetailobj.email = emailinput;
      customerdetailobj.phone = phoneinput;
      customerdetailobj.review = reviewstate;
      // console.log(customerdetailobj);
      localStorage.setItem(
        id,
        `${customerdetailobj.name}, ${customerdetailobj.email},${customerdetailobj.phone},${reviewstate.service},${reviewstate.beverage},${reviewstate.cleanliness},${reviewstate.overall}`
      );
      reviewdispatch({ type: "clear" });
      setnameinput("");
      setemailinput("");
      setphoneinput("");
      props.onthank();
    }
  };
  return (
    <div className="Feedbackform">
      <header className="formtitle">
        <h2>Aromatic bar</h2>
      </header>
      <form onSubmit={submithandler} className="formarea">
        <div className="customerarea">
          <div className="nameinput">
            <label>
              Customer Name
              <b>
                <sup style={{ color: "red" }}>*</sup>
              </b>
            </label>
            <input
              type="text"
              onChange={namechangehandler}
              placeholder="E.g. Jose Patel"
              value={nameinput}
            />
            <p className="error">{nameerror}</p>
          </div>
          <div className="emailinput">
            <label>
              Email
              <b>
                <sup style={{ color: "red" }}>*</sup>
              </b>
            </label>
            <input
              onChange={emailchangehandler}
              type="email"
              placeholder="E.g. josepatel@abc.com"
              value={emailinput}
            />
            <p className="error">{emailerror}</p>
          </div>
          <div className="phoneinput">
            <label>
              phone
              <b>
                <sup style={{ color: "red" }}>*</sup>
              </b>
            </label>
            <div className="mobinput">
              <div className="countrycode">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  countries={["IN", "fi", "GB", "IE", "IT", "NL", "SE"]}
                />
              </div>
              <input
                onChange={phonechangehandler}
                type="number"
                placeholder="9999999999"
                value={phoneinput}
              />
            </div>
            <p className="error">{phoneerror}</p>
          </div>
        </div>
        <div className="optionarea">
          <Optionselect
            reviewhandler={(e) => reviewdispatch(e)}
            title="Please rate the quality of the service you received from your host"
            desci="service"
          ></Optionselect>
          <Optionselect
            reviewhandler={(e) => reviewdispatch(e)}
            title="Please rate the quality of your beverage"
            desci="beverage"
          ></Optionselect>
          <Optionselect
            reviewhandler={(e) => reviewdispatch(e)}
            title="Was our restaurant clean?"
            desci="cleanliness"
          ></Optionselect>
          <Optionselect
            reviewhandler={(e) => reviewdispatch(e)}
            title="Please rate your overall dining experience."
            desci="overall"
          ></Optionselect>
        </div>
        <button className="submitbtn" type="submit">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Feedbackform;
