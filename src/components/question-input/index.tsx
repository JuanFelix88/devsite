import React, { useState } from "react";
import "./style.css";

interface PropsInput {
  onDoneForm?: () => void;
}

function QuestionInput(props: PropsInput) {
  const { onDoneForm } = props;

  const [value, setValue] = useState("");

  function handleDoneForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onDoneForm?.();
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let { value } = event.target;

    if (!value) return setValue("");

    value = value.split("")[0].toLocaleUpperCase() + value.substr(1);
    setValue(value);
  }

  return (
    <form className="question-input" onSubmit={handleDoneForm}>
      <label>Write a name:</label>
      <input
        value={value}
        onChange={handleOnChange}
        placeholder="Organization or pesonal..."
      />
      <button
        type="submit"
        disabled={value === "" || value === undefined ? true : false}
        className="button-done-form"
      >
        Send!
      </button>
    </form>
  );
}

export default QuestionInput;
