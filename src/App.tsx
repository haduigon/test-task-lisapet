// import React from 'react';
import "./App.scss";
import InputGroup from "./InputGroup";
import { inputId } from "./helpers/utils";
// import InputText from './InputText';
// import CommandSymbol from './CommandSymbol';

const test = {
  inputId: inputId,
  annotation: "This is a hint text to help user",
  size: "L",
  alignment: "we are here for the alignment",
  border: true,
  iconBefore: false,
  iconAfter: false,
  shortKey: false,
  isRequired: {
    required: false,
    type: "",
  },
  label: "",
};

function App() {

  function handleChange(data: any) {
    console.log(data.target.value);  
  }
  return (
    <div className="App">
      <InputGroup
        label="Email"
        annotation="This is a new hint"
        size="s"
        isRequired={{
          required: true,
          type: 'icon',
        }}
        onChange={(event) => handleChange(event)}
      />
      {/* <InputText /> */}
      {/* <CommandSymbol /> */}
    </div>
  );
}

export default App;
