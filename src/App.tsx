import "./App.scss";
import InputGroup from "./InputGroup";
// import PopUp from "./PopUp";

function App() {

  function handleChange(data: any) {
    console.log(data.target.value);  
  }
  return (
    <div className="App">
      <div className="ml-5">
        {/* <PopUp /> */}
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
      </div>
    </div>
  );
}

export default App;
