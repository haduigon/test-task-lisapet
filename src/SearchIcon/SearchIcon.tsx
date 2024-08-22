import { useContext } from "react";
import searchIconGrey from "../assets/icons/searchIconGrey.png";
import searchIconRed from "../assets/icons/searchIconRed.png";
import styles from './SearcIcon.module.scss';
import { AppStateContext } from "../AppStateContext/AppStateContext";

const SearchIcon = () => {
  const { state } = useContext(AppStateContext);

  return (
    <div className="centered-flex">
      <img
        src={state.hasError ? searchIconRed : searchIconGrey}
        className={styles.searchIcon}
        alt="search-icon"
      />
    </div>
  );
};

export default SearchIcon;