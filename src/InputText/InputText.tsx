import styles from "./InputText.module.scss";
import SearchIcon from "../SearchIcon";
import QuestionIcon from "../QuestionIcon";
import TextIcon from "../TextIcon";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { useHandleChange } from "../helpers/utils";

const InputText = () => {
  const { state } = useContext(AppStateContext);

  const handleInput = useHandleChange()
  return (
    <div className={`${styles.box} mb-4`} tabIndex={0}>
      <div className={`centered-flex ${styles.innerBox}`}>
        <SearchIcon />
        <input
          id={state.inputId}
          type={state.type}
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
