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
  return (
    <div className="App">
      <InputGroup
        label="Email"
        annotation="UUUiiiii"
        size="xyyyq"
      />
      {/* <InputText /> */}
      {/* <CommandSymbol /> */}
    </div>
  );
}

export default App;
