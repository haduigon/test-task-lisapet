import InputLabel from "../InputLabel";
import InputText from "../InputText";
import styles from './InputGroup.module.scss';

const InputGroup = () => {
  return (
    <div className={styles.box}>
      <InputLabel />
      <InputText />
    </div>
  )
}

export default InputGroup;