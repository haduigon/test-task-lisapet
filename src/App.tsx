// import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import InputGroup from "./InputGroup";
import classNames from "classnames";
// import { useDisable } from "./helpers/utils";

const defaultState = {
  annotation: "",
  size: "m",
  alignment: "left",
  border: true,
  iconBefore: false,
  iconAfter: false,
  shortKey: false,
  isRequired: {
    required: false,
    type: "",
    text: "",
  },
  label: "",
  type: "",
  showPopUpInfo: false,
  showPopUpQuestion: false,
  popUpText: "",
  questionText: "",
  value: "",
  hasError: false,
  labelSidePosition: false,
  disabled: false,
  darkMode: false,
  onChange: () => {},
  onChangeIconBefore: () => {},
  onChangeIconAfter: () => {},
};

function App() {
  const [props, setProps] = useState(defaultState);

  function handleProps(event: React.ChangeEvent<HTMLInputElement>) {


      if (event.target.name.startsWith('isRequired.')) {
    const nestedKey = event.target.name.split('.')[1] as keyof typeof props['isRequired'];

    setProps((prevState) => ({
      ...prevState,
      isRequired: {
        ...prevState.isRequired,
        [nestedKey]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      },
    }));
  }

    const id = event.target.name as keyof typeof props;
    console.log(props[id], "id", event.target.id);
    setProps((prevState) => ({
      ...prevState,
      [id]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    }));
  }

  console.log(props, "propssssss");

  function handleChange(data: React.ChangeEvent<HTMLInputElement>) {
    console.log(
      data.target.value,
      "it is a passed through props handle change func"
    );
  }
  return (
    <div>
      {/* <div> */}
      <div
        className={classNames('ml-5 centered-flex back', {
          'black': props.darkMode,
        })}
        // className="ml-5 centered-flex black"
      >
        <InputGroup
          type={props.type}
          label="Email"
          annotation={props.annotation}
          size={props.size as "m" | "s" | "l" | "xl"}
          isRequired={props.isRequired}
          onChange={(event) => handleChange(event)}
          popUpText="This is a tooltip"
          iconBefore={true}
          iconAfter={true}
          shortKey={true}
          disabled={props.disabled}
          darkMode={props.darkMode}
          labelSidePosition={props.labelSidePosition}
        />
      </div>
      {/* </div> */}

      <div className="control">
        <div className="mt-10 ml-5 ww ">
          <div className="size">
            <fieldset>
              <div className="flex">
                <input
                  type="radio"
                  id="sizeS"
                  onChange={(event) => handleProps(event)}
                  value="s"
                  name="size"
                  checked={props.size === "s"}
                />
                <span className="ml-5">s</span>
              </div>
              <div>
                <input
                  type="radio"
                  id="sizeM"
                  onChange={(event) => handleProps(event)}
                  value="m"
                  name="size"
                  checked={props.size === "m"}
                />
                <span className="ml-5">m</span>
              </div>
              <div>
                <input
                  type="radio"
                  id="sizeM"
                  onChange={(event) => handleProps(event)}
                  value="l"
                  name="size"
                  checked={props.size === "l"}
                />
                <span className="ml-5">l</span>
              </div>
              <div>
                <input
                  type="radio"
                  id="sizeM"
                  onChange={(event) => handleProps(event)}
                  value="xl"
                  name="size"
                  checked={props.size === "xl"}
                />
                <span className="ml-5">xl</span>
              </div>
            </fieldset>

            <label htmlFor="size" className="ml-5">
              <strong className="ml-5">size prop</strong>
            </label>
          </div>
          <div className="mt-10">
            {" "}
            It is a size props, choose any. 'M' size is the default
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <input
            type="text"
            id="annotation"
            name="annotation"
            value={props.annotation}
            onChange={(event) => handleProps(event)}
          />
          <label htmlFor="annotation" className="mt-10">
            <strong className="ml-5">Annotation text prop</strong>
            <p> Input the text you want to see as a hint. It does not work if labelSidePosition is true</p>
          </label>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="isRequired">
            <strong className="">isRequired prop</strong>
            <p> If field is required you cannot leave it empty</p>
            <input
              type="checkbox"
              name="isRequired.required"
              // value={!props.isRequired.required}
              // checked={props.isRequired.required}
              onChange={(event) => handleProps(event)}
              className="small"
            />
            <p>Input 'icon' or 'text'</p>
            <input
              type="text"
              name="isRequired.type" 
              value={props.isRequired.type}
              onChange={(event) => handleProps(event)}
              className="mt-10 small-input"
            />
            <p>Input the text of required f</p>
            <input
              type="text"
              name="isRequired.text"
              value={props.isRequired.text}
              onChange={(event) => handleProps(event)}
              className="mt-10 small-input"
            />
          </div>
        </div>


        <div className="mt-10 ml-5 ww">
          <div className="labelSidePosition">
            <strong className="">labelSidePosition prop</strong>
            <p>By default it is false, click to make it true</p>
            <input
              type="checkbox"
              name="labelSidePosition"
              onChange={(event) => handleProps(event)}
              className="small"
            />        
          </div>
        </div>
       
        <div className="mt-10 ml-5 ww">
          <div className="darkMode">
            <strong className="">darkMode prop</strong>
            <p>By default it is false, click to make it true. If you are using a lib, you need a black background color</p>
            <input
              type="checkbox"
              name="darkMode"
              onChange={(event) => handleProps(event)}
              className="small"
            />        
          </div>
        </div>




      </div>
    </div>
  );
}

export default App;
