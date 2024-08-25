import { useContext } from "react";
import styles from './SearcIcon.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";
import { useQuestionIqonHook } from "../helpers/utils";

const SearchIcon = () => {
  const { state } = useContext(AppStateContext);
  const chooseIcon = useQuestionIqonHook('search');
  
  return (
    <div className="centered-flex">
      <img
        src={chooseIcon()}
        className={styles.searchIcon}
        alt="search-icon"
      />
    </div>
  );
};

export default SearchIcon;