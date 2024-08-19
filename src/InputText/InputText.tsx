import styles from './InputText.module.scss';

const InputText = () => {

  // for (var i = 0; i < 5; i++) {
  //   setTimeout(() => {
  //     console.log(i)
  //   }, 1000)
  // }
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
      <div className={styles.iconTextBox}>
        <span className={styles.iconText}>⌘</span>
        <span className={styles.iconText}>K</span>
      </div>
    </div>
  )
}

export default InputText;