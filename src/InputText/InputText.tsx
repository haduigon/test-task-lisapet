import styles from "./InputText.module.scss";
import SearchIcon from "./SearchIcon";
import QuestionIcon from "./QuestionIcon";
import TextIcon from "./TextIcon";
import { useContext } from "react";
import { AppStateContext } from "../AppStateContext/AppStateContext";

const InputText = () => {
  const {state} = useContext(AppStateContext)
  return (
    <div className={`${styles.box} mb-4`} tabIndex={0}>
      <div className={`centered-flex ${styles.innerBox}`}>
        <SearchIcon />
        <input
          id={state.inputId}
          type="text"
          placeholder="Input..."
          className={`${styles.text} ml-5`}
          // value={value}
          // onChange={}
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
