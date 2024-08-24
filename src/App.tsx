// import { useEffect } from "react";
import "./App.scss";
import InputGroup from "./InputGroup";
// import { useDisable } from "./helpers/utils";

function App() {
  function handleChange(data: React.ChangeEvent<HTMLInputElement>) {
    console.log(
      data.target.value,
      "it is a passed through props handle change func"
    ); 
  }
  return (
    <div >

      {/* <div> */}
         <div className="ml-5">
        <InputGroup
          type="email"
          label="Email"
          annotation="This is a new hint"
          size="s"
          isRequired={{
            required: false,
            type: "icon",
            text: '',
          }}
          onChange={(event) => handleChange(event)}
          popUpText="This is a tooltip"
          iconBefore={true}
          iconAfter={true}
          shortKey={true}
          disabled={true}
          // darkMode={true}
          labelSidePosition={true}
        />
      </div>
     {/* </div> */}

     <div className="control"></div>


    </div>
  );
}

export default App;
