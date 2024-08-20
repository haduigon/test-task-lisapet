import InputLabel from "../InputLabel";
import InputText from "../InputText";
import InputAnnotation from "../InputAnnotation";
import styles from './InputGroup.module.scss';

const InputGroup = () => {
  return (
    <div className={styles.box}>
      <InputLabel />
      <InputText />
      <InputAnnotation />
    </div>
  )
}

export default InputGroup;