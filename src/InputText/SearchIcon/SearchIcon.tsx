import searchIconGrey from "../../assets/icons/searchIconGrey.png";
import styles from './SearcIcon.module.scss';

const SearchIcon = () => {
  return (
    <div className="centered-flex">
      <img
        src={searchIconGrey}
        className={styles.searchIcon}
        alt="search-icon"
      />
    </div>
  );
};

export default SearchIcon;