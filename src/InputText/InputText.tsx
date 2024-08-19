import styles from './InputText.module.scss';

const InputText = () => {
  return (
    <div
      className={styles.box}
      tabIndex={0}
    >
      <i>|</i>
      <input
        type='text'
        placeholder="Input..."
        className={styles.text}
      />
      <i>|</i>
    </div>
  )
}

export default InputText;