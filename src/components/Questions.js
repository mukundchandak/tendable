import React, { useState, useContext } from "react";
import { MyContext } from "../MyContext";

const Questions = () => {
  const { score, setScore, avgScore, setAvgScore } = useContext(MyContext);

  const [ques, setQues] = useState({
    1: "Can you code in Ruby?",
    2: "Can you code in JavaScript?",
    3: "Can you code in Swift?",
    4: "Can you code in Java?",
    5: "Can you code in C#?",
  });
  const [ans, setAns] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
  });

  const [submitButton, setSubmitButton] = useState(false);

  const handleChange = (e, index) => {
    setAns((prevAns) => {
      const newAns = { ...prevAns };
      newAns[index] = e.target.value;
      let flag = false;
      const newArr = Object.values(newAns).map((item) => {
        if (item === null) {
          flag = true;
        }
      });
      if (flag === false) {
        setSubmitButton(true);
      }
      return newAns;
    });
  };

  const submit = () => {
    const answeredYes = Object.values(ans).filter((item) => item === 'true');
    setScore([...score, answeredYes.length]);
    
    setAns({
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
    });
    Object.keys(ans).forEach((item, index) => {
        document.getElementById(`flexRadioDefaultY${index}`).checked = false;
        document.getElementById(`flexRadioDefaultN${index}`).checked = false;
    })
    
    setSubmitButton(false);
  };

  return (
    <div>
      {Object.keys(ques).map((item, index) => {
        return (
          <div key={index}>
            <div>{ques[item]}</div>
            <div>
              <div>
                <input
                  className="form-check-input c-p"
                  type="radio"
                  value={true}
                  onChange={(e) => handleChange(e, index + 1)}
                  name={`flexRadioDefault${index}`}
                  id={`flexRadioDefaultY${index}`}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexRadioDefaultY${index}`}
                >
                  Yes
                </label>
              </div>
              <div>
                <input
                  className="form-check-input c-p"
                  type="radio"
                  value={false}
                  name={`flexRadioDefault${index}`}
                  id={`flexRadioDefaultN${index}`}
                  onChange={(e) => handleChange(e, index + 1)}
                />
                <label
                  className="form-check-label"
                  htmlFor={`flexRadioDefaultN${index}`}
                >
                  No
                </label>
              </div>
            </div>
          </div>
        );
      })}
      <button
        type="button"
        className="btn btn-primary"
        onClick={submit}
        disabled={!submitButton ? true : false}
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
