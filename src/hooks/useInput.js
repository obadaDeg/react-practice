import { useState } from "react";

export default function useInput(defVal, validationFn) {
  const [inputState, setInputState] = useState({
    inputData: defVal,
    edited: false,
  });

  const isValid = validationFn(inputState.inputData);

  function handleInputChange(event) {
    const { value } = event.target;

    setInputState((prevVals) => ({
      inputData: value,
      edited: false,
    }));
  }

  function handleOnBlure(event) {
    setInputState((prevVals) => ({
      ...prevVals,
      edited: true,
    }));
  }

  return {
    value: inputState.inputData,
    handleInputChange,
    handleOnBlure,
    error: inputState.edited && !isValid,
  };
}
