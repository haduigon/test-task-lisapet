import styles from "./InputText.module.scss";
import searchIconGrey from "../assets/icons/searchIconGrey.png";
import questionIconGrey from "../assets/icons/questionIconGrey.png";

const InputText = () => {
  return (
    <div className={styles.box} tabIndex={0}>

      
      <div className={`centered-flex ${styles.innerBox}`}> 

        <div className="centered-flex">
        <img
          src={searchIconGrey}
          className={styles.searchIcon}
          alt="search-icon"
        />
      </div>

      <input
        type="text"
        placeholder="Input..."
        className={`${styles.text}`}
        />

      <div className="centered-flex ml-5">
        <img src={questionIconGrey} className={styles.searchIcon}/>
        <div className={`${styles.iconTextBox}`}>
        <span className={styles.iconText}>⌘</span>
        <span className={styles.iconText}>K</span>
      </div>
        </div>
        
      </div>


    </div>
  );
};

export default InputText;
