# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import InputGroup from "./InputGroup";
import classNames from "classnames";
import { useDisable } from "./helpers/utils";

const defaultState = {
  annotation: "",
  size: "m",
  isAlignmentLeft: false,
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
        className={classNames("ml-5 centered-flex back", {
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
          isAlignmentLeft={props.isAlignmentLeft}
          border={props.border}
        />
      </div>

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
            <p>
              {" "}
              Input the text you want to see as a hint. It does not work if
              labelSidePosition is true
            </p>
          </label>
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
      </div>
    </div>
  );
}

export default App;






 const [functionText, setFunctionText] = useState('');
  const [customFunction, setCustomFunction] = useState<Function | null>(null);
  const [applyedFunction, setApplyedFunction] = useState<Function>(() => {});

  function handleFunctionInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFunctionText(event.target.value);
  }

  function makeCustomFunction() {
    // console.log( ' make custom fn')
    try {
      const fn = new Function('console.log("fvfdddddd")');
      console.log(typeof fn, 'typeof fn')
      setCustomFunction(() => fn);
      // console.log( customFunction, 'function created');      
    } catch (error) {
      // console.log('eeerorrr');
      
    }
    
  }

  function applyFunction() {
    console.log(customFunction, customFunction, 'custom in apply')
    if (typeof customFunction === 'function') {

      setApplyedFunction(() => customFunction);

    } else {
      console.warn('custom it is not a function')
    }
  }
  
    // console.log(applyedFunction, 'appplyed is here222');
  useEffect(() => {
    makeCustomFunction();
    // applyFunction();
  }, [functionText]);

  useEffect(() => {
    applyFunction()
  }, [customFunction])

  useEffect(() => {
  if (typeof applyedFunction === 'function') {
    console.log('applyedFunction is now a function:', applyedFunction);
  } else {
    console.warn('applyedFunction is not a function or not updated yet.');
  }
}, [applyedFunction]);