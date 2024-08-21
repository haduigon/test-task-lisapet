import styles from './PopUp.module.scss';

const PopUp = () => {
  return (
    <div className={styles.box}>
      <div className={styles.tooltip}>This is a tooltip</div>
    </div>
  )
}

export default PopUp;