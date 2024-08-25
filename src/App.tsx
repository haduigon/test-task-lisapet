// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import InputGroup from "./InputGroup";
import classNames from "classnames";
import { useDisable } from "./helpers/utils";

const defaultState = {
  annotation: "",
  size: "m",
  isAlignmentRight: false,
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
  popUpText: "",
  questionText: "",
  labelSidePosition: false,
  disabled: false,
  darkMode: false,
  onChange: () => {},
};

function App() {
  const [props, setProps] = useState(defaultState);
  const [disable, setDisable] = useState(false);

  function handleProps(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name.startsWith("isRequired.")) {
      const nestedKey = event.target.name.split(
        "."
      )[1] as keyof (typeof props)["isRequired"];

      setProps((prevState) => ({
        ...prevState,
        isRequired: {
          ...prevState.isRequired,
          [nestedKey]:
            event.target.type === "checkbox"
              ? event.target.checked
              : event.target.value,
        },
      }));
    }

    const id = event.target.name as keyof typeof props;
    console.log(props[id], "id", event.target.id);
    setProps((prevState) => ({
      ...prevState,
      [id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }

  function handleChange(data: React.ChangeEvent<HTMLInputElement>) {
    console.log(
      data.target.value,
      "it is a passed through props handle change func"
    );
  }

  const dis = useDisable();

  function disableInput() {
    dis(!disable);
    setDisable(!disable);
  }
  return (
    <div>
      <div
        className={classNames("centered-flex back mr-5", {
          black: props.darkMode,
        })}
      >
        <InputGroup
          type={props.type}
          label={props.label}
          annotation={props.annotation}
          size={props.size as "m" | "s" | "l" | "xl"}
          isRequired={props.isRequired}
          onChange={(event) => handleChange(event)}
          popUpText={props.popUpText}
          iconBefore={props.iconBefore}
          iconAfter={props.iconAfter}
          shortKey={props.shortKey}
          disabled={props.disabled}
          darkMode={props.darkMode}
          labelSidePosition={props.labelSidePosition}
          questionText={props.questionText}
          isAlignmentRight={props.isAlignmentRight}
          border={props.border}
        />
      </div>

      <div className="control ml-5 mr-5">
        <div className="mt-10 ww">
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
          <label htmlFor="annotation" className="mt-10">
            <strong >Annotation text prop</strong>
            <p>
              {" "}
              Input the text you want to see as a hint. It does not work if
              labelSidePosition is true
            </p>
          </label>
          <input
            type="text"
            id="annotation"
            name="annotation"
            value={props.annotation}
            onChange={(event) => handleProps(event)}
          />
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="isRequired">
            <strong className="">isRequired prop</strong>
            <p> If field is required you cannot leave it empty</p>
            <input
              type="checkbox"
              name="isRequired.required"
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
          <div className="">
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
          <div className="">
            <strong className="">darkMode prop</strong>
            <p>
              By default it is false, click to make it true. If you are using a
              lib, you need a black background color
            </p>
            <input
              type="checkbox"
              name="darkMode"
              onChange={(event) => handleProps(event)}
              className="small"
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="">
            <strong className="">iconBefore prop</strong>
            <p>
              By default it is false, click to make it true. It is the icon
              before the input
            </p>
            <input
              type="checkbox"
              name="iconBefore"
              onChange={(event) => handleProps(event)}
              className="small"
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="">
            <strong className="">iconAfter prop</strong>
            <p>
              By default it is false, click to make it true. It is the icon
              after the input
            </p>
            <input
              type="checkbox"
              name="iconAfter"
              onChange={(event) => handleProps(event)}
              className="small"
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="">
            <strong className="">shortKey prop</strong>
            <p>
              By default it is false, click to make it true. It is the icon
              after the input iconAfter
            </p>
            <input
              type="checkbox"
              name="shortKey"
              onChange={(event) => handleProps(event)}
              className="small"
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <input
            type="text"
            id="label"
            name="label"
            value={props.label}
            onChange={(event) => handleProps(event)}
          />
          <label htmlFor="label" className="mt-10">
            <strong className="ml-5">Label text prop</strong>
            <p> Input the text you want to see as a label on top or left.</p>
          </label>
        </div>

        <div className="mt-10 ml-5 ww">
          <input
            type="text"
            id="popUpText"
            name="popUpText"
            value={props.popUpText}
            onChange={(event) => handleProps(event)}
          />
          <label htmlFor="popUpText" className="mt-10">
            <strong className="ml-5">InfoIcon text prop</strong>
            <p>
              {" "}
              Input the text you want to see as a hit of infoIcon. Leave it
              empty if dont want to see the icon at all
            </p>
          </label>
        </div>

        <div className="mt-10 ml-5 ww">
          <input
            type="text"
            id="questionText"
            name="questionText"
            value={props.questionText}
            onChange={(event) => handleProps(event)}
          />
          <label htmlFor="questionText" className="mt-10">
            <strong className="ml-5">questionText text prop</strong>
            <p>
              If you have iconAfter props true, this propperty allows you to
              input a pop up text for the icon
            </p>
          </label>
        </div>

        <div className="mt-10 ml-5 ww">
          <strong className="ml-5">onChange prop</strong>
          <p>
            Here you add your custom function handlers, by passing onChange
            prop. Now there is a console log event.
          </p>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="">
            <strong className="">disabled prop</strong>
            <p>
              By default it is false, click to make it true. You can use prop
              for input disabling or you can use custom hook useDisable as well.
            </p>
            <input
              type="checkbox"
              name="disabled"
              onChange={disableInput}
              className="small"
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="">
            <strong className="">border prop</strong>
            <p>
              By default it is true, click to hide the border, make it false.
            </p>
            <input
              type="checkbox"
              name="border"
              onChange={(event) => handleProps(event)}
              className="small"
              checked={props.border}
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
          <div className="">
            <strong className="">isAlignmentRight prop</strong>
            <p>
              By default it is false, click to make it true. Your input text will appear from the right 
            </p>
            <input
              type="checkbox"
              name="isAlignmentRight"
              onChange={(event) => handleProps(event)}
              className="small"
            />
          </div>
        </div>

        <div className="mt-10 ml-5 ww">
        </div>



      </div>
    </div>
  );
}

export default App;