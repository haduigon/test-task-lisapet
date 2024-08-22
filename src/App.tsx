import "./App.scss";
import InputGroup from "./InputGroup";

function App() {
  function handleChange(data: React.ChangeEvent<HTMLInputElement>) {
    console.log(
      data.target.value,
      "it is a passed through props handle change func"
    );
  }
  return (
    <div className="App">
      <div className="ml-5">
        <InputGroup
          type="email"
          label="Email"
          annotation="This is a new hint"
          size="xl"
          isRequired={{
            required: true,
            type: "icon",
            text: '(optional)',
          }}
          onChange={(event) => handleChange(event)}
          popUpText="This is a tooltip"
          iconBefore={true}
          iconAfter={true}
          shortKey={true}
        />
      </div>
    </div>
  );
}

export default App;
