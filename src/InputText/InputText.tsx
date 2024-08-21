import styles from "./InputText.module.scss";
import SearchIcon from "../SearchIcon";
import QuestionIcon from "../QuestionIcon";
import TextIcon from "../TextIcon";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { useHandleChange } from "../helpers/utils";

const InputText = () => {
  const { state, dispatch } = useContext(AppStateContext);

  // function handleChange(data: React.ChangeEvent<HTMLInputElement>) {
  //   state.onChange(data);
  //   dispatch({ type: ACTIONS.SET_INPUT_VALUE, payload: data?.target.value })
  // }
  const handleInput = useHandleChange()
  return (
    <div className={`${styles.box} mb-4`} tabIndex={0}>
      <div className={`centered-flex ${styles.innerBox}`}>
        <SearchIcon />
        <input
          id={state.inputId}
          type="text"
          placeholder="Input..."
          className={`${styles.text} ml-5`}
          value={state.value}
          onChange={(event) => handleInput(event)}
        />
        <div className="centered-flex ml-5">
          <QuestionIcon />
          <TextIcon />
        </div>
      </div>
    </div>
  );
};

export default InputText;
