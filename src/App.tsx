import "./App.scss";
import InputGroup from "./InputGroup";

function App() {

  function handleChange(data: React.ChangeEvent<HTMLInputElement>) {
    console.log(data.target.value, 'it is a passed through props handle change fucn');  
  }
  return (
    <div className="App">
      <div className="ml-5">
        <InputGroup
        label="Email"
        annotation="This is a new hint"
        size='l'
        isRequired={{
          required: true,
          type: 'icon',
        }}
        onChange={(event) => handleChange(event)}
        popUpText="This is a tooltip"
      />
      </div>
    </div>
  );
}

export default App;
