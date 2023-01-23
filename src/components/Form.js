import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function Form() {
  const [question, setQuestion] = useState([
    { question: "Text", response: "Response", responseType: "Response Type" },
  ]);

  function handleAddQuestion() {
    setQuestion([
      ...question,
      { question: "Text", response: "Response", responseType: "Response Type" },
    ]);
  }
  function handleDeleteQuestion(e) {
    let temp = question;
    temp.splice(e.target.id, 1);
    if (!temp.length) {
      setQuestion([
        ...temp,
        {
          question: "Text",
          response: "Response",
          responseType: "Response Type",
        },
      ]);
    } else {
      setQuestion([...temp]);
    }
  }
  return (
    <div>
      <ButtonComponent name="Add Question" functionName={handleAddQuestion} />
      {question.map((data, index) => {
        return (
          <div key={index}>
            <p>
              {data.question}
              <button id={index} onClick={handleDeleteQuestion}>
                Delete Question
              </button>
            </p>
          </div>
        );
      })}
      <ButtonComponent name="Save" />
    </div>
  );
}

export default Form;
